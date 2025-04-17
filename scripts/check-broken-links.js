/**
 * Script to check for broken links and images across the Alpha Septic website
 * 
 * Prerequisites:
 * - Node.js installed
 * - Run 'npm install puppeteer chalk' to install dependencies
 * 
 * Usage:
 * - Run with: node scripts/check-broken-links.js [url]
 * - If no URL is provided, it will default to https://callalphaseptic.com
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Constants
const DEFAULT_SITE_URL = 'https://callalphaseptic.com';
const REPORTS_DIR = path.join(__dirname, '../reports');

// Check if a custom URL was provided as a command line argument
const siteUrl = process.argv[2] || DEFAULT_SITE_URL;

// Colors for console output
const colors = {
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.blue,
  header: chalk.cyan.bold,
  subheader: chalk.magenta
};

// Ensure reports directory exists
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

// Main function to check broken links
async function checkBrokenLinks() {
  console.log(colors.header('Starting broken links check for:', siteUrl));
  console.log(colors.info('This may take a few minutes depending on the site size...'));
  
  ensureReportsDir();
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const results = { visited: {}, broken: [], images: { broken: [] }, total: { links: 0, images: 0 } };
  
  try {
    // Start crawling from the homepage
    await crawlPage(browser, siteUrl, results);
    
    // Print results
    printResults(results);
    
    // Save report
    saveReport(results);
  } catch (error) {
    console.error(colors.error('Error during link checking:'), error);
  } finally {
    await browser.close();
    console.log(colors.info('Link checking completed.'));
  }
}

// Function to crawl a page and check its links
async function crawlPage(browser, url, results, depth = 0, maxDepth = 3) {
  // Skip if we've already visited this URL or reached max depth
  if (results.visited[url] || depth > maxDepth) return;
  
  console.log(colors.info(`Checking page (depth ${depth}): ${url}`));
  results.visited[url] = true;
  
  const page = await browser.newPage();
  
  try {
    // Set timeout for navigation
    await page.setDefaultNavigationTimeout(30000);
    
    // Navigate to the page
    const response = await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Check page response status
    const status = response.status();
    if (status >= 400) {
      results.broken.push({ url, status, from: 'direct navigation' });
    }
    
    // Get all links on the page
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href]'))
        .map(link => {
          return {
            href: link.href,
            text: link.textContent.trim(),
            location: {
              x: link.getBoundingClientRect().left,
              y: link.getBoundingClientRect().top
            }
          };
        });
    });
    
    results.total.links += links.length;
    
    // Check each link
    for (const link of links) {
      const href = link.href;
      
      // Skip non-HTTP links (e.g., mailto:, tel:, javascript:)
      if (!href.startsWith('http')) continue;
      
      // Skip external links to avoid crawling the entire internet
      const isSameDomain = new URL(href).hostname === new URL(siteUrl).hostname;
      
      if (isSameDomain && !results.visited[href]) {
        // Recursively crawl internal pages
        await crawlPage(browser, href, results, depth + 1, maxDepth);
      } else if (!isSameDomain) {
        // Just check if external link is reachable
        const linkPage = await browser.newPage();
        try {
          const linkResponse = await linkPage.goto(href, { 
            waitUntil: 'networkidle2',
            timeout: 15000
          });
          
          const linkStatus = linkResponse.status();
          if (linkStatus >= 400) {
            results.broken.push({ 
              url: href, 
              status: linkStatus, 
              from: url,
              text: link.text,
              type: 'external'
            });
          }
        } catch (error) {
          results.broken.push({ 
            url: href, 
            status: 'error',
            error: error.message,
            from: url,
            text: link.text,
            type: 'external'
          });
        } finally {
          await linkPage.close();
        }
      }
    }
    
    // Check images
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img[src]'))
        .map(img => {
          return {
            src: img.src,
            alt: img.alt,
            location: {
              x: img.getBoundingClientRect().left,
              y: img.getBoundingClientRect().top
            }
          };
        });
    });
    
    results.total.images += images.length;
    
    // Check each image
    for (const image of images) {
      const src = image.src;
      
      // Skip data URLs
      if (src.startsWith('data:')) continue;
      
      try {
        const imgPage = await browser.newPage();
        const imgResponse = await imgPage.goto(src, { 
          waitUntil: 'networkidle2',
          timeout: 10000
        });
        
        const imgStatus = imgResponse.status();
        if (imgStatus >= 400) {
          results.images.broken.push({ 
            src, 
            status: imgStatus, 
            from: url,
            alt: image.alt
          });
        }
        
        await imgPage.close();
      } catch (error) {
        results.images.broken.push({ 
          src, 
          status: 'error',
          error: error.message,
          from: url,
          alt: image.alt
        });
      }
    }
  } catch (error) {
    console.error(colors.error(`Error checking ${url}:`), error.message);
    
    // Add to broken links if the error is related to navigation
    if (error.name === 'TimeoutError' || error.name === 'ProtocolError') {
      results.broken.push({ 
        url, 
        status: 'error',
        error: error.message,
        from: 'direct navigation'
      });
    }
  } finally {
    await page.close();
  }
}

// Function to print results
function printResults(results) {
  console.log('\n' + colors.header('BROKEN LINKS REPORT'));
  console.log(colors.header('================='));
  
  console.log(colors.subheader('\nSUMMARY:'));
  console.log(`Total pages crawled: ${Object.keys(results.visited).length}`);
  console.log(`Total links checked: ${results.total.links}`);
  console.log(`Total images checked: ${results.total.images}`);
  console.log(`Broken links found: ${results.broken.length}`);
  console.log(`Broken images found: ${results.images.broken.length}`);
  
  // Print broken links
  if (results.broken.length > 0) {
    console.log(colors.subheader('\nBROKEN LINKS:'));
    results.broken.forEach((link, index) => {
      console.log(colors.error(`${index + 1}. ${link.url}`));
      console.log(`   Status: ${link.status}`);
      console.log(`   Found on: ${link.from}`);
      if (link.text) console.log(`   Link text: "${link.text}"`);
      if (link.error) console.log(`   Error: ${link.error}`);
      console.log(`   Type: ${link.type || 'internal'}`);
      console.log();
    });
  } else {
    console.log(colors.success('\nNo broken links found!'));
  }
  
  // Print broken images
  if (results.images.broken.length > 0) {
    console.log(colors.subheader('\nBROKEN IMAGES:'));
    results.images.broken.forEach((image, index) => {
      console.log(colors.error(`${index + 1}. ${image.src}`));
      console.log(`   Status: ${image.status}`);
      console.log(`   Found on: ${image.from}`);
      console.log(`   Alt text: "${image.alt || 'missing'}"`);
      if (image.error) console.log(`   Error: ${image.error}`);
      console.log();
    });
  } else {
    console.log(colors.success('\nNo broken images found!'));
  }
  
  // Print recommendations if issues were found
  if (results.broken.length > 0 || results.images.broken.length > 0) {
    console.log(colors.subheader('\nRECOMMENDATIONS:'));
    
    if (results.broken.length > 0) {
      console.log(colors.warning('For broken links:'));
      console.log('1. Update or remove broken links');
      console.log('2. For external links, consider implementing a regular checking schedule');
      console.log('3. Add error handling for critical links');
    }
    
    if (results.images.broken.length > 0) {
      console.log(colors.warning('\nFor broken images:'));
      console.log('1. Upload missing images or update image paths');
      console.log('2. Ensure all images have descriptive alt text');
      console.log('3. Consider implementing image fallbacks');
    }
  }
}

// Function to save report to a file
function saveReport(results) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportFile = path.join(REPORTS_DIR, `broken-links-report-${timestamp}.json`);
  
  fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
  console.log(colors.info(`\nReport saved to: ${reportFile}`));
}

// Run the link checker
checkBrokenLinks().catch(error => {
  console.error(colors.error('Fatal error:'), error);
  process.exit(1);
}); 