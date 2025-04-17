#!/usr/bin/env node

/**
 * Console Log Checker
 * 
 * This script scans the codebase for console.log statements that should be removed 
 * before production deployment.
 */

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

// Configuration
const config = {
  // Directories to scan
  includeDirs: ['app', 'components', 'lib', 'utils'],
  // File extensions to scan
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  // Patterns to search for
  patterns: [
    'console.log',
    'console.warn',
    'console.error',
    'console.info',
    'console.debug',
    'debugger',
  ],
  // Files or directories to ignore
  ignore: [
    'node_modules',
    '.next',
    'public',
    'scripts',
    'test',
    '__tests__',
    '*.test.js',
    '*.test.ts',
    '*.test.tsx',
  ],
};

// Get the project root directory
const rootDir = process.cwd();

// Function to check if a path should be ignored
function shouldIgnore(filePath) {
  return config.ignore.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp(pattern.replace('*', '.*'));
      return regex.test(filePath);
    }
    return filePath.includes(pattern);
  });
}

// Function to scan a file for console statements
function scanFile(filePath) {
  const results = [];
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      config.patterns.forEach(pattern => {
        if (line.includes(pattern)) {
          // Skip if the line is a comment
          if (!line.trim().startsWith('//') && !line.trim().startsWith('/*')) {
            results.push({
              file: filePath,
              line: index + 1,
              pattern,
              content: line.trim(),
            });
          }
        }
      });
    });
  } catch (error) {
    console.error(`Error scanning file ${filePath}:`, error);
  }
  return results;
}

// Function to recursively scan directories
function scanDir(dir) {
  let results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (shouldIgnore(fullPath)) continue;
      
      if (entry.isDirectory()) {
        results = results.concat(scanDir(fullPath));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (config.extensions.includes(ext)) {
          results = results.concat(scanFile(fullPath));
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }
  return results;
}

// Main function
function main() {
  console.log(`${colors.cyan}=======================================${colors.reset}`);
  console.log(`${colors.cyan}        CONSOLE LOG CHECKER           ${colors.reset}`);
  console.log(`${colors.cyan}=======================================${colors.reset}`);
  console.log(`Scanning for console statements in code...`);
  
  let allResults = [];
  
  // Scan each included directory
  for (const dir of config.includeDirs) {
    const dirPath = path.join(rootDir, dir);
    if (fs.existsSync(dirPath)) {
      allResults = allResults.concat(scanDir(dirPath));
    }
  }
  
  // Sort results by file and line number
  allResults.sort((a, b) => {
    if (a.file === b.file) return a.line - b.line;
    return a.file.localeCompare(b.file);
  });
  
  // Print results
  if (allResults.length > 0) {
    console.log(`\n${colors.yellow}Found ${allResults.length} console statements that should be reviewed:${colors.reset}\n`);
    
    let currentFile = '';
    for (const result of allResults) {
      if (currentFile !== result.file) {
        currentFile = result.file;
        console.log(`\n${colors.blue}${path.relative(rootDir, result.file)}:${colors.reset}`);
      }
      console.log(`  ${colors.red}Line ${result.line}:${colors.reset} ${result.pattern} - ${result.content}`);
    }
    
    console.log(`\n${colors.yellow}RECOMMENDATION:${colors.reset}`);
    console.log('Review these statements and remove any that are not required for production.');
    console.log('For debugging code, consider using:');
    console.log(`${colors.green}if (process.env.NODE_ENV !== 'production') {${colors.reset}`);
    console.log(`  ${colors.green}console.log('Debug info');${colors.reset}`);
    console.log(`${colors.green}}${colors.reset}`);
    
    process.exit(1); // Exit with error code
  } else {
    console.log(`\n${colors.green}✓ No console statements found. Good job!${colors.reset}`);
    process.exit(0);
  }
}

// Run the main function
main();