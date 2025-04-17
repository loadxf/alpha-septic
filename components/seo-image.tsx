import Image from "next/image"
import { JsonLd } from "./json-ld"

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  locationName?: string
  description?: string
  caption?: string
  geoCoordinates?: {
    latitude: number
    longitude: number
  }
  includeSchema?: boolean
  datePublished?: string
  license?: string
  creator?: string
}

export function SEOImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  locationName,
  description,
  caption,
  geoCoordinates,
  includeSchema = true,
  datePublished,
  license = "https://creativecommons.org/licenses/by/4.0/",
  creator = "Alpha Septic Services"
}: SEOImageProps) {
  // Enhance alt text with location data if present
  const enhancedAlt = locationName ? `${alt} in ${locationName}` : alt;
  
  // Enhanced description with location and service type
  const enhancedDescription = description || enhancedAlt;
  
  // Format the full image URL with domain
  const fullImageUrl = src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_SITE_URL}${src}`;
  
  // Create schema for the image if requested
  const imageSchema = includeSchema ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: enhancedAlt,
    contentUrl: fullImageUrl,
    description: enhancedDescription,
    caption: caption,
    width: width.toString(),
    height: height.toString(),
    ...(datePublished && { datePublished }),
    license,
    creator: {
      "@type": "Organization",
      name: creator
    },
    ...(geoCoordinates && {
      contentLocation: {
        "@type": "Place",
        name: locationName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: geoCoordinates.latitude,
          longitude: geoCoordinates.longitude
        }
      }
    })
  } : null;
  
  return (
    <>
      <figure className={className}>
        <Image
          src={src}
          alt={enhancedAlt}
          width={width}
          height={height}
          priority={priority}
          className="rounded-md"
        />
        {caption && <figcaption className="text-sm text-gray-500 mt-1">{caption}</figcaption>}
      </figure>
      {includeSchema && imageSchema && <JsonLd data={imageSchema} />}
    </>
  )
} 