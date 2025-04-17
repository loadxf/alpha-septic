/**
 * Create WebP Placeholders
 * 
 * This script creates simple WebP placeholder files for the remaining 
 * non-WebP images in the project to ensure all image references have
 * a valid WebP counterpart.
 * 
 * Usage:
 * node scripts/create-webp-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Base64 encoded tiny WebP images for placeholders
const PLACEHOLDER_GENERAL = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uA='; // 1x1 gray pixel
const PLACEHOLDER_USER = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSCUAAAABF0AQwLCPpRFtvQUFJkoAAABWUDggJAAAADABAJ0BKhAAAAEAAwA+JaQAA3AA/uA='; // User silhouette
const PLACEHOLDER_LOGO = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSCUAAAABF6AmQBC/7+/OtrKAgbEAAAA/QSqACyXwAP7gAA=='; // Logo placeholder

// List of needed placeholders
const PLACEHOLDERS = [
  { 
    outputPath: '../public/placeholder.webp', 
    base64: PLACEHOLDER_GENERAL,
    width: 200,
    height: 200
  },
  { 
    outputPath: '../public/placeholder-user.webp', 
    base64: PLACEHOLDER_USER,
    width: 200,
    height: 200
  },
  { 
    outputPath: '../public/placeholder-logo.webp', 
    base64: PLACEHOLDER_LOGO,
    width: 280,
    height: 140
  },
  {
    outputPath: '../public/icons/icon-192.webp',
    base64: PLACEHOLDER_LOGO,
    width: 192,
    height: 192
  },
  {
    outputPath: '../public/icons/icon-512.webp',
    base64: PLACEHOLDER_LOGO,
    width: 512,
    height: 512
  },
  {
    outputPath: '../public/icons/icon-maskable.webp',
    base64: PLACEHOLDER_LOGO,
    width: 512,
    height: 512
  }
];

// Function to create directory if it doesn't exist
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log(`Created directory: ${dirname}`);
  }
}

// Function to decode Base64 to buffer
function decodeBase64(dataUrl) {
  // Extract the base64 part from data URL
  const base64 = dataUrl.split(',')[1];
  return Buffer.from(base64, 'base64');
}

// Function to create a placeholder WebP file
function createPlaceholder(placeholder) {
  try {
    const fullPath = path.join(__dirname, placeholder.outputPath);
    
    // Ensure directory exists
    ensureDirectoryExists(fullPath);
    
    // Check if file already exists
    if (fs.existsSync(fullPath)) {
      console.log(`Placeholder already exists: ${placeholder.outputPath}`);
      return;
    }
    
    // Write the base64 decoded data to file
    const buffer = decodeBase64(placeholder.base64);
    fs.writeFileSync(fullPath, buffer);
    
    console.log(`Created placeholder: ${placeholder.outputPath} (${placeholder.width}x${placeholder.height})`);
  } catch (error) {
    console.error(`Error creating placeholder ${placeholder.outputPath}: ${error.message}`);
  }
}

// Main function
function main() {
  console.log('Creating WebP placeholders...');
  
  // Process each placeholder
  PLACEHOLDERS.forEach(createPlaceholder);
  
  console.log('\nPlaceholder creation complete. Next steps:');
  console.log('1. Check the created WebP placeholders to ensure they look reasonable');
  console.log('2. Update any image references in code to use .webp extension');
  console.log('3. For production, replace placeholders with real optimized WebP images');
}

// Run the script
main(); 