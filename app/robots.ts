import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "process.env.NEXT_PUBLIC_SITE_URL/sitemap.xml",
    host: "process.env.NEXT_PUBLIC_SITE_URL",
  }
}
