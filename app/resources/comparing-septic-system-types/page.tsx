import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparing Septic System Types | Alpha Septic Services Austin TX",
  description:
    "Comprehensive comparison of different septic system types including conventional, aerobic, mound, chamber, and alternative systems. Find the best option for your property.",
  keywords: [
    "septic system types",
    "conventional septic system",
    "aerobic septic system",
    "mound septic system",
    "chamber septic system",
    "drip distribution septic",
    "cluster septic system",
    "evapotranspiration septic",
    "constructed wetland septic",
    "sand filter septic",
    "septic system comparison",
    "best septic system",
    "Austin septic installation",
    "septic system selection",
  ],
  alternates: {
    canonical: "/resources/comparing-septic-system-types",
  },
}

export default function ComparingSepticSystemTypesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Comparing Septic System Types",
            href: "/resources/comparing-septic-system-types",
            isCurrent: true,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comparing Septic System Types
                </h1>
                <p className="text-xl text-blue-100 max-w-[600px]">
                  Find the ideal septic system for your property, soil conditions, and budget with our comprehensive
                  guide
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/compare-septic-types.webp"
                alt="Different septic system types comparison"
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
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Understanding Your Septic System Options
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choosing the right septic system for your property is a significant decision that affects your home's
                wastewater management for decades. Different septic system types offer varying benefits and limitations
                based on your property's soil conditions, available space, budget, and local regulations.
              </p>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This guide compares the most common septic system types to help you make an informed decision for your
                property's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conventional Septic Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Conventional Septic Systems
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The traditional and most common septic system design
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200">
                <Image
                  src="/images/conventional-septic-diagram.webp"
                  alt="Conventional septic system diagram showing septic tank, distribution box, and drain field"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Conventional septic systems consist of a septic tank and a drain field (leach field). Wastewater flows
                  from your home into the septic tank, where solids settle to the bottom forming sludge, while oils and
                  greases float to the top creating a scum layer. The clarified liquid in the middle (effluent) flows
                  out to the drain field, where it's naturally filtered by soil before returning to the groundwater.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Lower installation cost</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Simple, passive operation</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No electricity required</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Lower maintenance needs</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Long lifespan (30+ years)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires suitable soil conditions</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Needs significant drain field space</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Not suitable for high water tables</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Less effective in clay or rocky soils</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Limited treatment of wastewater</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties with adequate space, good soil percolation, low water tables, and moderate usage
                    patterns. Ideal for single-family homes in rural or suburban areas with suitable soil conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aerobic Treatment Units */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Aerobic Treatment Units (ATUs)
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Advanced systems that use oxygen to enhance treatment
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Aerobic Treatment Units introduce oxygen into the treatment process using an air pump or compressor.
                  This oxygen supports aerobic bacteria that break down waste more efficiently than the anaerobic
                  bacteria in conventional systems. ATUs typically have multiple chambers: a trash tank for initial
                  settling, an aeration chamber where oxygen is introduced, and a clarifying chamber where final
                  settling occurs before the treated effluent is discharged to a smaller drain field.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Superior wastewater treatment</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Smaller drain field required</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Works in poor soil conditions</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Can handle higher usage</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Better for environmentally sensitive areas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher installation cost</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires electricity</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>More maintenance required</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Regular inspections needed</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher operating costs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties with limited space, poor soil conditions, high water tables, or in environmentally
                    sensitive areas. Good for homes with higher occupancy or water usage. Often required in areas where
                    conventional systems aren't permitted due to environmental regulations.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200 order-1 lg:order-2">
                <Image
                  src="/images/aerobic-septic-system-diagram.webp"
                  alt="Aerobic treatment unit diagram showing air pump, chambers, and treatment process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mound Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Mound Systems</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Elevated drain fields for challenging site conditions
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200">
                <Image
                  src="/images/mound-septic-system.webp"
                  alt="Mound septic system showing elevated drain field with sand and gravel layers"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Mound systems are designed for areas with shallow soil depth, high groundwater, or slowly permeable
                  soils. After wastewater leaves the septic tank, it's pumped to a constructed sand mound above the
                  natural soil surface. The mound contains a distribution network embedded in a layer of gravel, which
                  is covered by sand and then soil. The sand provides additional treatment as the effluent percolates
                  through before reaching the natural soil.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Works in high water table areas</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Suitable for shallow bedrock sites</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Effective in clay or poorly draining soils</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Additional treatment through sand filtration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher installation cost</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires more land area</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Visually prominent on property</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires a pump (uses electricity)</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>More complex maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties with high water tables, shallow bedrock, or clay soils where conventional systems would
                    fail. Often used in areas where the soil between the drain field and groundwater or bedrock is
                    insufficient for proper treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamber Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Chamber Systems</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Modern alternatives to traditional gravel drain fields
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Chamber systems replace the traditional gravel in drain fields with a series of connected plastic
                  chambers. These chambers create large open spaces for wastewater to flow into the soil. Wastewater
                  from the septic tank flows into these chambers and directly contacts the soil through openings in the
                  chamber walls and open bottoms. The soil then filters the effluent as it would in a conventional
                  system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Faster, easier installation</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reduced excavation needs</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No gravel required</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Increased storage capacity</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Often allows reduced drain field size</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher material costs</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Still requires suitable soil</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Not ideal for all soil types</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Potential for structural damage</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties where reduced drain field footprint is beneficial, areas with limited access for heavy
                    equipment, or sites where gravel is expensive or difficult to obtain. Good for installations where
                    minimizing site disruption is important.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200 order-1 lg:order-2">
                <Image
                  src="/images/chamber-septic-diagram.webp"
                  alt="Chamber septic system showing plastic chamber components in drain field"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drip Distribution Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Drip Distribution Systems
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Precision wastewater distribution for shallow soil applications
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200">
                <Image
                  src="/images/drip-distribution-septic.webp"
                  alt="Drip distribution septic system showing network of drip tubing for effluent distribution"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Drip distribution systems use a network of small, flexible tubing with tiny emitters to slowly release
                  treated effluent into the soil. The wastewater first passes through the septic tank and then typically
                  through an additional treatment component before being pumped through the drip tubing. This system
                  distributes the effluent evenly and at a controlled rate, allowing for optimal soil absorption and
                  treatment even in challenging soil conditions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Works in shallow soil depths</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Precise distribution of effluent</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Minimal site disruption</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Can be installed in irregular areas</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Excellent for sloped sites</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher installation cost</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires electricity for pumps</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>More complex components</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Regular maintenance required</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Potential for clogging</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties with shallow soils, irregular lot shapes, or sloped terrain. Also excellent for sites
                    where minimal disruption to the landscape is desired or where precise control of effluent
                    distribution is needed to protect sensitive environmental areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sand Filter Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Sand Filter Systems</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Advanced filtration for superior treatment in challenging conditions
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Sand filter systems use layers of sand and other media to provide additional treatment of septic tank
                  effluent. Wastewater from the septic tank is pumped to a distribution system that applies it to the
                  surface of the sand filter. As the effluent percolates through the sand, physical, biological, and
                  chemical processes remove contaminants. The treated effluent is then collected at the bottom of the
                  filter and either discharged to a drain field or further treatment system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Excellent treatment quality</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Works in poor soil conditions</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Smaller drain field required</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Reliable performance</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Good for environmentally sensitive areas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher installation cost</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires electricity</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Regular maintenance needed</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>More complex design</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires more space than ATUs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties with poor soil conditions, high water tables, or near sensitive water bodies where higher
                    treatment levels are required. Sand filters are often used in areas with strict environmental
                    regulations or where conventional systems have failed.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200 order-1 lg:order-2">
                <Image
                  src="/images/sand-filter-septic-diagram.webp"
                  alt="Sand filter septic system showing filtration layers and treatment process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constructed Wetland Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Constructed Wetland Systems
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Natural treatment using plants and microorganisms
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200">
                <Image
                  src="/images/constructed-wetland-septic-system.webp"
                  alt="Constructed wetland septic system showing plant-based treatment process"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Constructed wetland systems mimic natural wetlands to treat wastewater. After initial treatment in a
                  septic tank, the effluent flows into a lined basin filled with gravel, sand, and wetland plants. As
                  the wastewater moves through this engineered ecosystem, a combination of physical filtration,
                  microbial breakdown, and plant uptake removes contaminants. The treated effluent then flows to a drain
                  field or may be clean enough for surface discharge in some jurisdictions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Environmentally friendly</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Low energy requirements</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Aesthetically pleasing</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Excellent pollutant removal</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Wildlife habitat creation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires significant space</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />\
                        <span>Performance varies with seasons</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Plant maintenance required</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>May attract mosquitoes</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Less common, may face regulatory hurdles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Environmentally conscious property owners with adequate space who want a sustainable, natural
                    treatment system. Ideal for rural properties where the wetland can be incorporated into the
                    landscape design. Works well in warmer climates where plant growth is consistent year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evapotranspiration Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Evapotranspiration Systems
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Zero-discharge systems for arid climates and sensitive areas
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Evapotranspiration (ET) systems are designed for areas where discharge to soil is not feasible or
                  permitted. These systems consist of a watertight basin filled with layers of gravel and sand. Effluent
                  from the septic tank is distributed throughout the basin, where it moves upward through capillary
                  action. The water then evaporates from the surface or is transpired through plants growing in the top
                  layer. In pure ET systems, no wastewater percolates into the soil.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Works in impermeable soils</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No groundwater contamination risk</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Ideal for environmentally sensitive areas</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No drain field required</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Simple operation with few moving parts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Only works in arid climates</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires large surface area</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Performance varies with weather</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher construction costs</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>May need backup system for wet periods</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Properties in arid regions with high evaporation rates and low rainfall. Particularly suitable for
                    areas with shallow bedrock, high groundwater, or near sensitive water bodies where zero discharge to
                    soil is preferred or required by regulations.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200 order-1 lg:order-2">
                <Image
                  src="/images/evapotranspiration-bed-septic.webp"
                  alt="Evapotranspiration septic system showing water evaporation and plant transpiration process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster Systems */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Cluster Systems</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Shared wastewater treatment for multiple properties
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[350px] overflow-hidden rounded-xl shadow-md border border-gray-200">
                <Image
                  src="/images/cluster-septic-system-diagram.webp"
                  alt="Cluster septic system serving multiple homes with shared treatment components"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
                <p className="text-gray-700">
                  Cluster systems collect wastewater from multiple homes or buildings and treat it at a centralized
                  location. Each property typically has its own septic tank for primary treatment, with the effluent
                  then flowing to a shared treatment and dispersal system. The communal component can utilize any of the
                  treatment technologies mentioned previously, but at a larger scale. This approach combines the
                  benefits of individual septic systems with the economies of scale found in municipal systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-900 mb-3">Advantages</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Cost-sharing among multiple users</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Professional management possible</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Can use optimal soil conditions</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Allows development of challenging sites</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>More reliable than individual systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-900 mb-3">Limitations</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires cooperation among owners</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Needs legal agreements</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>More complex management</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Requires easements for shared components</span>
                      </li>
                      <li className="flex gap-3">
                        <ArrowRight className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Higher initial coordination costs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">Best For:</h4>
                  <p className="text-gray-700">
                    Small subdivisions, closely grouped homes, or communities where individual systems would be
                    challenging or cost-prohibitive. Ideal for developments where homes are on small lots but a larger
                    common area is available for the shared treatment system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">System Comparison</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Side-by-side comparison of key factors for each septic system type
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">System Type</th>
                    <th className="px-6 py-4 text-left">Cost Range</th>
                    <th className="px-6 py-4 text-left">Maintenance</th>
                    <th className="px-6 py-4 text-left">Lifespan</th>
                    <th className="px-6 py-4 text-left">Space Required</th>
                    <th className="px-6 py-4 text-left">Best Soil Types</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Conventional</td>
                    <td className="px-6 py-4">$3,000 - $10,000</td>
                    <td className="px-6 py-4">Low (pumping every 3-5 years)</td>
                    <td className="px-6 py-4">25-30+ years</td>
                    <td className="px-6 py-4">Large</td>
                    <td className="px-6 py-4">Sandy, loamy, well-draining</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Aerobic (ATU)</td>
                    <td className="px-6 py-4">$10,000 - $20,000</td>
                    <td className="px-6 py-4">High (quarterly inspections)</td>
                    <td className="px-6 py-4">20-25 years</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Works in most soil types</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mound</td>
                    <td className="px-6 py-4">$15,000 - $25,000</td>
                    <td className="px-6 py-4">Medium-High</td>
                    <td className="px-6 py-4">15-20 years</td>
                    <td className="px-6 py-4">Large</td>
                    <td className="px-6 py-4">Clay, shallow bedrock, high water table</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Chamber</td>
                    <td className="px-6 py-4">$5,000 - $15,000</td>
                    <td className="px-6 py-4">Low-Medium</td>
                    <td className="px-6 py-4">25-30 years</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Sandy, loamy, moderately draining</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Drip Distribution</td>
                    <td className="px-6 py-4">$8,000 - $18,000</td>
                    <td className="px-6 py-4">Medium-High</td>
                    <td className="px-6 py-4">15-20 years</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Shallow soils, various types</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sand Filter</td>
                    <td className="px-6 py-4">$12,000 - $22,000</td>
                    <td className="px-6 py-4">Medium-High</td>
                    <td className="px-6 py-4">15-25 years</td>
                    <td className="px-6 py-4">Medium-Large</td>
                    <td className="px-6 py-4">Works with most soil types</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Constructed Wetland</td>
                    <td className="px-6 py-4">$10,000 - $20,000</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">20+ years</td>
                    <td className="px-6 py-4">Very Large</td>
                    <td className="px-6 py-4">Works with most soil types</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Evapotranspiration</td>
                    <td className="px-6 py-4">$15,000 - $25,000</td>
                    <td className="px-6 py-4">Low-Medium</td>
                    <td className="px-6 py-4">20+ years</td>
                    <td className="px-6 py-4">Large</td>
                    <td className="px-6 py-4">Clay, impermeable soils</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Cluster</td>
                    <td className="px-6 py-4">$5,000 - $15,000 per home</td>
                    <td className="px-6 py-4">Medium (professionally managed)</td>
                    <td className="px-6 py-4">25-30+ years</td>
                    <td className="px-6 py-4">Shared large area</td>
                    <td className="px-6 py-4">Depends on system type used</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic">
              Note: Costs and specifications are estimates and may vary based on location, site conditions, system size,
              and local regulations. Always consult with a professional septic installer for accurate information
              specific to your property.
            </p>
          </div>
        </div>
      </section>

      {/* Factors to Consider */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Factors to Consider When Choosing a Septic System
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key considerations to help you select the right system for your property
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Soil Conditions</h3>
                <p className="text-gray-700">
                  The soil on your property is perhaps the most critical factor in septic system selection. A
                  percolation test (perc test) measures how quickly water moves through your soil. Sandy soils with fast
                  percolation rates work well with conventional systems, while clay soils with slow percolation may
                  require alternative systems like mounds or ATUs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Available Space</h3>
                <p className="text-gray-700">
                  Different systems require varying amounts of land. Conventional systems need the most space for their
                  drain fields, while ATUs can operate with smaller drain fields. Consider your property size and layout
                  when selecting a system, including setback requirements from wells, property lines, and water bodies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Household Size and Water Usage</h3>
                <p className="text-gray-700">
                  The number of people in your household and your typical water usage patterns directly impact the size
                  and type of septic system you need. Larger households or those with high water usage may benefit from
                  systems designed to handle higher capacities, such as larger conventional systems or ATUs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Budget Considerations</h3>
                <p className="text-gray-700">
                  Initial installation costs vary significantly between system types, but it's important to consider
                  lifetime costs as well. While conventional systems are less expensive to install, alternative systems
                  might be more cost-effective in the long run if they prevent failures or extend system lifespan in
                  challenging soil conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Local Regulations</h3>
                <p className="text-gray-700">
                  Many areas have specific requirements for septic system installation based on environmental concerns,
                  groundwater protection, or local conditions. Some jurisdictions may require specific system types in
                  certain areas, particularly near water bodies or in areas with high water tables. Always check local
                  regulations before making a decision.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Maintenance Requirements</h3>
                <p className="text-gray-700">
                  Consider your willingness and ability to perform or schedule regular maintenance. Conventional systems
                  require the least maintenance, while ATUs need regular inspections and have more components that can
                  potentially fail. Factor in the long-term maintenance costs and requirements when choosing your
                  system.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Environmental Impact</h3>
                <p className="text-gray-700">
                  Different septic systems have varying levels of environmental impact. If you're concerned about
                  protecting groundwater or nearby water bodies, systems like ATUs, constructed wetlands, or sand
                  filters provide superior treatment. Consider the environmental sensitivity of your area when making
                  your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Consultation */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Get Expert Guidance for Your Septic System
            </h2>
            <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choosing the right septic system is a significant decision that affects your property for decades. Our
              experienced team can evaluate your specific site conditions, understand your needs, and recommend the
              ideal septic solution for your property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Link href="/book-now">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-100 text-base"
                >
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Related Resources</h2>
              <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore more guides to help you understand and maintain your septic system
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/resources/understanding-septic-systems" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/how-septic-systems-work.webp"
                      alt="Understanding Septic Systems"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                      Understanding Septic Systems
                    </h3>
                    <p className="text-gray-700 mb-4 flex-grow">
                      Learn the basics of how septic systems work and the key components involved.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/septic-system-installation-guide" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-for-new-homes.webp"
                      alt="Septic System Installation Guide"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                      Septic System Installation Guide
                    </h3>
                    <p className="text-gray-700 mb-4 flex-grow">
                      What to expect during the septic system installation process from start to finish.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/septic-system-cost-guide" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md border border-gray-200 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/septic-maintenance-guide.webp"
                      alt="Septic System Cost Guide"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700">
                      Septic System Cost Guide
                    </h3>
                    <p className="text-gray-700 mb-4 flex-grow">
                      Detailed breakdown of installation and maintenance costs for different septic systems.
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
