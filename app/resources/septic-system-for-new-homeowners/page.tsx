import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, AlertTriangle, FileText, Calendar, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Septic System Guide for New Homeowners | Alpha Septic Services Austin",
  description:
    "Essential information for new homeowners with septic systems. Learn about maintenance, warning signs, and how to properly care for your septic system.",
  keywords: [
    "new homeowner septic guide",
    "septic system basics",
    "septic maintenance new home",
    "septic system care",
    "first-time septic owner",
    "septic system records",
    "septic inspection new home",
    "Austin septic system guide",
  ],
  alternates: {
    canonical: "/resources/septic-system-for-new-homeowners",
  },
}

export default function SepticSystemForNewHomeownersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Septic System for New Homeowners",
            href: "/resources/septic-system-for-new-homeowners",
            isCurrent: true,
          },
        ]}
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-900">
                Septic System Guide for New Homeowners
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Essential information to help you understand, maintain, and care for your septic system
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="prose prose-blue max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-3">Welcome to Septic System Ownership</h2>
                <p className="text-gray-700">
                  If you've recently purchased a home with a septic system and have never owned one before, you might
                  feel a bit overwhelmed. Don't worry! This guide will walk you through everything you need to know to
                  properly maintain your system and avoid costly repairs.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Understanding Your Septic System</h2>

              <div className="relative w-full h-64 md:h-80 my-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/septic-tank-diagram.webp"
                  alt="Septic system diagram showing tank and drainfield components"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mb-4">
                A septic system is an underground wastewater treatment structure that uses a combination of nature and
                technology to treat wastewater from household plumbing. Here are the basic components:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Septic Tank</h3>
                  <p className="text-gray-700">
                    A watertight container buried in the ground that receives and temporarily holds household
                    wastewater. Inside, solids separate from liquids, with heavier solids settling to form sludge and
                    lighter materials floating to form scum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Drainfield</h3>
                  <p className="text-gray-700">
                    A shallow, covered area where pretreated wastewater from the septic tank is discharged through pipes
                    for further treatment as it filters through the soil.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Distribution Box</h3>
                  <p className="text-gray-700">
                    Ensures wastewater is evenly distributed throughout the drainfield pipes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Soil</h3>
                  <p className="text-gray-700">
                    The final treatment component where remaining contaminants are removed as wastewater percolates
                    through the ground.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Essential Maintenance Tasks</h2>

              <p className="mb-4">
                Proper maintenance is crucial for the longevity and effectiveness of your septic system. Here are the
                essential tasks you should perform:
              </p>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden my-6">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Regular Pumping</h3>
                      <p className="text-gray-700">
                        Have your septic tank pumped every 3-5 years, depending on household size and usage. This
                        removes accumulated solids that can't be broken down naturally.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Inspections</h3>
                      <p className="text-gray-700">
                        Schedule professional inspections every 1-3 years to catch potential issues before they become
                        major problems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Water Conservation</h3>
                      <p className="text-gray-700">
                        Minimize water usage to prevent overloading your system. Fix leaky faucets and toilets promptly,
                        and spread out laundry loads throughout the week.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Drainfield Protection</h3>
                      <p className="text-gray-700">
                        Keep vehicles, heavy equipment, and livestock off your drainfield. Also avoid planting trees or
                        deep-rooted plants near the area.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Warning Signs of Septic Problems</h2>

              <p className="mb-4">
                Being able to identify potential issues early can save you thousands in repair costs. Watch for these
                warning signs:
              </p>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden my-6">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Slow drains or gurgling sounds</span> in multiple fixtures
                        throughout your home
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Sewage odors</span> inside your home or around your yard,
                        especially near the septic tank or drainfield
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Unusually lush, green grass</span> over the drainfield, even
                        during dry weather
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Standing water or soggy soil</span> around your septic tank or
                        over the drainfield
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Sewage backup</span> in drains, toilets, or floor drains
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg my-8 border border-red-100">
                <h3 className="text-xl font-semibold text-red-800 mb-3">When to Call a Professional Immediately</h3>
                <p className="text-gray-700 mb-4">
                  Some septic issues require immediate professional attention. Contact a septic service provider right
                  away if you notice:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Sewage backing up into your home</li>
                  <li>Standing wastewater over your drainfield</li>
                  <li>Strong sewage odors around your property</li>
                  <li>Multiple drains in your home backing up simultaneously</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Septic System Do's and Don'ts</h2>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Do's</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conserve water to reduce the load on your system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Keep accurate records of maintenance and repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Know the location of your tank and drainfield</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Direct roof drains and surface water away from your drainfield</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use septic-safe toilet paper</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Don'ts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Flush non-biodegradable items or chemicals down your drains</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Drive or park vehicles on your drainfield</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plant trees or shrubs with deep roots near your system</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use a garbage disposal excessively</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pour grease or cooking oil down your drains</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Record Keeping for Your Septic System</h2>

              <p className="mb-4">
                Maintaining good records about your septic system is essential for proper maintenance and can be
                valuable if you ever sell your home. Keep track of:
              </p>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden my-6">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">System Details</h3>
                      <p className="text-gray-700">
                        Tank size, system type, installation date, and location (a sketch or map is helpful)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Maintenance History</h3>
                      <p className="text-gray-700">
                        Dates of inspections, pumpings, and any repairs or modifications made to the system
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">Service Provider Information</h3>
                      <p className="text-gray-700">
                        Contact details for your septic service provider, inspector, and pumper
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Creating a Maintenance Schedule</h3>
                <p className="text-gray-700 mb-4">
                  Based on your household size and system type, create a regular maintenance schedule:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-900">Task</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-900">Frequency</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Inspection</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Every 1-3 years</td>
                        <td className="py-3 px-4 text-sm text-gray-700">More frequent for older systems</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Pumping</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Every 3-5 years</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Depends on household size and tank capacity</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Filter cleaning</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Annually</td>
                        <td className="py-3 px-4 text-sm text-gray-700">If your system has an effluent filter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">When to Seek Professional Help</h2>

              <p className="mb-6">
                While regular maintenance can prevent many issues, some situations require professional expertise:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">System Inspections</h3>
                  <p className="text-gray-700">
                    Always hire a licensed professional for system inspections. They have the tools and knowledge to
                    properly assess your system's condition.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Repairs or Modifications</h3>
                  <p className="text-gray-700">
                    Any repairs or modifications to your septic system should be performed by licensed professionals to
                    ensure compliance with local regulations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">System Failures</h3>
                  <p className="text-gray-700">
                    If you suspect your system is failing, contact a professional immediately. Prompt attention can
                    prevent more extensive damage.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Pumping Services</h3>
                  <p className="text-gray-700">
                    Only licensed pumpers should pump your septic tank. They know how to properly dispose of the waste
                    and can inspect for potential issues.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg my-8 border border-yellow-100">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">A Note About "Septic Additives"</h3>
                <p className="text-gray-700">
                  Many products claim to enhance septic system performance or reduce the need for pumping. However, most
                  experts agree that these additives are unnecessary and some may even harm your system by killing
                  beneficial bacteria or causing solids to be flushed into the drainfield. A properly maintained system
                  contains all the bacteria needed for effective operation.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Conclusion</h2>

              <p className="mb-4">
                Owning a home with a septic system comes with additional responsibilities, but with proper care and
                maintenance, your system can function effectively for decades. By understanding how your system works,
                following maintenance guidelines, and knowing when to call professionals, you can avoid costly repairs
                and ensure your septic system remains in good working order.
              </p>

              <p className="mb-4">
                Remember that prevention is always less expensive than repair. Establishing good habits now will save
                you money and headaches in the long run.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Need Professional Assistance?</h3>
                <p className="text-gray-700 mb-4">
                  Alpha Septic Services provides comprehensive septic system services for homeowners throughout the
                  Austin area. Whether you need an inspection, pumping, or have questions about your system, our
                  experienced team is here to help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Related Resources</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/resources/septic-system-dos-and-donts"
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                    Septic System Dos and Don'ts
                  </h3>
                  <p className="text-gray-600">Essential practices to follow and avoid for a healthy septic system.</p>
                </div>
              </Link>
              <Link
                href="/resources/septic-maintenance-guide"
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                    Septic Maintenance Guide
                  </h3>
                  <p className="text-gray-600">
                    A comprehensive guide to maintaining your septic system for optimal performance.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
