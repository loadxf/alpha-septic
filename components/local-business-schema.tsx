import { JsonLd } from "./json-ld"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

interface LocalBusinessSchemaProps {
  // Only override fields if needed
  businessName?: string
  slug?: string
  description?: string
  telephone?: string
  priceRange?: string
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
  latitude?: number
  longitude?: number
  areaServed?: string | string[]
  serviceRadius?: number
  businessStatus?: "OpenNow" | "ClosedNow" | "ClosedTemporarily" | "ClosedPermanently"
  logo?: string
  openingHours?: {
    days: string[]
    opens: string
    closes: string
  }[]
  sameAs?: string[]
  reviews?: {
    author: string
    rating: number
    date: string
    text: string
  }[]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
  hasMap?: string
}

/**
 * Generates structured data for LocalBusiness according to schema.org
 * Uses centralized business configuration with optional overrides
 */
export function LocalBusinessSchema({
  businessName,
  slug,
  description,
  telephone,
  priceRange,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
  latitude,
  longitude,
  areaServed,
  serviceRadius,
  businessStatus = "OpenNow",
  logo,
  openingHours,
  sameAs,
  reviews,
  aggregateRating,
  hasMap
}: LocalBusinessSchemaProps) {
  // Format business name with location if available
  const formattedBusinessName = 
    businessName || (slug && slug !== "home" 
      ? `${BUSINESS_INFO.name} - ${slug.split('/').pop()?.charAt(0).toUpperCase()}${slug.split('/').pop()?.slice(1)}` 
      : BUSINESS_INFO.name)
  
  // Normalize URL formatting
  const url = slug 
    ? `${SITE_URL}/${slug.toLowerCase()}`.replace(/\/+/g, '/').replace(/:\//g, '://') 
    : SITE_URL
  
  // Base schema
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: formattedBusinessName,
    image: logo || BUSINESS_INFO.logo,
    "@id": url,
    url: url,
    telephone: telephone || BUSINESS_INFO.telephone,
    priceRange: priceRange || BUSINESS_INFO.priceRange,
    businessStatus: businessStatus,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress || BUSINESS_INFO.address.streetAddress,
      addressLocality: addressLocality || BUSINESS_INFO.address.addressLocality,
      addressRegion: addressRegion || BUSINESS_INFO.address.addressRegion,
      postalCode: postalCode || BUSINESS_INFO.address.postalCode,
      addressCountry: addressCountry || BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude || BUSINESS_INFO.geo.latitude,
      longitude: longitude || BUSINESS_INFO.geo.longitude,
    },
    description: description || BUSINESS_INFO.description,
  }
  
  // Add opening hours
  const effectiveOpeningHours = openingHours || BUSINESS_INFO.openingHours
  if (effectiveOpeningHours && effectiveOpeningHours.length > 0) {
    schema.openingHoursSpecification = effectiveOpeningHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    }))
  }
  
  // Add area served
  const effectiveAreaServed = areaServed || BUSINESS_INFO.areaServed
  if (effectiveAreaServed) {
    if (typeof effectiveAreaServed === 'string') {
      schema.areaServed = {
        "@type": "City",
        name: effectiveAreaServed,
      }
    } else if (Array.isArray(effectiveAreaServed)) {
      schema.areaServed = effectiveAreaServed.map(area => ({
        "@type": "City",
        name: area,
      }))
    }
  }
  
  // Add social profiles and external citations
  const effectiveSameAs = sameAs || BUSINESS_INFO.sameAs
  if (effectiveSameAs && effectiveSameAs.length > 0) {
    schema.sameAs = effectiveSameAs
  }
  
  // Add reviews if available
  if (reviews && reviews.length > 0) {
    schema.review = reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5"
      },
      datePublished: review.date,
      reviewBody: review.text
    }))
  }
  
  // Add aggregate rating if available
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue.toString(),
      reviewCount: aggregateRating.reviewCount.toString(),
      bestRating: "5"
    }
  }
  
  // Add Google Maps URL if available
  const effectiveHasMap = hasMap || BUSINESS_INFO.hasMap
  if (effectiveHasMap) {
    schema.hasMap = effectiveHasMap
  } else if (effectiveAreaServed) {
    // Generate a Google Maps URL from the first area served
    const areaForMap = typeof effectiveAreaServed === 'string' ? effectiveAreaServed : effectiveAreaServed[0];
    schema.hasMap = `https://www.google.com/maps/place/${encodeURIComponent(areaForMap)}`;
  }

  // Add service radius if available
  if (serviceRadius) {
    schema.serviceArea = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: latitude || BUSINESS_INFO.geo.latitude,
        longitude: longitude || BUSINESS_INFO.geo.longitude,
      },
      geoRadius: serviceRadius,
    }
  }

  return <JsonLd data={schema} />
}
