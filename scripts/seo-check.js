/**
 * SEO Checker for Alpha Septic website
 * 
 * This script crawls the website and checks for SEO best practices:
 * - Meta titles and descriptions
 * - JSON-LD structured data
 * - Canonical URLs
 * - Heading structure
 * - Alt tags for images
 * 
 * Usage: node scripts/seo-check.js [--url=https://example.com]
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const chalk = require('chalk');
const { URL } = require('url');

// Configuration
const DEFAULT_URL = 'http://localhost:3000';
const REPORT_PATH = path.join(__dirname, '../reports/seo-report.md');
const MAX_PAGES = 50; // Maximum number of pages to check

// Parse command line arguments
const args = process.argv.slice(2);
let baseUrl = DEFAULT_URL;

args.forEach(arg => {
  if (arg.startsWith('--url=')) {
    baseUrl = arg.split('=')[1];
  }
});

// Ensure base URL has trailing slash for consistency
if (!baseUrl.endsWith('/')) {
  baseUrl += '/';
}

// Colors for console output
const colors = {
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.blue,
  header: chalk.cyan.bold,
  subheader: chalk.magenta
};

// Results object
const results = {
  pages: {},
  summary: {
    pagesChecked: 0,
    missingTitles: 0,
    missingDescriptions: 0,
    shortTitles: 0,
    longTitles: 0,
    shortDescriptions: 0,
    longDescriptions: 0,
    duplicateTitles: {},
    duplicateDescriptions: {},
    missingCanonical: 0,
    missingStructuredData: 0,
    invalidStructuredData: 0,
    imagesWithoutAlt: 0,
    emptyH1: 0,
    multipleH1: 0,
    nestedHeadingErrors: 0
  }
};

// Ensure reports directory exists
function ensureReportDirExists() {
  const reportsDir = path.dirname(REPORT_PATH);
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
}

// Check SEO elements on a page
async function checkPage(page, url) {
  console.log(colors.info(`Checking: ${url}`));
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (error) {
    console.log(colors.error(`Error loading page: ${url}`));
    console.log(colors.error(error.message));
    return null;
  }
  
  // Extract key SEO elements
  const pageData = await page.evaluate(() => {
    // Meta title
    const title = document.title || '';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription ? metaDescription.getAttribute('content') : '';
    
    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = canonicalLink ? canonicalLink.getAttribute('href') : '';
    
    // Structured data
    const structuredDataElements = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    const structuredData = structuredDataElements.map(el => {
      try {
        return JSON.parse(el.textContent);
      } catch (e) {
        return { error: 'Invalid JSON' };
      }
    });
    
    // Images without alt
    const allImages = Array.from(document.querySelectorAll('img'));
    const imagesWithoutAlt = allImages
      .filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '')
      .map(img => ({
        src: img.getAttribute('src'),
        parent: img.parentElement ? img.parentElement.tagName : 'unknown'
      }));
    
    // Heading structure
    const h1Elements = Array.from(document.querySelectorAll('h1'));
    const h1Texts = h1Elements.map(h => h.textContent.trim());
    
    // Check for proper heading nesting
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(h => ({
        level: parseInt(h.tagName.substring(1)),
        text: h.textContent.trim()
      }));
    
    let improperNesting = [];
    let lastLevel = 0;
    
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].level > lastLevel + 1 && lastLevel !== 0) {
        improperNesting.push({
          current: headings[i],
          previous: headings[i-1]
        });
      }
      lastLevel = headings[i].level;
    }

    return {
      title,
      description,
      canonicalUrl,
      structuredData,
      imagesWithoutAlt,
      h1Elements: h1Texts,
      improperNesting
    };
  });
  
  // Analyze the collected data
  const pageResult = {
    url: url,
    title: {
      value: pageData.title,
      issues: []
    },
    description: {
      value: pageData.description,
      issues: []
    },
    canonical: {
      value: pageData.canonicalUrl,
      issues: []
    },
    structuredData: {
      count: pageData.structuredData.length,
      issues: []
    },
    images: {
      withoutAlt: pageData.imagesWithoutAlt.length,
      issues: pageData.imagesWithoutAlt
    },
    headings: {
      h1Count: pageData.h1Elements.length,
      h1Text: pageData.h1Elements.join(', '),
      issues: []
    }
  };
  
  // Check title
  if (!pageData.title) {
    pageResult.title.issues.push('Missing title');
    results.summary.missingTitles++;
  } else {
    if (pageData.title.length < 30) {
      pageResult.title.issues.push('Title is too short (< 30 chars)');
      results.summary.shortTitles++;
    }
    if (pageData.title.length > 60) {
      pageResult.title.issues.push('Title is too long (> 60 chars)');
      results.summary.longTitles++;
    }
    
    // Track duplicate titles
    if (!results.summary.duplicateTitles[pageData.title]) {
      results.summary.duplicateTitles[pageData.title] = [];
    }
    results.summary.duplicateTitles[pageData.title].push(url);
  }
  
  // Check description
  if (!pageData.description) {
    pageResult.description.issues.push('Missing description');
    results.summary.missingDescriptions++;
  } else {
    if (pageData.description.length < 100) {
      pageResult.description.issues.push('Description is too short (< 100 chars)');
      results.summary.shortDescriptions++;
    }
    if (pageData.description.length > 160) {
      pageResult.description.issues.push('Description is too long (> 160 chars)');
      results.summary.longDescriptions++;
    }
    
    // Track duplicate descriptions
    if (!results.summary.duplicateDescriptions[pageData.description]) {
      results.summary.duplicateDescriptions[pageData.description] = [];
    }
    results.summary.duplicateDescriptions[pageData.description].push(url);
  }
  
  // Check canonical URL
  if (!pageData.canonicalUrl) {
    pageResult.canonical.issues.push('Missing canonical URL');
    results.summary.missingCanonical++;
  }
  
  // Check structured data
  if (pageData.structuredData.length === 0) {
    pageResult.structuredData.issues.push('Missing structured data');
    results.summary.missingStructuredData++;
  } else {
    // Check if any structured data has error
    const invalidStructuredData = pageData.structuredData.filter(data => data.error);
    if (invalidStructuredData.length > 0) {
      pageResult.structuredData.issues.push('Invalid structured data format');
      results.summary.invalidStructuredData++;
    }
  }
  
  // Check headings
  if (pageData.h1Elements.length === 0) {
    pageResult.headings.issues.push('Missing H1 heading');
    results.summary.emptyH1++;
  } else if (pageData.h1Elements.length > 1) {
    pageResult.headings.issues.push('Multiple H1 headings');
    results.summary.multipleH1++;
  }
  
  if (pageData.improperNesting.length > 0) {
    pageResult.headings.issues.push('Improper heading nesting');
    pageResult.headings.nestedIssues = pageData.improperNesting;
    results.summary.nestedHeadingErrors++;
  }
  
  // Increment total images without alt
  results.summary.imagesWithoutAlt += pageData.imagesWithoutAlt.length;
  
  // Add to results
  results.pages[url] = pageResult;
  results.summary.pagesChecked++;
  
  return pageResult;
}

// Find links on a page
async function findLinks(page, baseUrl) {
  const links = await page.evaluate((baseUrl) => {
    const anchors = Array.from(document.querySelectorAll('a[href]'));
    return anchors
      .map(a => {
        try {
          const href = a.href;
          if (href.startsWith(baseUrl) && !href.includes('#')) {
            return href;
          }
          return null;
        } catch (e) {
          return null;
        }
      })
      .filter(href => href !== null);
  }, baseUrl);
  
  return [...new Set(links)]; // Remove duplicates
}

// Generate report
function generateReport() {
  ensureReportDirExists();
  
  let report = '# SEO Audit Report\n\n';
  report += `Generated on: ${new Date().toLocaleString()}\n`;
  report += `Base URL: ${baseUrl}\n`;
  report += `Pages checked: ${results.summary.pagesChecked}\n\n`;
  
  // Summary section
  report += '## Summary\n\n';
  report += '| Issue | Count |\n';
  report += '| ----- | ----- |\n';
  report += `| Missing titles | ${results.summary.missingTitles} |\n`;
  report += `| Missing descriptions | ${results.summary.missingDescriptions} |\n`;
  report += `| Titles too short | ${results.summary.shortTitles} |\n`;
  report += `| Titles too long | ${results.summary.longTitles} |\n`;
  report += `| Descriptions too short | ${results.summary.shortDescriptions} |\n`;
  report += `| Descriptions too long | ${results.summary.longDescriptions} |\n`;
  report += `| Missing canonical URLs | ${results.summary.missingCanonical} |\n`;
  report += `| Missing structured data | ${results.summary.missingStructuredData} |\n`;
  report += `| Invalid structured data | ${results.summary.invalidStructuredData} |\n`;
  report += `| Images without alt text | ${results.summary.imagesWithoutAlt} |\n`;
  report += `| Pages without H1 | ${results.summary.emptyH1} |\n`;
  report += `| Pages with multiple H1s | ${results.summary.multipleH1} |\n`;
  report += `| Improper heading nesting | ${results.summary.nestedHeadingErrors} |\n`;
  
  // Duplicate titles section
  report += '\n## Duplicate Titles\n\n';
  let hasDuplicateTitles = false;
  
  for (const [title, urls] of Object.entries(results.summary.duplicateTitles)) {
    if (title && urls.length > 1) {
      hasDuplicateTitles = true;
      report += `### "${title}"\n\n`;
      urls.forEach(url => {
        report += `- ${url}\n`;
      });
      report += '\n';
    }
  }
  
  if (!hasDuplicateTitles) {
    report += 'No duplicate titles found.\n';
  }
  
  // Duplicate descriptions section
  report += '\n## Duplicate Descriptions\n\n';
  let hasDuplicateDescriptions = false;
  
  for (const [description, urls] of Object.entries(results.summary.duplicateDescriptions)) {
    if (description && urls.length > 1) {
      hasDuplicateDescriptions = true;
      report += `### "${description.substring(0, 100)}..."\n\n`;
      urls.forEach(url => {
        report += `- ${url}\n`;
      });
      report += '\n';
    }
  }
  
  if (!hasDuplicateDescriptions) {
    report += 'No duplicate descriptions found.\n';
  }
  
  // Page details section
  report += '\n## Page Details\n\n';
  
  for (const [url, data] of Object.entries(results.pages)) {
    report += `### ${url}\n\n`;
    
    // Title
    report += `#### Title (${data.title.value ? data.title.value.length : 0} chars)\n`;
    report += `${data.title.value || '(Missing)'}\n\n`;
    if (data.title.issues.length > 0) {
      report += 'Issues:\n';
      data.title.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }
    
    // Description
    report += `#### Description (${data.description.value ? data.description.value.length : 0} chars)\n`;
    report += `${data.description.value || '(Missing)'}\n\n`;
    if (data.description.issues.length > 0) {
      report += 'Issues:\n';
      data.description.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }
    
    // Canonical
    report += `#### Canonical URL\n`;
    report += `${data.canonical.value || '(Missing)'}\n\n`;
    if (data.canonical.issues.length > 0) {
      report += 'Issues:\n';
      data.canonical.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }
    
    // Structured data
    report += `#### Structured Data\n`;
    report += `Count: ${data.structuredData.count}\n\n`;
    if (data.structuredData.issues.length > 0) {
      report += 'Issues:\n';
      data.structuredData.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }
    
    // Headings
    report += `#### Headings\n`;
    report += `H1: ${data.headings.h1Text || '(Missing)'}\n\n`;
    if (data.headings.issues.length > 0) {
      report += 'Issues:\n';
      data.headings.issues.forEach(issue => {
        report += `- ${issue}\n`;
      });
      report += '\n';
    }
    
    // Images without alt
    if (data.images.withoutAlt > 0) {
      report += `#### Images Without Alt Text (${data.images.withoutAlt})\n\n`;
      data.images.issues.forEach(img => {
        report += `- ${img.src || '(No src)'}\n`;
      });
      report += '\n';
    }
    
    report += '---\n\n';
  }
  
  // Recommendations
  report += '## Recommendations\n\n';
  
  if (results.summary.missingTitles > 0 || results.summary.shortTitles > 0 || results.summary.longTitles > 0) {
    report += '### Title Tags\n\n';
    report += '- Ensure all pages have unique, descriptive title tags\n';
    report += '- Keep titles between 30-60 characters\n';
    report += '- Include primary keywords at the beginning of titles\n\n';
  }
  
  if (results.summary.missingDescriptions > 0 || results.summary.shortDescriptions > 0 || results.summary.longDescriptions > 0) {
    report += '### Meta Descriptions\n\n';
    report += '- Add unique meta descriptions to all pages\n';
    report += '- Keep descriptions between 100-160 characters\n';
    report += '- Include a call to action and relevant keywords\n\n';
  }
  
  if (results.summary.missingCanonical > 0) {
    report += '### Canonical URLs\n\n';
    report += '- Add canonical tags to all pages to prevent duplicate content issues\n';
    report += '- Ensure canonical URLs are absolute, not relative\n\n';
  }
  
  if (results.summary.missingStructuredData > 0 || results.summary.invalidStructuredData > 0) {
    report += '### Structured Data\n\n';
    report += '- Implement JSON-LD structured data on all relevant pages\n';
    report += '- For service pages, use Service schema\n';
    report += '- For contact page, use LocalBusiness schema\n';
    report += '- Validate structured data with Google\'s Rich Results Test\n\n';
  }
  
  if (results.summary.imagesWithoutAlt > 0) {
    report += '### Images\n\n';
    report += '- Add descriptive alt text to all images\n';
    report += '- Include keywords in alt text where natural and appropriate\n';
    report += '- Ensure alt text describes the image content accurately\n\n';
  }
  
  if (results.summary.emptyH1 > 0 || results.summary.multipleH1 > 0 || results.summary.nestedHeadingErrors > 0) {
    report += '### Heading Structure\n\n';
    report += '- Ensure each page has exactly one H1 tag\n';
    report += '- Use proper heading hierarchy (H1 > H2 > H3, etc.)\n';
    report += '- Include keywords in headings where appropriate\n\n';
  }
  
  // Save report to file
  fs.writeFileSync(REPORT_PATH, report, 'utf8');
  console.log(colors.info(`Report saved to: ${REPORT_PATH}`));
  
  return report;
}

// Main function
async function main() {
  console.log(colors.header('Starting SEO Check'));
  console.log(colors.info(`Base URL: ${baseUrl}`));
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Set a custom user agent
    await page.setUserAgent('Mozilla/5.0 (compatible; SEOChecker/1.0; +http://example.com)');
    
    // Get and check all links
    const checkedUrls = new Set();
    const pendingUrls = new Set([baseUrl]);
    
    while (pendingUrls.size > 0 && checkedUrls.size < MAX_PAGES) {
      const url = Array.from(pendingUrls)[0];
      pendingUrls.delete(url);
      
      if (checkedUrls.has(url)) {
        continue;
      }
      
      const pageResult = await checkPage(page, url);
      if (pageResult) {
        checkedUrls.add(url);
        
        // Find and add new links
        const links = await findLinks(page, baseUrl);
        for (const link of links) {
          if (!checkedUrls.has(link) && !pendingUrls.has(link)) {
            pendingUrls.add(link);
          }
        }
      }
      
      console.log(colors.info(`Checked: ${checkedUrls.size}, Pending: ${pendingUrls.size}`));
    }
    
    // Generate report
    console.log(colors.header('\nGenerating SEO report...'));
    generateReport();
    
    // Print summary
    console.log('\n' + colors.header('SEO CHECK SUMMARY'));
    console.log(colors.header('=================='));
    console.log(`Pages checked: ${results.summary.pagesChecked}`);
    
    console.log('\n' + colors.subheader('Key Issues:'));
    console.log(`Missing titles: ${results.summary.missingTitles}`);
    console.log(`Missing descriptions: ${results.summary.missingDescriptions}`);
    console.log(`Missing canonical URLs: ${results.summary.missingCanonical}`);
    console.log(`Missing structured data: ${results.summary.missingStructuredData}`);
    console.log(`Images without alt text: ${results.summary.imagesWithoutAlt}`);
    console.log(`Pages with heading issues: ${results.summary.emptyH1 + results.summary.multipleH1}`);
    
    const hasMajorIssues = results.summary.missingTitles > 0 ||
                           results.summary.missingDescriptions > 0 ||
                           results.summary.missingCanonical > 0 ||
                           results.summary.missingStructuredData > 0;
    
    if (hasMajorIssues) {
      console.log('\n' + colors.warning('Major SEO issues found. Please check the detailed report.'));
    } else {
      console.log('\n' + colors.success('No major SEO issues found.'));
    }
    
    console.log(colors.info(`Detailed report saved to: ${REPORT_PATH}`));
    
  } catch (error) {
    console.error(colors.error('Fatal error:'), error);
  } finally {
    await browser.close();
  }
}

// Run script
main().catch(error => {
  console.error(colors.error('Fatal error:'), error);
  process.exit(1);
}); 