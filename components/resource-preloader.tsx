import React from "react"
import Script from "next/script"

interface ResourcePreloaderProps {
  resources?: {
    href: string
    as: "image" | "style" | "script" | "font" | "fetch"
    type?: string
    crossOrigin?: string
    media?: string
  }[]
  fonts?: {
    family: string
    weight?: string
    style?: string
    display?: "auto" | "block" | "swap" | "fallback" | "optional"
  }[]
}

/**
 * ResourcePreloader component
 * - Preloads critical resources to improve LCP and FID
 * - Optimizes font loading with display=swap
 * - Prevents render-blocking resources
 * - Updated to work with App Router
 */
export function ResourcePreloader({
  resources = [],
  fonts = [],
}: ResourcePreloaderProps) {
  const criticalResources = [
    // Default critical resources
    { href: "/logo.webp", as: "image" as const },
    { href: "/images/services/austin-septic-services.webp", as: "image" as const },
    ...(resources || []),
  ]

  const fontDisplay = fonts.length > 0 
    ? fonts.map(font => {
        const { family, weight = "400", style = "normal", display = "swap" } = font
        return `
          @font-face {
            font-family: ${family};
            font-weight: ${weight};
            font-style: ${style};
            font-display: ${display};
          }
        `
      }).join("\n")
    : ""

  return (
    <>
      {/* Preload critical resources */}
      {criticalResources.map((resource, index) => (
        <link 
          key={`preload-${index}`}
          rel="preload" 
          href={resource.href}
          as={resource.as}
          type={resource.type}
          crossOrigin={resource.crossOrigin}
          media={resource.media}
        />
      ))}

      {/* Optimize font loading if fonts are provided */}
      {fonts.length > 0 && (
        <style dangerouslySetInnerHTML={{ __html: fontDisplay }} />
      )}
    </>
  )
} 