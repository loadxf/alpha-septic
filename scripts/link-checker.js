/**
 * Simple Link Checker Script
 * 
 * This script checks for broken links and images on a website
 * using HTTP requests instead of a headless browser.
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

// Configuration with defaults
const config = {
  baseUrl: 'http://localhost:3000',
  maxPages: 30,
  includeExternal: false,
  outputFilePath: './link-checker-report.json',
  userAgent: 'Link Checker Bot/1.0',
  timeout: 10000,
  concurrentRequests: 5
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--baseUrl' && i + 1 < args.length) {
      config.baseUrl = args[++i];
    } else if (arg === '--maxPages' && i + 1 < args.length) {
      config.maxPages = parseInt(args[++i], 10);
    } else if (arg === '--includeExternal') {
      config.includeExternal = true;
    } else if (arg === '--outputFilePath' && i + 1 < args.length) {
      config.outputFilePath = args[++i];
    }
  }
}

// Results storage
const results = {
  pagesScanned: 0,
  linksChecked: 0,
  imagesChecked: 0,
  brokenLinks: [],
  redirectedLinks: [],
  executionErrors: []
};

// Extract links and images from HTML content
function extractLinks(html, baseUrl) {
  const links = [];
  const images = [];
  
  // Simple regex for links - in a real implementation, use a proper HTML parser
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl);
      links.push(url.href);
    } catch (error) {
      // Skip invalid URLs
    }
  }
  
  // Simple regex for images - in a real implementation, use a proper HTML parser
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  while ((match = imgRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl);
      images.push(url.href);
    } catch (error) {
      // Skip invalid URLs
    }
  }
  
  return { links, images };
}

// Check if a URL is internal
function isInternalUrl(url) {
  const baseUrlObj = new URL(config.baseUrl);
  const urlObj = new URL(url);
  return urlObj.hostname === baseUrlObj.hostname;
}

// Check a URL and return its status
async function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const requestOptions = {
      method: 'HEAD',
      host: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': config.userAgent
      },
      timeout: config.timeout
    };
    
    const client = urlObj.protocol === 'https:' ? https : http;
    const req = client.request(requestOptions, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        if (res.statusCode >= 300) {
          // Redirected link
          resolve({ 
            url, 
            status: res.statusCode,
            redirected: true,
            location: res.headers.location
          });
        } else {
          // Good link
          resolve({ url, status: res.statusCode, redirected: false });
        }
      } else {
        // Broken link
        resolve({ url, status: res.statusCode, broken: true });
      }
    });
    
    req.on('error', (error) => {
      resolve({ url, error: error.message, broken: true });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, error: 'Request timeout', broken: true });
    });
    
    req.end();
  });
}

// Process a URL by fetching its content and checking embedded links
async function processUrl(url) {
  if (results.pagesScanned >= config.maxPages) return;
  
  try {
    // Get the full page content to extract links
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': config.userAgent
      }
    };
    
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const pageContent = await new Promise((resolve, reject) => {
      client.get(options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400) {
          // Handle redirects
          if (res.headers.location) {
            try {
              const redirectUrl = new URL(res.headers.location, url).href;
              results.redirectedLinks.push({
                from: url,
                to: redirectUrl,
                status: res.statusCode
              });
              // We could follow the redirect here if needed
            } catch (error) {
              // Invalid redirect URL
            }
          }
          resolve('');
          return;
        }
        
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP status code ${res.statusCode}`));
          return;
        }
        
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => { resolve(data); });
      }).on('error', reject);
    });
    
    // Extract links and images
    const { links, images } = extractLinks(pageContent, url);
    
    // Check links
    for (const link of links) {
      // Only process internal links or if includeExternal is true
      if (!isInternalUrl(link) && !config.includeExternal) continue;
      
      results.linksChecked++;
      const result = await checkUrl(link);
      
      if (result.broken) {
        results.brokenLinks.push({
          url: result.url,
          status: result.status,
          error: result.error,
          page: url,
          type: 'link'
        });
      } else if (result.redirected) {
        results.redirectedLinks.push({
          from: result.url,
          to: result.location,
          status: result.status,
          page: url
        });
      }
    }
    
    // Check images
    for (const image of images) {
      results.imagesChecked++;
      const result = await checkUrl(image);
      
      if (result.broken) {
        results.brokenLinks.push({
          url: result.url,
          status: result.status,
          error: result.error,
          page: url,
          type: 'image'
        });
      }
    }
    
    results.pagesScanned++;
  } catch (error) {
    results.executionErrors.push({
      url,
      error: error.message
    });
  }
}

// Generate a report
function generateReport() {
  console.log('\n');
  console.log(colors.cyan + '========================================');
  console.log('  LINK CHECKER REPORT');
  console.log('========================================' + colors.reset);
  
  // Print summary
  console.log('\n' + colors.blue + 'SUMMARY:' + colors.reset);
  console.log(`  Pages scanned: ${results.pagesScanned}`);
  console.log(`  Links checked: ${results.linksChecked}`);
  console.log(`  Images checked: ${results.imagesChecked}`);
  console.log(`  Broken links: ${results.brokenLinks.length}`);
  console.log(`  Redirected links: ${results.redirectedLinks.length}`);
  console.log(`  Execution errors: ${results.executionErrors.length}`);
  
  // Print broken links
  if (results.brokenLinks.length > 0) {
    console.log('\n' + colors.red + 'BROKEN LINKS:' + colors.reset);
    for (const link of results.brokenLinks) {
      console.log(`  [${link.type.toUpperCase()}] ${link.url}`);
      console.log(`    Found on: ${link.page}`);
      if (link.status) {
        console.log(`    Status: ${link.status}`);
      }
      if (link.error) {
        console.log(`    Error: ${link.error}`);
      }
    }
  }
  
  // Print redirected links
  if (results.redirectedLinks.length > 0) {
    console.log('\n' + colors.yellow + 'REDIRECTED LINKS:' + colors.reset);
    for (const link of results.redirectedLinks) {
      console.log(`  ${link.from} → ${link.to}`);
      console.log(`    Found on: ${link.page || 'N/A'}`);
      console.log(`    Status: ${link.status}`);
    }
  }
  
  // Print execution errors
  if (results.executionErrors.length > 0) {
    console.log('\n' + colors.magenta + 'EXECUTION ERRORS:' + colors.reset);
    for (const error of results.executionErrors) {
      console.log(`  ${error.url}`);
      console.log(`    Error: ${error.error}`);
    }
  }
  
  // Save report to file
  try {
    fs.writeFileSync(
      config.outputFilePath,
      JSON.stringify(results, null, 2)
    );
    console.log('\n' + colors.green + 'Report saved to ' + config.outputFilePath + colors.reset);
  } catch (error) {
    console.error('\n' + colors.red + 'Failed to save report: ' + error.message + colors.reset);
  }
  
  // Print recommendations
  console.log('\n' + colors.cyan + 'RECOMMENDATIONS:' + colors.reset);
  console.log(colors.green + '1. Fix broken internal links and images first.');
  console.log('2. Update redirected internal links to their direct URLs.');
  console.log('3. Regularly review external links.');
  console.log('4. Consider implementing automated link checking in your CI/CD pipeline.' + colors.reset);
  
  console.log('\n' + colors.cyan + '========================================' + colors.reset);
}

// Main function
async function main() {
  console.log(colors.cyan + '========================================');
  console.log('  LINK AND IMAGE CHECKER');
  console.log('========================================' + colors.reset);
  
  // Parse command line arguments
  parseArgs();
  
  console.log(`Base URL: ${colors.blue}${config.baseUrl}${colors.reset}`);
  console.log(`Max Pages: ${config.maxPages}`);
  console.log(`Include External: ${config.includeExternal ? 'Yes' : 'No'}`);
  console.log('\nStarting link and image check...\n');
  
  // Process the base URL
  await processUrl(config.baseUrl);
  
  // Generate and print the report
  generateReport();
  
  // Return an exit code based on broken links
  return results.brokenLinks.length > 0 ? 1 : 0;
}

// Run the main function
main()
  .then(exitCode => {
    process.exit(exitCode);
  })
  .catch(error => {
    console.error(colors.red + 'Fatal error: ' + error.message + colors.reset);
    process.exit(1);
  });