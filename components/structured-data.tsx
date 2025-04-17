/**
 * Structured Data Component Proxy
 * 
 * This file re-exports the StructuredData component from the app directory
 * to make imports more consistent across the application.
 */

// Import and re-export all exports from the app/structured-data.tsx file
export * from '@/app/structured-data';

// Default export for easier imports
export { StructuredData as default } from '@/app/structured-data'; 