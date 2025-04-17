import { AUSTIN_LOCAL_CITATIONS } from "@/lib/local-citations"
import { BUSINESS_INFO, SITE_URL } from "@/lib/config"

interface BacklinkManagerProps {
  location?: string
  showOutreachTemplate?: boolean
}

/**
 * BacklinkManager component
 * - Generates structured backlink outreach templates
 * - Maintains NAP consistency across platforms
 * - Creates location-specific backlink strategies
 */
export function BacklinkManager({
  location = "Austin",
  showOutreachTemplate = false
}: BacklinkManagerProps) {
  // Filter citations by location if specified
  const locationCitations = location 
    ? AUSTIN_LOCAL_CITATIONS.filter(citation => 
        citation.name.includes(location) || 
        citation.url.toLowerCase().includes(location.toLowerCase())
      )
    : AUSTIN_LOCAL_CITATIONS

  // Build standardized NAP information for consistent citations
  const napInfo = {
    name: BUSINESS_INFO.name,
    address: `${BUSINESS_INFO.address.streetAddress}, ${BUSINESS_INFO.address.addressLocality}, ${BUSINESS_INFO.address.addressRegion} ${BUSINESS_INFO.address.postalCode}`,
    phone: BUSINESS_INFO.telephone,
    website: SITE_URL,
    description: BUSINESS_INFO.description,
    businessType: "Septic Services",
    services: BUSINESS_INFO.services.map(s => s.name).join(", "),
    hours: "Monday-Friday: 8am-6pm, Saturday: 9am-2pm",
    logo: BUSINESS_INFO.logo,
    yearEstablished: BUSINESS_INFO.foundingDate?.split("-")[0] || "2015"
  }

  // Generate outreach email template
  const outreachTemplate = `
Dear [Contact Name],

I'm reaching out from ${napInfo.name}, a professional septic service company serving the ${location} area. We've been established since ${napInfo.yearEstablished} and provide ${napInfo.services}.

I noticed your directory/website is a valuable resource for ${location} residents searching for septic services. We'd like to be included in your listings to help local homeowners find reliable septic services.

Here's our business information for your directory:

Business Name: ${napInfo.name}
Address: ${napInfo.address}
Phone: ${napInfo.phone}
Website: ${napInfo.website}
Business Description: ${napInfo.description}
Hours: ${napInfo.hours}
Services: ${napInfo.services}

Please let me know if you need any additional information or have questions.

Thank you for your consideration,
[Your Name]
${napInfo.name}
${napInfo.phone}
  `.trim()

  if (!showOutreachTemplate) {
    return null
  }

  return (
    <div className="backlink-manager">
      <h3>Local Citation Strategy for {location}</h3>
      <p>Target websites for backlink outreach:</p>
      <ul>
        {locationCitations.map((citation, index) => (
          <li key={index}>
            <a href={citation.url} target="_blank" rel="noopener noreferrer">
              {citation.name} ({citation.type})
            </a>
          </li>
        ))}
      </ul>

      <div className="outreach-template">
        <h4>Standardized Outreach Email Template</h4>
        <pre className="p-4 bg-gray-100 rounded text-sm whitespace-pre-wrap">
          {outreachTemplate}
        </pre>
      </div>
    </div>
  )
} 