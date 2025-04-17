#!/usr/bin/env node

/**
 * Image Optimizer Script
 * 
 * This script optimizes large images in the public directory to reduce file sizes
 * for better performance. It requires Sharp to be installed.
 * 
 * Installation:
 * npm install sharp --save-dev
 * 
 * Usage:
 * node scripts/image-optimizer.js
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
  
  // Directories to check for large media files
  mediaDirectories: [
    'public/images',
    'public/images/services',
    'public/assets',
  ],
  
  // Maximum acceptable size for an image (in bytes)
  maxImageSize: 500 * 1024, // 500KB
  
  // File extensions to process
  imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  
  // Optimization options
  optimizationOptions: {
    jpeg: { quality: 80 },
    png: { quality: 80 },
    webp: { quality: 75 },
  }
};

// Statistics
const stats = {
  scanned: 0,
  optimized: 0,
  skipped: 0,
  errors: 0,
  totalSavings: 0
};

/**
 * Check if Sharp is installed
 */
function checkDependencies() {
  try {
    require.resolve('sharp');
    return true;
  } catch (e) {
    console.error(`${colors.red}Error: Sharp is not installed.${colors.reset}`);
    console.error(`Please install it by running: npm install sharp --save-dev`);
    return false;
  }
}

/**
 * Optimize an image file
 * @param {string} filePath - Path to the image file
 * @returns {Promise<boolean>} - True if optimization was successful
 */
async function optimizeImage(filePath) {
  try {
    // Dynamically import Sharp (it might not be installed)
    const sharp = require('sharp');
    
    const ext = path.extname(filePath).toLowerCase();
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    // Skip small files
    if (originalSize <= config.maxImageSize) {
      return { optimized: false, message: 'Skipped (already small enough)' };
    }
    
    // Create temporary output path
    const outputPath = `${filePath}.optimized${ext}`;
    
    // Get optimization options based on file type
    let options = {};
    if (ext === '.jpg' || ext === '.jpeg') {
      options = config.optimizationOptions.jpeg;
    } else if (ext === '.png') {
      options = config.optimizationOptions.png;
    } else if (ext === '.webp') {
      options = config.optimizationOptions.webp;
    }
    
    // Process with Sharp
    await sharp(filePath)
      .jpeg(ext === '.jpg' || ext === '.jpeg' ? options : undefined)
      .png(ext === '.png' ? options : undefined)
      .webp(ext === '.webp' ? options : undefined)
      .toFile(outputPath);
    
    // Check if the optimized file is smaller
    const optimizedStats = fs.statSync(outputPath);
    const newSize = optimizedStats.size;
    
    if (newSize < originalSize) {
      // Backup original file
      const backupPath = `${filePath}.backup`;
      fs.renameSync(filePath, backupPath);
      
      // Replace with optimized file
      fs.renameSync(outputPath, filePath);
      
      // Delete backup after successful replacement
      fs.unlinkSync(backupPath);
      
      const savings = originalSize - newSize;
      const savingsPercent = Math.round((savings / originalSize) * 100);
      
      return { 
        optimized: true, 
        originalSize, 
        newSize, 
        savings,
        savingsPercent,
        message: `Optimized: ${formatSize(savings)} saved (${savingsPercent}%)`
      };
    } else {
      // Optimized version is not smaller, keep original
      fs.unlinkSync(outputPath);
      return { optimized: false, message: 'Skipped (optimization did not reduce size)' };
    }
  } catch (error) {
    return { optimized: false, error: error.message };
  }
}

/**
 * Format file size in human-readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} - Formatted size string
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Walk directory recursively and process images
 * @param {string} dir - Directory to process
 */
async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`${colors.yellow}Directory ${dir} does not exist. Skipping.${colors.reset}`);
    return;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      if (config.imageExtensions.includes(ext)) {
        stats.scanned++;
        
        const result = await optimizeImage(fullPath);
        const relativePath = path.relative(config.rootDir, fullPath);
        
        if (result.error) {
          console.error(`${colors.red}Error optimizing ${relativePath}: ${result.error}${colors.reset}`);
          stats.errors++;
        } else if (result.optimized) {
          console.log(`${colors.green}${relativePath}: ${result.message}${colors.reset}`);
          stats.optimized++;
          stats.totalSavings += result.savings;
        } else {
          console.log(`${colors.blue}${relativePath}: ${result.message}${colors.reset}`);
          stats.skipped++;
        }
      }
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}            IMAGE OPTIMIZER            ${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  
  if (!checkDependencies()) {
    process.exit(1);
  }
  
  console.log(`${colors.blue}Starting image optimization...${colors.reset}`);
  console.log(`Max image size threshold: ${formatSize(config.maxImageSize)}`);
  
  // Process each media directory
  for (const dir of config.mediaDirectories) {
    const fullPath = path.join(config.rootDir, dir);
    console.log(`\n${colors.blue}Processing directory: ${dir}${colors.reset}`);
    await processDirectory(fullPath);
  }
  
  // Print summary
  console.log(`\n${colors.cyan}========================================${colors.reset}`);
  console.log(`${colors.cyan}         OPTIMIZATION SUMMARY           ${colors.reset}`);
  console.log(`${colors.cyan}========================================${colors.reset}`);
  console.log(`Images scanned: ${stats.scanned}`);
  console.log(`Images optimized: ${stats.optimized}`);
  console.log(`Images skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Total space saved: ${formatSize(stats.totalSavings)}`);
  
  if (stats.optimized > 0) {
    console.log(`\n${colors.green}Successfully optimized ${stats.optimized} images!${colors.reset}`);
  } else if (stats.scanned > 0) {
    console.log(`\n${colors.blue}No images required optimization.${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}No images were found to process.${colors.reset}`);
  }
  
  // Add a script to package.json for easy access
  try {
    const packageJsonPath = path.join(config.rootDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts || !packageJson.scripts['optimize-images']) {
        if (!packageJson.scripts) packageJson.scripts = {};
        packageJson.scripts['optimize-images'] = 'node scripts/image-optimizer.js';
        
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log(`\n${colors.green}Added "optimize-images" script to package.json${colors.reset}`);
      }
    }
  } catch (error) {
    console.error(`\n${colors.red}Error updating package.json: ${error.message}${colors.reset}`);
  }
  
  // Provide instructions for installing Sharp if not already done
  console.log(`\n${colors.yellow}Note: This script requires Sharp to be installed.${colors.reset}`);
  console.log(`To install Sharp, run: npm install sharp --save-dev`);
}

// Run the main function
main().catch(error => {
  console.error(`${colors.red}Unhandled error:${colors.reset}`, error);
  process.exit(1);
}); 