import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { FAQSection } from "@/components/FAQSection"
import { HowToSchema } from "@/components/how-to-schema"
import { ArticleSchema } from "@/components/article-schema"
import { Check, Phone, AlertTriangle, Ruler, FileText, Shovel, Clipboard, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Septic System Installation Guide | Alpha Septic Services Austin",
  description:
    "Everything you need to know about septic system installation, from planning and permits to installation steps and post-installation care.",
  keywords:
    "septic system installation, new septic system, septic tank installation, septic installation process, Austin TX septic installation",
}

export default function SepticSystemInstallationGuidePage() {
  // FAQs specific to septic system installation
  const faqs = [
    {
      question: "How long does it take to install a septic system?",
      answer:
        "The installation process typically takes 3-5 days for a standard residential system, depending on soil conditions, system complexity, and weather. However, the entire process including planning, permitting, and installation can take 2-4 weeks.",
    },
    {
      question: "How much does a new septic system cost?",
      answer:
        "Costs vary widely based on system type, size, soil conditions, and location. A conventional system for a 3-4 bedroom home typically costs $8,000-$15,000 in the Austin area. Alternative systems like aerobic treatment units or mound systems can cost $15,000-$30,000.",
    },
    {
      question: "How long will my new septic system last?",
      answer:
        "With proper maintenance, a conventional septic system can last 25-40 years. The tank itself may last longer (40+ years for concrete tanks), while drain fields typically last 20-30 years before needing replacement.",
    },
    {
      question: "Can I install a septic system myself?",
      answer:
        "No, septic system installation requires professional expertise and specialized equipment. In Texas, septic systems must be installed by licensed installers who follow state regulations and obtain proper permits. DIY installation is illegal and dangerous.",
    },
    {
      question: "How do I know what size septic system I need?",
      answer:
        "Septic system size is primarily determined by the number of bedrooms in your home (which estimates potential water usage), soil conditions, and local regulations. A licensed septic designer or installer can perform the necessary calculations based on these factors.",
    },
  ]

  return (
    <>
      <EnhancedBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Septic System Installation Guide",
            href: "/resources/septic-system-installation-guide",
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
                  Septic System Installation Guide
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Everything you need to know about installing a new septic system for your home or property.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-now">
                  <Button size="lg">Get Installation Quote</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Speak With an Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
              <Image
                src="/images/septic-installation.webp"
                alt="New septic system being installed"
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
              <h2 className="text-3xl font-bold">Planning Your Septic System Installation</h2>
              <p className="text-gray-500 md:text-lg">
                Installing a new septic system is a significant investment that requires careful planning. Whether
                you're building a new home or replacing an aging system, understanding the process will help ensure a
                successful installation that meets your needs and complies with local regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Types of Septic Systems</h2>
              <p className="text-gray-500 md:text-lg">
                The first step is determining which type of septic system is right for your property. Several factors
                influence this decision, including soil conditions, property size, household size, and local
                regulations.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Conventional Septic System</h3>
                  <p className="text-gray-500 mb-3">
                    The most common and typically least expensive option, consisting of a septic tank and gravity-fed
                    drain field.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Most Affordable
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Requires Good Soil
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      25-30 Year Lifespan
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Aerobic Treatment Unit (ATU)</h3>
                  <p className="text-gray-500 mb-3">
                    Uses oxygen to enhance bacterial activity, producing cleaner effluent. Ideal for properties with
                    poor soil conditions or high water tables.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Higher Cost
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Works in Challenging Soils
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Requires Maintenance Contract
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Mound System</h3>
                  <p className="text-gray-500 mb-3">
                    Elevates the drain field above natural soil using sand and other materials. Used when there's
                    shallow soil depth or high groundwater.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Most Expensive
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      For Challenging Sites
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Requires More Space
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Chamber System</h3>
                  <p className="text-gray-500 mb-3">
                    Uses plastic chambers instead of gravel in the drain field, providing more storage capacity and
                    better soil infiltration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Moderately Priced
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Good for Various Soils
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Reduced Footprint
                    </span>
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
                  <h3 className="text-amber-800 font-bold text-xl mt-0 mb-2">Important Consideration</h3>
                  <p className="text-amber-700 mb-0">
                    The type of septic system you can install is often dictated by local regulations and soil
                    conditions. In many areas of Austin and surrounding counties, certain types of systems may be
                    required based on soil percolation tests, proximity to water sources, and lot size. Always consult
                    with a licensed septic designer before making decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">The Installation Process: Step by Step</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Ruler className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">1. Site Evaluation</h3>
                  </div>
                  <p className="text-gray-500">
                    A licensed site evaluator will assess your property's soil composition, drainage patterns, slope,
                    available space, and proximity to water sources. This evaluation determines what type of system is
                    suitable for your property.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1-2 days for evaluation, 1-2 weeks for results and recommendations
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">2. Design and Permitting</h3>
                  </div>
                  <p className="text-gray-500">
                    Based on the site evaluation, a septic designer will create a system design that meets local
                    regulations. This design is submitted to the local health department or permitting authority for
                    approval.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1-2 weeks for design, 2-4 weeks for permit approval
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Shovel className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">3. Excavation and Site Preparation</h3>
                  </div>
                  <p className="text-gray-500">
                    Once permits are approved, excavation begins. This includes clearing the installation area, digging
                    trenches for pipes, excavating for the tank, and preparing the drain field area.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1-2 days depending on system size and site conditions
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clipboard className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">4. Tank Installation</h3>
                  </div>
                  <p className="text-gray-500">
                    The septic tank is delivered and placed in the excavated area. Proper placement is critical for
                    system function and future maintenance access. Inlet and outlet pipes are connected, and the tank is
                    tested for watertightness.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1 day
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clipboard className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">5. Drain Field Construction</h3>
                  </div>
                  <p className="text-gray-500">
                    The drain field is constructed according to the approved design. This typically involves laying
                    gravel beds, installing distribution pipes or chambers, and connecting to the septic tank via a
                    distribution box.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1-3 days depending on system type and size
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clipboard className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">6. Final Connections and Backfilling</h3>
                  </div>
                  <p className="text-gray-500">
                    All components are connected, including the house sewer line to the tank and the tank to the drain
                    field. After connections are tested, the excavated areas are carefully backfilled with appropriate
                    materials.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1 day
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clipboard className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold">7. Inspection and Approval</h3>
                  </div>
                  <p className="text-gray-500">
                    A final inspection is conducted by the local health department or regulatory authority to ensure the
                    system was installed according to the approved plans and meets all requirements.
                  </p>
                  <p className="text-gray-500 mt-2">
                    <strong>Timeline:</strong> 1 day for inspection, 1-2 weeks for final approval documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Choosing the Right Installer</h2>
              <p className="mb-4">
                Selecting a qualified septic system installer is crucial for a successful installation. Look for:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Proper licensing and certifications</li>
                <li>Extensive experience with your specific type of system</li>
                <li>Good reputation and reviews from previous customers</li>
                <li>Proper insurance coverage</li>
                <li>Written warranties on both labor and materials</li>
                <li>Detailed written estimates and contracts</li>
              </ul>
              <p className="mb-4">
                At Alpha Septic Services, our installation team meets all these qualifications and more. We handle the
                entire process from design to final approval, ensuring your system is installed correctly and built to
                last.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request an Installation Consultation
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Cost Considerations</h2>
              <p className="text-gray-500 md:text-lg">
                Several factors influence the cost of a septic system installation:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                  <thead className="bg-brand-blue text-white">
                    <tr>
                      <th className="border p-3 text-left">Factor</th>
                      <th className="border p-3 text-left">Impact on Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">System Type</td>
                      <td className="border p-3">
                        Conventional systems are least expensive; aerobic and mound systems cost significantly more
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">System Size</td>
                      <td className="border p-3">
                        Larger homes require larger tanks and drain fields, increasing costs
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Soil Conditions</td>
                      <td className="border p-3">Poor soils may require additional materials or alternative systems</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">Site Accessibility</td>
                      <td className="border p-3">Difficult access increases labor and equipment costs</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Permitting Requirements</td>
                      <td className="border p-3">
                        Varies by location; some areas have higher fees and stricter requirements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 text-center italic mt-2">
                For an accurate estimate tailored to your specific property and needs, contact Alpha Septic Services for
                a consultation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">After Installation: Care and Maintenance</h2>
              <p className="text-gray-500 md:text-lg">
                Proper care after installation ensures your new septic system functions effectively for decades:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Allow grass to establish over the drain field</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Keep records of your system's location and components</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Schedule your first pumping within 3-5 years</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Avoid driving or building over any system components</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Practice water conservation to prevent system overload</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Be mindful of what goes down your drains</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Calendar className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="text-2xl font-bold">Maintenance Schedule for New Systems</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3 text-left">Timeframe</th>
                      <th className="border p-3 text-left">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">First 30 days</td>
                      <td className="border p-3">
                        Minimize water usage to allow bacterial colonies to establish in the tank
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">6 months</td>
                      <td className="border p-3">
                        Visual inspection of drain field area for any settling or drainage issues
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">1 year</td>
                      <td className="border p-3">
                        First professional inspection (especially important for aerobic systems)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">3-5 years</td>
                      <td className="border p-3">First pumping (depending on household size and usage)</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Ongoing</td>
                      <td className="border p-3">
                        Regular inspections every 1-3 years and pumping as recommended by your service provider
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <FAQSection title="Frequently Asked Questions About Septic Installation" faqs={faqs} />

            <div className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Professional Septic Installation in Austin</h2>
              <p className="text-gray-500 mb-6">
                Alpha Septic Services provides complete septic system installation services throughout Austin and
                surrounding areas. Our experienced team handles every aspect of the process:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Site Evaluation & System Design</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Permitting Assistance</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Complete System Installation</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Inspection Coordination</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Comprehensive Warranties</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Ongoing Maintenance Programs</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button size="lg">Request Installation Quote</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
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
        headline="Septic System Installation Guide"
        description="Everything you need to know about septic system installation, from planning and permits to installation steps and post-installation care."
        image="https://CallAlphaSeptic.com/images/septic-installation.webp"
        url="https://CallAlphaSeptic.com/resources/septic-system-installation-guide"
        authorName="Alpha Septic Services"
        datePublished="2025-04-10"
      />

      <HowToSchema
        name="How to Install a Septic System"
        description="A comprehensive guide to the septic system installation process."
        image="https://CallAlphaSeptic.com/images/septic-installation.webp"
        steps={[
          "Conduct a site evaluation to determine soil conditions and system requirements",
          "Obtain necessary permits and approvals from local authorities",
          "Excavate the site for tank placement and drain field construction",
          "Install the septic tank according to specifications",
          "Construct the drain field with proper materials and connections",
          "Complete final connections and backfill the excavated areas",
          "Schedule final inspection and obtain approval",
        ]}
        totalTime="P14D"
      />
    </>
  )
}
