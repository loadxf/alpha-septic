#!/usr/bin/env node

/**
 * Fix URL interpolation in service area pages
 * 
 * This script finds and fixes instances where environment variables
 * are used in URLs without proper template literal syntax
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const ROOT_DIR = path.resolve(__dirname);
const SERVICE_AREAS_DIR = path.join(ROOT_DIR, 'app', 'service-areas');

// Pattern to match incorrectly formatted URLs
const INCORRECT_URL_PATTERNS = [
  /"process\.env\.NEXT_PUBLIC_SITE_URL(\/[^"]*)?"/g,
  /'process\.env\.NEXT_PUBLIC_SITE_URL(\/[^']*)?'/g,
];

// Replacement with correct template literal
const replacer = (match, pathSuffix = '') => {
  return `\`\${process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"}${pathSuffix}\``;
};

async function fixFiles() {
  console.log(`${colors.cyan}Searching for service area files...${colors.reset}`);
  
  // Find all service area page files
  const files = glob.sync(path.join(SERVICE_AREAS_DIR, '**/page.tsx'));
  
  if (files.length === 0) {
    console.log(`${colors.yellow}No service area pages found!${colors.reset}`);
    return;
  }
  
  console.log(`${colors.green}Found ${files.length} service area pages.${colors.reset}\n`);
  
  let fixedFiles = 0;
  let totalReplacements = 0;
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    let fileReplacements = 0;
    
    // Apply replacements for all patterns
    for (const pattern of INCORRECT_URL_PATTERNS) {
      content = content.replace(pattern, (match, pathSuffix) => {
        fileReplacements++;
        return replacer(match, pathSuffix);
      });
    }
    
    // Save if changed
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalReplacements += fileReplacements;
      console.log(`${colors.green}✓ Fixed ${fileReplacements} URLs in ${path.relative(ROOT_DIR, file)}${colors.reset}`);
    }
  }
  
  console.log(`\n${colors.cyan}Summary:${colors.reset}`);
  console.log(`${colors.green}Fixed ${totalReplacements} URLs in ${fixedFiles} files.${colors.reset}`);
  console.log(`${fixedFiles === 0 ? colors.yellow : colors.green}${fixedFiles} of ${files.length} files modified.${colors.reset}`);
}

// Run the fix
fixFiles().catch(err => {
  console.error(`${colors.red}Error: ${err.message}${colors.reset}`);
  process.exit(1);
}); 