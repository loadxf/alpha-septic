import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Breadcrumb } from "@/components/breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Septic System FAQs | Alpha Septic Services Austin TX",
  description:
    "Find answers to common questions about septic systems, maintenance schedules, warning signs, and our professional septic services in Austin, TX.",
  keywords: [
    "septic FAQ",
    "septic system questions",
    "septic maintenance FAQ",
    "septic tank pumping frequency",
    "septic system problems",
    "Austin septic services FAQ",
    "septic system care",
    "septic tank questions",
    "septic system maintenance",
    "septic emergency questions",
  ],
  alternates: {
    canonical: "/faq",
  },
}

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "FAQ", href: "/faq", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about septic systems, maintenance, and our services.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl py-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">General Septic Questions</h2>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">How often should I pump my septic tank?</h3>
                      <p className="text-gray-500">
                        For most households, septic tanks should be pumped every 3-5 years. However, this can vary based
                        on household size, tank size, and water usage. We can help determine the optimal schedule for
                        your system.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">What are the signs of septic system problems?</h3>
                      <p className="text-gray-500">
                        Warning signs include slow drains, gurgling pipes, sewage odors, wet spots in the yard,
                        unusually lush grass over the drain field, and sewage backups. If you notice any of these signs,
                        contact us immediately.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">How can I extend the life of my septic system?</h3>
                      <p className="text-gray-500">
                        Regular pumping, water conservation, proper waste disposal (no flushing of non-biodegradable
                        items), avoiding harsh chemicals, and keeping heavy vehicles off the drain field can all help
                        extend your system's life.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Our Services</h2>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">How long does septic pumping take?</h3>
                      <p className="text-gray-500">
                        A typical residential septic pumping takes 1-2 hours, depending on tank size, accessibility, and
                        system condition. Commercial systems may take longer based on size and complexity.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">Do you offer emergency services?</h3>
                      <p className="text-gray-500">
                        Yes, we provide 24/7 emergency septic services for urgent situations like backups, overflows,
                        and system failures. Call our emergency line at (512) 794-7867 for immediate assistance.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">How often should restaurant grease traps be cleaned?</h3>
                      <p className="text-gray-500">
                        Most restaurants need grease trap cleaning every 1-3 months, depending on size and usage. Local
                        regulations may also dictate minimum cleaning frequencies. We can help establish an appropriate
                        maintenance schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
                  <Image
                    src="/images/how-septic-systems-work.webp"
                    alt="Detailed septic system diagram showing tank, drain field, and components"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Maintenance & Troubleshooting</h2>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">What should I do if my septic system is backing up?</h3>
                      <p className="text-gray-500">
                        First, stop using water to prevent further backup. Then call our emergency line at (512)
                        793-7867 for immediate assistance. Do not attempt to open the septic tank yourself, as this can
                        be dangerous.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">
                        Can I use septic additives to reduce pumping frequency?
                      </h3>
                      <p className="text-gray-500">
                        We don't recommend using additives as a substitute for regular pumping. Some additives can
                        actually harm your system by killing beneficial bacteria or causing solids to suspend and flow
                        into the drain field.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-custom">
                      <h3 className="text-xl font-bold mb-2">What areas do you service?</h3>
                      <p className="text-gray-500">
                        We service Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, Leander,
                        Pflugerville, and many more communities. Check our{" "}
                        <Link href="/service-areas" className="text-brand-blue hover:underline">
                          Service Areas
                        </Link>{" "}
                        page for a complete listing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-custom">
                  <Image
                    src="/images/septic-pumping.webp"
                    alt="Professional septic pumping service in progress at an Austin home"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">
                Don't see your question answered here? Contact us directly and we'll be happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Contact Us</Button>
                </Link>
                <Link href="/book-now">
                  <Button size="lg" variant="outline">
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Enhanced FAQ Schema with more questions and answers */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often should I pump my septic tank?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most households, septic tanks should be pumped every 3-5 years. However, this can vary based on household size, tank size, and water usage. We can help determine the optimal schedule for your system.",
                },
              },
              {
                "@type": "Question",
                name: "What are the signs of septic system problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Warning signs include slow drains, gurgling pipes, sewage odors, wet spots in the yard, unusually lush grass over the drain field, and sewage backups. If you notice any of these signs, contact us immediately.",
                },
              },
              {
                "@type": "Question",
                name: "How can I extend the life of my septic system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Regular pumping, water conservation, proper waste disposal (no flushing of non-biodegradable items), avoiding harsh chemicals, and keeping heavy vehicles off the drain field can all help extend your system's life.",
                },
              },
              {
                "@type": "Question",
                name: "How long does septic pumping take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical residential septic pumping takes 1-2 hours, depending on tank size, accessibility, and system condition. Commercial systems may take longer based on size and complexity.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer emergency services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide 24/7 emergency septic services for urgent situations like backups, overflows, and system failures. Call our emergency line at (512) 793-7867 for immediate assistance.",
                },
              },
              {
                "@type": "Question",
                name: "How often should restaurant grease traps be cleaned?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most restaurants need grease trap cleaning every 1-3 months, depending on size and usage. Local regulations may also dictate minimum cleaning frequencies. We can help establish an appropriate maintenance schedule.",
                },
              },
              {
                "@type": "Question",
                name: "What should I do if my septic system is backing up?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "First, stop using water to prevent further backup. Then call our emergency line at (512) 793-7867 for immediate assistance. Do not attempt to open the septic tank yourself, as this can be dangerous.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use septic additives to reduce pumping frequency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We don't recommend using additives as a substitute for regular pumping. Some additives can actually harm your system by killing beneficial bacteria or causing solids to suspend and flow into the drain field.",
                },
              },
              {
                "@type": "Question",
                name: "What areas do you service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We service Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, and many more communities. Check our Service Areas page for a complete listing.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know what size septic tank I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Septic tank size is determined by the number of bedrooms in your home, local regulations, and anticipated water usage. For most homes, a 1,000-gallon tank is the minimum size, but larger homes may require 1,500 gallons or more.",
                },
              },
              {
                "@type": "Question",
                name: "What should not be flushed into a septic system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Never flush non-biodegradable items like wipes (even those labeled 'flushable'), feminine hygiene products, diapers, paper towels, cigarette butts, medications, chemicals, oils, or grease. These can clog your system or kill beneficial bacteria.",
                },
              },
              {
                "@type": "Question",
                name: "How much does septic pumping cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of septic pumping varies based on tank size, accessibility, and condition. For a standard residential tank, prices typically range from $300-$600. We provide free quotes before performing any service.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
