/**
 * Performance Report Script
 * 
 * This script runs Lighthouse audits against the website to generate
 * performance reports and identify optimization opportunities.
 * 
 * Prerequisites:
 * npm install lighthouse chrome-launcher
 * 
 * Usage:
 * node scripts/performance-report.js [url]
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Default site URL from environment or fallback
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://callalphaseptic.com';
const REPORTS_DIR = path.join(__dirname, '../reports');

// Pages to audit
const PAGES_TO_AUDIT = [
  '',                 // Home page
  '/services',        // Services page
  '/about',           // About page
  '/contact'          // Contact page
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

// Performance score thresholds
const SCORE_THRESHOLDS = {
  poor: 0.5,      // Below 50 is poor
  average: 0.9    // Below 90 is average, above is good
};

/**
 * Format a Lighthouse score as a colored string
 */
function formatScore(score) {
  let color;
  let label;
  
  if (score < SCORE_THRESHOLDS.poor) {
    color = colors.red;
    label = 'POOR';
  } else if (score < SCORE_THRESHOLDS.average) {
    color = colors.yellow;
    label = 'AVERAGE';
  } else {
    color = colors.green;
    label = 'GOOD';
  }
  
  return `${color}${Math.round(score * 100)} (${label})${colors.reset}`;
}

/**
 * Ensure reports directory exists
 */
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

/**
 * Run Lighthouse audit for a URL
 */
async function runLighthouse(url) {
  console.log(`${colors.blue}Auditing${colors.reset}: ${url}`);
  
  // Launch Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });
  
  // Configure Lighthouse
  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
  };
  
  // Run Lighthouse
  const runnerResult = await lighthouse(url, options);
  
  // Close Chrome
  await chrome.kill();
  
  // Extract audit results
  const { lhr } = runnerResult;
  const { categories, audits } = lhr;
  
  // Save report
  const pageSlug = new URL(url).pathname.replace(/\//g, '_') || 'home';
  const reportPath = path.join(REPORTS_DIR, `lighthouse-${pageSlug}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(lhr, null, 2));
  
  // Return key metrics
  return {
    url,
    performance: categories.performance.score,
    accessibility: categories.accessibility.score,
    bestPractices: categories['best-practices'].score,
    seo: categories.seo.score,
    firstContentfulPaint: audits['first-contentful-paint'].numericValue,
    largestContentfulPaint: audits['largest-contentful-paint'].numericValue,
    totalBlockingTime: audits['total-blocking-time'].numericValue,
    cumulativeLayoutShift: audits['cumulative-layout-shift'].numericValue,
    speedIndex: audits['speed-index'].numericValue,
    reportPath
  };
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= LIGHTHOUSE PERFORMANCE AUDIT RESULTS =========\n');
  
  let totalPerformance = 0;
  let totalAccessibility = 0;
  let totalBestPractices = 0;
  let totalSeo = 0;
  
  // Process each page result
  results.forEach(result => {
    console.log(`${colors.cyan}== ${result.url} ==${colors.reset}`);
    
    console.log(`Performance:    ${formatScore(result.performance)}`);
    console.log(`Accessibility:  ${formatScore(result.accessibility)}`);
    console.log(`Best Practices: ${formatScore(result.bestPractices)}`);
    console.log(`SEO:            ${formatScore(result.seo)}`);
    
    console.log('\nKey Metrics:');
    console.log(`- First Contentful Paint:   ${Math.round(result.firstContentfulPaint)}ms`);
    console.log(`- Largest Contentful Paint: ${Math.round(result.largestContentfulPaint)}ms`);
    console.log(`- Total Blocking Time:      ${Math.round(result.totalBlockingTime)}ms`);
    console.log(`- Cumulative Layout Shift:  ${result.cumulativeLayoutShift.toFixed(3)}`);
    console.log(`- Speed Index:              ${Math.round(result.speedIndex)}ms`);
    
    console.log(`\nFull report saved to: ${result.reportPath}`);
    console.log('');
    
    // Accumulate scores for average
    totalPerformance += result.performance;
    totalAccessibility += result.accessibility;
    totalBestPractices += result.bestPractices;
    totalSeo += result.seo;
  });
  
  // Calculate averages
  const avgPerformance = totalPerformance / results.length;
  const avgAccessibility = totalAccessibility / results.length;
  const avgBestPractices = totalBestPractices / results.length;
  const avgSeo = totalSeo / results.length;
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Average Performance:    ${formatScore(avgPerformance)}`);
  console.log(`Average Accessibility:  ${formatScore(avgAccessibility)}`);
  console.log(`Average Best Practices: ${formatScore(avgBestPractices)}`);
  console.log(`Average SEO:            ${formatScore(avgSeo)}`);
  console.log('===========================');
  
  // Recommendations
  console.log('\nRecommendations:');
  
  if (avgPerformance < SCORE_THRESHOLDS.average) {
    console.log(`${colors.yellow}⚠️ Performance needs improvement:${colors.reset}`);
    console.log('- Optimize images further (use WebP, lazy loading)');
    console.log('- Minimize JavaScript and CSS');
    console.log('- Implement proper caching strategies');
    console.log('- Use server-side rendering where appropriate');
  }
  
  if (avgAccessibility < SCORE_THRESHOLDS.average) {
    console.log(`${colors.yellow}⚠️ Accessibility needs improvement:${colors.reset}`);
    console.log('- Ensure proper ARIA labels on interactive elements');
    console.log('- Check color contrast on text elements');
    console.log('- Provide text alternatives for images');
    console.log('- Ensure keyboard navigation works properly');
  }
  
  if (avgBestPractices < SCORE_THRESHOLDS.average) {
    console.log(`${colors.yellow}⚠️ Best Practices need improvement:${colors.reset}`);
    console.log('- Update to HTTPS if not already');
    console.log('- Fix any JavaScript errors');
    console.log('- Use secure cookies properly');
    console.log('- Avoid deprecated APIs');
  }
  
  if (avgSeo < SCORE_THRESHOLDS.average) {
    console.log(`${colors.yellow}⚠️ SEO needs improvement:${colors.reset}`);
    console.log('- Ensure all pages have unique meta titles and descriptions');
    console.log('- Verify structured data is valid');
    console.log('- Check that all links are crawlable');
    console.log('- Ensure proper heading structure');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Running Lighthouse audits for ${baseUrl}${colors.reset}\n`);
  ensureReportsDir();
  
  const results = [];
  
  // Process each page to audit
  for (const pagePath of PAGES_TO_AUDIT) {
    const pageUrl = new URL(pagePath, baseUrl).toString();
    const result = await runLighthouse(pageUrl);
    results.push(result);
  }
  
  // Print results
  printResults(results);
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 