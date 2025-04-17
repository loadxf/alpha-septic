import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/FAQSection"
import { faqs } from "@/data/faqs"
import { SeoMeta } from "@/components/seo-meta"
import { CanonicalURL } from "@/components/canonical-url"
import { MetaDescription } from "@/components/meta-description"

export const metadata: Metadata = {
  title: "Septic System Resources & Educational Guides | Alpha Septic Services",
  description:
    "Access our comprehensive collection of septic system resources, maintenance guides, troubleshooting tips, and educational articles for homeowners and businesses.",
  alternates: {
    canonical: "process.env.NEXT_PUBLIC_SITE_URL/resources",
  },
}

const resourceCategories = [
  {
    title: "Septic System Basics",
    resources: [
      {
        title: "Understanding Septic Systems",
        slug: "/resources/understanding-septic-systems",
        image: "/images/how-septic-systems-work.webp",
        description: "Learn the fundamentals of how septic systems work and their components.",
      },
      {
        title: "Homeowner's Guide to Septic Systems",
        slug: "/resources/understanding-septic-system-homeowners-guide",
        image: "/images/septic-tank-diagram.webp",
        description: "Essential information every homeowner should know about their septic system.",
      },
      {
        title: "Comparing Septic System Types",
        slug: "/resources/comparing-septic-system-types",
        image: "/images/compare-septic-types.webp",
        description: "Compare different types of septic systems to understand which is best for your property.",
      },
      {
        title: "Septic System vs. Sewer Comparison",
        slug: "/resources/septic-system-vs-sewer-comparison",
        image: "/images/septic-vs-sewer.webp",
        description: "Understand the differences between septic systems and municipal sewer systems.",
      },
    ],
  },
  {
    title: "Maintenance & Care",
    resources: [
      {
        title: "Septic Maintenance Guide",
        slug: "/resources/septic-maintenance-guide",
        image: "/images/septic-maintenance-guide.webp",
        description: "Regular maintenance tips to keep your septic system functioning properly.",
      },
      {
        title: "Septic Tank Pumping Frequency Guide",
        slug: "/resources/septic-tank-pumping-frequency-guide",
        image: "/images/septic-tank-pump-frequency.webp",
        description: "Learn how often you should pump your septic tank based on usage and size.",
      },
      {
        title: "Septic System Dos and Don'ts",
        slug: "/resources/septic-system-dos-and-donts",
        image: "/images/septic-dos-and-donts.webp",
        description: "Important practices to follow and avoid for septic system longevity.",
      },
      {
        title: "Septic System Lifespan Extension Tips",
        slug: "/resources/septic-system-lifespan-extension-tips",
        image: "/images/septic-tips.webp",
        description: "Strategies to extend the life of your septic system and avoid costly repairs.",
      },
    ],
  },
  {
    title: "Troubleshooting & Inspections",
    resources: [
      {
        title: "Signs Your Septic Tank Needs Pumping",
        slug: "/resources/signs-septic-tank-needs-pumping",
        image: "/images/5-signs-septic-tank-needs-pumping.webp",
        description: "Recognize the warning signs that your septic tank requires immediate pumping.",
      },
      {
        title: "Septic System Troubleshooting Guide",
        slug: "/resources/septic-system-troubleshooting-guide",
        image: "/images/septic-troubleshooting.webp",
        description: "Diagnose and address common septic system problems.",
      },
      {
        title: "Septic System Odor Troubleshooting",
        slug: "/resources/septic-system-odor-troubleshooting",
        image: "/images/septic-smell.webp",
        description: "Identify and resolve septic odor issues around your property.",
      },
      {
        title: "Septic System Inspection: What to Expect",
        slug: "/resources/septic-system-inspection-what-to-expect",
        image: "/images/septic-inspection-checklist.webp",
        description: "Prepare for a professional septic system inspection with this guide.",
      },
    ],
  },
  {
    title: "Special Topics",
    resources: [
      {
        title: "Commercial Septic System Maintenance",
        slug: "/resources/commercial-septic-system-maintenance",
        image: "/images/commercial-septic-pumping.webp",
        description: "Specialized maintenance requirements for commercial septic systems.",
      },
      {
        title: "Grease Trap Maintenance Guide for Restaurants",
        slug: "/resources/grease-trap-maintenance-guide-restaurants",
        image: "/images/grease-trap-pumping.webp",
        description: "Essential maintenance practices for restaurant grease traps.",
      },
      {
        title: "RV Septic Maintenance Tips",
        slug: "/resources/rv-septic-maintenance-tips",
        image: "/images/rv-septic-pumping.webp",
        description: "Proper care and maintenance for RV septic systems.",
      },
      {
        title: "Prepare Septic System for Winter",
        slug: "/resources/prepare-septic-system-for-winter",
        image: "/images/winter-septic-pumping.webp",
        description: "Winterization tips to protect your septic system during cold weather.",
      },
    ],
  },
  {
    title: "Emergency & Installation",
    resources: [
      {
        title: "Emergency Septic Situations",
        slug: "/resources/emergency-septic-situations",
        image: "/images/septic-emergency-pumping.webp",
        description: "Recognize and respond to septic emergencies quickly and effectively.",
      },
      {
        title: "Handle Septic Emergency: Step by Step",
        slug: "/resources/handle-septic-emergency-step-by-step",
        image: "/images/emergency-septic-pumping.webp",
        description: "Follow these steps when facing a septic system emergency.",
      },
      {
        title: "Septic System Installation Guide",
        slug: "/resources/septic-system-installation-guide",
        image: "/images/septic-tank-diagram.webp",
        description: "Understanding the process of installing a new septic system.",
      },
      {
        title: "Septic System Cost Guide",
        slug: "/resources/septic-system-cost-guide",
        image: "/images/septic-for-new-homes.webp",
        description: "Breakdown of costs associated with septic system installation and maintenance.",
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SeoMeta
        title="Septic System Resources & Educational Guides | Alpha Septic Services"
        description="Access our comprehensive collection of septic system resources, maintenance guides, troubleshooting tips, and educational articles for homeowners and businesses."
      />
      <CanonicalURL url="process.env.NEXT_PUBLIC_SITE_URL/resources" />
      <MetaDescription description="Access our comprehensive collection of septic system resources, maintenance guides, troubleshooting tips, and educational articles for homeowners and businesses." />

      <div className="container mx-auto px-4 py-8">
        <EnhancedBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Resources", path: "/resources" },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Septic System Resources</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive library of septic system resources designed to help homeowners and businesses
            understand, maintain, and troubleshoot their septic systems.
          </p>
        </div>

        {resourceCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 border-b pb-2">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <Link href={resource.slug} key={resourceIndex} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CTASection />
      <FAQSection faqs={faqs} />
    </main>
  )
}
