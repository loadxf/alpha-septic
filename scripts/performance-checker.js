#!/usr/bin/env node

/**
 * Performance Checker Script
 * 
 * This script runs Lighthouse to analyze page performance and provides recommendations
 * for improving the performance, accessibility, and SEO of the website.
 * 
 * Requires lighthouse and chrome-launcher to be installed:
 * npm install --save-dev lighthouse chrome-launcher
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Default configuration
const config = {
  // URL to test (defaults to localhost)
  url: 'http://localhost:3000',
  
  // Output directory for reports
  outputDir: path.resolve(__dirname, '../lighthouse-reports'),
  
  // Pages to test (relative to base URL)
  pagePaths: [
    '/',
    '/services',
    '/about',
    '/contact',
    '/service-areas',
  ],
  
  // Lighthouse configuration
  lighthouseConfig: {
    extends: 'lighthouse:default',
    settings: {
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false
      },
      emulatedUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.0 Safari/537.36 Edg/93.0.961.0',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
    }
  },
  
  // Score thresholds
  thresholds: {
    performance: 0.8,
    accessibility: 0.9,
    'best-practices': 0.9,
    seo: 0.9
  },
  
  // Command to start the development server if it's not running
  startServerCommand: 'npm run dev',
  
  // Port the development server runs on
  serverPort: 3000
};

// Parse command line arguments
function parseArguments() {
  const args = process.argv.slice(2);
  let i = 0;
  
  while (i < args.length) {
    const arg = args[i];
    
    if (arg === '--url' || arg === '-u') {
      config.url = args[i + 1];
      i += 2;
    } else if (arg === '--output' || arg === '-o') {
      config.outputDir = path.resolve(args[i + 1]);
      i += 2;
    } else if (arg === '--mobile' || arg === '-m') {
      config.lighthouseConfig.settings.formFactor = 'mobile';
      config.lighthouseConfig.settings.screenEmulation.mobile = true;
      config.lighthouseConfig.settings.screenEmulation.width = 375;
      config.lighthouseConfig.settings.screenEmulation.height = 667;
      i++;
    } else {
      console.log(`Unknown argument: ${arg}`);
      i++;
    }
  }
  
  // If the URL doesn't start with http, assume it's localhost
  if (!config.url.startsWith('http')) {
    config.url = `http://localhost:${config.serverPort}/${config.url.replace(/^\//, '')}`;
  }
}

/**
 * Checks if the development server is running
 * @returns {boolean} - Whether the server is running
 */
