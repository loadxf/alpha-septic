#!/usr/bin/env node

/**
 * Hardcoded URL Replacement Script
 * 
 * This script finds and replaces hardcoded URLs in the codebase with environment variables.
 * It's designed to fix issues identified by the pre-deployment checklist.
 * 
 * Usage:
 * node scripts/replace-hardcoded-urls.js
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

// Configuration
const config = {
  // Root directory of the project (relative to this script)
  rootDir: path.resolve(__dirname, '..'),
  
  // Directories to scan
  scanDirectories: ['app', 'components', 'lib', 'utils'],
  
  // File extensions to scan
  fileExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  
  // URL patterns to replace
  urlPatterns: [
    {
      // Match https://www.callalphaseptic.com and https://callalphaseptic.com
      regex: /(['"`])https?:\/\/(www\.)?callalphaseptic\.com(\/[^'"`]*)?(['"`])/g,
      replacement: (match, quote1, www, path = '', quote2) => {
        // For URLs inside JSX/TSX templates, we need to use string interpolation
        if (path) {
          return `\${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}${path}`;
        }
        return `process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'`;
      }
    },
    {
      // Match bare domains in metadata URLs and similar places
      regex: /(['"`])https?:\/\/(www\.)?callalphaseptic\.com(['"`])/g,
      replacement: "$1${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com'}$3"
    },
    {
      // Match hardcoded URLs in Sitemap and URL constructors
      regex: /new URL\(['"`]https?:\/\/(www\.)?callalphaseptic\.com['"`]\)/g,
      replacement: "new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.callalphaseptic.com')"
    }
  ],
  
  // Files to ignore
  ignorePaths: [
    'node_modules',
    '.next',
    'out',
    'build',
    'public',
    '.git'
  ],
  
  // Whether to apply changes or just report them
  dryRun: false
};

// Statistics
const stats = {
  filesScanned: 0,
  filesModified: 0,
  replacementsCount: 0
};

/**
 * Process a file to replace hardcoded URLs
 * @param {string} filePath - Path to the file
 */
function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip files with extensions not in our list
  if (!config.fileExtensions.includes(ext)) {
    return;
  }
  
  // Skip files that should be ignored
  if (config.ignorePaths.some(ignore => filePath.includes(ignore))) {
    return;
  }
  
  stats.filesScanned++;
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let replacements = 0;
    
    // Apply all URL patterns
    for (const pattern of config.urlPatterns) {
      const originalContent = content;
      
      // Replace the hardcoded URLs
      content = content.replace(pattern.regex, pattern.replacement);
      
      // If content was modified, count the replacements
      if (content !== originalContent) {
        const matches = originalContent.match(pattern.regex);
        replacements += matches ? matches.length : 0;
        modified = true;
      }
    }
    
    if (modified) {
      stats.filesModified++;
      stats.replacementsCount += replacements;
      
      const relativePath = path.relative(config.rootDir, filePath);
      console.log(`${colors.green}${relativePath}: ${replacements} URL(s) replaced${colors.reset}`);
      
      // Write the modified file if not in dry-run mode
      if (!config.dryRun) {
        fs.writeFileSync(filePath, content);
      }
    }
  } catch (error) {
    const relativePath = path.relative(config.rootDir, filePath);
    console.error(`${colors.red}Error processing ${relativePath}: ${error.message}${colors.reset}`);
  }
}

/**
 * Recursively walk a directory
 * @param {string} dir - Directory to walk
 */
function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip ignored paths
    if (config.ignorePaths.some(ignore => fullPath.includes(ignore))) {
      continue;
    }
    
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}      HARDCODED URL REPLACEMENT        ${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  
  if (config.dryRun) {
    console.log(`${colors.yellow}Running in dry-run mode. No changes will be made.${colors.reset}`);
  }
  
  console.log(`${colors.blue}Starting hardcoded URL replacement...${colors.reset}`);
  
  // Scan each directory
  for (const dir of config.scanDirectories) {
    const fullPath = path.join(config.rootDir, dir);
    walkDir(fullPath);
  }
  
  // Print summary
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}             SUMMARY                  ${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`Files scanned: ${stats.filesScanned}`);
  console.log(`Files modified: ${stats.filesModified}`);
  console.log(`URLs replaced: ${stats.replacementsCount}`);
  
  if (config.dryRun) {
    console.log(`\n${colors.yellow}This was a dry run. To apply changes, set config.dryRun = false${colors.reset}`);
  } else if (stats.filesModified > 0) {
    console.log(`\n${colors.green}Successfully replaced ${stats.replacementsCount} URLs in ${stats.filesModified} files!${colors.reset}`);
  } else {
    console.log(`\n${colors.blue}No hardcoded URLs found to replace.${colors.reset}`);
  }
}

// Run the main function
main(); 