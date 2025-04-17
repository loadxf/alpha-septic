// News data
const newsArticles = [
  {
    slug: "alpha-septic-expands",
    title: "Alpha Septic Services Expands to Austin area communities",
    date: "April 15, 2025",
    author: "Alpha Septic Team",
    image: "/images/septic-pumping.webp",
    excerpt: "Alpha Septic Services has expanded service area to include Cedar Park, Pflugerville, Buda, Georgetown, Jarrell, and more throughout Central Texas.",
    content: `
      <p>We're excited to announce that Alpha Septic Services has officially expanded our service area to include Cedar Park, Pflugerville, Buda, Georgetown, Jarrell, and more throughout Central Texas. This expansion is part of our ongoing commitment to provide high-quality septic services to more communities in the greater Austin area.</p>
      
      <h2>What This Means for Area Residents</h2>
      
      <p>Residents and businesses in Cedar Park can now access our full range of septic services, including:</p>
      
      <ul>
        <li>Residential septic tank pumping and cleaning</li>
        <li>Commercial septic system maintenance</li>
        <li>Emergency septic services</li>
        <li>Grease trap cleaning for restaurants and commercial kitchens</li>
        <li>Septic system inspections and evaluations</li>
      </ul>
      
      <p>Our team of experienced technicians is familiar with the unique soil conditions and septic system requirements in Central Park, ensuring that we can provide the most appropriate and effective services for your property.</p>
      
      <h2>Introductory Offers</h2>
      
      <p>To celebrate our expansion, we're offering special introductory rates for new customers in the area. Contact our office for details and to schedule your first service appointment.</p>
      
      <h2>Community Commitment</h2>
      
      <p>As we establish our presence, we're also looking forward to becoming an active part of the community. Alpha Septic Services is committed to environmental responsibility and community engagement in all the areas we serve.</p>
      
      <p>We're grateful for the opportunity to serve Central Texas and look forward to building long-lasting relationships with residents and businesses in the area.</p>
    `,
  },
]

/**
 * Get news data from the source
 * In a real app, this would fetch from a CMS or database
 */
export async function getNewsData() {
  // Simulating async behavior - in production, this would be a real API call
  return Promise.resolve(newsArticles)
} 