import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { HowToSchema } from "@/components/how-to-schema"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "How to Choose a Septic Service Provider | Alpha Septic",
  description:
    "Learn how to select the right septic service provider for your needs. Essential tips for finding reliable, qualified septic system professionals.",
  alternates: {
    canonical: "https://alphaseptic.com/resources/how-to-choose-septic-service-provider",
  },
}

export default function HowToChooseSepticServiceProvider() {
  // FAQ data for schema
  const faqs = [
    {
      question: "What certifications should a septic service provider have?",
      answer:
        "Look for providers with state-specific septic installer or maintainer licenses, NAWT (National Association of Wastewater Technicians) certification, and local health department approvals. Additional certifications like NEHA (National Environmental Health Association) credentials are also valuable.",
    },
    {
      question: "How much should septic services cost?",
      answer:
        "Costs vary based on service type, system size, and location. Standard pumping typically ranges from $300-$600, inspections from $200-$400, and repairs from $500-$5,000+ depending on complexity. Always get multiple written estimates and be wary of prices significantly lower than average, as they may indicate corner-cutting.",
    },
    {
      question: "How often should I have my septic tank pumped?",
      answer:
        "Most residential septic tanks need pumping every 3-5 years, but this varies based on household size, tank capacity, and usage patterns. A professional can provide a customized schedule after assessing your system. Regular inspections every 1-3 years can help determine when pumping is necessary.",
    },
    {
      question: "What's the difference between a septic pumper and a full-service provider?",
      answer:
        "A septic pumper primarily empties septic tanks, while a full-service provider offers comprehensive services including inspections, repairs, installations, maintenance, and troubleshooting. For routine pumping, either may suffice, but for system problems or comprehensive care, a full-service provider with technical expertise is preferable.",
    },
  ]

  // How-to steps for schema
  const howToSteps = [
    {
      name: "Verify credentials and licensing",
      text: "Check that the provider has proper state licenses, certifications, and insurance.",
    },
    {
      name: "Research reputation and reviews",
      text: "Look for online reviews, ask for references, and check with the Better Business Bureau.",
    },
    {
      name: "Compare services and expertise",
      text: "Ensure they offer the specific services you need and have experience with your system type.",
    },
    {
      name: "Get detailed written estimates",
      text: "Request itemized quotes from multiple providers to compare costs and included services.",
    },
    {
      name: "Ask about emergency services",
      text: "Confirm availability for emergency situations and response times.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <EnhancedBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "How to Choose a Septic Service Provider", href: "/resources/how-to-choose-septic-service-provider" },
        ]}
      />

      <HowToSchema
        name="How to Choose a Septic Service Provider"
        description="A comprehensive guide to selecting the right septic system service provider for your needs."
        steps={howToSteps}
      />

      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">How to Choose a Septic Service Provider</h1>

        <div className="mb-8 relative">
          <Image
            src="/images/septic-pumping.webp"
            alt="Professional septic service"
            width={800}
            height={450}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Selecting the right septic service provider is crucial for maintaining your system's health and longevity. A
            qualified professional can help prevent costly repairs and ensure your septic system functions properly for
            years to come. This guide will help you make an informed decision when choosing a septic service provider.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Essential Qualifications to Look For</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-xl mb-3 text-primary">Licensing & Certification</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>State-specific septic installer/maintainer license</li>
                <li>NAWT (National Association of Wastewater Technicians) certification</li>
                <li>Local health department approvals</li>
                <li>Continuing education credits</li>
                <li>NEHA (National Environmental Health Association) credentials</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-xl mb-3 text-primary">Insurance & Bonding</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Liability insurance (minimum $1 million recommended)</li>
                <li>Workers' compensation insurance</li>
                <li>Bonding for larger projects</li>
                <li>Vehicle and equipment insurance</li>
                <li>Pollution insurance for environmental protection</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Researching Potential Providers</h2>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Where to Find Reputable Providers</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Online Resources</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>NAWT member directory</li>
                  <li>Local health department referrals</li>
                  <li>Better Business Bureau</li>
                  <li>Online review platforms (Google, Yelp, Angi)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Personal Recommendations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Neighbors with septic systems</li>
                  <li>Local real estate agents</li>
                  <li>Home inspector referrals</li>
                  <li>Community social media groups</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Questions to Ask Potential Providers</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <span className="font-semibold">How long have you been in business?</span>
                <p className="mt-1 text-gray-700">
                  Look for established companies with at least 5+ years of experience.
                </p>
              </li>

              <li>
                <span className="font-semibold">Do you have experience with my specific type of septic system?</span>
                <p className="mt-1 text-gray-700">
                  Different systems (conventional, aerobic, mound, etc.) require different expertise.
                </p>
              </li>

              <li>
                <span className="font-semibold">Can you provide references from customers with similar systems?</span>
                <p className="mt-1 text-gray-700">
                  Check references to verify quality of work and customer satisfaction.
                </p>
              </li>

              <li>
                <span className="font-semibold">What specific services do you offer?</span>
                <p className="mt-1 text-gray-700">
                  Ensure they provide the services you need (pumping, inspection, repairs, installation).
                </p>
              </li>

              <li>
                <span className="font-semibold">Do you provide a written report after service?</span>
                <p className="mt-1 text-gray-700">
                  Documentation is important for your records and future service needs.
                </p>
              </li>

              <li>
                <span className="font-semibold">How do you handle waste disposal?</span>
                <p className="mt-1 text-gray-700">
                  Ensure they follow proper legal disposal methods at approved facilities.
                </p>
              </li>

              <li>
                <span className="font-semibold">Do you offer emergency services? What are your response times?</span>
                <p className="mt-1 text-gray-700">Important for urgent situations like backups or system failures.</p>
              </li>

              <li>
                <span className="font-semibold">What warranties or guarantees do you offer?</span>
                <p className="mt-1 text-gray-700">
                  Understand what protections you have if issues arise after service.
                </p>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Red Flags to Watch For</h2>

          <div className="bg-red-50 p-6 rounded-lg shadow-sm mb-8">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold">Significantly lower prices than competitors</span>
                <p className="mt-1">This often indicates cutting corners or incomplete service.</p>
              </li>

              <li>
                <span className="font-semibold">Reluctance to provide license information</span>
                <p className="mt-1">All legitimate providers should readily share their credentials.</p>
              </li>

              <li>
                <span className="font-semibold">No written estimates or contracts</span>
                <p className="mt-1">Always get service details and costs in writing before proceeding.</p>
              </li>

              <li>
                <span className="font-semibold">Pressure to make immediate decisions</span>
                <p className="mt-1">Reputable companies give you time to consider options.</p>
              </li>

              <li>
                <span className="font-semibold">Recommending unnecessary services</span>
                <p className="mt-1">Get second opinions for major repairs or replacements.</p>
              </li>

              <li>
                <span className="font-semibold">No proof of insurance</span>
                <p className="mt-1">This puts you at risk if accidents or damage occur on your property.</p>
              </li>

              <li>
                <span className="font-semibold">Poor reviews or unresolved complaints</span>
                <p className="mt-1">Check multiple sources for consistent feedback patterns.</p>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Understanding Service Costs</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left">Service Type</th>
                  <th className="py-3 px-4 text-left">Typical Cost Range</th>
                  <th className="py-3 px-4 text-left">Factors Affecting Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Septic Tank Pumping</td>
                  <td className="py-3 px-4">$300 - $600</td>
                  <td className="py-3 px-4">Tank size, accessibility, disposal fees</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Septic Inspection</td>
                  <td className="py-3 px-4">$200 - $400</td>
                  <td className="py-3 px-4">System complexity, inspection depth</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Minor Repairs</td>
                  <td className="py-3 px-4">$500 - $1,500</td>
                  <td className="py-3 px-4">Part costs, labor, accessibility</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Major Repairs</td>
                  <td className="py-3 px-4">$1,500 - $5,000+</td>
                  <td className="py-3 px-4">Extent of damage, system components</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">System Replacement</td>
                  <td className="py-3 px-4">$5,000 - $25,000+</td>
                  <td className="py-3 px-4">System type, size, site conditions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Cost-Saving Tips</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Get multiple written estimates before committing</li>
              <li>Ask about package deals for combined services</li>
              <li>Inquire about maintenance plans for regular customers</li>
              <li>Schedule non-emergency service during off-peak seasons</li>
              <li>Ensure proper system maintenance to avoid costly repairs</li>
              <li>Ask if the company offers financing options for major work</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Types of Septic Service Providers</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-primary">Pumping Specialists</h3>
              <p className="mb-3">Focus primarily on emptying septic tanks and basic maintenance.</p>
              <p className="text-sm text-gray-600">Best for: Routine pumping and basic maintenance</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-primary">Repair Technicians</h3>
              <p className="mb-3">Specialize in diagnosing and fixing septic system problems.</p>
              <p className="text-sm text-gray-600">Best for: Troubleshooting and system repairs</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-primary">Full-Service Providers</h3>
              <p className="mb-3">Offer comprehensive services from installation to maintenance and repairs.</p>
              <p className="text-sm text-gray-600">Best for: Complete system care and complex needs</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Building a Long-Term Relationship</h2>

          <p className="mb-4">
            Finding a reliable septic service provider is just the beginning. Establishing a long-term relationship
            offers several benefits:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>They become familiar with your specific system's history and needs</li>
            <li>Consistent maintenance approach leads to better system performance</li>
            <li>Priority service during busy seasons or emergencies</li>
            <li>Potential discounts for loyal customers</li>
            <li>Proactive recommendations based on your system's performance over time</li>
          </ul>

          <div className="bg-primary/5 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Alpha Septic?</h3>
            <p className="mb-4">
              At Alpha Septic, we pride ourselves on meeting all the criteria of an excellent septic service provider:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fully licensed, certified, and insured professionals</li>
              <li>Years of experience with all types of septic systems</li>
              <li>Transparent pricing with detailed written estimates</li>
              <li>Comprehensive service offerings from inspection to installation</li>
              <li>24/7 emergency response for critical situations</li>
              <li>Detailed documentation and maintenance recommendations</li>
              <li>Environmentally responsible waste disposal practices</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us for Service
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Conclusion</h2>
          <p className="mb-6">
            Choosing the right septic service provider is an important decision that affects your property's value, your
            family's health, and the environment. By following these guidelines and doing thorough research, you can
            find a qualified professional who will help maintain your septic system properly for years to come.
          </p>

          <p className="mb-6">
            Remember that the cheapest option is rarely the best choice when it comes to septic services. Investing in
            quality service now can save you thousands in repairs later.
          </p>
        </div>
      </div>
    </main>
  )
}
