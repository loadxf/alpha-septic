#!/usr/bin/env node

/**
 * Fix Service Area Pages
 * 
 * This script adds the 'use client' directive to all service area page files
 * to fix JSX parsing errors.
 * 
 * No external dependencies required - uses only Node.js built-in modules.
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
  cyan: '\x1b[36m',
};

const ROOT_DIR = process.cwd();
const SERVICE_AREAS_DIR = path.join(ROOT_DIR, 'app', 'service-areas');

// Function to recursively find all .tsx files in a directory
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to add 'use client' directive if missing
function addUseClientDirective(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if 'use client' is already present
  if (!content.includes('use client')) {
    // Add 'use client' directive at the top of the file
    content = `"use client";\n\n${content}`;
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

function fixServiceAreaPages() {
  console.log(`${colors.cyan}Searching for service area page files...${colors.reset}`);
  
  try {
    // Find all service area page.tsx files
    const pageFiles = findTsxFiles(SERVICE_AREAS_DIR);
    
    if (pageFiles.length === 0) {
      console.log(`${colors.yellow}No service area pages found!${colors.reset}`);
      return;
    }
    
    console.log(`${colors.green}Found ${pageFiles.length} service area pages.${colors.reset}\n`);
    
    let fixedFiles = 0;
    
    // Process each file
    for (const file of pageFiles) {
      try {
        const wasFixed = addUseClientDirective(file);
        
        if (wasFixed) {
          fixedFiles++;
          console.log(`${colors.green}✓ Added 'use client' directive to ${path.relative(ROOT_DIR, file)}${colors.reset}`);
        } else {
          console.log(`${colors.blue}ℹ 'use client' already present in ${path.relative(ROOT_DIR, file)}${colors.reset}`);
        }
      } catch (err) {
        console.error(`${colors.red}Error processing file ${path.relative(ROOT_DIR, file)}: ${err.message}${colors.reset}`);
      }
    }
    
    console.log(`\n${colors.cyan}Summary:${colors.reset}`);
    console.log(`${colors.green}Fixed ${fixedFiles} of ${pageFiles.length} files.${colors.reset}`);
    
    if (fixedFiles > 0) {
      console.log(`\n${colors.yellow}Please rebuild your application to apply the changes.${colors.reset}`);
      console.log(`${colors.yellow}Run: docker compose down && docker compose build && docker compose up -d${colors.reset}`);
    } else {
      console.log(`\n${colors.yellow}No files needed the 'use client' directive. There might be other syntax issues.${colors.reset}`);
      console.log(`${colors.yellow}You may need to manually check the service area page files for other problems.${colors.reset}`);
    }
    
  } catch (err) {
    console.error(`${colors.red}Error: ${err.message}${colors.reset}`);
    process.exit(1);
  }
}

// Run the fix
fixServiceAreaPages(); 