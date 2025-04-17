# Scripts Directory

This directory contains utility scripts for development and deployment tasks.

## Image Optimization Scripts

Several scripts are available to help with image optimization and WebP conversion:

### 1. `optimize-images.js`

Scans for large images (>300KB) in the public directory and provides instructions for optimizing them.

Usage:
```bash
node scripts/optimize-images.js
```

### 2. `batch-optimize-images.js`

Optimizes large images (>300KB) in the public directory. It creates optimized versions with `.optimized.webp` extension.

Prerequisites:
- Requires the `sharp` package: `npm install sharp`

Usage:
```bash
node scripts/batch-optimize-images.js
```

### 3. `convert-images-to-webp.js`

Scans for non-WebP images (JPG, JPEG, PNG) in the public directory and lists them for conversion.

Usage:
```bash
node scripts/convert-images-to-webp.js
```

### 4. `create-webp-placeholders.js`

Creates simple WebP placeholder files for the remaining non-WebP images, ensuring all image references have valid WebP counterparts.

Usage:
```bash
node scripts/create-webp-placeholders.js
```

### 5. `create-service-area-placeholders.js`

Creates WebP placeholder files specifically for service area images.

Usage:
```bash
node scripts/create-service-area-placeholders.js
```

## Page Analysis Scripts

### 1. `check-page-rendering.js`

Analyzes Next.js pages to identify components that might benefit from server-side rendering (SSR) or static generation (SSG).

Usage:
```bash
node scripts/check-page-rendering.js
```

## Deployment Scripts

### 1. `pre-deployment-checklist.js`

Verifies that your Next.js application is ready for production deployment by checking common issues and best practices.

Usage:
```bash
node scripts/pre-deployment-checklist.js
```

## Best Practices for Image Optimization

1. **Use WebP format** for all images when possible
2. **Provide proper dimensions** for images to avoid layout shifts
3. **Optimize large images** to reduce page load time
4. **Use next/image component** for automatic optimization and responsive loading
5. **Lazy load** non-critical images
6. **Use the ResourcePreloader** for critical above-the-fold images 