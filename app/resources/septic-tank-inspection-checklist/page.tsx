import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { HowToSchema } from "@/components/how-to-schema"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Septic Tank Inspection Checklist | Alpha Septic",
  description:
    "Comprehensive septic tank inspection checklist for homeowners and professionals. Learn what to look for during a septic system inspection.",
  alternates: {
    canonical: "https://alphaseptic.com/resources/septic-tank-inspection-checklist",
  },
}

export default function SepticTankInspectionChecklist() {
  // FAQ data for schema
  const faqs = [
    {
      question: "How often should a septic tank be inspected?",
      answer:
        "Septic tanks should be inspected at least once every 3 years by a professional. However, annual inspections are recommended for older systems or those with known issues. Some components may need more frequent checks.",
    },
    {
      question: "What are signs that my septic system needs immediate inspection?",
      answer:
        "Signs include: slow drains throughout the house, gurgling sounds in plumbing, sewage backups, foul odors around the drain field or tank, unusually lush or green grass over the drain field, standing water or soggy soil near the septic system, and sewage odors in the house.",
    },
    {
      question: "Can I inspect my septic tank myself?",
      answer:
        "While homeowners can perform basic visual inspections of the drain field area and check for obvious signs of trouble, a thorough inspection requires professional equipment and expertise. Professional inspectors can check internal components, measure sludge levels, and identify problems that aren't visible from the surface.",
    },
    {
      question: "What should I expect during a professional septic inspection?",
      answer:
        "A professional inspection typically includes: locating and accessing the tank, checking inlet and outlet baffles, measuring scum and sludge layers, inspecting the drain field, checking for leaks and cracks, testing the flow from house to tank, examining distribution boxes, and verifying proper operation of pumps and alarms (if present).",
    },
  ]

  // How-to steps for schema
  const howToSteps = [
    {
      name: "Locate your septic tank and drain field",
      text: "Use property records or a septic system map to locate your tank and drain field before inspection.",
    },
    {
      name: "Check for obvious warning signs",
      text: "Look for odors, wet spots, lush vegetation, slow drains, and backups.",
    },
    {
      name: "Inspect the tank area",
      text: "Check for proper access, damaged lids, and signs of overflow.",
    },
    {
      name: "Examine the drain field",
      text: "Look for standing water, odors, and unusual vegetation patterns.",
    },
    {
      name: "Document findings",
      text: "Record all observations, measurements, and any maintenance performed.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <EnhancedBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Septic Tank Inspection Checklist", href: "/resources/septic-tank-inspection-checklist" },
        ]}
      />

      <HowToSchema
        name="How to Inspect Your Septic System"
        description="A comprehensive guide to inspecting your septic system for proper function and maintenance needs."
        steps={howToSteps}
      />

      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Septic Tank Inspection Checklist</h1>

        <div className="mb-8 relative">
          <Image
            src="/images/septic-inspection-checklist.webp"
            alt="Septic tank inspection"
            width={800}
            height={450}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Regular septic tank inspections are crucial for maintaining your system's health and preventing costly
            repairs. This comprehensive checklist will guide homeowners through what to expect during a professional
            inspection and what you can monitor yourself between professional visits.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Why Regular Inspections Matter</h2>
            <p className="mb-4">Regular septic inspections help:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identify problems before they become emergencies</li>
              <li>Extend the life of your septic system</li>
              <li>Prevent environmental contamination</li>
              <li>Avoid costly repairs or premature system replacement</li>
              <li>Maintain property value</li>
              <li>Ensure compliance with local regulations</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Professional Inspection Checklist</h2>

          <p className="mb-4">A thorough professional inspection should include the following components:</p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-semibold">1. Tank Inspection</h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>Locate and access the septic tank</li>
                <li>Check tank lid integrity and security</li>
                <li>Measure scum and sludge layers</li>
                <li>Inspect baffles or tees at inlet and outlet</li>
                <li>Check for cracks, leaks, or structural damage</li>
                <li>Verify water level is at proper height</li>
                <li>Examine effluent filter if present</li>
                <li>Check for signs of previous backups</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-semibold">2. Drain Field Assessment</h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>Check for standing water or soggy soil</li>
                <li>Look for unusually lush or green grass</li>
                <li>Note any foul odors</li>
                <li>Inspect for soil erosion or compaction</li>
                <li>Check for encroaching tree roots</li>
                <li>Verify proper setbacks from wells, streams, and property lines</li>
                <li>Examine distribution box for level positioning and proper flow</li>
                <li>Check for evidence of drain field overload</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-semibold">3. System Component Checks</h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>Test pump operation (if system has one)</li>
                <li>Verify alarm functionality</li>
                <li>Check electrical connections and controls</li>
                <li>Inspect risers and lids for security and water-tightness</li>
                <li>Test flow from house to tank</li>
                <li>Check for proper venting</li>
                <li>Verify that all fixtures drain properly</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-semibold">4. Documentation Review</h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-6 space-y-2">
                <li>Review previous inspection reports</li>
                <li>Check maintenance records</li>
                <li>Verify system permits and approvals</li>
                <li>Review as-built drawings if available</li>
                <li>Check local compliance requirements</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Homeowner's Routine Monitoring Checklist</h2>

          <p className="mb-4">
            Between professional inspections, homeowners should regularly check for these warning signs:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg mb-2 text-primary">Inside the Home</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Slow-draining sinks, tubs, or showers</li>
                <li>Gurgling sounds in plumbing</li>
                <li>Sewage backups in toilets or drains</li>
                <li>Sewage odors indoors</li>
                <li>Multiple drains backing up simultaneously</li>
                <li>Toilets that flush slowly or need frequent plunging</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg mb-2 text-primary">Outside the Home</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Foul odors near tank or drain field</li>
                <li>Unusually lush, green grass over drain field</li>
                <li>Standing water or soggy soil near system</li>
                <li>Algae blooms in nearby ponds or lakes</li>
                <li>Exposed septic tank lids or pipes</li>
                <li>Sinkholes or depressions near system</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 relative">
            <Image
              src="/images/septic-inspection-checklist2.webp"
              alt="Septic system inspection process"
              width={800}
              height={450}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Inspection Frequency Guidelines</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left">System Type</th>
                  <th className="py-3 px-4 text-left">Recommended Inspection Frequency</th>
                  <th className="py-3 px-4 text-left">Special Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Conventional System</td>
                  <td className="py-3 px-4">Every 3 years</td>
                  <td className="py-3 px-4">More frequent if household size increases</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">System with Pump</td>
                  <td className="py-3 px-4">Annually</td>
                  <td className="py-3 px-4">Check pump, controls, and alarms</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Alternative System</td>
                  <td className="py-3 px-4">Annually or as specified by manufacturer</td>
                  <td className="py-3 px-4">Follow manufacturer's specific guidelines</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Commercial System</td>
                  <td className="py-3 px-4">Every 6-12 months</td>
                  <td className="py-3 px-4">Depends on usage volume and type</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Older System (20+ years)</td>
                  <td className="py-3 px-4">Annually</td>
                  <td className="py-3 px-4">More prone to failures and issues</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Preparing for a Professional Inspection</h2>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Before the Inspector Arrives</h3>

            <ol className="list-decimal pl-6 space-y-3">
              <li className="mb-2">
                <span className="font-semibold">Locate your septic system components</span>
                <p className="mt-1">Find and mark the location of your tank, access ports, and drain field.</p>
              </li>

              <li className="mb-2">
                <span className="font-semibold">Gather documentation</span>
                <p className="mt-1">
                  Collect any system records, previous inspection reports, and maintenance history.
                </p>
              </li>

              <li className="mb-2">
                <span className="font-semibold">Ensure access</span>
                <p className="mt-1">Clear the area around access ports and make sure they're accessible.</p>
              </li>

              <li className="mb-2">
                <span className="font-semibold">Avoid water usage</span>
                <p className="mt-1">Minimize water use before inspection to allow proper assessment of water levels.</p>
              </li>

              <li className="mb-2">
                <span className="font-semibold">Prepare questions</span>
                <p className="mt-1">Make a list of any concerns or issues you've noticed with your system.</p>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">After the Inspection</h2>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Follow-Up Actions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review the inspection report thoroughly</li>
              <li>Address any recommended repairs promptly</li>
              <li>Schedule pumping if sludge levels are high</li>
              <li>Update your maintenance records</li>
              <li>Plan for future inspections based on recommendations</li>
              <li>Implement any suggested changes to system usage habits</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Inspection Checklist Download</h2>

          <p className="mb-6">
            Want to keep track of your septic system's health between professional inspections? Download our printable
            homeowner's septic inspection checklist to help monitor your system regularly.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Need Professional Septic Inspection?</h3>
            <p className="mb-4">
              Alpha Septic offers comprehensive septic system inspections performed by certified professionals. Our
              thorough inspections help identify potential issues before they become costly problems.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Schedule an Inspection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
