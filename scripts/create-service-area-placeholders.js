/**
 * Create Service Area Placeholders
 * 
 * This script creates WebP placeholder files for service area images
 * referenced in the code but missing from the filesystem
 * 
 * Usage:
 * node scripts/create-service-area-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Base64 encoded tiny WebP image for service area placeholders
const PLACEHOLDER_SERVICE_AREA = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSCUAAAABF0AQwLCxoREFuQUFJkoAAABWUDggJAAAADABAJ0BKhAAAAEAAwA+JaQAA3AA/uA='; 

// List of service areas needed from our code analysis
const SERVICE_AREAS = [
  'austin',
  'bulverde',
  'cedar-park',
  'georgetown',
  'hutto',
  'jarrell',
  'kingsland',
  'leander',
  'liberty-hill',
  'manor',
  'pflugerville',
  'round-rock',
  'taylor'
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
function createPlaceholder(outputPath) {
  try {
    const fullPath = path.join(__dirname, outputPath);
    
    // Ensure directory exists
    ensureDirectoryExists(fullPath);
    
    // Check if file already exists
    if (fs.existsSync(fullPath)) {
      console.log(`Placeholder already exists: ${outputPath}`);
      return;
    }
    
    // Write the base64 decoded data to file
    const buffer = decodeBase64(PLACEHOLDER_SERVICE_AREA);
    fs.writeFileSync(fullPath, buffer);
    
    console.log(`Created placeholder: ${outputPath}`);
  } catch (error) {
    console.error(`Error creating placeholder ${outputPath}: ${error.message}`);
  }
}

// Main function
function main() {
  console.log('Creating service area WebP placeholders...');
  
  // Create service-areas directory
  ensureDirectoryExists(path.join(__dirname, '../public/images/service-areas'));
  
  // Create WebP placeholders for standard service area images
  SERVICE_AREAS.forEach(area => {
    createPlaceholder(`../public/images/service-areas/${area}.webp`);
    createPlaceholder(`../public/images/septic-service-${area}.webp`);
  });
  
  // Additional images found in the code
  createPlaceholder('../public/images/septic-service-round-rock-technician.webp');
  createPlaceholder('../public/images/septic-maintenance-cedar-park.webp');

  console.log('\nService area placeholder creation complete.');
  console.log('Next step: Update image references in the code to use .webp extension');
}

// Run the script
main(); 