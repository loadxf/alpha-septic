import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Septic System Troubleshooting Guide | Alpha Septic Services Austin TX",
  description:
    "Comprehensive guide to diagnosing and resolving common septic system problems. Learn how to identify issues and when to call a professional.",
  keywords: [
    "septic troubleshooting",
    "septic system problems",
    "septic tank issues",
    "septic system repair",
    "septic system diagnosis",
    "septic system backup",
    "septic odor",
    "slow drains",
    "Austin septic repair",
  ],
  alternates: {
    canonical: "/resources/septic-system-troubleshooting-guide",
  },
}

export default function SepticSystemTroubleshootingGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Septic System Troubleshooting Guide",
            href: "/resources/septic-system-troubleshooting-guide",
            isCurrent: true,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Septic System Troubleshooting Guide
                </h1>
                <p className="text-xl text-blue-100">
                  Identify and resolve common septic system issues before they become major problems
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    Schedule Service
                  </Button>
                </Link>
                <Link href="/services/emergency">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                    Emergency Service
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/septic-troubleshooting.webp"
                alt="Septic system troubleshooting"
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
                Understanding Septic System Problems
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Septic system issues can range from minor inconveniences to major emergencies. This guide will help you
                identify common problems, understand their causes, and determine whether you can resolve them yourself
                or need professional assistance.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-yellow-800">Important Safety Notice</h3>
                  <p className="text-sm text-gray-700">
                    Never enter a septic tank or attempt to open septic tank lids without proper training and equipment.
                    Septic tanks contain toxic gases that can be fatal. Always call a professional for issues requiring
                    tank access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems and Solutions */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Common Problems & Solutions
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn how to identify and address the most frequent septic system issues
              </p>
            </div>

            {/* Problem 1: Slow Drains */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-xl text-blue-900">Problem: Slow Drains Throughout the House</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Full septic tank requiring pumping</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Clogged inlet baffle or filter</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Blockage in the main drain line</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Drain field issues or saturation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Solutions:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduce water usage temporarily</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule professional septic tank pumping</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Have drain lines professionally inspected and cleaned</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Request effluent filter cleaning if applicable</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900">When to Call a Professional:</h4>
                      <p className="text-sm text-gray-700">
                        If multiple drains in your home are slow, this indicates a system-wide issue rather than a
                        localized clog. Contact a septic professional for an inspection, especially if it's been more
                        than 3-5 years since your last pumping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2: Foul Odors */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-xl text-blue-900">Problem: Foul Odors Inside or Outside the Home</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Dry P-traps in rarely used drains</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Damaged or improperly sealed toilet wax ring</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Vent pipe blockage or damage</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Septic tank leaks or full tank</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Drain field failure</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Solutions:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Run water in unused fixtures to refill P-traps</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Replace toilet wax ring if needed</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Have vent pipes inspected and cleared</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule septic tank inspection and pumping</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Have drain field evaluated by a professional</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900">When to Call a Professional:</h4>
                      <p className="text-sm text-gray-700">
                        If running water in unused fixtures doesn't resolve indoor odors, or if you notice persistent
                        outdoor odors near your septic tank or drain field, contact a septic professional immediately.
                        Outdoor odors often indicate a serious system issue requiring expert attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3: Sewage Backup */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-red-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-xl text-red-900">Problem: Sewage Backup into Home</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Completely full septic tank</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Major blockage in main sewer line</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Drain field failure</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Septic tank structural damage</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Pump failure (if system has one)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Immediate Actions:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Stop using all water in the home immediately</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Call for emergency septic service</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Avoid contact with sewage (health hazard)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Keep children and pets away from affected areas</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Document damage for insurance purposes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-900">EMERGENCY - Call Immediately:</h4>
                      <p className="text-sm text-gray-700">
                        Sewage backup is a serious health hazard and emergency situation. Contact our 24/7 emergency
                        service at{" "}
                        <a href="tel:5127937867" className="font-bold text-red-700">
                          512-793-7867
                        </a>{" "}
                        for immediate assistance. Do not attempt to clean up sewage without proper protective equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 4: Wet Spots in Yard */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-xl text-blue-900">Problem: Wet Spots or Standing Water in Yard</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Drain field saturation or failure</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Broken distribution box</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Damaged pipes between tank and drain field</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Hydraulic overload (excessive water use)</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>High groundwater table or poor soil drainage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Solutions:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduce water usage significantly</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule professional inspection of drain field</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Have distribution box checked and repaired if needed</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Consider drain field rejuvenation services</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Divert surface water away from drain field area</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900">When to Call a Professional:</h4>
                      <p className="text-sm text-gray-700">
                        Wet spots or standing water over your drain field area indicate a potentially serious issue with
                        your septic system. This requires professional evaluation as it may involve drain field repairs
                        or replacement. Contact a septic professional promptly, especially if the wet areas have an
                        odor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 5: Gurgling Sounds */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-xl text-blue-900">Problem: Gurgling Sounds in Plumbing</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Possible Causes:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Partial blockage in drain lines</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Vent pipe blockage</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Full septic tank</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>Improper plumbing slope</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Solutions:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Check and clean roof vent pipes</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Schedule professional drain line cleaning</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Have septic tank inspected and pumped if needed</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Consult with plumber about pipe slope issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900">When to Call a Professional:</h4>
                      <p className="text-sm text-gray-700">
                        Gurgling sounds often precede more serious drainage problems. If you hear consistent gurgling
                        from multiple drains, especially after addressing potential vent pipe issues, contact a septic
                        professional to inspect your system before the problem worsens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs. Professional */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                DIY vs. Professional Repairs
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding when to tackle an issue yourself and when to call in the experts
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4">Safe DIY Tasks</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Conserving water usage</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Reducing water consumption to give your system time to recover
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Clearing simple drain clogs</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Using a plunger or drain snake for isolated fixture clogs
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Refilling dry P-traps</span>
                      <p className="text-sm text-gray-600 mt-1">Running water in unused fixtures to eliminate odors</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Inspecting for visible leaks</span>
                      <p className="text-sm text-gray-600 mt-1">Checking exposed plumbing for drips or moisture</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Diverting surface water</span>
                      <p className="text-sm text-gray-600 mt-1">Redirecting rainwater away from your drain field</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">Call a Professional For</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Any tank access or inspection</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Never open septic tank lids or attempt to access the tank
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Sewage backups</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Requires immediate professional attention and proper cleanup
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Multiple slow drains</span>
                      <p className="text-sm text-gray-600 mt-1">Indicates system-wide issues beyond simple clogs</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Drain field problems</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Wet spots, odors, or unusually lush grass over drain field
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Persistent odors</span>
                      <p className="text-sm text-gray-600 mt-1">Ongoing sewage smells inside or outside your home</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
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
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">The Cost of Delay</h3>
                  <p className="text-gray-700 mb-4">
                    While it might be tempting to postpone septic system repairs, delays often lead to more extensive
                    damage and significantly higher repair costs. A minor issue that might cost a few hundred dollars to
                    fix can quickly escalate to thousands if left unaddressed. Prompt attention to septic problems is
                    always the most cost-effective approach.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/book-now">
                      <Button className="bg-yellow-600 hover:bg-yellow-700">Schedule Inspection</Button>
                    </Link>
                    <Link href="/services">
                      <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                        View Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Maintenance */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Preventive Maintenance Tips
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The best way to avoid septic problems is through regular maintenance and proper usage habits
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Regular Pumping</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Schedule regular septic tank pumping every 3-5 years depending on household size and usage patterns.
                  Regular pumping prevents solids buildup that can lead to system failure.
                </p>
                <Link href="/resources/septic-tank-pumping-frequency-guide">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Pumping Guide
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Water Conservation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conserve water to prevent overloading your system. Fix leaks promptly, install water-efficient
                  fixtures, and spread out water-intensive activities like laundry throughout the week.
                </p>
                <Link href="/resources/septic-system-lifespan-extension-tips">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Conservation Tips
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Proper Disposal</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Never flush non-biodegradable items, chemicals, grease, or oils. These can clog your system, kill
                  beneficial bacteria, and cause premature system failure.
                </p>
                <Link href="/resources/septic-system-dos-and-donts">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Dos and Don'ts
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Drain Field Protection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Protect your drain field by avoiding driving or parking on it, keeping trees and deep-rooted plants
                  away, and diverting rainwater runoff from the area.
                </p>
                <Link href="/resources/septic-system-lifespan-extension-tips">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Regular Inspections</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Schedule professional inspections annually to catch potential issues before they become major
                  problems. Regular inspections can significantly extend your system's lifespan.
                </p>
                <Link href="/resources/septic-system-inspection-what-to-expect">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Inspection Guide
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">Maintenance Records</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Keep detailed records of all septic system maintenance, inspections, and repairs. These records are
                  valuable for future service needs and can increase your property value.
                </p>
                <Link href="/resources/septic-maintenance-guide">
                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Maintenance Guide
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
              When in Doubt, Call the Experts
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              While this troubleshooting guide can help you identify common septic issues, remember that septic systems
              are complex and potentially dangerous to work with. When in doubt, it's always best to consult with a
              professional septic service provider like Alpha Septic Services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/book-now">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Service
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

              <Link href="/resources/septic-maintenance-guide" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-maintenance-guide.webp"
                      alt="Septic Maintenance Guide"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      Septic Maintenance Guide
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Comprehensive maintenance schedule and tips to keep your septic system running smoothly.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/signs-septic-tank-needs-pumping" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/5-signs-septic-tank-needs-pumping.webp"
                      alt="Signs Your Septic Tank Needs Pumping"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      Signs Your Septic Tank Needs Pumping
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Learn to recognize the warning signs that indicate your septic tank requires immediate attention.
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
    </div>
  )
}
