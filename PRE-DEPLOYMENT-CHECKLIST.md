# Pre-Deployment Checklist

## Performance
- [ ] Run Lighthouse audit and address critical issues
- [ ] Optimize images using Next.js Image component
- [ ] Verify lazy loading for below-the-fold content
- [ ] Check bundle size with `next/bundle-analyzer`
- [ ] Ensure proper caching headers are configured
- [ ] Remove unused CSS/JS

## Quality Assurance
- [ ] Run `npm run typecheck` to verify TypeScript types
- [ ] Run `npm run lint` to ensure code quality
- [ ] Test all forms with valid and invalid inputs
- [ ] Verify all links work correctly with link-checker.js
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on multiple devices (Desktop, Tablet, Mobile)
- [ ] Test with slow network connections

## SEO
- [ ] Verify all pages have proper meta tags
- [ ] Check robots.txt is properly configured
- [ ] Ensure sitemap.xml is updated and valid
- [ ] Verify canonical URLs are set correctly
- [ ] Check JSON-LD structured data is valid
- [ ] Test social media preview cards

## Security
- [ ] Ensure all environment variables are properly set
- [ ] Verify API routes have proper validation
- [ ] Check for exposed sensitive information
- [ ] Set up Content Security Policy
- [ ] Configure proper CORS settings
- [ ] Review permissions in Docker setup

## Accessibility
- [ ] Run accessibility audit with Lighthouse
- [ ] Ensure proper alt text for all images
- [ ] Check color contrast meets WCAG standards
- [ ] Verify keyboard navigation works properly
- [ ] Test with screen readers

## Infrastructure
- [ ] Update Docker configuration if needed
- [ ] Verify CI/CD pipeline is working
- [ ] Check production environment variables
- [ ] Set up monitoring and error tracking
- [ ] Test backup and restore procedures
- [ ] Configure proper logging

## Final Steps
- [ ] Run production build locally: `npm run build && npm run start`
- [ ] Verify everything works in production mode
- [ ] Test deployment in staging environment
- [ ] Update documentation if necessary
- [ ] Conduct final review with stakeholders 