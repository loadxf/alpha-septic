import { memo } from "react"
import Script from "next/script"

interface JsonLdProps<T = Record<string, any>> {
  data: T | T[]
  id?: string
}

/**
 * JsonLd component for rendering structured data
 * Handles both single objects and arrays of objects
 * Uses React.memo to prevent unnecessary re-renders
 * Supports generic types for better type safety
 */
export const JsonLd = memo(function JsonLd<T = Record<string, any>>({ data, id }: JsonLdProps<T>) {
  // Generate a stable ID if not provided
  const scriptId = id || `jsonld-${Math.random().toString(36).substring(2, 15)}`
  
  // Ensure data is always normalized as an array for consistent handling
  const jsonData = Array.isArray(data) ? data : [data]
  
  // Only render if we have valid data
  if (!jsonData.length) return null
  
  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      strategy="afterInteractive"
    />
  )
})

// DisplayName for better debugging
JsonLd.displayName = "JsonLd"
