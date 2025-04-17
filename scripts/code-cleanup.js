#!/usr/bin/env node

/**
 * Code Cleanup Utility
 * 
 * This script analyzes and fixes common issues in the codebase, including:
 * - Replacing hardcoded URLs with environment variables
 * - Fixing formatting and structure issues
 * - Removing console.log statements in production
 * - Ensuring proper imports and dependencies
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
  gray: '\x1b[90m',
};

// Configuration
const config = {
  rootDir: path.resolve(__dirname, '..'),
  scanDirs: ['app', 'components', 'lib', 'utils'],
  fileTypes: ['.js', '.jsx', '.ts', '.tsx'],
  fixes: {
    hardcodedUrls: {
      enabled: true,
      description: 'Replace hardcoded URLs with environment variables',
      pattern: /https?:\/\/callalphaseptic\.com/g,
      replacement: 'process.env.NEXT_PUBLIC_SITE_URL',
    },
    consoleLogs: {
      enabled: true,
      description: 'Remove console.log statements',
      pattern: /console\.log\([^)]*\);?/g,
      replacement: '// console.log removed by code cleanup',
    },
    unnecessaryImports: {
      enabled: true,
      description: 'Remove unused imports',
      // This pattern is simplified and may need refinement for complex cases
      pattern: /import\s+{[^}]*}\s+from\s+['"][^'"]*['"]/g,
      // The replacement is handled in a custom function
    },
    httpToHttps: {
      enabled: true,
      description: 'Convert HTTP URLs to HTTPS',
      pattern: /(['"])http:\/\/([^'"]*?)(['"])/g,
      replacement: '$1https://$2$3',
    },
    latestDependencies: {
      enabled: true,
      description: 'Fix "latest" dependencies in package.json',
      // This pattern is simplified and may need refinement
      pattern: /"([\w\-@\/]+)":\s*"latest"/g,
      // The replacement is handled in a custom function
    },
    doubleEmptyLines: {
      enabled: true,
      description: 'Fix double empty lines',
      pattern: /\n\s*\n\s*\n/g,
      replacement: '\n\n',
    },
  },
  ignorePaths: [
    'node_modules',
    '.next',
    'out',
    '.git',
    'public',
    'build',
    'dist',
  ],
  ignoreFiles: [
    'package.json',
    'package-lock.json',
    'yarn.lock',
    '.env',
    '.env.local',
    'tsconfig.json',
  ],
  // Files that should specifically be processed
  specificFiles: {
    packageJson: 'package.json',
  },
};

// Statistics
const stats = {
  filesScanned: 0,
  filesModified: 0,
  errorCount: 0,
  fixesByType: {},
};

// Initialize stats
for (const fixKey of Object.keys(config.fixes)) {
  stats.fixesByType[fixKey] = 0;
}

/**
 * Initialize the utility
 */
function init() {
  console.log(`${colors.cyan}===============================================${colors.reset}`);
  console.log(`${colors.cyan}            CODE CLEANUP UTILITY${colors.reset}`);
  console.log(`${colors.cyan}===============================================${colors.reset}`);
  console.log('');
  console.log(`${colors.blue}Starting code cleanup process...${colors.reset}`);
  console.log('');
  
  // Ensure the script is run from the correct directory
  if (!fs.existsSync(path.join(config.rootDir, 'package.json'))) {
    console.error(`${colors.red}Error: This script must be run from the project root directory.${colors.reset}`);
    process.exit(1);
  }
  
  // Check if any files are staged in git
  let hasGitChanges = false;
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf-8' });
    hasGitChanges = gitStatus.trim().length > 0;
  } catch (error) {
    // Git might not be available or the directory is not a git repository
    console.log(`${colors.yellow}Warning: Git is not available or this is not a git repository.${colors.reset}`);
  }
  
  if (hasGitChanges) {
    console.log(`${colors.yellow}Warning: You have uncommitted changes. Consider committing before running this utility.${colors.reset}`);
    console.log('');
  }
}

/**
 * Process all files in the configured directories
 */
