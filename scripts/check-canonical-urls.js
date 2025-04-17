/**
 * Check Canonical URLs Script
 * 
 * This script checks that canonical URLs are properly set across the website
 * to avoid duplicate content issues.
 * 
 * Prerequisites:
 * npm install puppeteer
 * 
 * Usage:
 * node scripts/check-canonical-urls.js [url]
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Default site URL from environment or fallback
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://callalphaseptic.com';
const REPORTS_DIR = path.join(__dirname, '../reports');

// Pages to check (add more as needed)
const PAGES_TO_CHECK = [
  '',                                 // Home
  '/services',                        // Services main
  '/about',                           // About
  '/contact',                         // Contact
  '/book-now',                        // Book now
  '/service-areas',                   // Service areas main
  '/service-areas/austin',            // Service area - Austin
  '/service-areas/round-rock',        // Service area - Round Rock
  '/services/residential',            // Service - Residential
  '/services/commercial',             // Service - Commercial
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

/**
 * Ensure reports directory exists
 */
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

/**
 * Check canonical URL for a page
 */
async function checkCanonicalUrl(browser, url) {
  const page = await browser.newPage();
  
  try {
    // Increase timeout for slow pages
    await page.setDefaultNavigationTimeout(30000);
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Extract canonical URL
    const canonicalUrl = await page.evaluate(() => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      return canonicalLink ? canonicalLink.getAttribute('href') : null;
    });
    
    // Get page path for identifying the page
    const urlObj = new URL(url);
    const pagePath = urlObj.pathname || '/';
    
    // Analyze canonical URL
    const issues = [];
    
    if (!canonicalUrl) {
      issues.push('No canonical URL found on page');
    } else {
      try {
        const canonicalUrlObj = new URL(canonicalUrl);
        
        // Check if canonical URL matches the expected format
        const expectedCanonicalUrl = new URL(pagePath, urlObj.origin).toString();
        if (canonicalUrl !== expectedCanonicalUrl) {
          // Check for trailing slash issues
          const normalizedCanonical = canonicalUrl.replace(/\/$/, '');
          const normalizedExpected = expectedCanonicalUrl.replace(/\/$/, '');
          
          if (normalizedCanonical !== normalizedExpected) {
            issues.push(`Canonical URL (${canonicalUrl}) doesn't match expected URL (${expectedCanonicalUrl})`);
          } else {
            issues.push(`Trailing slash inconsistency: canonical URL (${canonicalUrl}) vs. expected URL (${expectedCanonicalUrl})`);
          }
        }
        
        // Check if canonical URL protocol is HTTPS
        if (canonicalUrlObj.protocol !== 'https:') {
          issues.push(`Canonical URL (${canonicalUrl}) should use HTTPS protocol`);
        }
      } catch (error) {
        issues.push(`Invalid canonical URL format: ${canonicalUrl}`);
      }
    }
    
    return {
      url,
      pagePath,
      canonicalUrl,
      issues,
      pass: issues.length === 0
    };
  } catch (error) {
    return {
      url,
      pagePath: new URL(url).pathname || '/',
      canonicalUrl: null,
      issues: [`Error checking page: ${error.message}`],
      pass: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Check for self-referential canonical URLs
 */
function checkSelfReferential(results) {
  return results.map(result => {
    if (result.canonicalUrl) {
      try {
        const canonicalUrl = new URL(result.canonicalUrl);
        const pageUrl = new URL(result.url);
        
        // Self-reference check - canonical should point to itself
        // (ignoring trailing slashes and protocol differences)
        const normalizedCanonical = canonicalUrl.pathname.replace(/\/$/, '');
        const normalizedPage = pageUrl.pathname.replace(/\/$/, '');
        
        if (normalizedCanonical !== normalizedPage && !result.issues.some(issue => issue.includes("doesn't match expected"))) {
          result.issues.push(`Canonical URL (${result.canonicalUrl}) should be self-referential to current page (${result.url})`);
          result.pass = false;
        }
      } catch (error) {
        // URL parsing error already handled in the main function
      }
    }
    return result;
  });
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= CANONICAL URL AUDIT RESULTS =========\n');
  
  let passCount = 0;
  let failCount = 0;
  
  // Process each page result
  results.forEach(result => {
    const statusIcon = result.pass ? `${colors.green}✓` : `${colors.red}✗`;
    console.log(`${statusIcon} ${result.pagePath || 'home'}${colors.reset}`);
    
    if (result.pass) {
      passCount++;
      console.log(`  Canonical URL: ${result.canonicalUrl}`);
    } else {
      failCount++;
      console.log(`  Canonical URL: ${result.canonicalUrl || '(missing)'}`);
      
      result.issues.forEach(issue => {
        console.log(`  ${colors.red}- ${issue}${colors.reset}`);
      });
    }
    
    console.log('');
  });
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Pages Passed: ${colors.green}${passCount}${colors.reset}`);
  console.log(`Pages Failed: ${colors.red}${failCount}${colors.reset}`);
  console.log('===========================');
  
  // Save report
  const reportPath = path.join(REPORTS_DIR, 'canonical-urls-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}`);
  
  // Recommendations
  if (failCount > 0) {
    console.log('\nCanonical URL Recommendations:');
    console.log('1. Every page should have a canonical URL');
    console.log('2. Canonical URLs should be absolute (including protocol and domain)');
    console.log('3. Canonical URLs should use HTTPS protocol');
    console.log('4. Canonical URLs should be self-referential (pointing to the current page)');
    console.log('5. Maintain consistent use of trailing slashes');
    console.log('\nHow to fix in Next.js:');
    console.log('- Use the canonical property in metadata export:');
    console.log(`
  export const metadata = {
    title: 'Page Title | Alpha Septic',
    description: 'Page description',
    canonical: 'https://callalphaseptic.com/page-path',
    // Alternatively, use dynamic path:
    // canonical: \`\${process.env.NEXT_PUBLIC_SITE_URL}/\${path}\`,
  }
`);
    console.log('- For all pages, you can set default canonical URLs in layout.js/tsx');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking canonical URLs for ${baseUrl}${colors.reset}\n`);
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
      const result = await checkCanonicalUrl(browser, pageUrl);
      results.push(result);
    }
    
    // Check for self-referential canonical URLs
    const resultsWithSelfCheck = checkSelfReferential(results);
    
    // Print results
    printResults(resultsWithSelfCheck);
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 