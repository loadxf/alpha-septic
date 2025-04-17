import { JsonLd } from "@/components/json-ld"

interface ArticleSchemaProps {
  headline: string
  description: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  category?: string
  tags?: string[]
}

export function ArticleSchema({
  headline,
  description,
  url = "",
  image,
  datePublished,
  dateModified,
  authorName = "Alpha Septic Services",
  category = "Septic Services",
  tags = [],
}: ArticleSchemaProps) {
  const currentDate = new Date().toISOString().split("T")[0]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image
      ? image.startsWith && image.startsWith("http")
        ? image
        : `https://CallAlphaSeptic.com${image}`
      : undefined,
    datePublished: datePublished || currentDate,
    dateModified: dateModified || currentDate,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Alpha Septic Services",
      logo: {
        "@type": "ImageObject",
        url: "https://CallAlphaSeptic.com/logo.webp",
        width: "280",
        height: "140",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url && url.startsWith && url.startsWith("http") ? url : `https://CallAlphaSeptic.com${url || ""}`,
    },
    articleSection: category,
    keywords: tags.join(", "),
  }

  return <JsonLd data={articleSchema} />
}
