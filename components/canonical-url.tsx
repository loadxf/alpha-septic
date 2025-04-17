"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface CanonicalProps {
  path?: string
}

export function CanonicalUrl({ path }: CanonicalProps) {
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.callalphaseptic.com"
  const canonicalUrl = path ? `${baseUrl}${path}` : `${baseUrl}${pathname}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

// Add alias export for backward compatibility
export const CanonicalURL = CanonicalUrl
