import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import {
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Clock,
  CalendarClock,
  FileText,
  Utensils,
  Trash2,
  Droplets,
  Scale,
  ClipboardCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Grease Trap Maintenance for Restaurants | Alpha Septic Services",
  description:
    "Learn how proper grease trap maintenance can prevent costly backups, keep your restaurant compliant with local regulations, and protect the environment.",
}

export default function GreaseTrapMaintenanceGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grease-trap.webp')] bg-cover bg-center"></div>
        </div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="space-y-4">
              <Link
                href="/resources"
                className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
              >
                <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
                Back to Resources
              </Link>
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Complete Guide to Grease Trap Maintenance for Restaurants
              </h1>
              <p className="text-xl text-blue-100 md:text-2xl max-w-2xl mx-auto">
                Keep your kitchen running smoothly and avoid costly plumbing emergencies with proper grease trap
                maintenance
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-4">In This Guide:</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href="#why-important"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <AlertTriangle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Why Maintenance Matters</span>
                </a>
                <a
                  href="#cleaning-schedule"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <CalendarClock className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Cleaning Schedule</span>
                </a>
                <a
                  href="#best-practices"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Best Practices</span>
                </a>
                <a href="#compliance" className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <FileText className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Regulatory Compliance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
              <Image
                src="/images/grease-trap.webp"
                alt="Restaurant grease trap maintenance"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 text-lg font-medium">
                  Regular grease trap maintenance is essential for restaurant operations and environmental protection
                </p>
              </div>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 id="why-important" className="text-2xl font-bold text-blue-900 flex items-center gap-2 scroll-mt-24">
                <AlertTriangle className="h-6 w-6 text-blue-700" />
                Why Grease Trap Maintenance Matters
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p>
                  Grease traps are essential components in restaurant kitchens, designed to prevent fats, oils, and
                  grease (FOG) from entering the municipal sewer system. When properly maintained, they protect both
                  your business and the environment from serious problems.
                </p>
                <p className="mb-0">
                  However, neglected grease traps can lead to costly issues including backed-up drains, foul odors,
                  health code violations, and even temporary business closures. Regular maintenance isn't just good
                  practice—it's essential for your restaurant's operation and reputation.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 my-8">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Consequences of Poor Maintenance</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Sewer backups and kitchen drain clogs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Health code violations and potential fines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Foul odors affecting customer experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Environmental damage to local waterways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Expensive emergency plumbing services</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Benefits of Regular Maintenance</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Prevents costly plumbing emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ensures compliance with local regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Extends the life of your plumbing system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Protects the environment from harmful waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Maintains a clean, odor-free kitchen environment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2
                id="cleaning-schedule"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <CalendarClock className="h-6 w-6 text-blue-700" />
                Establishing a Cleaning Schedule
              </h2>

              <p>
                The frequency of grease trap cleaning depends on several factors, including your restaurant's size,
                menu, and volume of business. However, there are some general guidelines to follow:
              </p>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm my-8">
                <div className="bg-blue-100 p-4">
                  <h3 className="text-xl font-bold text-blue-900 m-0">Recommended Cleaning Frequency</h3>
                </div>
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                        <Utensils className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Fast Food Restaurants</h4>
                        <p className="mb-0">Every 1-2 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                        <Utensils className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Full-Service Restaurants</h4>
                        <p className="mb-0">Every 2-4 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                        <Utensils className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Pizza Restaurants</h4>
                        <p className="mb-0">Every 4-6 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                        <Utensils className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Coffee Shops/Cafes</h4>
                        <p className="mb-0">Every 6-8 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <Clock className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-amber-800 font-bold text-xl mt-0 mb-2">The 25% Rule</h3>
                    <p className="text-amber-700 mb-0">
                      A common industry standard is the "25% Rule" — your grease trap should be cleaned when the
                      combined thickness of the floating grease layer and bottom solids layer equals 25% of the total
                      liquid depth. Many local health departments and municipalities enforce this standard.
                    </p>
                  </div>
                </div>
              </div>

              <h2
                id="best-practices"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <CheckCircle className="h-6 w-6 text-blue-700" />
                Best Practices for Grease Trap Maintenance
              </h2>

              <div className="grid gap-6 md:grid-cols-2 my-8">
                {/* Practice 1 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Trash2 className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">Proper Waste Disposal</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Train staff to scrape food waste into trash bins before washing dishes. Install drain screens to
                      catch food particles. Never pour grease, oil, or food scraps down the drain.
                    </p>
                  </div>
                </div>

                {/* Practice 2 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Droplets className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">Water Temperature</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Use cold water when rinsing dishes with grease residue. Hot water dissolves grease temporarily,
                      but it will solidify later in your pipes or grease trap, causing blockages.
                    </p>
                  </div>
                </div>

                {/* Practice 3 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Scale className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">Regular Monitoring</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Assign a staff member to regularly check the grease trap's fill level. This helps you determine if
                      your current cleaning schedule is adequate or needs adjustment.
                    </p>
                  </div>
                </div>

                {/* Practice 4 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <ClipboardCheck className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">Record Keeping</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Maintain detailed records of all grease trap cleanings, including dates, service provider
                      information, and waste disposal documentation. These records are often required for health
                      inspections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Professional vs. DIY Cleaning</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Professional Cleaning</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Complete removal of all waste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Proper disposal of grease waste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Inspection of trap components</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Documentation for regulatory compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No mess or odor in your kitchen</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">DIY Cleaning Risks</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Improper waste disposal violations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Incomplete cleaning leading to issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Exposure to harmful bacteria and gases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Potential damage to trap components</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Lack of proper documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2
                id="compliance"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <FileText className="h-6 w-6 text-blue-700" />
                Regulatory Compliance
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p className="mb-4">
                  Most municipalities have specific regulations regarding grease trap maintenance for food service
                  establishments. Non-compliance can result in significant fines and even business closure. Common
                  requirements include:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Minimum Cleaning Frequency</h4>
                      <p className="mb-0">
                        Many jurisdictions specify how often grease traps must be cleaned based on size and usage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Record Keeping</h4>
                      <p className="mb-0">
                        Maintaining cleaning logs and waste disposal manifests, typically for 3-5 years.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Proper Waste Disposal</h4>
                      <p className="mb-0">
                        Using licensed waste haulers who dispose of grease waste at approved facilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Inspections</h4>
                      <p className="mb-0">
                        Allowing periodic inspections by local health department or wastewater authority officials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-amber-800 font-bold text-xl mt-0 mb-2">Local Regulations Vary</h3>
                    <p className="text-amber-700 mb-0">
                      Contact your local wastewater authority or health department to understand the specific
                      requirements for your area. Alpha Septic Services can also help you navigate these regulations and
                      ensure your restaurant remains compliant.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-12">Conclusion</h2>
              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <p className="mb-4">
                  Proper grease trap maintenance is an essential aspect of restaurant operations. By establishing a
                  regular cleaning schedule, implementing best practices, and ensuring regulatory compliance, you can
                  avoid costly plumbing emergencies, maintain a clean kitchen environment, and protect both your
                  business and the environment.
                </p>
                <p className="mb-0">
                  Alpha Septic Services offers professional grease trap cleaning and maintenance services tailored to
                  your restaurant's specific needs. Our experienced technicians ensure thorough cleaning, proper waste
                  disposal, and complete documentation for your records.
                </p>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your Grease Trap Service?</h3>
                <p className="text-blue-100 mb-6">
                  Our professional team provides thorough grease trap cleaning with proper disposal and complete
                  documentation for your regulatory compliance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-now">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 w-full">
                      Schedule Grease Trap Service
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
