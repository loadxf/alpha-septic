#!/usr/bin/env node

/**
 * Cross-Browser Compatibility Checker
 * 
 * This script analyzes the codebase for potential browser compatibility issues
 * by checking for the use of features that might not be supported in all browsers.
 */

const fs = require('fs');
const path = require('path');

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

// Define configuration
const config = {
  // Root directory of the project (relative to this script)
  rootDir: path.resolve(__dirname, '..'),
  
  // Directories to scan
  scanDirectories: ['app', 'components', 'lib', 'utils'],
  
  // File extensions to scan
  fileExtensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  
  // Patterns to check for potential compatibility issues
  patterns: [
    // JavaScript/TypeScript patterns
    { 
      name: 'Experimental JavaScript features',
      pattern: /(?<!\w)(Temporal|WeakRef|FinalizationRegistry|Atomics|SharedArrayBuffer|BigInt64Array|BigUint64Array)(?!\w)/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'warning'
    },
    { 
      name: 'CSS logical properties without fallback',
      pattern: /(?<!\w)(margin-inline|padding-inline|margin-block|padding-block)(?!\w)/g,
      files: ['.css', '.scss'],
      severity: 'warning'
    },
    { 
      name: 'Non-standard scrollbar styling',
      pattern: /::-webkit-scrollbar/g,
      files: ['.css', '.scss'],
      severity: 'info'
    },
    { 
      name: 'Experimental CSS features',
      pattern: /(?<!\w)(backdrop-filter|content-visibility|aspect-ratio|container-type|container-name)(?!\w)/g,
      files: ['.css', '.scss'],
      severity: 'warning'
    },
    { 
      name: 'Safari flexbox issues (gap property)',
      pattern: /(?<!\w)(gap|row-gap|column-gap)(?!\w).*?flex/g,
      files: ['.css', '.scss'],
      severity: 'warning'
    },
    { 
      name: 'Internet Explorer incompatible features',
      pattern: /(?<!\w)(CSS Grid|sticky|(?<!\-)fit-content|(?<![\w\-])max-content|(?<![\w\-])min-content|object-fit|object-position|calc\()(?!\w)/g,
      files: ['.css', '.scss'],
      severity: 'info'
    },
    { 
      name: 'Potential browser-specific JavaScript APIs',
      pattern: /(?<!\w)(webkitRequestFullScreen|mozRequestFullScreen|msRequestFullscreen|webkitExitFullscreen)(?!\w)/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'warning'
    },
    { 
      name: 'Navigator.userAgent usage',
      pattern: /navigator\.userAgent/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'warning'
    },
    { 
      name: 'Safari/iOS specific issues',
      pattern: /-webkit-appearance\s*:\s*none/g,
      files: ['.css', '.scss'],
      severity: 'info'
    },
    { 
      name: 'Browser-specific prefixes without standard property',
      pattern: /(?<!\w)(-webkit-|-moz-|-ms-|-o-)(?!transition|transform|animation|border-radius|box-shadow|user-select)/g,
      files: ['.css', '.scss'],
      severity: 'warning'
    },
    {
      name: 'Potential WebGL/Canvas API issues',
      pattern: /(?<!\w)(webgl|getContext\(\s*(['"])(?:webgl|experimental-webgl|webgl2))/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'info'
    },
    {
      name: 'Modern JavaScript features without polyfill',
      pattern: /(?<!\w)(Array\.from|Object\.entries|Object\.values|String\.prototype\.padStart|String\.prototype\.padEnd)(?!\w)/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'info'
    },
    { 
      name: 'Potential offline functionality',
      pattern: /(?<!\w)(navigator\.serviceWorker|caches\.|indexedDB\.)(?!\w)/g,
      files: ['.js', '.jsx', '.ts', '.tsx'],
      severity: 'info'
    }
  ],
  
  // Checks for package.json
  packageChecks: {
    // Ensure browserslist is defined
    browserslist: true,
    
    // Recommended packages for cross-browser compatibility
    recommendedPackages: [
      'core-js',
      'react-app-polyfill',
      'whatwg-fetch',
      'classlist-polyfill'
    ]
  }
};

// Store results
const results = {
  issues: [],
  filesTouched: 0,
  totalChecks: 0,
  matchesFound: 0
};

/**
 * Add an issue to the results
 * @param {string} file - The file path
 * @param {string} lineContent - The line content
 * @param {number} lineNumber - The line number
 * @param {object} pattern - The pattern that matched
 */
function addIssue(file, lineContent, lineNumber, pattern) {
  results.issues.push({
    file: path.relative(config.rootDir, file),
    lineContent: lineContent.trim(),
    lineNumber,
    pattern: pattern.name,
    severity: pattern.severity
  });
  results.matchesFound++;
}

/**
 * Scan a file for compatibility issues
 * @param {string} filePath - The file path
 */
function scanFile(filePath) {
  const fileExt = path.extname(filePath).toLowerCase();
  
  // Skip if the file extension is not in the list
  if (!config.fileExtensions.includes(fileExt)) {
    return;
  }
  
  results.filesTouched++;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  for (const pattern of config.patterns) {
    // Skip if the pattern doesn't apply to this file extension
    if (!pattern.files.includes(fileExt)) {
      continue;
    }
    
    results.totalChecks++;
    
    // Check for matches in each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Reset pattern.lastIndex for global patterns
      if (pattern.pattern.global) {
        pattern.pattern.lastIndex = 0;
      }
      
      if (pattern.pattern.test(line)) {
        addIssue(filePath, line, lineNumber, pattern);
      }
    }
  }
}

/**
 * Walk a directory recursively
 * @param {string} dir - The directory to walk
 * @param {Function} callback - The callback for each file
 */
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .next
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') {
        continue;
      }
      
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

/**
 * Check package.json for browser compatibility settings
 */
function checkPackageJson() {
  const packageJsonPath = path.join(config.rootDir, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    results.issues.push({
      file: 'package.json',
      lineContent: 'File not found',
      lineNumber: 0,
      pattern: 'Missing package.json',
      severity: 'error'
    });
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check for browserslist
    if (config.packageChecks.browserslist) {
      let browserslistFound = false;
      
      if (packageJson.browserslist) {
        browserslistFound = true;
      } else if (fs.existsSync(path.join(config.rootDir, '.browserslistrc'))) {
        browserslistFound = true;
      } else if (fs.existsSync(path.join(config.rootDir, 'browserslist'))) {
        browserslistFound = true;
      }
      
      if (!browserslistFound) {
        results.issues.push({
          file: 'package.json',
          lineContent: 'No browserslist configuration found',
          lineNumber: 0,
          pattern: 'Missing browserslist configuration',
          severity: 'warning'
        });
      }
    }
    
    // Check for recommended packages
    const dependencies = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {})
    };
    
    for (const pkg of config.packageChecks.recommendedPackages) {
      if (!dependencies[pkg]) {
        results.issues.push({
          file: 'package.json',
          lineContent: `Missing recommended package: ${pkg}`,
          lineNumber: 0,
          pattern: 'Missing recommended package',
          severity: 'info'
        });
      }
    }
    
  } catch (error) {
    results.issues.push({
      file: 'package.json',
      lineContent: `Error parsing package.json: ${error.message}`,
      lineNumber: 0,
      pattern: 'Invalid package.json',
      severity: 'error'
    });
  }
}

/**
 * Check for Next.js specific configuration
 */
function checkNextJsConfig() {
  const nextConfigPath = path.join(config.rootDir, 'next.config.js');
  const nextConfigMjsPath = path.join(config.rootDir, 'next.config.mjs');
  
  let configPath = null;
  if (fs.existsSync(nextConfigPath)) {
    configPath = nextConfigPath;
  } else if (fs.existsSync(nextConfigMjsPath)) {
    configPath = nextConfigMjsPath;
  }
  
  if (!configPath) {
    return;
  }
  
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    
    // Check for polyfills configuration
    if (!content.includes('polyfills')) {
      results.issues.push({
        file: path.relative(config.rootDir, configPath),
        lineContent: 'No polyfills configuration found',
        lineNumber: 0,
        pattern: 'Missing polyfills configuration in Next.js config',
        severity: 'info'
      });
    }
    
  } catch (error) {
    results.issues.push({
      file: path.relative(config.rootDir, configPath),
      lineContent: `Error reading Next.js config: ${error.message}`,
      lineNumber: 0,
      pattern: 'Error reading Next.js config',
      severity: 'error'
    });
  }
}

