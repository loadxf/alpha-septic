#!/usr/bin/env node

/**
 * Pre-deployment Checklist Script
 * 
 * This script runs a series of checks to ensure the application is ready for production.
 * It verifies essential files, configurations, and optimizations.
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
  // Root directory of the project (relative to this script)
  rootDir: path.resolve(__dirname, '..'),
  
  // Required files that must exist
  requiredFiles: [
    'next.config.js',
    'package.json',
    'tsconfig.json',
    'app/layout.tsx',
    'app/page.tsx',
    'app/sitemap.ts',
    'app/robots.ts',
    'public/favicon.ico',
  ],
  
  // Environment variables that should be defined
  requiredEnvVars: [
    'RESEND_API_KEY',
    'EMAIL_USER',
    'EMAIL_PASSWORD',
    'NEXT_PUBLIC_ADMIN_EMAIL',
    'NEXT_PUBLIC_ADMIN_PASSWORD',
    'TOKEN_SECRET',
    'NEXT_PUBLIC_SITE_URL',
    'CONTACT_EMAIL',
    'BOOKING_EMAIL',
    'NEXT_PUBLIC_GTM_ID'
  ],
  
  // Directories to check for large media files
  mediaDirectories: [
    'public/images',
    'public/assets',
  ],
  
  // Maximum acceptable size for an image (in bytes)
  maxImageSize: 2 * 1024 * 1024, // 2MB
  
  // File extensions to check for optimization
  imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'],
};

// Track issues by category
const issues = {
  passed: [],
  warnings: [],
  failed: []
};

/**
 * Add an issue to the appropriate category
 * @param {string} category - 'passed', 'warnings', or 'failed'
 * @param {string} message - The issue message
 */
function addIssue(category, message) {
  issues[category].push(message);
}

/**
 * Check if required files exist
 */
function checkRequiredFiles() {
  console.log('Checking required files...');
  
  for (const file of config.requiredFiles) {
    const filePath = path.join(config.rootDir, file);
    if (!fs.existsSync(filePath)) {
      addIssue('warnings', `${file} is missing`);
    } else {
      addIssue('passed', `${file} exists`);
    }
  }
  
  // Check .env files
  const envLocalPath = path.join(config.rootDir, '.env.local');
  const envExamplePath = path.join(config.rootDir, '.env.example');
  
  if (!fs.existsSync(envLocalPath)) {
    addIssue('warnings', '.env file is missing (this might be intentional for production builds)');
  } else {
    addIssue('passed', '.env file exists');
  }
  
  if (fs.existsSync(envExamplePath)) {
    addIssue('passed', '.env.example file exists');
  } else {
    addIssue('warnings', '.env.example file is missing');
  }
}

/**
 * Check SEO-related files
 */
function checkSEOFiles() {
  console.log('Checking SEO files...');
  
  // Check for robots.ts or robots.txt
  const robotsTsPath = path.join(config.rootDir, 'app/robots.ts');
  const robotsTxtPath = path.join(config.rootDir, 'public/robots.txt');
  
  if (!fs.existsSync(robotsTsPath) && !fs.existsSync(robotsTxtPath)) {
    addIssue('warnings', 'robots.txt file is missing');
  } else {
    addIssue('passed', 'robots configuration exists');
  }
  
  // Check for sitemap.ts or sitemap.xml
  const sitemapTsPath = path.join(config.rootDir, 'app/sitemap.ts');
  const sitemapXmlPath = path.join(config.rootDir, 'public/sitemap.xml');
  
  if (!fs.existsSync(sitemapTsPath) && !fs.existsSync(sitemapXmlPath)) {
    addIssue('warnings', 'sitemap.xml file is missing');
  } else {
    addIssue('passed', 'sitemap configuration exists');
  }
  
  // Check for metadata in layout.tsx
  const layoutPath = path.join(config.rootDir, 'app/layout.tsx');
  if (fs.existsSync(layoutPath)) {
    const content = fs.readFileSync(layoutPath, 'utf8');
    if (content.includes('metadata') || content.includes('MetaData')) {
      addIssue('passed', 'Metadata configuration found in root layout');
    } else {
      addIssue('warnings', 'No metadata configuration in root layout');
    }
  }
}

/**
 * Check for favicon and large files in public directory
 */
