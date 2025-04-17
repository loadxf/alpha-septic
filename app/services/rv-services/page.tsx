import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle } from "lucide-react"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "RV Septic Pumping & Waste Tank Services Austin TX | Alpha Septic Services",
  description:
    "Professional RV septic tank pumping and waste disposal services in Austin. Keep your recreational vehicle clean and odor-free with our specialized RV services.",
  keywords:
    "RV septic service, RV waste tank pumping, RV black water disposal, RV gray water disposal, Austin RV septic, recreational vehicle waste disposal",
}

export default function RVServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "RV Services", href: "/services/rv-services", isCurrent: true },
        ]}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                RV Septic & Waste Tank Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional waste tank pumping and cleaning for recreational vehicles of all sizes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Specialized RV Waste Tank Services</h2>
              <p className="text-gray-500">
                At Alpha Septic Services, we understand the unique needs of RV owners. Our specialized RV waste tank
                services help you maintain a clean, odor-free recreational vehicle whether you're a weekend camper or
                full-time RVer.
              </p>
              <p className="text-gray-500">
                Our experienced technicians provide thorough pumping and cleaning of both black and gray water tanks,
                ensuring your RV's waste system functions properly and remains sanitary for your travels.
              </p>

              <h3 className="text-xl font-bold mt-6">Our RV Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Complete black water tank pumping and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Gray water tank pumping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Sensor cleaning and restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Deodorizing and sanitizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Waste system inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                  <span>Mobile service at your location</span>
                </li>
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="btn-primary">
                    Schedule Service
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
              <Image
                src="/images/rv-septic-pumping.webp"
                alt="Professional RV waste tank pumping service for a recreational vehicle in Austin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Benefits of Professional RV Tank Service</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Eliminate Odors</h3>
                  <p className="text-gray-500">
                    Professional cleaning removes waste buildup that causes persistent odors, making your RV more
                    comfortable for you and your passengers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Restore Sensor Function</h3>
                  <p className="text-gray-500">
                    Our thorough cleaning process removes residue from tank sensors, restoring accurate readings of your
                    tank levels.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Prevent Clogs</h3>
                  <p className="text-gray-500">
                    Regular professional cleaning prevents buildup that can lead to clogs in your RV's waste system and
                    potentially costly repairs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Convenient Service</h3>
                  <p className="text-gray-500">
                    We come to your location, whether your RV is at home, a campground, or storage facility in the
                    Austin area.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Proper Waste Disposal</h3>
                  <p className="text-gray-500">
                    We ensure all waste is transported and disposed of properly according to environmental regulations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
                  <p className="text-gray-500">
                    Our technicians can provide tips and recommendations for maintaining your RV's waste system between
                    professional services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">RV Waste Tank Maintenance Tips</h2>
              <div className="bg-white p-6 rounded-lg shadow-custom">
                <ol className="space-y-4 list-decimal list-inside text-gray-500 ml-4">
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Use RV-specific toilet paper</span> that breaks down
                    easily to prevent clogs and buildup.
                  </li>
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Add plenty of water</span> to your black tank after each
                    use to help break down waste.
                  </li>
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Use tank treatments</span> designed for RVs to control
                    odors and help break down waste between professional cleanings.
                  </li>
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Keep black tank valve closed</span> until it's time to
                    empty to allow waste to break down and prevent "pyramid" buildup.
                  </li>
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Flush thoroughly</span> when emptying your tanks at dump
                    stations to remove as much residue as possible.
                  </li>
                  <li className="pl-2">
                    <span className="font-bold text-brand-blue">Schedule professional cleaning</span> at least once a
                    year, especially before winterizing or after long periods of storage.
                  </li>
                </ol>
              </div>
              <p className="text-gray-500 mt-4">
                Even with proper maintenance, professional cleaning is recommended to keep your RV's waste system in
                optimal condition. Our specialized equipment can remove buildup that regular dumping can't address.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Add Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "RV Septic & Waste Tank Services",
            serviceType: "RV Waste Tank Pumping and Cleaning",
            provider: {
              "@type": "LocalBusiness",
              name: "Alpha Septic Services",
              telephone: "5127937867",
              description: "Professional RV waste tank services in Austin and surrounding areas",
              areaServed: "Austin, TX and surrounding areas",
            },
            description:
              "Professional waste tank pumping and cleaning for recreational vehicles of all sizes in Austin and surrounding areas.",
            areaServed: {
              "@type": "State",
              name: "Texas",
            },
            audience: {
              "@type": "Audience",
              audienceType: "RV Owners",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
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
                name: "How often should I have my RV waste tanks professionally cleaned?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We recommend professional RV waste tank cleaning at least once a year, especially before winterizing or after long periods of storage. Full-time RVers may benefit from more frequent service, approximately every 3-6 months, to maintain optimal system performance and prevent odors.",
                },
              },
              {
                "@type": "Question",
                name: "Can you service my RV at my location?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer mobile RV waste tank services throughout the Austin area. We can come to your home, campground, or storage facility as long as there is adequate access for our service vehicle and equipment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an RV waste tank cleaning take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical RV waste tank cleaning service takes approximately 30-60 minutes, depending on the size of your tanks, their condition, and the level of cleaning required. Our technicians work efficiently to minimize disruption to your schedule.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
