import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Alpha Septic Services",
  description:
    "Complete sitemap of Alpha Septic Services website with links to all our pages including services, resources, and information.",
  alternates: {
    canonical: "/sitemap-page",
  },
}

export default function SitemapPage() {
  // Define site structure for the sitemap
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about" },
        { title: "Contact Us", url: "/contact" },
        { title: "Book Now", url: "/book-now" },
        { title: "FAQ", url: "/faq" },
        { title: "Reviews", url: "/reviews" },
        { title: "Careers", url: "/careers" },
        { title: "Pricing", url: "/pricing" },
        { title: "News", url: "/news" },
      ],
    },
    {
      category: "Services",
      links: [
        { title: "All Services", url: "/services" },
        { title: "Residential Septic Services", url: "/services/residential" },
        { title: "Commercial Septic Services", url: "/services/commercial" },
        { title: "Emergency Septic Services", url: "/services/emergency" },
        { title: "Grease Trap Cleaning", url: "/services/grease-trap" },
        { title: "RV Septic Services", url: "/services/rv-services" },
        { title: "Seasonal Septic Services", url: "/services/seasonal" },
      ],
    },
    {
      category: "Service Areas",
      links: [
        { title: "Service Areas Overview", url: "/service-areas" },
        { title: "Austin", url: "/service-areas/austin" },
      ],
    },
    {
      category: "Resources",
      links: [
        { title: "Resource Library", url: "/resources" },
        { title: "Understanding Septic Systems", url: "/resources/understanding-septic-systems" },
        { title: "Signs Your Septic Tank Needs Pumping", url: "/resources/signs-septic-tank-needs-pumping" },
        { title: "Prepare Septic System for Winter", url: "/resources/prepare-septic-system-for-winter" },
        { title: "Grease Trap Maintenance Guide", url: "/resources/grease-trap-maintenance-guide-restaurants" },
        { title: "Homeowner's Septic System Guide", url: "/resources/understanding-septic-system-homeowners-guide" },
        { title: "Septic System Installation Guide", url: "/resources/septic-system-installation-guide" },
        { title: "Commercial Septic System Maintenance", url: "/resources/commercial-septic-system-maintenance" },
        { title: "Septic System Cost Guide", url: "/resources/septic-system-cost-guide" },
        { title: "Septic System Inspection Guide", url: "/resources/septic-system-inspection-what-to-expect" },
        { title: "Septic System Odor Troubleshooting", url: "/resources/septic-system-odor-troubleshooting" },
        { title: "Septic Tank Pumping Frequency Guide", url: "/resources/septic-tank-pumping-frequency-guide" },
        { title: "Septic Maintenance Guide", url: "/resources/septic-maintenance-guide" },
        { title: "Septic System Troubleshooting Guide", url: "/resources/septic-system-troubleshooting-guide" },
        { title: "Septic System Lifespan Extension Tips", url: "/resources/septic-system-lifespan-extension-tips" },
        { title: "Septic System Dos and Don'ts", url: "/resources/septic-system-dos-and-donts" },
        { title: "Common Septic System Myths Debunked", url: "/resources/common-septic-system-myths-debunked" },
        { title: "Septic System vs Sewer Comparison", url: "/resources/septic-system-vs-sewer-comparison" },
        { title: "Comparing Septic System Types", url: "/resources/comparing-septic-system-types" },
        { title: "Septic System for New Homeowners", url: "/resources/septic-system-for-new-homeowners" },
        { title: "RV Septic Maintenance Tips", url: "/resources/rv-septic-maintenance-tips" },
        { title: "Septic Tank Inspection Checklist", url: "/resources/septic-tank-inspection-checklist" },
        { title: "How to Choose a Septic Service Provider", url: "/resources/how-to-choose-septic-service-provider" },
        { title: "Emergency Septic Situations", url: "/resources/emergency-septic-situations" },
        { title: "Handle Septic Emergency Step by Step", url: "/resources/handle-septic-emergency-step-by-step" },
      ],
    },
    {
      category: "Legal",
      links: [
        { title: "Privacy Policy", url: "/privacy-policy" },
        { title: "Terms of Service", url: "/terms-of-service" },
        { title: "Accessibility", url: "/accessibility" },
      ],
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <div className="space-y-10">
        {siteStructure.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-blue">{section.category}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.url}
                    className="text-gray-700 hover:text-brand-blue hover:underline transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