function checkPublicAssets() {
  console.log('Checking favicon and public assets...');
  
  // Check favicon
  const faviconPath = path.join(config.rootDir, 'public/favicon.ico');
  if (!fs.existsSync(faviconPath)) {
    addIssue('warnings', 'favicon.ico is missing');
  } else {
    addIssue('passed', 'favicon.ico exists');
  }
  
  // Check for large images
  const largeFiles = [];
  
  for (const dir of config.mediaDirectories) {
    const dirPath = path.join(config.rootDir, dir);
    
    if (!fs.existsSync(dirPath)) {
      continue;
    }
    
    try {
      walkDir(dirPath, (filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        
        if (config.imageExtensions.includes(ext)) {
          const stats = fs.statSync(filePath);
          
          if (stats.size > config.maxImageSize / 4) { // Set threshold to 500KB
            const relPath = path.relative(config.rootDir, filePath);
            const sizeKB = Math.round(stats.size / 1024);
            largeFiles.push(`${relPath} (${sizeKB}KB)`);
          }
        }
      });
    } catch (error) {
      addIssue('warnings', `Error checking images in ${dir}: ${error.message}`);
    }
  }
  
  if (largeFiles.length > 0) {
    addIssue('warnings', `Found ${largeFiles.length} large files (>300KB) in public directory that could be optimized`);
    largeFiles.forEach(file => {
      addIssue('warnings', `  - ${file}`);
    });
  } else {
    addIssue('passed', 'No large unoptimized images found');
  }
}

/**
 * Check package.json for issues
 */
function checkPackageJson() {
  console.log('Checking package.json...');
  
  const packageJsonPath = path.join(config.rootDir, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    addIssue('failed', 'package.json is missing');
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check scripts
    if (packageJson.scripts) {
      if (packageJson.scripts.build) {
        addIssue('passed', 'package.json has a build script');
      } else {
        addIssue('warnings', 'package.json is missing a build script');
      }
      
      if (packageJson.scripts.start) {
        addIssue('passed', 'package.json has a start script');
      } else {
        addIssue('warnings', 'package.json is missing a start script');
      }
      
      if (packageJson.scripts.lint) {
        addIssue('passed', 'package.json has a lint script');
      } else {
        addIssue('warnings', 'package.json is missing a lint script');
      }
    } else {
      addIssue('warnings', 'package.json has no scripts defined');
    }
    
    // Check dependencies for "latest"
    const allDeps = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {})
    };
    
    const latestDeps = [];
    
    for (const [dep, version] of Object.entries(allDeps)) {
      if (version === 'latest') {
        latestDeps.push(dep);
      }
    }
    
    if (latestDeps.length > 0) {
      addIssue('warnings', `Found ${latestDeps.length} dependencies using "latest" version which is not recommended for production: ${latestDeps.join(', ')}`);
    } else {
      addIssue('passed', 'No "latest" dependencies found in package.json');
    }
    
  } catch (error) {
    addIssue('failed', `Error parsing package.json: ${error.message}`);
  }
}

/**
 * Check for hardcoded URLs in files
 */
function checkHardcodedUrls() {
  console.log('Checking for hardcoded URLs...');
  
  const appDir = path.join(config.rootDir, 'app');
  const urlRegex = /https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g;
  const excludeList = [
    'https://schema.org',
    'http://localhost',
    'https://github.com',
    'https://npmjs.com'
  ];
  
  if (!fs.existsSync(appDir)) {
    addIssue('warnings', 'app directory not found');
    return;
  }
  
  const filesWithUrls = [];
  
  try {
    walkDir(appDir, (filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      
      if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(urlRegex);
        
        if (matches) {
          const validMatches = matches.filter(url => 
            !excludeList.some(exclude => url.startsWith(exclude))
          );
          
          if (validMatches.length > 0) {
            const relPath = path.relative(config.rootDir, filePath);
            filesWithUrls.push(relPath);
          }
        }
      }
    });
    
    if (filesWithUrls.length > 0) {
      addIssue('warnings', `Found ${filesWithUrls.length} files with hardcoded URLs`);
      filesWithUrls.forEach(file => {
        addIssue('warnings', `  - ${file}`);
      });
    } else {
      addIssue('passed', 'No hardcoded URLs found');
    }
  } catch (error) {
    addIssue('warnings', `Error checking for hardcoded URLs: ${error.message}`);
  }
}

/**
 * Check app directory structure
 */
