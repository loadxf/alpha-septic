import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://callalphaseptic.com"
  
  // Core website pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-now`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
  
  // Service area pages
  const serviceAreas = [
    'austin',
    'buda',
    'bulverde',
    'cedar-park',
    'dripping-springs',
    'elgin',
    'georgetown',
    'hutto',
    'jarrell',
    'kingsland',
    'kyle',
    'leander',
    'liberty-hill',
    'manor',
    'pflugerville',
    'round-rock',
    'taylor',
  ]
  
  const serviceAreaPages = serviceAreas.map(area => ({
    url: `${baseUrl}/service-areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  // Service type pages 
  const serviceTypes = [
    'residential',
    'commercial',
    'emergency',
    'grease-trap',
    'rv-services',
    'seasonal',
  ]
  
  const servicePages = serviceTypes.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  return [
    ...corePages,
    ...serviceAreaPages,
    ...servicePages,
  ]
} 