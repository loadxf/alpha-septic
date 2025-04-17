import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, AlertTriangle, Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Septic Maintenance Guide | Alpha Septic Services Austin TX",
  description:
    "Comprehensive guide to maintaining your septic system for optimal performance and longevity. Learn about regular pumping, inspections, and best practices.",
  keywords: [
    "septic maintenance",
    "septic system care",
    "septic tank maintenance",
    "septic system longevity",
    "septic tank pumping",
    "septic inspection",
    "Austin septic maintenance",
    "septic system best practices",
  ],
  alternates: {
    canonical: "/resources/septic-maintenance-guide",
  },
}

export default function SepticMaintenanceGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Septic Maintenance Guide", href: "/resources/septic-maintenance-guide", isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Septic System Maintenance Guide
                </h1>
                <p className="text-xl text-blue-100">
                  Keep your septic system running efficiently with our expert maintenance tips and schedule
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    Schedule Maintenance
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                    Ask an Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/septic-maintenance-guide.webp"
                alt="Septic system maintenance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Why Septic Maintenance Matters
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Regular maintenance is crucial for the health and longevity of your septic system. A well-maintained
                septic system not only functions efficiently but also prevents costly repairs, protects property value,
                and safeguards the environment and your family's health.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row items-center">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Extends system lifespan</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Prevents costly failures</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Protects property value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Recommended Maintenance Schedule
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow this timeline to keep your septic system in optimal condition
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Monthly Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-xl text-blue-900">Monthly</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Check for slow drains or unusual odors</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Monitor water usage to prevent system overload</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Inspect yard for wet spots or unusually lush grass</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quarterly Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-xl text-blue-900">Quarterly</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Check toilet and plumbing fixtures for leaks</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Clean effluent filter if your system has one</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Inspect drain field for proper drainage</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Annual Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-xl text-blue-900">Annually</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Schedule professional inspection</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Check tank levels and condition</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Inspect all mechanical components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pumping Schedule */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-blue-600 p-4">
                <h3 className="font-bold text-xl text-white">Recommended Pumping Schedule</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Household Size</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Tank Size (gallons)</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Pumping Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">1-2 people</td>
                        <td className="border border-gray-200 px-4 py-2">1,000</td>
                        <td className="border border-gray-200 px-4 py-2">Every 3-5 years</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2">3-4 people</td>
                        <td className="border border-gray-200 px-4 py-2">1,000</td>
                        <td className="border border-gray-200 px-4 py-2">Every 2-3 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">5+ people</td>
                        <td className="border border-gray-200 px-4 py-2">1,000</td>
                        <td className="border border-gray-200 px-4 py-2">Every 1-2 years</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2">1-2 people</td>
                        <td className="border border-gray-200 px-4 py-2">1,500</td>
                        <td className="border border-gray-200 px-4 py-2">Every 4-6 years</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">3-4 people</td>
                        <td className="border border-gray-200 px-4 py-2">1,500</td>
                        <td className="border border-gray-200 px-4 py-2">Every 3-4 years</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2">5+ people</td>
                        <td className="border border-gray-200 px-4 py-2">1,500</td>
                        <td className="border border-gray-200 px-4 py-2">Every 2-3 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Note: These are general guidelines. Actual pumping frequency may vary based on usage patterns and
                  system condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Best Practices */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Septic System Maintenance Best Practices
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these guidelines to ensure your septic system operates efficiently for years to come
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Do's */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4">Do's</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Conserve water to reduce system strain</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fix leaky faucets and running toilets promptly</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Spread laundry loads throughout the week</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Keep accurate records of maintenance and pumping</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Know the location of your septic tank and drain field</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Use septic-safe toilet paper</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Schedule regular professional inspections</span>
                  </li>
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">Don'ts</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Flush non-biodegradable items or chemicals</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Pour grease or oil down the drain</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Drive or park vehicles over the drain field</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Plant trees or deep-rooted plants near the system</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Use excessive amounts of water in a short period</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Use septic additives without professional advice</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Ignore warning signs of system failure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Warning Signs of Septic System Problems
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be alert to these indicators that your septic system may need immediate attention
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Slow Drains</h3>
                </div>
                <p className="text-gray-600">
                  Multiple slow-draining fixtures throughout your home could indicate a septic system backup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Foul Odors</h3>
                </div>
                <p className="text-gray-600">
                  Persistent sewage smells inside or outside your home may indicate a leak or system failure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Pooling Water</h3>
                </div>
                <p className="text-gray-600">
                  Unexplained wet areas or standing water around the drain field suggest the system isn't absorbing
                  wastewater properly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Unusually Lush Grass</h3>
                </div>
                <p className="text-gray-600">
                  Extremely green, fast-growing grass over the drain field can indicate a leak providing extra
                  "fertilizer."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Gurgling Sounds</h3>
                </div>
                <p className="text-gray-600">
                  Unusual noises from pipes, drains, or toilets can indicate a blockage or ventilation issue in the
                  system.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg">Sewage Backup</h3>
                </div>
                <p className="text-gray-600">
                  The most severe sign - wastewater backing up into drains, tubs, or toilets requires immediate
                  professional attention.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full mt-1">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-red-800">When to Call a Professional Immediately</h3>
                  <p className="mt-2 text-gray-700">
                    If you notice any of these warning signs, don't wait. Contact Alpha Septic Services right away to
                    prevent more extensive damage and costly repairs. Our emergency response team is available 24/7 to
                    address urgent septic issues.
                  </p>
                  <div className="mt-4">
                    <Link href="/services/emergency">
                      <Button className="bg-red-600 hover:bg-red-700">Emergency Septic Services</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Maintenance */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Professional Maintenance Services
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                While homeowner maintenance is important, some tasks should be left to the professionals
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Regular Professional Services</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Septic Tank Pumping</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Removes accumulated solids to prevent system overload and failure
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">System Inspection</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Comprehensive evaluation of all components to identify potential issues
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Effluent Filter Cleaning</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Ensures proper filtration and prevents solids from entering the drain field
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Baffle Inspection</span>
                      <p className="text-sm text-gray-500 mt-1">
                        Checks critical components that prevent solids from flowing into the drain field
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">What to Expect During a Professional Service</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium">System Location and Access</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      The technician will locate and access your septic tank, often by digging to expose the lid
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Inspection</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      Visual assessment of tank condition, water levels, and all components
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Pumping</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      Complete removal of liquids, solids, and sludge from the tank
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Component Cleaning</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      Cleaning of filters, baffles, and other accessible components
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Final Inspection</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      Post-service check to ensure everything is functioning properly
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Documentation</span>
                    <p className="text-sm text-gray-500 mt-1 pl-6">
                      Detailed report of service performed and system condition
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/septic-pump-truck.webp"
                      alt="Alpha Septic Services maintenance truck"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Our Maintenance Services</h3>
                  <p className="text-gray-700 mb-4">
                    Alpha Septic Services offers comprehensive maintenance packages tailored to your specific septic
                    system. Our certified technicians use state-of-the-art equipment and follow industry best practices
                    to ensure your system operates at peak efficiency.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/book-now">
                      <Button className="bg-blue-600 hover:bg-blue-700">Schedule Maintenance</Button>
                    </Link>
                    <Link href="/services">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Record Keeping */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Maintenance Record Keeping
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Maintaining detailed records of your septic system is essential for proper care and can increase your
                property value
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">What to Document</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">System Specifications</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Tank size, type, installation date, manufacturer information
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Service History</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Dates of pumping, inspections, repairs, and maintenance
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">System Map</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Diagram showing tank location, drain field, and system components
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Service Provider Information</span>
                    <p className="text-sm text-gray-500 mt-1">Contact details for your septic service company</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Warranty Information</span>
                    <p className="text-sm text-gray-500 mt-1">Details of any warranties on components or services</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-lg text-blue-900">Benefits of Record Keeping</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Helps plan for future maintenance</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Identifies patterns in system performance</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Valuable information for future homeowners</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>May be required for home sales or inspections</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-lg text-blue-900">Our Record Keeping Service</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Alpha Septic Services offers a digital record keeping service for our maintenance customers. We
                  maintain detailed service records and provide you with access to your system's maintenance history.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Invest in Your Septic System's Future
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Regular maintenance is a small investment that prevents costly repairs and system failures. By following
              this maintenance guide and partnering with Alpha Septic Services, you can ensure your septic system
              operates efficiently for decades to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/book-now">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Maintenance
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Related Resources</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore more guides to help you maintain your septic system
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/resources/septic-system-dos-and-donts" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-dos-and-donts.webp"
                      alt="Septic System Dos and Don'ts"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      Septic System Dos and Don'ts
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Essential practices to follow and avoid for maintaining a healthy septic system.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/septic-system-lifespan-extension-tips" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-tips.webp"
                      alt="Septic System Lifespan Extension Tips"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      Septic System Lifespan Extension Tips
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Practical advice to help extend the life of your septic system and avoid costly replacements.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/septic-system-troubleshooting-guide" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-troubleshooting.webp"
                      alt="Septic System Troubleshooting Guide"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      Septic System Troubleshooting Guide
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      A comprehensive guide to diagnosing and resolving common septic system problems.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
