/**
 * Check Page Rendering Script
 * 
 * This script scans Next.js pages to identify client components
 * that might benefit from server-side rendering (SSR) or
 * static generation (SSG).
 * 
 * Usage:
 * node scripts/check-page-rendering.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_DIR = path.join(__dirname, '../app');
const COMPONENTS_DIR = path.join(__dirname, '../components');
const EXCLUDE_DIRS = ['api', 'admin'];
const INTERACTIVE_MARKERS = [
  'useState', 'useEffect', 'useContext', 'useRef', 'useReducer',
  'onClick', 'onChange', 'onSubmit', 'addEventListener'
];

// Function to recursively find page files
function findPageFiles(dir, results = [], isPageDir = true) {
  const files = fs.readdirSync(dir);
  
  const dirName = path.basename(dir);
  if (EXCLUDE_DIRS.includes(dirName)) {
    return results;
  }
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath, results, isPageDir);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.jsx', '.js', '.ts'].includes(ext)) {
        // Only include page.tsx files from app dir, but all component files
        if ((!isPageDir || file === 'page.tsx' || file === 'page.jsx' || file === 'layout.tsx' || file === 'layout.jsx') && 
            !file.includes('.test.') && !file.includes('.spec.')) {
          results.push(filePath);
        }
      }
    }
  }
  
  return results;
}

// Function to check if a file could use SSR/SSG
function analyzePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const isClientComponent = content.includes("'use client'") || content.includes('"use client"');
  const hasInteractiveHooks = INTERACTIVE_MARKERS.some(marker => content.includes(marker));
  
  // Check for potential data fetching
  const hasFetch = content.includes('fetch(') || content.includes('axios.');
  const hasAsyncFunction = content.includes('async function') || content.includes('async (');
  
  // Check for potential SSG markers
  const hasGetStaticProps = content.includes('getStaticProps') || content.includes('generateStaticParams');
  const hasGetServerSideProps = content.includes('getServerSideProps');
  
  // Determine rendering suggestion
  let renderingSuggestion = 'Unknown';
  let reason = '';
  
  if (isClientComponent) {
    if (hasInteractiveHooks) {
      renderingSuggestion = 'Client';
      reason = 'Uses client-side hooks or event handlers';
    } else if (hasFetch || hasAsyncFunction) {
      renderingSuggestion = 'Hybrid';
      reason = 'Fetches data but could use server components for initial data';
    } else {
      renderingSuggestion = 'Server';
      reason = 'Marked as client component but no client-side interactivity detected';
    }
  } else {
    if (hasFetch || hasAsyncFunction) {
      renderingSuggestion = 'Server';
      reason = 'Could fetch data on the server for better performance';
    } else {
      renderingSuggestion = 'Static';
      reason = 'No data fetching detected, could be statically generated';
    }
  }
  
  // Special case for reused static rendering methods
  if (hasGetStaticProps) {
    renderingSuggestion = 'Static (using getStaticProps)';
    reason = 'Already using static generation';
  } else if (hasGetServerSideProps) {
    renderingSuggestion = 'Server (using getServerSideProps)';
    reason = 'Already using server-side rendering';
  }
  
  return {
    filePath: filePath,
    isClientComponent,
    hasInteractiveHooks,
    hasFetch,
    renderingSuggestion,
    reason
  };
}

// Main function
function main() {
  console.log('Analyzing Next.js app for rendering optimization opportunities...\n');
  
  // Find all page files
  console.log('Finding page files...');
  const pageFiles = findPageFiles(APP_DIR);
  
  // Find component files
  console.log('Finding component files...');
  const componentFiles = findPageFiles(COMPONENTS_DIR, [], false);
  
  // Combine and analyze all files
  const allFiles = [...pageFiles, ...componentFiles];
  
  console.log(`Found ${pageFiles.length} page files and ${componentFiles.length} component files.\n`);
  
  // Analyze each file
  console.log('Analyzing rendering strategies...\n');
  
  const results = allFiles.map(analyzePage);
  
  // Group by rendering suggestion
  const groupedResults = {
    'Client': [],
    'Server': [],
    'Static': [],
    'Hybrid': [],
    'Static (using getStaticProps)': [],
    'Server (using getServerSideProps)': [],
    'Unknown': []
  };
  
  results.forEach(result => {
    const group = groupedResults[result.renderingSuggestion] || groupedResults['Unknown'];
    group.push(result);
  });
  
  // Print summary
  console.log('RENDERING STRATEGY SUMMARY:');
  console.log('==========================\n');
  
  Object.entries(groupedResults).forEach(([strategy, items]) => {
    if (items.length > 0) {
      console.log(`${strategy}: ${items.length} files`);
    }
  });
  
  console.log('\nDETAILED ANALYSIS:');
  console.log('=================\n');
  
  Object.entries(groupedResults).forEach(([strategy, items]) => {
    if (items.length > 0) {
      console.log(`\n${strategy.toUpperCase()}:`);
      console.log('-'.repeat(strategy.length + 1));
      
      items.forEach(item => {
        const relativePath = path.relative(path.join(__dirname, '..'), item.filePath);
        console.log(`- ${relativePath}`);
        console.log(`  Reason: ${item.reason}`);
      });
    }
  });
  
  // Add optimization recommendations
  console.log('\nOPTIMIZATION RECOMMENDATIONS:');
  console.log('===========================\n');
  
  console.log('1. Static Generation (Best for SEO and performance):');
  console.log('   - Content that doesn\'t change frequently');
  console.log('   - Landing pages, blog posts, product pages');
  console.log('   - Use getStaticProps/generateStaticParams in App Router');
  
  console.log('\n2. Server-Side Rendering (For dynamic but still SEO-important pages):');
  console.log('   - User-specific dashboard views');
  console.log('   - Search results pages');
  console.log('   - Remove "use client" directive when not needed');
  
  console.log('\n3. Client-Side Rendering (Only for highly interactive components):');
  console.log('   - Forms with complex validation');
  console.log('   - Interactive data visualizations');
  console.log('   - Components with many state changes');
  
  console.log('\n4. Incremental Static Regeneration (For dynamic content with caching):');
  console.log('   - Use revalidate in fetch() or in getStaticProps');
  console.log('   - Product pages with inventory updates');
  console.log('   - Blog posts with comments');
}

// Run the script
main(); 