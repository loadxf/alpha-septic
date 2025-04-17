/**
 * Accessibility Checker for Alpha Septic website
 * 
 * This script runs accessibility tests to ensure the website meets WCAG standards:
 * - Checks for ARIA attributes and roles
 * - Verifies color contrast ratios
 * - Ensures proper keyboard navigation
 * - Validates form accessibility
 * - Checks image alt text
 * 
 * Usage: node scripts/accessibility-check.js [--url=https://example.com] [--level=AA]
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const chalk = require('chalk');
const axe = require('@axe-core/puppeteer');

// Configuration
const DEFAULT_URL = 'http://localhost:3000';
const REPORT_PATH = path.join(__dirname, '../reports/accessibility-report.md');
const MAX_PAGES = 20; // Maximum number of pages to check

// Parse command line arguments
const args = process.argv.slice(2);
let baseUrl = DEFAULT_URL;
let wcagLevel = 'WCAG2AA'; // Default level: WCAG 2.0 Level AA

args.forEach(arg => {
  if (arg.startsWith('--url=')) {
    baseUrl = arg.split('=')[1];
  }
  if (arg.startsWith('--level=')) {
    const level = arg.split('=')[1].toUpperCase();
    if (level === 'A') {
      wcagLevel = 'WCAG2A';
    } else if (level === 'AAA') {
      wcagLevel = 'WCAG2AAA';
    }
  }
});

// Ensure base URL has trailing slash for consistency
if (!baseUrl.endsWith('/')) {
  baseUrl += '/';
}

// Colors for console output
const colors = {
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.blue,
  header: chalk.cyan.bold,
  subheader: chalk.magenta
};

// Results object
const results = {
  pages: {},
  summary: {
    pagesChecked: 0,
    violations: {},
    totalViolations: 0,
    totalImpactCritical: 0,
    totalImpactSerious: 0,
    totalImpactModerate: 0,
    totalImpactMinor: 0,
    uniqueViolationTypes: 0
  }
};

// Ensure reports directory exists
function ensureReportDirExists() {
  const reportsDir = path.dirname(REPORT_PATH);
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
}

// Impact to numeric severity for sorting
function getImpactSeverity(impact) {
  switch (impact) {
    case 'critical': return 4;
    case 'serious': return 3;
    case 'moderate': return 2;
    case 'minor': return 1;
    default: return 0;
  }
}

// Run accessibility check on a page
async function checkAccessibility(page, url) {
  console.log(colors.info(`Checking: ${url}`));
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (error) {
    console.log(colors.error(`Error loading page: ${url}`));
    console.log(colors.error(error.message));
    return null;
  }
  
  // Run axe-core analysis
  const axeResults = await axe.analyze({
    runOnly: {
      type: 'tag',
      values: [wcagLevel]
    }
  });
  
  // Extract and format page results
  const pageResult = {
    url: url,
    violations: axeResults.violations,
    passes: axeResults.passes.length,
    incomplete: axeResults.incomplete.length,
    inapplicable: axeResults.inapplicable.length,
    violationCount: axeResults.violations.length,
    impactCounts: {
      critical: 0,
      serious: 0,
      moderate: 0,
      minor: 0
    }
  };
  
  // Count violations by impact level
  axeResults.violations.forEach(violation => {
    pageResult.impactCounts[violation.impact]++;
    
    // Update global summary
    results.summary.totalViolations++;
    
    switch (violation.impact) {
      case 'critical':
        results.summary.totalImpactCritical++;
        break;
      case 'serious':
        results.summary.totalImpactSerious++;
        break;
      case 'moderate':
        results.summary.totalImpactModerate++;
        break;
      case 'minor':
        results.summary.totalImpactMinor++;
        break;
    }
    
    // Track violation types globally
    if (!results.summary.violations[violation.id]) {
      results.summary.violations[violation.id] = {
        description: violation.description,
        help: violation.help,
        helpUrl: violation.helpUrl,
        impact: violation.impact,
        count: 0,
        pages: []
      };
      results.summary.uniqueViolationTypes++;
    }
    
    results.summary.violations[violation.id].count++;
    results.summary.violations[violation.id].pages.push(url);
  });
  
  // Save page results
  results.pages[url] = pageResult;
  results.summary.pagesChecked++;
  
  return pageResult;
}

// Find links on a page
async function findLinks(page, baseUrl) {
  const links = await page.evaluate((baseUrl) => {
    const anchors = Array.from(document.querySelectorAll('a[href]'));
    return anchors
      .map(a => {
        try {
          const href = a.href;
          if (href.startsWith(baseUrl) && !href.includes('#')) {
            return href;
          }
          return null;
        } catch (e) {
          return null;
        }
      })
      .filter(href => href !== null);
  }, baseUrl);
  
  return [...new Set(links)]; // Remove duplicates
}

// Generate markdown report
function generateReport() {
  ensureReportDirExists();
  
  let report = '# Accessibility Audit Report\n\n';
  report += `Generated on: ${new Date().toLocaleString()}\n`;
  report += `Base URL: ${baseUrl}\n`;
  report += `WCAG Level: ${wcagLevel}\n`;
  report += `Pages checked: ${results.summary.pagesChecked}\n\n`;
  
  // Summary section
  report += '## Summary\n\n';
  report += '| Metric | Count |\n';
  report += '| ------ | ----- |\n';
  report += `| Total violations | ${results.summary.totalViolations} |\n`;
  report += `| Unique violation types | ${results.summary.uniqueViolationTypes} |\n`;
  report += `| Critical impact | ${results.summary.totalImpactCritical} |\n`;
  report += `| Serious impact | ${results.summary.totalImpactSerious} |\n`;
  report += `| Moderate impact | ${results.summary.totalImpactModerate} |\n`;
  report += `| Minor impact | ${results.summary.totalImpactMinor} |\n`;
  
  // Violations by type
  report += '\n## Violations By Type\n\n';
  
  // Convert violations to array for sorting
  const violationsArr = Object.entries(results.summary.violations).map(([id, data]) => ({
    id,
    ...data
  }));
  
  // Sort by impact severity and then by occurrence count
  violationsArr.sort((a, b) => {
    const impactDiff = getImpactSeverity(b.impact) - getImpactSeverity(a.impact);
    if (impactDiff !== 0) return impactDiff;
    return b.count - a.count;
  });
  
  violationsArr.forEach(violation => {
    report += `### ${violation.id} (${violation.impact} impact)\n\n`;
    report += `**${violation.description}**\n\n`;
    report += `- Help: ${violation.help}\n`;
    report += `- Documentation: ${violation.helpUrl}\n`;
    report += `- Occurrences: ${violation.count}\n`;
    report += `- Affected pages: ${violation.pages.length}\n\n`;
    
    // Only show up to 5 affected pages to keep the report manageable
    if (violation.pages.length > 0) {
      report += "Affected pages:\n";
      violation.pages.slice(0, 5).forEach(page => {
        report += `- ${page}\n`;
      });
      if (violation.pages.length > 5) {
        report += `- ... and ${violation.pages.length - 5} more\n`;
      }
      report += '\n';
    }
  });
  
  // Page details
  report += '\n## Page Details\n\n';
  
  for (const [url, data] of Object.entries(results.pages)) {
    report += `### ${url}\n\n`;
    report += `- Violations: ${data.violationCount}\n`;
    report += `- Passed tests: ${data.passes}\n`;
    report += `- Needs review: ${data.incomplete}\n\n`;
    
    if (data.violationCount > 0) {
      report += '#### Issues\n\n';
      report += '| Rule | Impact | Elements |\n';
      report += '| ---- | ------ | -------- |\n';
      
      data.violations.forEach(violation => {
        report += `| ${violation.id} | ${violation.impact} | ${violation.nodes.length} |\n`;
      });
      
      report += '\n';
      
      // Detailed violation information
      report += '#### Detailed Violations\n\n';
      
      data.violations.forEach(violation => {
        report += `##### ${violation.id} - ${violation.impact}\n\n`;
        report += `${violation.help}\n\n`;
        report += `- Description: ${violation.description}\n`;
        report += `- Help URL: ${violation.helpUrl}\n\n`;
        
        // Only show first 3 nodes to keep the report manageable
        if (violation.nodes.length > 0) {
          report += "Affected elements:\n\n";
          violation.nodes.slice(0, 3).forEach((node, index) => {
            report += `${index + 1}. \`${node.html}\`\n`;
            
            if (node.failureSummary) {
              report += `   - ${node.failureSummary.replace(/\n/g, '\n   - ')}\n`;
            }
            
            report += '\n';
          });
          
          if (violation.nodes.length > 3) {
            report += `... and ${violation.nodes.length - 3} more elements\n\n`;
          }
        }
        
        report += '\n';
      });
    }
    
    report += '---\n\n';
  }
  
  // Recommendations section
  report += '## Recommendations\n\n';
  
  if (results.summary.totalImpactCritical > 0 || results.summary.totalImpactSerious > 0) {
    report += '### High Priority\n\n';
    report += 'Address these critical and serious issues first:\n\n';
    
    violationsArr
      .filter(v => v.impact === 'critical' || v.impact === 'serious')
      .slice(0, 5)
      .forEach(violation => {
        report += `- **${violation.id}**: ${violation.description}\n`;
      });
    
    report += '\n';
  }
  
  // Common fixes
  report += '### Common Fixes\n\n';
  
  // Images and alt text
  if (results.summary.violations['image-alt']) {
    report += '#### Image Accessibility\n\n';
    report += '- Add descriptive alt text to all images\n';
    report += '- Use empty alt attributes (alt="") for decorative images\n';
    report += '- Ensure complex images have longer descriptions available\n\n';
  }
  
  // Color contrast
  if (results.summary.violations['color-contrast']) {
    report += '#### Color Contrast\n\n';
    report += '- Ensure text has sufficient contrast against its background\n';
    report += '- Minimum contrast ratio should be 4.5:1 for normal text and 3:1 for large text\n';
    report += '- Use tools like WebAIM Contrast Checker to verify contrast ratios\n\n';
  }
  
  // Keyboard accessibility
  if (results.summary.violations['keyboard']) {
    report += '#### Keyboard Accessibility\n\n';
    report += '- Ensure all interactive elements are keyboard accessible\n';
    report += '- Add visible focus indicators for all interactive elements\n';
    report += '- Test tab order to ensure logical navigation\n\n';
  }
  
  // ARIA
  const ariaIssues = violationsArr.filter(v => v.id.includes('aria'));
  if (ariaIssues.length > 0) {
    report += '#### ARIA Usage\n\n';
    report += '- Ensure ARIA attributes are used correctly\n';
    report += '- Prefer native HTML elements over ARIA when possible\n';
    report += '- Validate that ARIA roles match element behavior\n\n';
  }
  
  // Form accessibility
  const formIssues = violationsArr.filter(v => 
    v.id.includes('label') || 
    v.id.includes('form') || 
    v.id.includes('input')
  );
  if (formIssues.length > 0) {
    report += '#### Form Accessibility\n\n';
    report += '- Ensure all form fields have proper labels\n';
    report += '- Add descriptive error messages\n';
    report += '- Group related form elements with fieldset and legend\n';
    report += '- Ensure form validation errors are announced to screen readers\n\n';
  }
  
  // General recommendations
  report += '### General Recommendations\n\n';
  report += '- Implement regular accessibility testing in your development workflow\n';
  report += '- Conduct user testing with assistive technology users\n';
  report += '- Provide accessibility training for development and content teams\n';
  report += '- Consider adding an accessibility statement to your website\n\n';
  
  // Resources
  report += '### Resources\n\n';
  report += '- [WebAIM](https://webaim.org/)\n';
  report += '- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)\n';
  report += '- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)\n';
  report += '- [Axe Rules Documentation](https://dequeuniversity.com/rules/axe/)\n';
  
  // Save report to file
  fs.writeFileSync(REPORT_PATH, report, 'utf8');
  console.log(colors.info(`Report saved to: ${REPORT_PATH}`));
  
  return report;
}

// Main function
async function main() {
  console.log(colors.header('Starting Accessibility Check'));
  console.log(colors.info(`Base URL: ${baseUrl}`));
  console.log(colors.info(`WCAG Level: ${wcagLevel}`));
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Get and check all links
    const checkedUrls = new Set();
    const pendingUrls = new Set([baseUrl]);
    
    while (pendingUrls.size > 0 && checkedUrls.size < MAX_PAGES) {
      const url = Array.from(pendingUrls)[0];
      pendingUrls.delete(url);
      
      if (checkedUrls.has(url)) {
        continue;
      }
      
      const pageResult = await checkAccessibility(page, url);
      if (pageResult) {
        checkedUrls.add(url);
        
        // Find and add new links
        const links = await findLinks(page, baseUrl);
        for (const link of links) {
          if (!checkedUrls.has(link) && !pendingUrls.has(link)) {
            pendingUrls.add(link);
          }
        }
      }
      
      console.log(colors.info(`Checked: ${checkedUrls.size}, Pending: ${pendingUrls.size}`));
    }
    
    // Generate report
    console.log(colors.header('\nGenerating accessibility report...'));
    generateReport();
    
    // Print summary
    console.log('\n' + colors.header('ACCESSIBILITY CHECK SUMMARY'));
    console.log(colors.header('==========================='));
    console.log(`Pages checked: ${results.summary.pagesChecked}`);
    console.log(`Total violations: ${results.summary.totalViolations}`);
    console.log(`Unique violation types: ${results.summary.uniqueViolationTypes}`);
    
    console.log('\n' + colors.subheader('Violations by Impact:'));
    console.log(`Critical: ${results.summary.totalImpactCritical}`);
    console.log(`Serious: ${results.summary.totalImpactSerious}`);
    console.log(`Moderate: ${results.summary.totalImpactModerate}`);
    console.log(`Minor: ${results.summary.totalImpactMinor}`);
    
    // List top 5 most common violations
    if (results.summary.uniqueViolationTypes > 0) {
      console.log('\n' + colors.subheader('Top Issues:'));
      
      // Convert to array and sort by count
      const violationsArr = Object.entries(results.summary.violations)
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
      
      violationsArr.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.id} (${violation.impact}): ${violation.count} occurrences`);
      });
    }
    
    const hasMajorIssues = results.summary.totalImpactCritical > 0 || 
                          results.summary.totalImpactSerious > 0;
    
    if (hasMajorIssues) {
      console.log('\n' + colors.warning('Critical accessibility issues found. Please check the detailed report.'));
    } else if (results.summary.totalViolations > 0) {
      console.log('\n' + colors.warning('Some accessibility issues found. Review the report for details.'));
    } else {
      console.log('\n' + colors.success('No accessibility issues found. Great job!'));
    }
    
    console.log(colors.info(`Detailed report saved to: ${REPORT_PATH}`));
    
  } catch (error) {
    console.error(colors.error('Fatal error:'), error);
  } finally {
    await browser.close();
  }
}

// Run script
main().catch(error => {
  console.error(colors.error('Fatal error:'), error);
  process.exit(1);
}); 