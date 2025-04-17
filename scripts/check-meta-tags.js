/**
 * Check Meta Tags Script
 * 
 * This script crawls the website to check meta tags on each page,
 * ensuring they are unique, properly formatted, and SEO-friendly.
 * 
 * Prerequisites:
 * npm install puppeteer
 * 
 * Usage:
 * node scripts/check-meta-tags.js [url]
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

// SEO recommendations
const SEO_RULES = {
  title: {
    minLength: 30,
    maxLength: 60,
    shouldContainBrand: true
  },
  description: {
    minLength: 70,
    maxLength: 160
  }
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
 * Check a page's meta tags
 */
async function checkPageMetaTags(browser, url) {
  const page = await browser.newPage();
  
  try {
    // Increase timeout for slow pages
    await page.setDefaultNavigationTimeout(30000);
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Extract metadata
    const metadata = await page.evaluate(() => {
      const getMetaContent = (name) => {
        const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
        return meta ? meta.getAttribute('content') : null;
      };
      
      return {
        title: document.title,
        description: getMetaContent('description'),
        ogTitle: getMetaContent('og:title'),
        ogDescription: getMetaContent('og:description'),
        ogImage: getMetaContent('og:image'),
        twitterTitle: getMetaContent('twitter:title'),
        twitterDescription: getMetaContent('twitter:description'),
        twitterImage: getMetaContent('twitter:image'),
        canonical: document.querySelector('link[rel="canonical"]') ? 
                  document.querySelector('link[rel="canonical"]').getAttribute('href') : null,
        h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim())
      };
    });
    
    // Get page path for identifying the page
    const urlObj = new URL(url);
    const pagePath = urlObj.pathname || '/';
    
    // Analyze metadata
    const issues = [];
    
    // Check title
    if (!metadata.title) {
      issues.push('Missing page title');
    } else {
      if (metadata.title.length < SEO_RULES.title.minLength) {
        issues.push(`Title is too short (${metadata.title.length} chars, recommended min: ${SEO_RULES.title.minLength})`);
      }
      if (metadata.title.length > SEO_RULES.title.maxLength) {
        issues.push(`Title is too long (${metadata.title.length} chars, recommended max: ${SEO_RULES.title.maxLength})`);
      }
      if (SEO_RULES.title.shouldContainBrand && !metadata.title.includes('Alpha Septic')) {
        issues.push('Title should include brand name');
      }
    }
    
    // Check description
    if (!metadata.description) {
      issues.push('Missing meta description');
    } else {
      if (metadata.description.length < SEO_RULES.description.minLength) {
        issues.push(`Description is too short (${metadata.description.length} chars, recommended min: ${SEO_RULES.description.minLength})`);
      }
      if (metadata.description.length > SEO_RULES.description.maxLength) {
        issues.push(`Description is too long (${metadata.description.length} chars, recommended max: ${SEO_RULES.description.maxLength})`);
      }
    }
    
    // Check Open Graph
    if (!metadata.ogTitle) issues.push('Missing og:title');
    if (!metadata.ogDescription) issues.push('Missing og:description');
    if (!metadata.ogImage) issues.push('Missing og:image');
    
    // Check Twitter Cards
    if (!metadata.twitterTitle) issues.push('Missing twitter:title');
    if (!metadata.twitterDescription) issues.push('Missing twitter:description');
    if (!metadata.twitterImage) issues.push('Missing twitter:image');
    
    // Check canonical URL
    if (!metadata.canonical) {
      issues.push('Missing canonical link');
    } else {
      const expectedCanonical = `${urlObj.origin}${pagePath}`;
      if (!metadata.canonical.startsWith(expectedCanonical)) {
        issues.push(`Canonical URL (${metadata.canonical}) doesn't match expected URL (${expectedCanonical})`);
      }
    }
    
    // Check H1
    if (!metadata.h1 || metadata.h1.length === 0) {
      issues.push('Missing H1 heading');
    } else if (metadata.h1.length > 1) {
      issues.push(`Multiple H1 headings found (${metadata.h1.length})`);
    }
    
    return {
      url,
      pagePath,
      metadata,
      issues,
      pass: issues.length === 0
    };
  } catch (error) {
    return {
      url,
      pagePath: new URL(url).pathname || '/',
      metadata: {},
      issues: [`Error checking page: ${error.message}`],
      pass: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Check for duplicate titles and descriptions
 */
function checkDuplicates(results) {
  const titles = {};
  const descriptions = {};
  const duplicateIssues = {};
  
  // Find duplicates
  results.forEach(result => {
    if (!result.metadata.title) return;
    
    const { title, description } = result.metadata;
    const pagePath = result.pagePath;
    
    // Check duplicate title
    if (title in titles) {
      if (!duplicateIssues[pagePath]) duplicateIssues[pagePath] = [];
      if (!duplicateIssues[titles[title]]) duplicateIssues[titles[title]] = [];
      
      duplicateIssues[pagePath].push(`Duplicate title with ${titles[title]}`);
      duplicateIssues[titles[title]].push(`Duplicate title with ${pagePath}`);
    } else {
      titles[title] = pagePath;
    }
    
    // Check duplicate description
    if (description && description in descriptions) {
      if (!duplicateIssues[pagePath]) duplicateIssues[pagePath] = [];
      if (!duplicateIssues[descriptions[description]]) duplicateIssues[descriptions[description]] = [];
      
      duplicateIssues[pagePath].push(`Duplicate description with ${descriptions[description]}`);
      duplicateIssues[descriptions[description]].push(`Duplicate description with ${pagePath}`);
    } else if (description) {
      descriptions[description] = pagePath;
    }
  });
  
  // Add duplicate issues to results
  results.forEach(result => {
    const pagePath = result.pagePath;
    if (duplicateIssues[pagePath]) {
      result.issues.push(...duplicateIssues[pagePath]);
      result.pass = false;
    }
  });
  
  return results;
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= META TAGS AUDIT RESULTS =========\n');
  
  let passCount = 0;
  let failCount = 0;
  
  // Process each page result
  results.forEach(result => {
    const statusIcon = result.pass ? `${colors.green}✓` : `${colors.red}✗`;
    console.log(`${statusIcon} ${result.pagePath || 'home'}${colors.reset}`);
    
    if (result.pass) {
      passCount++;
      console.log(`  Title: ${result.metadata.title}`);
      console.log(`  Description: ${result.metadata.description}`);
    } else {
      failCount++;
      console.log(`  Title: ${result.metadata.title || '(missing)'}`);
      console.log(`  Description: ${result.metadata.description || '(missing)'}`);
      
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
  const reportPath = path.join(REPORTS_DIR, 'meta-tags-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nFull report saved to: ${reportPath}`);
  
  // Recommendations
  if (failCount > 0) {
    console.log('\nSEO Recommendations:');
    console.log('1. Ensure each page has a unique title (30-60 characters) that includes brand name');
    console.log('2. Provide unique meta descriptions (70-160 characters) for each page');
    console.log('3. Include Open Graph and Twitter Card meta tags for social sharing');
    console.log('4. Add canonical URLs to prevent duplicate content issues');
    console.log('5. Include exactly one H1 heading on each page');
    console.log('\nHow to fix in Next.js:');
    console.log('- Use the metadata export in page.tsx/jsx files');
    console.log('- For dynamic pages, generate metadata in generateMetadata function');
    console.log('- Example:');
    console.log(`
  export const metadata = {
    title: 'Page Title | Alpha Septic',
    description: 'Detailed description of this page for SEO purposes (70-160 characters)',
    openGraph: {
      title: 'Page Title | Alpha Septic',
      description: 'Detailed description for social sharing',
      images: ['/path/to/image.jpg']
    }
  }
`);
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking meta tags for ${baseUrl}${colors.reset}\n`);
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
      const result = await checkPageMetaTags(browser, pageUrl);
      results.push(result);
    }
    
    // Check for duplicates
    const resultsWithDuplicatesChecked = checkDuplicates(results);
    
    // Print results
    printResults(resultsWithDuplicatesChecked);
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 