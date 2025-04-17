import React from "react"
import { JsonLd } from "./json-ld"

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  primaryImageUrl?: string
  primaryImageAlt?: string
}

export function WebPageSchema({
  title,
  description,
  url,
  datePublished = "2023-01-01",
  dateModified = new Date().toISOString().split("T")[0],
  primaryImageUrl,
  primaryImageAlt,
}: WebPageSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
  }

  // Add primaryImage if provided
  if (primaryImageUrl) {
    schemaData["primaryImageOfPage"] = {
      "@type": "ImageObject",
      contentUrl: primaryImageUrl,
      description: primaryImageAlt || title,
    }
  }

  return <JsonLd data={schemaData} />
} 