function processAllFiles() {
  for (const dir of config.scanDirs) {
    const dirPath = path.join(config.rootDir, dir);
    
    if (fs.existsSync(dirPath)) {
      walkDir(dirPath, processFile);
    } else {
      console.log(`${colors.yellow}Warning: Directory "${dir}" does not exist.${colors.reset}`);
    }
  }
  
  // Process specific files
  processSpecificFiles();
}

/**
 * Process specific files that need special handling
 */
function processSpecificFiles() {
  // Process package.json
  const packageJsonPath = path.join(config.rootDir, config.specificFiles.packageJson);
  if (fs.existsSync(packageJsonPath)) {
    processPackageJson(packageJsonPath);
  }
}

/**
 * Process a package.json file to fix "latest" dependencies
 * @param {string} filePath - Path to the package.json file
 */
function processPackageJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const packageJson = JSON.parse(content);
    let modified = false;
    
    // Replace "latest" in dependencies
    if (packageJson.dependencies) {
      for (const [dep, version] of Object.entries(packageJson.dependencies)) {
        if (version === 'latest') {
          // Get the latest version of the package from npm
          try {
            const latestVersion = getLatestVersion(dep);
            packageJson.dependencies[dep] = `^${latestVersion}`;
            console.log(`${colors.green}  - Updated ${dep} from "latest" to "^${latestVersion}"${colors.reset}`);
            stats.fixesByType.latestDependencies++;
            modified = true;
          } catch (error) {
            console.error(`${colors.red}  - Failed to update ${dep}: ${error.message}${colors.reset}`);
          }
        }
      }
    }
    
    // Replace "latest" in devDependencies
    if (packageJson.devDependencies) {
      for (const [dep, version] of Object.entries(packageJson.devDependencies)) {
        if (version === 'latest') {
          // Get the latest version of the package from npm
          try {
            const latestVersion = getLatestVersion(dep);
            packageJson.devDependencies[dep] = `^${latestVersion}`;
            console.log(`${colors.green}  - Updated ${dep} from "latest" to "^${latestVersion}"${colors.reset}`);
            stats.fixesByType.latestDependencies++;
            modified = true;
          } catch (error) {
            console.error(`${colors.red}  - Failed to update ${dep}: ${error.message}${colors.reset}`);
          }
        }
      }
    }
    
    if (modified) {
      // Write the modified package.json back to the file
      fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n');
      stats.filesModified++;
      console.log(`${colors.green}Modified: ${path.relative(config.rootDir, filePath)}${colors.reset}`);
    }
  } catch (error) {
    console.error(`${colors.red}Error processing ${filePath}: ${error.message}${colors.reset}`);
    stats.errorCount++;
  }
}

/**
 * Get the latest version of a package from npm
 * @param {string} packageName - The name of the package
 * @returns {string} - The latest version
 */
function getLatestVersion(packageName) {
  try {
    const npmViewOutput = execSync(`npm view ${packageName} version`, { encoding: 'utf-8' });
    return npmViewOutput.trim();
  } catch (error) {
    throw new Error(`Failed to get latest version: ${error.message}`);
  }
}

/**
 * Process a single file
 * @param {string} filePath - Path to the file
 */
function processFile(filePath) {
  const relativePath = path.relative(config.rootDir, filePath);
  
  // Skip files in ignore list
  if (config.ignoreFiles.includes(path.basename(filePath))) {
    return;
  }
  
  // Skip files with extensions not in our list
  if (!config.fileTypes.includes(path.extname(filePath))) {
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    stats.filesScanned++;
    
    console.log(`${colors.gray}Scanning: ${relativePath}${colors.reset}`);
    
    // Apply each fix
    for (const [fixKey, fix] of Object.entries(config.fixes)) {
      if (fix.enabled) {
        const originalContent = content;
        
        // Apply the fix with a pattern and replacement
        if (fix.pattern && fix.replacement) {
          content = content.replace(fix.pattern, fix.replacement);
        }
        // Apply fixes that need custom handling
        else if (fixKey === 'unnecessaryImports') {
          content = fixUnnecessaryImports(content, filePath);
        }
        
        // Check if the content was modified
        if (content !== originalContent) {
          stats.fixesByType[fixKey]++;
          modified = true;
        }
      }
    }
    
    if (modified) {
      // Write the modified content back to the file
      fs.writeFileSync(filePath, content);
      stats.filesModified++;
      console.log(`${colors.green}Modified: ${relativePath}${colors.reset}`);
    }
  } catch (error) {
    console.error(`${colors.red}Error processing ${relativePath}: ${error.message}${colors.reset}`);
    stats.errorCount++;
  }
}

