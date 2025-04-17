# Keyboard Navigation Testing Guide

This document provides a structured approach to test keyboard accessibility on the Alpha Septic website. Keyboard accessibility is crucial for users who cannot use a mouse, including those with motor disabilities or using screen readers.

## Prerequisites

- A desktop browser (Chrome, Firefox, Edge, or Safari)
- Keyboard

## Basic Keyboard Navigation Instructions

- **Tab**: Move forward through interactive elements
- **Shift+Tab**: Move backward through interactive elements
- **Enter/Return**: Activate buttons, links, or selected items
- **Space**: Activate buttons, checkboxes, or scroll the page
- **Arrow keys**: Navigate within components (e.g., radio buttons, select dropdowns)
- **Escape**: Close dialogs, dropdowns, or menus

## Testing Process

### 1. Focus Visibility

**Test**: Ensure the focused element is clearly visible at all times.

1. Press the Tab key repeatedly to cycle through all interactive elements.
2. Observe if there is a visible focus indicator (outline, highlight, or other visual cue).
3. Verify the focus indicator is sufficiently visible against the background.

**Expected Results**:
- Every interactive element should have a visible focus indicator.
- Focus should never disappear as you tab through the page.
- The focus indicator should have sufficient contrast against the background.

### 2. Tab Order

**Test**: Verify the tab order follows a logical sequence.

1. Start from the top of the page and tab through all interactive elements.
2. Note the sequence of focus as you tab through the page.

**Expected Results**:
- Tab order should generally follow the visual layout (top to bottom, left to right).
- Focus should not jump unpredictably across the page.
- All interactive elements should be reachable via keyboard.

### 3. Interactive Elements

**Test**: Ensure all interactive elements can be used with keyboard only.

#### 3.1 Navigation Menu

1. Tab to the main navigation menu.
2. Use Tab and arrow keys to navigate through menu items.
3. Press Enter to select a menu item.
4. If there are dropdown menus, verify they can be opened and navigated with keyboard.

#### 3.2 Forms

1. Tab to each form field.
2. Enter information using the keyboard.
3. Use Tab to move between fields.
4. Verify that you can submit the form using only the keyboard.

#### 3.3 Buttons and Links

1. Tab to buttons and links.
2. Press Enter to activate them.
3. Ensure the action is performed correctly.

#### 3.4 Custom Components

1. Tab to custom components like accordions, tabs, carousels, etc.
2. Verify you can interact with them using keyboard controls.
3. For accordions: Enter to expand/collapse.
4. For tabs: Use arrow keys to move between tabs, Enter to select.
5. For dropdowns: Enter to open, arrow keys to navigate options, Enter to select.

### 4. Modal Dialogs

**Test**: Ensure modals and dialogs are keyboard accessible.

1. Trigger a modal dialog (e.g., contact form submission confirmation).
2. Verify focus is trapped within the modal (cannot tab to elements behind it).
3. Verify you can close the modal with the Escape key.
4. After closing, verify focus returns to the triggering element.

### 5. Skip to Content

**Test**: Verify a skip link is available.

1. When the page first loads, press the Tab key once.
2. A "Skip to main content" or similar link should appear.
3. Press Enter to use this link, and verify focus moves to the main content area.

## Page-Specific Testing

Test the following pages to ensure comprehensive coverage:

### Homepage
- Navigation menu
- CTA buttons
- Service cards/links
- Contact form
- Testimonial carousel (if present)

### Services Page
- Service navigation links
- Accordions/tabs (if present)
- CTA buttons

### Contact Page
- All form controls
- Submit button
- Google Maps integration (if present)

### Blog/Resource Pages
- Article links
- Sharing buttons
- Category filters (if present)

## Reporting Issues

For each issue found, document:

1. The page where the issue was found
2. The specific element with the issue
3. The exact keyboard interaction that failed
4. Expected vs. actual behavior
5. Screenshots (if applicable)

## Common Issues to Watch For

- Missing focus indicators
- Focus trap in unexpected areas
- Interactive elements that can't be activated with keyboard
- Custom components that only work with mouse
- Hidden content that receives keyboard focus
- Modal dialogs that don't trap focus
- Missing keyboard shortcuts for complex interactions

## WCAG Success Criteria

This testing helps ensure compliance with the following WCAG criteria:

- 2.1.1 Keyboard (Level A)
- 2.1.2 No Keyboard Trap (Level A)
- 2.4.3 Focus Order (Level A)
- 2.4.7 Focus Visible (Level AA)
- 3.2.1 On Focus (Level A)

## Resources

- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [W3C Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/)
- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/) 