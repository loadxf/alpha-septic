# Alpha Septic Website Accessibility Checklist

This document tracks the accessibility improvements needed for the Alpha Septic Website to meet WCAG 2.1 AA standards.

## Keyboard Navigation

- [ ] Ensure all interactive elements are keyboard accessible
- [ ] Verify focus indicators are visible on all interactive elements
- [ ] Test tab order for logical sequence
- [ ] Implement skip navigation links
- [ ] Ensure keyboard traps are avoided
- [ ] Verify dropdown menus are keyboard operable

## ARIA and Semantic Structure

- [ ] Use proper semantic HTML elements (header, nav, main, footer, etc.)
- [ ] Implement proper ARIA labels on interactive elements
- [ ] Ensure form fields have associated labels
- [ ] Add ARIA landmarks for screen readers
- [ ] Verify ARIA roles are correctly implemented
- [ ] Check that dynamic content changes are announced to screen readers

## Color and Contrast

- [ ] Verify text color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- [ ] Ensure color is not the only means of conveying information
- [ ] Check focus indicator contrast
- [ ] Test site usability in grayscale mode
- [ ] Verify form field contrast with surrounding elements

## Images and Media

- [ ] Add alt text to all informative images
- [ ] Use empty alt attributes for decorative images
- [ ] Provide transcripts for audio content
- [ ] Add captions for video content
- [ ] Ensure no content flashes more than 3 times per second
- [ ] Verify media controls are accessible

## Text and Typography

- [ ] Ensure text is resizable up to 200% without loss of content
- [ ] Use relative units (rem, em) instead of absolute units (px)
- [ ] Verify line height is at least 1.5 times the font size
- [ ] Check paragraph spacing is at least 2 times the font size
- [ ] Ensure letter spacing is adequate for readability

## Forms and Validation

- [ ] Ensure all form fields have associated labels
- [ ] Implement proper error messages for form validation
- [ ] Make sure error messages are announced to screen readers
- [ ] Verify required fields are clearly indicated
- [ ] Check that form validation doesn't rely solely on color
- [ ] Test form submission with keyboard only

## Structure and Navigation

- [ ] Implement proper heading hierarchy (H1, H2, H3, etc.)
- [ ] Ensure page titles are descriptive and unique
- [ ] Verify link text is descriptive (avoid "click here")
- [ ] Provide breadcrumb navigation where appropriate
- [ ] Ensure tables have proper headers and captions
- [ ] Test site with screen reader navigation

## Responsive Design

- [ ] Verify content is accessible at 320px width
- [ ] Ensure text spacing can be adjusted without content loss
- [ ] Check that all functionality works at 200% zoom
- [ ] Verify content reflows rather than requiring horizontal scrolling
- [ ] Test touch targets are at least 44px by 44px on mobile

## Testing

- [ ] Test with screen readers (NVDA, JAWS, VoiceOver)
- [ ] Verify keyboard-only navigation
- [ ] Check color contrast with automated tools
- [ ] Test with browser accessibility extensions
- [ ] Conduct testing with actual users with disabilities if possible 