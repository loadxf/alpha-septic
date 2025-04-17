"use client"

import { JsonLd } from "./json-ld"

interface BreadcrumbSchemaProps {
  items: {
    name: string
    item: string
  }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  // Ensure all URLs are lowercase
  const normalizedItems = items.map(item => ({
    name: item.name,
    item: item.item.toLowerCase()
  }));
  
  // Build the schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalizedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }

  return <JsonLd data={schema} />
}