/**
 * Fix unnecessary imports in a file
 * @param {string} content - The file content
 * @param {string} filePath - Path to the file
 * @returns {string} - The fixed content
 */
function fixUnnecessaryImports(content, filePath) {
  // This is a simplified implementation that would need to be enhanced for real-world use
  // It should parse the code to identify unused imports properly
  
  // Find import statements
  const importRegex = /import\s+{([^}]*)}\s+from\s+['"]([^'"]*)['"]/g;
  let match;
  let modifiedContent = content;
  
  while ((match = importRegex.exec(content)) !== null) {
    const importClause = match[1];
    const importSource = match[2];
    const importedItems = importClause.split(',').map(item => item.trim());
    
    // Check which items are actually used in the file
    const unusedItems = [];
    for (const item of importedItems) {
      const itemName = item.split(' as ')[0].trim();
      // Very simple check - just see if the item name appears elsewhere in the file
      // This is not accurate for real analysis
      if (!content.includes(itemName, match.index + match[0].length)) {
        unusedItems.push(item);
      }
    }
    
    // If there are unused items, remove them from the import statement
    if (unusedItems.length > 0 && unusedItems.length === importedItems.length) {
      // All imports are unused, remove the entire import statement
      modifiedContent = modifiedContent.replace(match[0], `// Removed unused import from "${importSource}"`);
    } else if (unusedItems.length > 0) {
      // Some imports are unused, remove only those
      const newImportItems = importedItems.filter(item => !unusedItems.includes(item)).join(', ');
      const newImportStatement = `import { ${newImportItems} } from '${importSource}'`;
      modifiedContent = modifiedContent.replace(match[0], newImportStatement);
    }
  }
  
  return modifiedContent;
}

/**
 * Recursively walk a directory
 * @param {string} dir - The directory to walk
 * @param {Function} callback - Function to call for each file
 */
function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip directories in ignore list
    if (entry.isDirectory() && config.ignorePaths.includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

/**
 * Print summary statistics
 */
function printSummary() {
  console.log('');
  console.log(`${colors.cyan}===============================================${colors.reset}`);
  console.log(`${colors.cyan}                CLEANUP SUMMARY${colors.reset}`);
  console.log(`${colors.cyan}===============================================${colors.reset}`);
  console.log('');
  console.log(`${colors.blue}Statistics:${colors.reset}`);
  console.log(`  Files scanned: ${stats.filesScanned}`);
  console.log(`  Files modified: ${stats.filesModified}`);
  console.log(`  Errors encountered: ${stats.errorCount}`);
  console.log('');
  
  console.log(`${colors.blue}Fixes applied:${colors.reset}`);
  for (const [fixKey, fixCount] of Object.entries(stats.fixesByType)) {
    if (fixCount > 0) {
      console.log(`  ${config.fixes[fixKey].description}: ${fixCount}`);
    }
  }
  
  console.log('');
  if (stats.filesModified > 0) {
    console.log(`${colors.green}Cleanup completed successfully with modifications.${colors.reset}`);
    console.log(`${colors.yellow}Please review the changes before committing.${colors.reset}`);
  } else {
    console.log(`${colors.green}Cleanup completed successfully with no modifications needed.${colors.reset}`);
  }
}

/**
 * Run the code cleanup utility
 */
function run() {
  init();
  processAllFiles();
  printSummary();
}

// Run the utility if this script is executed directly
if (require.main === module) {
  run();
}

module.exports = { run }; 