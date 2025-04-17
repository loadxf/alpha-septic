/**
 * Validate JSON-LD Structured Data Script
 * 
 * This script crawls the website to validate JSON-LD structured data
 * on each page, ensuring it follows schema.org guidelines.
 * 
 * Prerequisites:
 * npm install puppeteer ajv
 * 
 * Usage:
 * node scripts/validate-json-ld.js [url]
 */

const puppeteer = require('puppeteer');
const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Default site URL from environment or fallback
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://callalphaseptic.com';
const REPORTS_DIR = path.join(__dirname, '../reports');

// Pages to check (add more as needed)
const PAGES_TO_CHECK = [
  '',                                 // Home
  '/services',                        // Services main
  '/about',                           // About
  '/contact',                         // Contact
  '/service-areas',                   // Service areas main
  '/service-areas/austin',            // Service area - Austin
  '/services/residential',            // Service - Residential
  '/resources/prepare-septic-system-for-winter'  // Blog post
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Required properties for main schema types
const REQUIRED_PROPERTIES = {
  'LocalBusiness': ['name', 'address', 'telephone', 'url'],
  'Service': ['name', 'description', 'provider'],
  'BreadcrumbList': ['itemListElement'],
  'FAQPage': ['mainEntity'],
  'Article': ['headline', 'author', 'datePublished', 'description'],
  'WebPage': ['name', 'description']
};

/**
 * Ensure reports directory exists
 */
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

/**
 * Check a page's JSON-LD structured data
 */
async function checkPageStructuredData(browser, url) {
  const page = await browser.newPage();
  
  try {
    // Increase timeout for slow pages
    await page.setDefaultNavigationTimeout(30000);
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Extract JSON-LD structured data
    const structuredData = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      return scripts.map(script => {
        try {
          return JSON.parse(script.textContent);
        } catch (error) {
          return { error: `Invalid JSON: ${error.message}`, content: script.textContent };
        }
      });
    });
    
    // Get page path for identifying the page
    const urlObj = new URL(url);
    const pagePath = urlObj.pathname || '/';
    
    // Analyze structured data
    const issues = [];
    let validSchemas = 0;
    
    if (!structuredData || structuredData.length === 0) {
      issues.push('No JSON-LD structured data found on page');
    } else {
      structuredData.forEach((schema, index) => {
        // Check if JSON is valid
        if (schema.error) {
          issues.push(`Schema #${index + 1}: ${schema.error}`);
          return;
        }
        
        // Check schema context
        if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
          issues.push(`Schema #${index + 1}: Missing or invalid @context (should be "https://schema.org")`);
        }
        
        // Check schema type
        if (!schema['@type']) {
          issues.push(`Schema #${index + 1}: Missing @type property`);
        } else {
          const schemaType = schema['@type'];
          
          // Check required properties for known schema types
          if (REQUIRED_PROPERTIES[schemaType]) {
            REQUIRED_PROPERTIES[schemaType].forEach(prop => {
              if (!schema[prop]) {
                issues.push(`Schema #${index + 1} (${schemaType}): Missing required property "${prop}"`);
              }
            });
          }
          
          // Additional checks for specific schema types
          if (schemaType === 'LocalBusiness') {
            if (!schema.address || !schema.address['@type'] || schema.address['@type'] !== 'PostalAddress') {
              issues.push(`Schema #${index + 1} (LocalBusiness): Address should have @type PostalAddress`);
            }
            if (!schema.geo && schema.areaServed) {
              issues.push(`Schema #${index + 1} (LocalBusiness): Geo coordinates recommended for local business`);
            }
          } else if (schemaType === 'BreadcrumbList') {
            if (schema.itemListElement) {
              schema.itemListElement.forEach((item, itemIndex) => {
                if (!item['@type'] || item['@type'] !== 'ListItem') {
                  issues.push(`Schema #${index + 1} (BreadcrumbList): Item #${itemIndex + 1} should have @type ListItem`);
                }
                if (!item.position) {
                  issues.push(`Schema #${index + 1} (BreadcrumbList): Item #${itemIndex + 1} missing position property`);
                }
                if (!item.name || !item.item) {
                  issues.push(`Schema #${index + 1} (BreadcrumbList): Item #${itemIndex + 1} missing name or item property`);
                }
              });
            }
          }
          
          validSchemas++;
        }
      });
    }
    
    return {
      url,
      pagePath,
      structuredData,
      schemaCount: structuredData.length,
      validSchemaCount: validSchemas,
      issues,
      pass: structuredData.length > 0 && issues.length === 0
    };
  } catch (error) {
    return {
      url,
      pagePath: new URL(url).pathname || '/',
      structuredData: [],
      schemaCount: 0,
      validSchemaCount: 0,
      issues: [`Error checking page: ${error.message}`],
      pass: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Validate JSON-LD with Google's Structured Data Testing Tool API
 * This is a simulated call as the actual API is deprecated
 */
function validateWithGoogleTool(jsonLd) {
  // In a real implementation, this would call Google's Rich Results Test API or similar
  // Here we're just doing a basic validation using AJV
  const ajv = new Ajv();
  
  try {
    // Basic schema validation
    const valid = ajv.validate({
      type: 'object',
      required: ['@context', '@type'],
      properties: {
        '@context': { type: 'string' },
        '@type': { type: 'string' }
      }
    }, jsonLd);
    
    return {
      valid,
      errors: valid ? [] : ajv.errors.map(err => `${err.instancePath} ${err.message}`)
    };
  } catch (error) {
    return {
      valid: false,
      errors: [`Validation error: ${error.message}`]
    };
  }
}

/**
 * Attempt to test structured data with Google's Rich Results Test
 * This function provides the URL for manual testing
 */
function getGoogleTestUrl(url) {
  const googleTestUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`;
  return googleTestUrl;
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= JSON-LD STRUCTURED DATA AUDIT RESULTS =========\n');
  
  let passCount = 0;
  let failCount = 0;
  let totalSchemas = 0;
  
  // Process each page result
  results.forEach(result => {
    const statusIcon = result.pass ? `${colors.green}✓` : `${colors.red}✗`;
    console.log(`${statusIcon} ${result.pagePath || 'home'}${colors.reset}`);
    
    if (result.pass) {
      passCount++;
      console.log(`  Found ${result.schemaCount} valid schema(s)`);
      
      // Show schema types
      result.structuredData.forEach((schema, index) => {
        if (schema['@type']) {
          console.log(`  - Schema #${index + 1}: ${schema['@type']}`);
        }
      });
    } else {
      failCount++;
      console.log(`  Found ${result.validSchemaCount}/${result.schemaCount} valid schema(s)`);
      
      result.issues.forEach(issue => {
        console.log(`  ${colors.red}- ${issue}${colors.reset}`);
      });
    }
    
    console.log(`  Test with Google: ${getGoogleTestUrl(result.url)}`);
    console.log('');
    
    totalSchemas += result.schemaCount;
  });
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Pages Passed: ${colors.green}${passCount}${colors.reset}`);
  console.log(`Pages Failed: ${colors.red}${failCount}${colors.reset}`);
  console.log(`Total Schemas: ${totalSchemas}`);
  console.log('===========================');
  
  // Save report
  const reportPath = path.join(REPORTS_DIR, 'json-ld-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}`);
  
  // Recommendations
  if (failCount > 0) {
    console.log('\nStructured Data Recommendations:');
    console.log('1. Ensure each page has appropriate schema.org structured data');
    console.log('2. Include all required properties for each schema type');
    console.log('3. Validate your structured data with Google\'s Rich Results Test');
    console.log('4. For local business pages, include LocalBusiness schema with complete address info');
    console.log('5. For service pages, include Service schema with provider information');
    console.log('\nTools for validation:');
    console.log('- Google Rich Results Test: https://search.google.com/test/rich-results');
    console.log('- Schema.org Validator: https://validator.schema.org/');
    console.log('- JSON-LD Playground: https://json-ld.org/playground/');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking JSON-LD structured data for ${baseUrl}${colors.reset}\n`);
  ensureReportsDir();
  
  // Launch browser
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new'
  });
  
  try {
    const results = [];
    
    // Process each page to check
    for (const pagePath of PAGES_TO_CHECK) {
      const pageUrl = new URL(pagePath, baseUrl).toString();
      const result = await checkPageStructuredData(browser, pageUrl);
      results.push(result);
    }
    
    // Print results
    printResults(results);
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 