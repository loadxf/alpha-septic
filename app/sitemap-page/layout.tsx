import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Alpha Septic Services",
  description: "Complete sitemap of Alpha Septic Services website with links to all our pages and resources.",
  alternates: {
    canonical: "https://CallAlphaSeptic.com/sitemap-page",
  },
  openGraph: {
    title: "Sitemap | Alpha Septic Services",
    description: "Complete sitemap of Alpha Septic Services website with links to all our pages and resources.",
    url: "https://CallAlphaSeptic.com/sitemap-page",
    type: "website",
  },
}

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