/**
 * Print the results
 */
function printResults() {
  // Group issues by severity
  const issuesBySeverity = {
    error: [],
    warning: [],
    info: []
  };
  
  for (const issue of results.issues) {
    issuesBySeverity[issue.severity].push(issue);
  }
  
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  CROSS-BROWSER COMPATIBILITY RESULTS${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}\n`);
  
  console.log(`${colors.blue}Summary:${colors.reset}`);
  console.log(`  Files scanned: ${results.filesTouched}`);
  console.log(`  Checks performed: ${results.totalChecks}`);
  console.log(`  Issues found: ${colors.red}${issuesBySeverity.error.length} errors${colors.reset}, ${colors.yellow}${issuesBySeverity.warning.length} warnings${colors.reset}, ${colors.blue}${issuesBySeverity.info.length} info${colors.reset}`);
  
  if (results.issues.length === 0) {
    console.log(`\n${colors.green}No compatibility issues found!${colors.reset}`);
    return;
  }
  
  // Print errors
  if (issuesBySeverity.error.length > 0) {
    console.log(`\n${colors.red}Errors:${colors.reset}`);
    for (const issue of issuesBySeverity.error) {
      console.log(`  ${issue.file}:${issue.lineNumber} - ${issue.pattern}`);
      console.log(`    ${issue.lineContent}`);
    }
  }
  
  // Print warnings
  if (issuesBySeverity.warning.length > 0) {
    console.log(`\n${colors.yellow}Warnings:${colors.reset}`);
    for (const issue of issuesBySeverity.warning) {
      console.log(`  ${issue.file}:${issue.lineNumber} - ${issue.pattern}`);
      console.log(`    ${issue.lineContent}`);
    }
  }
  
  // Print info (limited to first 10)
  if (issuesBySeverity.info.length > 0) {
    console.log(`\n${colors.blue}Info:${colors.reset}`);
    for (const issue of issuesBySeverity.info.slice(0, 10)) {
      console.log(`  ${issue.file}:${issue.lineNumber} - ${issue.pattern}`);
      console.log(`    ${issue.lineContent}`);
    }
    
    if (issuesBySeverity.info.length > 10) {
      console.log(`  ... and ${issuesBySeverity.info.length - 10} more info items`);
    }
  }
  
  // Print recommendations
  console.log(`\n${colors.cyan}Recommendations:${colors.reset}`);
  
  if (issuesBySeverity.error.length > 0 || issuesBySeverity.warning.length > 0) {
    console.log(`  1. Add a browserslist configuration to target supported browsers`);
    console.log(`     Example: { "browserslist": [">0.2%", "not dead", "not op_mini all"] }`);
    
    console.log(`  2. Consider adding polyfills for older browsers`);
    console.log(`     - Install core-js: npm install core-js`);
    console.log(`     - Import polyfills in your entry file: import 'core-js/stable'`);
    
    console.log(`  3. Use autoprefixer to handle vendor prefixes automatically`);
    console.log(`     - Make sure postcss and autoprefixer are configured`);
    
    console.log(`  4. Test your application in multiple browsers`);
    console.log(`     - Chrome, Firefox, Safari, Edge at minimum`);
    console.log(`     - Consider BrowserStack or similar services for comprehensive testing`);
  } else {
    console.log(`  ${colors.green}Your project appears to have good browser compatibility!${colors.reset}`);
    console.log(`  Continue testing in multiple browsers to ensure consistent behavior.`);
  }
}

/**
 * Main function
 */
function main() {
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}  CROSS-BROWSER COMPATIBILITY CHECKER${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}\n`);
  
  console.log(`${colors.blue}Scanning files for browser compatibility issues...${colors.reset}`);
  
  // Check package.json
  checkPackageJson();
  
  // Check Next.js config
  checkNextJsConfig();
  
  // Scan directories
  for (const dir of config.scanDirectories) {
    const dirPath = path.join(config.rootDir, dir);
    
    if (fs.existsSync(dirPath)) {
      walkDir(dirPath, scanFile);
    }
  }
  
  // Group issues by severity for the printResults function
  const issuesBySeverity = {
    error: [],
    warning: [],
    info: []
  };
  
  for (const issue of results.issues) {
    issuesBySeverity[issue.severity].push(issue);
  }
  
  // Print results
  printResults();
  
  // Return exit code (0 if no errors, 1 if errors)
  return issuesBySeverity.error.length > 0 ? 1 : 0;
}

// Run if called directly
if (require.main === module) {
  const exitCode = main();
  process.exit(exitCode);
}

module.exports = main; 