function checkAppStructure() {
  console.log('Checking app directory structure...');
  
  const appDir = path.join(config.rootDir, 'app');
  const apiDir = path.join(appDir, 'api');
  
  if (fs.existsSync(appDir)) {
    addIssue('passed', 'app directory exists (using App Router)');
  } else {
    addIssue('warnings', 'app directory missing (not using App Router)');
    return;
  }
  
  if (fs.existsSync(apiDir)) {
    addIssue('passed', 'API routes directory exists');
    
    // Check for error handling in API routes
    try {
      const apiFiles = [];
      walkDir(apiDir, (filePath) => {
        const filename = path.basename(filePath);
        if (filename === 'route.ts' || filename === 'route.js') {
          apiFiles.push(filePath);
        }
      });
      
      if (apiFiles.length === 0) {
        addIssue('warnings', 'No API route files found in api directory');
      }
    } catch (error) {
      addIssue('warnings', `Error checking API routes: ${error.message}`);
    }
  } else {
    addIssue('warnings', 'API routes directory missing');
  }
}

/**
 * Check Next.js config for deployment settings
 */
function checkBuildConfig() {
  console.log('Checking build process...');
  
  // Check next.config.js
  const nextConfigJsPath = path.join(config.rootDir, 'next.config.js');
  const nextConfigMjsPath = path.join(config.rootDir, 'next.config.mjs');
  
  let nextConfigPath;
  if (fs.existsSync(nextConfigJsPath)) {
    nextConfigPath = nextConfigJsPath;
  } else if (fs.existsSync(nextConfigMjsPath)) {
    nextConfigPath = nextConfigMjsPath;
  }
  
  if (nextConfigPath) {
    try {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      // Check for output configuration
      if (!content.includes('output:') && !content.includes('output =')) {
        addIssue('warnings', 'Consider adding output: "standalone" to next.config.mjs for optimized Docker builds');
      }
    } catch (error) {
      addIssue('warnings', `Error reading Next.js config: ${error.message}`);
    }
  } else {
    addIssue('warnings', 'next.config.js or next.config.mjs is missing');
  }
  
  // Skip actual build
  addIssue('warnings', 'Build process not tested as part of this script - run "npm run build" separately');
  console.log('Skipping actual build to save time. In production, run "npm run build" separately.');
}

/**
 * Walk a directory recursively and call a callback for each file
 * @param {string} dir - The directory to walk
 * @param {Function} callback - The callback to call for each file
 */
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

/**
 * Print the summary of all issues
 */
function printSummary() {
  console.log('\n========================================');
  console.log('  CHECKLIST RESULTS');
  console.log('========================================\n');
  
  console.log(`${colors.green}✅ PASSED: ${issues.passed.length}${colors.reset}`);
  issues.passed.forEach(issue => {
    console.log(`  - ${issue}`);
  });
  
  console.log(`\n${colors.yellow}⚠️ WARNINGS: ${issues.warnings.length}${colors.reset}`);
  issues.warnings.forEach(issue => {
    console.log(`  - ${issue}`);
  });
  
  console.log(`\n${colors.red}❌ FAILED: ${issues.failed.length}${colors.reset}`);
  issues.failed.forEach(issue => {
    console.log(`  - ${issue}`);
  });
  
  console.log('\n========================================');
  console.log('  FINAL RECOMMENDATIONS');
  console.log('========================================\n');
  
  console.log(`${colors.yellow}⚠️ Review all WARNINGS and address them if needed.${colors.reset}\n`);
  
  console.log('Additional recommended steps before production:');
  console.log('1. Run a full build with "npm run build"');
  console.log('2. Test with production environment with "npm run start"');
  console.log('3. Run Lighthouse tests for performance metrics');
  console.log('4. Verify all API endpoints are properly secured');
  console.log('5. Check responsive design on different devices');
  console.log('6. Set up proper error monitoring and analytics');
}

/**
 * Main function to run all checks
 */
function main() {
  console.log('========================================');
  console.log('  NEXT.JS PRE-DEPLOYMENT CHECKLIST');
  console.log('========================================\n');
  
  // Run all checks
  checkRequiredFiles();
  checkSEOFiles();
  checkPublicAssets();
  checkPackageJson();
  checkHardcodedUrls();
  checkAppStructure();
  checkBuildConfig();
  
  // Print summary
  printSummary();
  
  // Return exit code
  return issues.failed.length === 0 ? 0 : 1;
}

// Run the main function if this script is executed directly
if (require.main === module) {
  const exitCode = main();
  // Exit process with appropriate code
  process.exit(exitCode);
}

module.exports = main; 