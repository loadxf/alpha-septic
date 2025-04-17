import { JsonLd } from "./json-ld"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

interface ServiceSchemaProps {
  serviceName: string
  description: string
  slug: string
  image?: string
  price?: string
  priceCurrency?: string
  availability?: string
  areaServed?: string[]
  serviceCategory?: string
}

/**
 * Generates structured data for Service according to schema.org
 * Used on service pages to enhance SEO and provide clear service information
 */
export function ServiceSchema({
  serviceName,
  description,
  slug,
  image = `${SITE_URL}/images/services/default.jpg`,
  price,
  priceCurrency = "USD",
  availability = "https://schema.org/InStock",
  areaServed = BUSINESS_INFO.areaServed,
  serviceCategory = "Septic Services"
}: ServiceSchemaProps) {
  // Normalize URL
  const serviceUrl = `${SITE_URL}/${slug}`.replace(/\/\//g, '/').replace('http:/', 'https://').replace('https:/', 'https://').toLowerCase()
  
  // Build schema data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    description: description,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BUSINESS_INFO.name,
      url: SITE_URL,
      telephone: BUSINESS_INFO.telephone,
      priceRange: BUSINESS_INFO.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.addressCountry,
      },
    },
    image: image,
    category: serviceCategory,
    serviceType: serviceName,
    serviceOutput: "Functioning Septic System",
    areaServed: areaServed.map(area => ({
      "@type": "City",
      name: area
    })),
  }
  
  // Add offers data if price is provided
  if (price) {
    schema.offers = {
      "@type": "Offer",
      price,
      priceCurrency,
      availability
    }
  }

  return <JsonLd data={schema} id={`service-schema-${slug.replace(/[^a-z0-9]/gi, '')}`} />
}