function isServerRunning() {
  try {
    const command = process.platform === 'win32' 
      ? `netstat -ano | findstr :${config.serverPort}`
      : `lsof -i:${config.serverPort} | grep LISTEN`;
    
    execSync(command, { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Start the development server
 */
function startServer() {
  console.log(`${colors.blue}Starting development server with "${config.startServerCommand}"...${colors.reset}`);
  
  try {
    // Start the server in a detached process
    const process = require('child_process').spawn(
      config.startServerCommand,
      [],
      {
        shell: true,
        detached: true,
        stdio: 'ignore'
      }
    );
    
    // Unref the child process so it will continue running after this script exits
    process.unref();
    
    // Wait for the server to start (maximum 30 seconds)
    let attempts = 0;
    const maxAttempts = 30;
    
    const waitForServer = () => {
      return new Promise((resolve, reject) => {
        const checkServer = () => {
          if (isServerRunning()) {
            console.log(`${colors.green}Development server started on port ${config.serverPort}${colors.reset}`);
            resolve();
          } else if (attempts >= maxAttempts) {
            reject(new Error(`Timed out waiting for server to start on port ${config.serverPort}`));
          } else {
            attempts++;
            setTimeout(checkServer, 1000);
          }
        };
        
        checkServer();
      });
    };
    
    return waitForServer();
  } catch (error) {
    throw new Error(`Failed to start development server: ${error.message}`);
  }
}

/**
 * Run Lighthouse on a URL
 * @param {string} url - The URL to test
 * @returns {Promise<object>} - The Lighthouse results
 */
async function runLighthouse(url) {
  console.log(`${colors.blue}Running Lighthouse on ${url}...${colors.reset}`);
  
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });
  
  try {
    const options = {
      logLevel: 'info',
      output: 'json',
      port: chrome.port,
    };
    
    const runnerResult = await lighthouse(url, options, config.lighthouseConfig);
    
    return {
      lhr: runnerResult.lhr,
      report: runnerResult.report
    };
  } finally {
    await chrome.kill();
  }
}

/**
 * Get a grade from a score
 * @param {number} score - The score (0 to 1)
 * @returns {string} - The letter grade (A-F)
 */
function getGrade(score) {
  if (score >= 0.97) return 'A+';
  if (score >= 0.93) return 'A';
  if (score >= 0.90) return 'A-';
  if (score >= 0.87) return 'B+';
  if (score >= 0.83) return 'B';
  if (score >= 0.80) return 'B-';
  if (score >= 0.77) return 'C+';
  if (score >= 0.73) return 'C';
  if (score >= 0.70) return 'C-';
  if (score >= 0.67) return 'D+';
  if (score >= 0.63) return 'D';
  if (score >= 0.60) return 'D-';
  return 'F';
}

/**
 * Get color for a score
 * @param {number} score - The score (0 to 1)
 * @returns {string} - The color code
 */
function getScoreColor(score) {
  if (score >= 0.9) return colors.green;
  if (score >= 0.7) return colors.yellow;
  return colors.red;
}

/**
 * Format a score for display
 * @param {number} score - The score (0 to 1)
 * @returns {string} - The formatted score (e.g., "90/100 (A-)")
 */
function formatScore(score) {
  const normalizedScore = Math.round(score * 100);
  const grade = getGrade(score);
  const color = getScoreColor(score);
  
  return `${color}${normalizedScore}/100 (${grade})${colors.reset}`;
}

/**
 * Check if a score passes the threshold
 * @param {string} category - The category name
 * @param {number} score - The score (0 to 1)
 * @returns {boolean} - Whether the score passes the threshold
 */
function passesThreshold(category, score) {
  const threshold = config.thresholds[category];
  return score >= threshold;
}

/**
 * Get recommendations for improving performance
 * @param {object} lhr - The Lighthouse result
 * @returns {object} - The recommendations grouped by category
 */
function getRecommendations(lhr) {
  const recommendations = {
    performance: [],
    accessibility: [],
    'best-practices': [],
    seo: []
  };
  
  // Process audits by category
  for (const category of Object.keys(recommendations)) {
    // Skip if the category doesn't exist in the Lighthouse result
    if (!lhr.categories[category]) continue;
    
    const categoryAudits = lhr.categories[category].auditRefs
      .filter(ref => {
        const audit = lhr.audits[ref.id];
        return audit && 
               !audit.scoreDisplayMode.includes('notApplicable') && 
               audit.score !== null && 
               audit.score < 1;
      })
      .map(ref => {
        const audit = lhr.audits[ref.id];
        return {
          id: ref.id,
          title: audit.title,
          description: audit.description,
          score: audit.score,
          weight: ref.weight,
          displayValue: audit.displayValue,
          warning: audit.warnings && audit.warnings.length > 0 ? audit.warnings[0] : null
        };
      })
      .sort((a, b) => (a.score - b.score) || (b.weight - a.weight));
    
    // Add top 5 recommendations
    recommendations[category] = categoryAudits.slice(0, 5);
  }
  
  return recommendations;
}

/**
 * Print the results of a Lighthouse run
 * @param {string} pagePath - The page path
 * @param {object} lhr - The Lighthouse result
 */
function printResults(pagePath, lhr) {
  const displayPath = pagePath === '/' ? 'Home Page' : pagePath;
  
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  LIGHTHOUSE RESULTS: ${displayPath}${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}\n`);
  
  // Print scores
  console.log(`${colors.blue}Scores:${colors.reset}`);
  for (const category of Object.keys(config.thresholds)) {
    if (!lhr.categories[category]) continue;
    
    const score = lhr.categories[category].score;
    const formattedScore = formatScore(score);
    const passFail = passesThreshold(category, score)
      ? `${colors.green}PASS${colors.reset}`
      : `${colors.red}FAIL${colors.reset}`;
    
    console.log(`  ${category.charAt(0).toUpperCase() + category.slice(1)}: ${formattedScore} ${passFail}`);
  }
  
  // Print recommendations
  const recommendations = getRecommendations(lhr);
  
  console.log(`\n${colors.blue}Top Recommendations:${colors.reset}`);
  for (const category of Object.keys(recommendations)) {
    const categoryRecs = recommendations[category];
    
    if (categoryRecs.length === 0) continue;
    
    console.log(`  ${colors.magenta}${category.charAt(0).toUpperCase() + category.slice(1)}:${colors.reset}`);
    
    for (const rec of categoryRecs) {
      const scoreText = rec.score ? `[Score: ${Math.round(rec.score * 100)}/100]` : '';
      console.log(`    - ${rec.title} ${scoreText}`);
      if (rec.displayValue) {
        console.log(`      ${rec.displayValue}`);
      }
    }
  }
  
  // Print page stats
  console.log(`\n${colors.blue}Page Stats:${colors.reset}`);
  console.log(`  Total Size: ${formatSize(lhr.audits['total-byte-weight'].numericValue)}`);
  console.log(`  DOM Elements: ${Math.round(lhr.audits['dom-size'].numericValue)}`);
  if (lhr.audits['server-response-time']) {
    console.log(`  Server Response Time: ${Math.round(lhr.audits['server-response-time'].numericValue)}ms`);
  }
  if (lhr.audits['first-contentful-paint']) {
    console.log(`  First Contentful Paint: ${Math.round(lhr.audits['first-contentful-paint'].numericValue)}ms`);
  }
  if (lhr.audits['largest-contentful-paint']) {
    console.log(`  Largest Contentful Paint: ${Math.round(lhr.audits['largest-contentful-paint'].numericValue)}ms`);
  }
  if (lhr.audits['cumulative-layout-shift']) {
    console.log(`  Cumulative Layout Shift: ${lhr.audits['cumulative-layout-shift'].displayValue}`);
  }
}

/**
 * Save a Lighthouse report to a file
 * @param {string} pagePath - The page path
 * @param {object} report - The Lighthouse report
 */
function saveReport(pagePath, report) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }
  
  const sanitizedPath = pagePath === '/' ? 'home' : pagePath.replace(/\//g, '-').replace(/^-/, '');
  const formFactor = config.lighthouseConfig.settings.formFactor;
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  const filename = `lighthouse-${sanitizedPath}-${formFactor}-${timestamp}.json`;
  
  const filePath = path.join(config.outputDir, filename);
  fs.writeFileSync(filePath, report);
  
  console.log(`${colors.green}Report saved to ${filePath}${colors.reset}`);
}

/**
 * Format a size in bytes to a human-readable string
 * @param {number} bytes - The size in bytes
 * @returns {string} - The formatted size (e.g., "1.2 MB")
 */
function formatSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * Print a summary of all page results
 * @param {object} results - The results for all pages
 */
function printSummary(results) {
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  LIGHTHOUSE SUMMARY${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}\n`);
  
  // Calculate average scores
  const averageScores = {};
  const pageCount = Object.keys(results).length;
  
  for (const category of Object.keys(config.thresholds)) {
    let totalScore = 0;
    let validPages = 0;
    
    for (const pagePath of Object.keys(results)) {
      const result = results[pagePath];
      if (result.lhr.categories[category]) {
        totalScore += result.lhr.categories[category].score;
        validPages++;
      }
    }
    
    if (validPages > 0) {
      averageScores[category] = totalScore / validPages;
    }
  }
  
  // Print average scores
  console.log(`${colors.blue}Average Scores (${pageCount} pages):${colors.reset}`);
  for (const category of Object.keys(averageScores)) {
    const score = averageScores[category];
    const formattedScore = formatScore(score);
    const passFail = passesThreshold(category, score)
      ? `${colors.green}PASS${colors.reset}`
      : `${colors.red}FAIL${colors.reset}`;
    
    console.log(`  ${category.charAt(0).toUpperCase() + category.slice(1)}: ${formattedScore} ${passFail}`);
  }
  
  // Overall assessment
  const allPassed = Object.keys(averageScores).every(category => 
    passesThreshold(category, averageScores[category])
  );
  
  console.log(`\n${colors.blue}Overall Assessment:${colors.reset}`);
  
  if (allPassed) {
    console.log(`${colors.green}✓ All performance metrics meet or exceed the thresholds.${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ Some performance metrics don't meet the thresholds.${colors.reset}`);
    
    // Print categories that failed
    const failedCategories = Object.keys(averageScores)
      .filter(category => !passesThreshold(category, averageScores[category]))
      .map(category => category.charAt(0).toUpperCase() + category.slice(1));
    
    console.log(`${colors.yellow}  Categories to improve: ${failedCategories.join(', ')}${colors.reset}`);
  }
  
  // Print worst performing pages
  console.log(`\n${colors.blue}Worst Performing Pages:${colors.reset}`);
  
  const performanceScores = Object.keys(results).map(pagePath => ({
    pagePath,
    score: results[pagePath].lhr.categories.performance ? 
      results[pagePath].lhr.categories.performance.score : 0
  }));
  
  performanceScores.sort((a, b) => a.score - b.score);
  
  for (const page of performanceScores.slice(0, 3)) {
    const displayPath = page.pagePath === '/' ? 'Home Page' : page.pagePath;
    console.log(`  ${displayPath}: ${formatScore(page.score)}`);
  }
}

/**
 * Main function to run the performance checks
 */
async function main() {
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  LIGHTHOUSE PERFORMANCE CHECKER${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}\n`);
  
  // Parse command-line arguments
  parseArguments();
  
  // Check if server is running
  if (!isServerRunning()) {
    try {
      await startServer();
    } catch (error) {
      console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
      return 1;
    }
  }
  
  // Test each page
  const results = {};
  
  for (const pagePath of config.pagePaths) {
    const url = `${config.url.replace(/\/$/, '')}${pagePath}`;
    
    try {
      const result = await runLighthouse(url);
      results[pagePath] = result;
      
      printResults(pagePath, result.lhr);
      saveReport(pagePath, result.report);
    } catch (error) {
      console.error(`${colors.red}Error testing ${url}: ${error.message}${colors.reset}`);
    }
  }
  
  // Print summary
  if (Object.keys(results).length > 0) {
    printSummary(results);
  }
  
  // Check if all pages pass the thresholds
  let allPassed = true;
  
  for (const pagePath of Object.keys(results)) {
    const result = results[pagePath];
    
    for (const category of Object.keys(config.thresholds)) {
      if (result.lhr.categories[category]) {
        const score = result.lhr.categories[category].score;
        if (!passesThreshold(category, score)) {
          allPassed = false;
          break;
        }
      }
    }
    
    if (!allPassed) break;
  }
  
  return allPassed ? 0 : 1;
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main().then(exitCode => {
    process.exit(exitCode);
  }).catch(error => {
    console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
    process.exit(1);
  });
}

module.exports = main; 