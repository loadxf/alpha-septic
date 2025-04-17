import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { FAQSection } from "@/components/FAQSection"
import { HowToSchema } from "@/components/how-to-schema"
import { ArticleSchema } from "@/components/article-schema"
import { Check, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Understanding Your Septic System: A Homeowner's Guide | Alpha Septic",
  description:
    "Learn how septic systems work, including components, maintenance requirements, and best practices for homeowners. Expert guidance from Alpha Septic Services.",
  keywords:
    "septic system guide, how septic systems work, septic system components, septic maintenance, homeowner septic guide, Austin TX septic systems",
}

export default function UnderstandingSepticSystemPage() {
  // FAQs specifically about understanding septic systems
  const faqs = [
    {
      question: "How does a septic system work?",
      answer:
        "A septic system works by separating solids from liquids in the tank. Bacteria break down solid waste while the liquid effluent flows to the drain field where it's naturally filtered through soil before returning to the groundwater.",
    },
    {
      question: "What are the main components of a septic system?",
      answer:
        "The main components include the inlet pipe (from the house), the septic tank itself, the outlet pipe, a distribution box, and the drain field (leach field). Some systems may also include pumps, filters, or alternative treatment systems.",
    },
    {
      question: "How long does a septic system typically last?",
      answer:
        "With proper maintenance, a concrete septic tank can last 40+ years, while the drain field typically lasts 20-30 years. Regular pumping and proper usage significantly extend system life.",
    },
    {
      question: "How can I tell where my septic tank and drain field are located?",
      answer:
        "Check your property records or septic permit, look for manhole covers or clean-out pipes, observe where grass grows differently, or hire a septic inspector who can use specialized equipment to locate your system components.",
    },
    {
      question: "What should never be flushed or put down drains with a septic system?",
      answer:
        "Never flush wipes (even 'flushable' ones), feminine hygiene products, diapers, paper towels, cigarettes, or medications. Don't put grease, coffee grounds, harsh chemicals, paint, or excessive food waste down drains.",
    },
  ]

  return (
    <>
      <EnhancedBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Understanding Your Septic System",
            href: "/resources/understanding-septic-system-homeowners-guide",
            isCurrent: true,
          },
        ]}
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Understanding Your Septic System
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  A comprehensive guide for homeowners on how septic systems work, maintenance requirements, and best
                  practices.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg">Schedule Service</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
              <Image
                src="/images/how-septic-systems-work.webp"
                alt="Septic system diagram showing tank and drain field"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">What is a Septic System?</h2>
              <p className="text-gray-500 md:text-lg">
                A septic system is an underground wastewater treatment structure that uses a combination of nature and
                proven technology to treat wastewater from household plumbing. Unlike urban properties that connect to
                municipal sewer systems, rural homes and businesses often rely on septic systems to safely dispose of
                wastewater.
              </p>
              <p className="text-gray-500 md:text-lg">
                These systems are common throughout the Austin area, particularly in rural and suburban neighborhoods
                where municipal sewer connections aren't available. Understanding how your septic system works is
                essential for proper maintenance and avoiding costly repairs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Key Components of a Septic System</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">1. Septic Tank</h3>
                  <p className="text-gray-500">
                    The watertight container, typically made of concrete, fiberglass, or polyethylene, buried
                    underground near your home. All wastewater flows into this tank, where solids settle at the bottom
                    (forming sludge) and oils and grease float to the top (forming scum). Bacteria in the tank begin
                    breaking down the waste.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">2. Distribution Box</h3>
                  <p className="text-gray-500">
                    This component evenly distributes the liquid wastewater (effluent) from the septic tank to the drain
                    field. It ensures that all areas of the drain field receive equal amounts of effluent.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">3. Drain Field (Leach Field)</h3>
                  <p className="text-gray-500">
                    A series of perforated pipes or chambers buried in gravel-filled trenches or beds. The effluent
                    flows through these pipes and gradually seeps into the soil, where harmful bacteria, viruses, and
                    nutrients are naturally removed before the water reaches groundwater.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">4. Soil</h3>
                  <p className="text-gray-500">
                    The final and one of the most important components, soil provides the final treatment of the
                    wastewater through physical, chemical, and biological processes. The type and condition of your soil
                    significantly impact how well your septic system works.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/septic-tank-diagram.webp"
                  alt="Detailed diagram of a septic system showing its components"
                  width={800}
                  height={450}
                  className="rounded-xl shadow-md mx-auto"
                />
                <p className="text-sm text-gray-500 text-center mt-2">
                  Diagram of a typical septic system showing the flow from house to drain field
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">How Your Septic System Works</h2>
              <p className="text-gray-500 md:text-lg">
                Your septic system operates through a carefully balanced biological process:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-500">
                <li>
                  <strong>Wastewater Entry:</strong> All water from toilets, sinks, showers, and appliances flows into
                  your septic tank.
                </li>
                <li>
                  <strong>Separation:</strong> Inside the tank, heavier solids sink to form sludge while lighter
                  materials (oils, grease) float to the top as scum.
                </li>
                <li>
                  <strong>Bacterial Decomposition:</strong> Anaerobic bacteria digest and break down the waste
                  materials.
                </li>
                <li>
                  <strong>Effluent Flow:</strong> The partially treated water in the middle layer flows out to the drain
                  field.
                </li>
                <li>
                  <strong>Final Treatment:</strong> As effluent percolates through the soil in the drain field, harmful
                  bacteria, viruses, and nutrients are naturally removed.
                </li>
                <li>
                  <strong>Return to Environment:</strong> Clean water eventually returns to the groundwater system.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Signs Your Septic System Needs Attention</h2>
              <p className="text-gray-500 md:text-lg">Watch for these warning signs that indicate potential issues:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Slow draining fixtures throughout the house</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Gurgling sounds from plumbing</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Sewage odors indoors or outdoors</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Soggy spots or standing water near drain field</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Unusually lush, green grass over the drain field</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-100 p-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="font-medium">Sewage backups in the home</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Essential Septic System Maintenance</h2>
              <p className="text-gray-500 md:text-lg">
                Proper maintenance extends the life of your septic system and helps prevent costly failures:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Regular Pumping</h3>
                  <p className="text-gray-500">
                    Most residential septic tanks should be pumped every 3-5 years, depending on household size and tank
                    capacity. Regular pumping removes accumulated solids that bacteria can't break down completely.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
                  <p className="text-gray-500">
                    Reducing water use gives your system time to properly treat waste. Fix leaky fixtures, spread out
                    laundry loads, and install water-efficient appliances.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Mindful Disposal</h3>
                  <p className="text-gray-500">
                    Never flush non-biodegradable items or harsh chemicals. These can kill beneficial bacteria and clog
                    your system. Only human waste and toilet paper should go down the toilet.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Drain Field Protection</h3>
                  <p className="text-gray-500">
                    Avoid driving or parking on your drain field, planting deep-rooted trees or shrubs nearby, or
                    building structures over any part of your septic system.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Professional Inspections</h3>
                  <p className="text-gray-500">
                    Have your system professionally inspected every 1-3 years to catch potential problems early.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">New Homeowner with a Septic System?</h2>
              <p className="mb-4">
                If you've recently purchased a home with a septic system, we recommend scheduling an inspection to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Determine the location of all system components</li>
                <li>Check the condition and functionality of the tank and drain field</li>
                <li>Establish a baseline for future maintenance</li>
                <li>Learn if the system meets current codes and regulations</li>
              </ul>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Schedule an Inspection
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Types of Septic Systems</h2>
              <p className="text-gray-500 md:text-lg">
                While conventional systems are most common, several alternatives exist for challenging properties:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Conventional System</h3>
                  <p className="text-gray-500">
                    The standard septic tank and gravity-fed drain field, suitable for properties with adequate soil and
                    space.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Chamber System</h3>
                  <p className="text-gray-500">
                    Uses plastic chambers in the drain field instead of gravel trenches, providing more storage capacity
                    and often used in areas with high groundwater.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Aerobic Treatment Unit (ATU)</h3>
                  <p className="text-gray-500">
                    Introduces oxygen to enhance bacterial decomposition, producing cleaner effluent and requiring less
                    drain field space. These systems require more maintenance.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Mound System</h3>
                  <p className="text-gray-500">
                    Used when soil depth is limited, this system features a raised mound of sand where effluent receives
                    additional treatment before entering native soil.
                  </p>
                </div>
              </div>
            </div>

            <FAQSection title="Common Questions About Septic Systems" faqs={faqs} />

            <div className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Expert Septic Services in Austin</h2>
              <p className="text-gray-500 mb-6">
                Alpha Septic Services provides complete septic system care throughout Austin and surrounding areas. Our
                services include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Routine Pumping</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>System Inspections</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Repairs & Troubleshooting</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>New System Installation</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Emergency Response</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Maintenance Programs</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button size="lg">Schedule Service</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Schema Markup */}
      <ArticleSchema
        headline="Understanding Your Septic System: A Homeowner's Guide"
        description="Learn how septic systems work, including components, maintenance requirements, and best practices for homeowners."
        image="https://CallAlphaSeptic.com/images/how-septic-systems-work.webp"
        url="https://CallAlphaSeptic.com/resources/understanding-septic-system-homeowners-guide"
        authorName="Alpha Septic Services"
        datePublished="2025-04-10"
      />

      <HowToSchema
        name="How to Properly Maintain Your Septic System"
        description="A step-by-step guide for maintaining your septic system to prevent failures and extend its lifespan."
        image="https://CallAlphaSeptic.com/images/how-septic-systems-work.webp"
        steps={[
          "Schedule regular pumping every 3-5 years depending on household size and tank capacity",
          "Practice water conservation by fixing leaks and spreading out water usage",
          "Be mindful of what goes down your drains - no grease, chemicals, or non-flushables",
          "Protect your drain field by avoiding driving or building over it",
          "Have your system professionally inspected every 1-3 years",
        ]}
        totalTime="P1D"
      />
    </>
  )
}
