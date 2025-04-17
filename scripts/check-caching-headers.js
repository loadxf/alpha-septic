/**
 * Check Caching Headers Script
 * 
 * This script checks the caching headers of assets on the deployed website
 * to ensure proper caching strategies are in place.
 * 
 * Usage:
 * node scripts/check-caching-headers.js [url]
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Default site URL from environment or fallback
const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://callalphaseptic.com';

// Asset paths to check, categorized by type
const ASSETS_TO_CHECK = {
  html: [
    '/',
    '/services',
    '/about',
    '/contact'
  ],
  css: [
    '/_next/static/css/app.css'
  ],
  js: [
    '/_next/static/chunks/main.js',
    '/_next/static/chunks/webpack.js'
  ],
  images: [
    '/images/hero.webp',
    '/favicon.ico'
  ],
  fonts: [
    '/fonts/inter.woff2'
  ]
};

// Expected cache durations (in seconds)
const EXPECTED_CACHE_DURATIONS = {
  html: 0, // HTML shouldn't be cached or short cache
  css: 31536000, // 1 year
  js: 31536000, // 1 year
  images: 31536000, // 1 year
  fonts: 31536000 // 1 year
};

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
 * Parse the cache-control header to get max-age value
 */
function parseCacheControl(cacheControl) {
  if (!cacheControl) return null;
  
  const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
  if (maxAgeMatch && maxAgeMatch[1]) {
    return parseInt(maxAgeMatch[1], 10);
  }
  
  return null;
}

/**
 * Check caching headers for a URL
 */
async function checkCachingHeaders(baseUrl, path, assetType) {
  try {
    const url = new URL(path, baseUrl).toString();
    console.log(`${colors.blue}Checking${colors.reset}: ${url}`);
    
    const response = await fetch(url, { method: 'HEAD' });
    
    // Get relevant headers
    const cacheControl = response.headers.get('cache-control');
    const etag = response.headers.get('etag');
    const lastModified = response.headers.get('last-modified');
    
    // Parse max-age from cache-control
    const maxAge = parseCacheControl(cacheControl);
    const expectedMaxAge = EXPECTED_CACHE_DURATIONS[assetType];
    
    // Results object
    const result = {
      url,
      statusCode: response.status,
      cacheControl,
      etag: etag || null,
      lastModified: lastModified || null,
      maxAge,
      expectedMaxAge,
      pass: false,
      issues: []
    };
    
    // Check status code
    if (response.status !== 200) {
      result.issues.push(`Status code is ${response.status}, expected 200`);
    }
    
    // Check cache-control
    if (!cacheControl) {
      result.issues.push('No cache-control header found');
    }
    
    // Check max-age against expected for this asset type
    if (maxAge !== null) {
      if (assetType === 'html') {
        // For HTML, we expect no caching or very short caching
        if (maxAge > 300) { // 5 minutes
          result.issues.push(`max-age is ${maxAge}s, which is too long for HTML content`);
        }
      } else {
        // For static assets, we expect longer caching
        if (maxAge < expectedMaxAge) {
          result.issues.push(`max-age is ${maxAge}s, expected at least ${expectedMaxAge}s`);
        }
      }
    }
    
    // Check ETag or Last-Modified for validators
    if (!etag && !lastModified) {
      result.issues.push('No ETag or Last-Modified header found for validation');
    }
    
    // Overall pass/fail
    result.pass = result.issues.length === 0;
    
    return result;
  } catch (error) {
    return {
      url: new URL(path, baseUrl).toString(),
      pass: false,
      issues: [`Error: ${error.message}`]
    };
  }
}

/**
 * Print formatted results
 */
function printResults(results) {
  console.log('\n========= CACHING HEADERS AUDIT RESULTS =========\n');
  
  let totalPassed = 0;
  let totalFailed = 0;
  
  // Process by asset type
  Object.entries(results).forEach(([assetType, typeResults]) => {
    console.log(`${colors.cyan}== ${assetType.toUpperCase()} ASSETS ==${colors.reset}`);
    
    typeResults.forEach(result => {
      if (result.pass) {
        totalPassed++;
        console.log(`${colors.green}✓ PASS${colors.reset}: ${result.url}`);
        console.log(`  Cache-Control: ${result.cacheControl}`);
        if (result.etag) console.log(`  ETag: ${result.etag}`);
        if (result.lastModified) console.log(`  Last-Modified: ${result.lastModified}`);
      } else {
        totalFailed++;
        console.log(`${colors.red}✗ FAIL${colors.reset}: ${result.url}`);
        result.issues.forEach(issue => {
          console.log(`  - ${issue}`);
        });
      }
      console.log('');
    });
  });
  
  // Summary
  console.log('========= SUMMARY =========');
  console.log(`Total Passed: ${colors.green}${totalPassed}${colors.reset}`);
  console.log(`Total Failed: ${colors.red}${totalFailed}${colors.reset}`);
  console.log('===========================');
  
  if (totalFailed > 0) {
    console.log('\nRecommendations:');
    console.log('1. For static assets (JS, CSS, images, fonts), set long cache times:');
    console.log('   Cache-Control: public, max-age=31536000, immutable');
    console.log('2. For HTML content, use short or no caching:');
    console.log('   Cache-Control: public, max-age=0, must-revalidate');
    console.log('3. Ensure ETag or Last-Modified headers are present for validation');
    console.log('\nImplementation in Next.js:');
    console.log('- Use custom server middleware or configure your hosting platform');
    console.log('- Vercel and similar platforms often handle this automatically');
    console.log('- For custom servers, add appropriate headers in the response');
  }
}

/**
 * Main function
 */
async function main() {
  // Get base URL from command line args or use default
  const baseUrl = process.argv[2] || DEFAULT_SITE_URL;
  
  console.log(`${colors.cyan}Checking caching headers for ${baseUrl}${colors.reset}\n`);
  
  const results = {};
  
  // Process each asset type
  for (const [assetType, paths] of Object.entries(ASSETS_TO_CHECK)) {
    results[assetType] = [];
    
    for (const assetPath of paths) {
      const result = await checkCachingHeaders(baseUrl, assetPath, assetType);
      results[assetType].push(result);
    }
  }
  
  // Print results
  printResults(results);
}

// Run the script
main().catch(error => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}); 