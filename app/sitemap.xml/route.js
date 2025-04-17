// Removed unused import from "next"

export async function GET() {
  try {
    // Import the default sitemap function from the sitemap.ts file
    const generateSitemap = await import('../sitemap').then(mod => mod.default)
    
    // Get the sitemap data
    const sitemapData = generateSitemap()
    
    // Convert the sitemap data to XML format
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency || 'monthly'}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    // Return the XML response
    return new Response(xmlContent, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return new Response("Error generating sitemap", { status: 500 })
  }
}
