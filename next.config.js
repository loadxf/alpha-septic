/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Enable production output for Docker deployment
  output: 'standalone',
  // Optimize for production
  poweredByHeader: false,
  compress: true,
  // Handle trailing slashes consistently
  trailingSlash: false,
  
  // Add polyfills for older browsers
  webpack: (config, { isServer, dev }) => {
    // Only apply polyfills in client-side production builds
    if (!isServer && !dev) {
      // Add core-js polyfills
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
          entries['main.js'].unshift('./polyfills.js');
        }
        
        return entries;
      };
    }
    
    return config;
  },
}

module.exports = nextConfig 