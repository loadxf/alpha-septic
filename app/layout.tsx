import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/app/structured-data"
import { OptimizedScripts } from "@/components/optimized-scripts"
import { ResourcePreloader } from "@/components/resource-preloader"
import { validateEnvironmentVariables, validateEmailConfiguration } from "@/lib/env-validation"

// Run environment validation in production
if (process.env.NODE_ENV === 'production') {
  validateEnvironmentVariables();
  validateEmailConfiguration();
}

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

// Get site URL from environment variable or fall back to default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"

export const metadata: Metadata = {
  title: {
    default: "Alpha Septic Services | Professional Septic Services in Austin, TX",
    template: "%s | Alpha Septic Services",
  },
  description:
    "Alpha Septic Services provides professional septic tank pumping, cleaning, and maintenance services for residential and commercial properties in Austin, TX and surrounding areas.",
  keywords: [
    "septic services",
    "septic tank pumping",
    "septic maintenance",
    "grease trap cleaning",
    "commercial septic",
    "residential septic",
    "emergency septic service",
    "Austin septic company",
    "septic system repair",
    "septic inspection",
  ],
  authors: [{ name: "Alpha Septic Services" }],
  creator: "Alpha Septic Services",
  publisher: "Alpha Septic Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Alpha Septic Services | Professional Septic Services in Austin, TX",
    description:
      "Professional septic tank pumping, cleaning, and maintenance services in Austin and surrounding areas.",
    siteName: "Alpha Septic Services",
    images: [
      {
        url: "/logo.webp",
        width: 280,
        height: 140,
        alt: "Alpha Septic Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Septic Services | Professional Septic Services in Austin, TX",
    description:
      "Professional septic tank pumping, cleaning, and maintenance services in Austin and surrounding areas.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LVnzFQn8Cq4oS9XACJZvq-aJT9T6-fZP4foT59hEsI4",
    yandex: "verification_token",
    yahoo: "verification_token",
    other: {
      me: ["justin@loadxlogistics.com"],
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0055b8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Use ResourcePreloader component for optimized resource loading */}
        <ResourcePreloader 
          resources={[
            { href: "/logo.webp", as: "image" },
            { href: "/images/services/austin-septic-services.webp", as: "image" }
          ]}
          fonts={[
            { family: "Inter", weight: "400,500,600,700", style: "normal" }
          ]}
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <SimpleHeader />
        <main>{children}</main>
        <Footer />
        <OptimizedScripts />
      </body>
    </html>
  )
}