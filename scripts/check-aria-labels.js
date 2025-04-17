/**
 * Check ARIA Labels Script
 * 
 * This script checks that interactive elements have proper ARIA labels
 * for accessibility compliance.
 * 
 * Prerequisites:
 * npm install puppeteer
 * 
 * Usage:
 * node scripts/check-aria-labels.js [url]
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

// Interactive elements that should have accessible names
const INTERACTIVE_ELEMENTS = {
  'button': 'buttons',
  'a': 'links',
  'input': 'input fields',
  'select': 'select dropdowns',
  'textarea': 'text areas',
  '[role="button"]': 'button roles',
  '[role="link"]': 'link roles',
  '[role="tab"]': 'tabs',
  '[role="menuitem"]': 'menu items',
  '[role="checkbox"]': 'checkboxes',
  '[role="radio"]': 'radio buttons',
  '[role="combobox"]': 'comboboxes',
  '[role="slider"]': 'sliders',
  '[aria-haspopup]': 'popup triggers'
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
 * Check the accessibility of interactive elements on a page
 */
async function checkAriaLabels(browser, url) {
  const page = await browser.newPage();
  
  try {
    // Increase timeout for slow pages
    await page.setDefaultNavigationTimeout(30000);
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Get page path for identifying the page
    const urlObj = new URL(url);
    const pagePath = urlObj.pathname || '/';
    
    // Check elements for accessibility issues
    const elementResults = await page.evaluate((interactiveElements) => {
      // Helper to check if an element is visible
      const isVisible = (element) => {
        const style = window.getComputedStyle(element);
        return !(style.display === 'none' || 
                style.visibility === 'hidden' || 
                style.opacity === '0' || 
                element.getAttribute('aria-hidden') === 'true' ||
                (element.getBoundingClientRect().height === 0 && 
                 element.getBoundingClientRect().width === 0));
      };
      
      // Helper to get accessible name (considering multiple attributes)
      const getAccessibleName = (element) => {
        // Order of precedence for accessible name
        return element.getAttribute('aria-label') || 
               element.getAttribute('aria-labelledby') || 
               element.title || 
               element.alt || 
               element.textContent.trim();
      };
      
      const results = {};
      const elementCounts = {};
      const issueDetails = {};
      
      // Check each type of interactive element
      Object.keys(interactiveElements).forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elementCounts[selector] = elements.length;
        
        const issueCount = Array.from(elements).reduce((count, element) => {
          // Skip hidden elements
          if (!isVisible(element)) return count;
          
          // Images inside links are handled specially
          if (selector === 'a' && element.querySelector('img')) {
            const img = element.querySelector('img');
            if (!img.alt && !element.textContent.trim() && !element.getAttribute('aria-label')) {
              if (!issueDetails[selector]) issueDetails[selector] = [];
              issueDetails[selector].push({
                html: element.outerHTML.replace(/"/g, "'"),
                issue: 'Link with image missing alt text or aria-label'
              });
              return count + 1;
            }
          }
          
          // Get accessible name
          const accessibleName = getAccessibleName(element);
          
          // Special handling for inputs
          if (selector === 'input') {
            // Hidden inputs don't need labels
            if (element.type === 'hidden') return count;
            
            // Check for associated label
            const inputId = element.id;
            const hasLabel = inputId && document.querySelector(`label[for="${inputId}"]`);
            
            if (!hasLabel && !element.getAttribute('aria-label') && element.type !== 'submit' && element.type !== 'button') {
              if (!issueDetails[selector]) issueDetails[selector] = [];
              issueDetails[selector].push({
                html: element.outerHTML.replace(/"/g, "'"),
                issue: `Input (type=${element.type}) missing label or aria-label`
              });
              return count + 1;
            }
          } else if (!accessibleName) {
            // For non-input elements, check if there's an accessible name
            if (!issueDetails[selector]) issueDetails[selector] = [];
            issueDetails[selector].push({
              html: element.outerHTML.replace(/"/g, "'"),
              issue: 'Missing accessible name (aria-label, text content, or title)'
            });
            return count + 1;
          }
          
          return count;
        }, 0);
        
        results[selector] = {
          count: elementCounts[selector],
          issues: issueCount,
          details: issueDetails[selector] || []
        };
      });
      
      return {
        elementCounts,
        results
      };
    }, INTERACTIVE_ELEMENTS);
    
    // Analyze results
    const totalElements = Object.values(elementResults.elementCounts).reduce((sum, count) => sum + count, 0);
    const totalIssues = Object.values(elementResults.results).reduce((sum, result) => sum + result.issues, 0);
    
    const issues = [];
    Object.entries(elementResults.results).forEach(([selector, result]) => {
      if (result.issues > 0) {
        const type = INTERACTIVE_ELEMENTS[selector];
        issues.push(`${result.issues}/${result.count} ${type} have accessibility issues`);
        
        // Add detailed issues
        result.details.forEach(detail => {
          issues.push(`  - ${detail.issue}: ${detail.html}`);
        });
      }
    });
    
    return {
      url,
      pagePath,
      totalElements,
      totalIssues,
      elementResults: elementResults.results,
      issues,
      pass: totalIssues === 0
    };
  } catch (error) {
    return {
      url,
      pagePath: new URL(url).pathname || '/',
      totalElements: 0,
      totalIssues: 0,
      elementResults: {},
      issues: [`Error checking page: ${error.message}`],
      pass: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= ARIA LABELS AUDIT RESULTS =========\n');
  
  let passCount = 0;
  let failCount = 0;
  let totalElements = 0;
  let totalIssues = 0;
  
  // Process each page result
  results.forEach(result => {
    const statusIcon = result.pass ? `${colors.green}✓` : `${colors.red}✗`;
    console.log(`${statusIcon} ${result.pagePath || 'home'}${colors.reset}`);
    
    if (result.pass) {
      passCount++;
      console.log(`  All ${result.totalElements} interactive elements have proper accessibility attributes`);
    } else {
      failCount++;
      console.log(`  Found ${result.totalIssues}/${result.totalElements} accessibility issues with interactive elements`);
      
      result.issues.forEach(issue => {
        if (issue.includes('Error checking page')) {
          console.log(`  ${colors.red}- ${issue}${colors.reset}`);
        } else if (!issue.includes('  -')) {
          console.log(`  ${colors.red}- ${issue}${colors.reset}`);
        } else {
          console.log(`  ${colors.yellow}${issue}${colors.reset}`);
        }
      });
    }
    
    console.log('');
    
    totalElements += result.totalElements;
    totalIssues += result.totalIssues;
  });
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Pages Passed: ${colors.green}${passCount}${colors.reset}`);
  console.log(`Pages Failed: ${colors.red}${failCount}${colors.reset}`);
  console.log(`Total Issues: ${colors.red}${totalIssues}${colors.reset}/${totalElements} elements`);
  console.log('===========================');
  
  // Save report
  const reportPath = path.join(REPORTS_DIR, 'aria-labels-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}`);
  
  // Recommendations
  if (failCount > 0) {
    console.log('\nAccessibility Recommendations:');
    console.log('1. Every interactive element should have an accessible name via:');
    console.log('   - Text content (preferred for buttons and links)');
    console.log('   - aria-label attribute (for elements without visible text)');
    console.log('   - aria-labelledby attribute (referencing text elsewhere on the page)');
    console.log('   - title attribute (least preferred, as it\'s only visible on hover)');
    console.log('2. Images should have appropriate alt text:');
    console.log('   - Decorative images should use alt=""');
    console.log('   - Informative images should have descriptive alt text');
    console.log('3. Form controls should have associated labels:');
    console.log('   - Use <label for="inputId"> elements');
    console.log('   - Or use aria-label directly on the input');
    console.log('4. Elements with ARIA roles should follow ARIA authoring practices');
    console.log('\nHow to fix in Next.js:');
    console.log('- For buttons: <button>Visible Text</button>');
    console.log('- For links with icons: <a href="..." aria-label="Description if no visible text">Icon</a>');
    console.log('- For images: <Image src="..." alt="Description of image" />');
    console.log('- For form fields: <label htmlFor="fieldId">Label Text</label><input id="fieldId" />');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking ARIA labels for ${baseUrl}${colors.reset}\n`);
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
      const result = await checkAriaLabels(browser, pageUrl);
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