import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Septic System Do's and Don'ts | Alpha Septic Services",
  description: "Learn what to do (and not do) to protect your septic system and prevent costly repairs and failures.",
}

export default function SepticSystemDosAndDontsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <Link href="/resources" className="text-blue-600 hover:underline flex items-center">
                ← Back to Resources
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Septic System Do's and Don'ts
              </h1>
              <p className="text-gray-500 md:text-xl">
                What to do (and not do) to protect your septic system and prevent costly repairs and failures.
              </p>
            </div>
            <div className="mt-8 space-y-8">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
                <Image
                  src="/images/septic-dos-and-donts.webp"
                  alt="Septic system diagram showing components"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <p className="text-sm text-center text-gray-500 italic">
                Understanding how to properly care for your septic system can extend its life and prevent costly
                repairs.
              </p>

              <div className="prose prose-blue max-w-none">
                <h2>Protecting Your Septic System Investment</h2>
                <p>
                  Your septic system is a significant investment in your property, typically costing between $5,000 and
                  $25,000 to replace. With proper care and maintenance, a well-designed septic system can last 25-30
                  years or more. However, neglect or misuse can lead to premature failure, expensive repairs, and
                  potential health hazards.
                </p>
                <p>
                  This guide outlines the essential do's and don'ts of septic system care to help you protect your
                  investment and ensure your system functions properly for years to come.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-amber-800 font-bold text-lg mt-0">Why This Matters</h3>
                      <p className="text-amber-700 mb-0">
                        A failing septic system can contaminate groundwater, create unsanitary conditions around your
                        home, lead to expensive emergency repairs, and significantly decrease your property value.
                        Following these guidelines can help you avoid these serious problems.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Septic System Do's</h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Schedule Regular Pumping</h3>
                        <p className="text-green-700 mb-0">
                          Have your septic tank pumped every 3-5 years by a licensed professional. Regular pumping
                          removes accumulated solids that can't be broken down by the system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Conserve Water</h3>
                        <p className="text-green-700 mb-0">
                          Practice water conservation to prevent overloading your system. Fix leaks promptly, install
                          water-efficient fixtures, and spread out water-intensive activities like laundry throughout
                          the week.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Keep Records</h3>
                        <p className="text-green-700 mb-0">
                          Maintain detailed records of your septic system's location, design, installations,
                          inspections, and pumpings. These records are valuable for maintenance and if you sell your
                          property.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Divert Rainwater</h3>
                        <p className="text-green-700 mb-0">
                          Ensure roof drains, sump pumps, and other rainwater drainage systems are directed away from
                          your septic tank and drain field to prevent overloading.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Use Septic-Safe Products</h3>
                        <p className="text-green-700 mb-0">
                          Choose household cleaning products labeled as septic-safe or biodegradable. These products are
                          less likely to disrupt the bacterial action in your tank.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Inspect Regularly</h3>
                        <p className="text-green-700 mb-0">
                          Have your system professionally inspected every 1-3 years to identify potential issues before
                          they become major problems.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Plant Grass Over Drain Field</h3>
                        <p className="text-green-700 mb-0">
                          Maintain a grass cover over your drain field to prevent erosion and help remove excess water
                          through transpiration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-800 font-bold text-lg mt-0">DO Know Warning Signs</h3>
                        <p className="text-green-700 mb-0">
                          Learn to recognize signs of septic problems: slow drains, gurgling pipes, sewage odors, wet
                          spots in the yard, or unusually lush grass over the drain field.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Septic System Don'ts</h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Flush Harmful Items</h3>
                        <p className="text-red-700 mb-0">
                          Never flush non-biodegradable items like wipes (even "flushable" ones), feminine hygiene
                          products, diapers, paper towels, cigarette butts, dental floss, cat litter, or medications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Pour Grease Down Drains</h3>
                        <p className="text-red-700 mb-0">
                          Never pour cooking oil, grease, or fat down your drains. These substances can solidify and
                          cause blockages in your system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Use Harsh Chemicals</h3>
                        <p className="text-red-700 mb-0">
                          Avoid pouring harsh chemicals like drain cleaners, paint, solvents, pesticides, or large
                          amounts of bleach down your drains. These can kill beneficial bacteria in your tank.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Drive Over System</h3>
                        <p className="text-red-700 mb-0">
                          Never drive or park vehicles on any part of your septic system. The weight can damage pipes,
                          compact soil, and crush your drain field.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Plant Trees Near System</h3>
                        <p className="text-red-700 mb-0">
                          Avoid planting trees or shrubs with aggressive root systems near your septic tank or drain
                          field. Roots can infiltrate and damage the system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Build Over System</h3>
                        <p className="text-red-700 mb-0">
                          Never build structures, patios, decks, or swimming pools over your septic tank or drain field.
                          This prevents access for maintenance and can damage the system.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Use Garbage Disposals Excessively</h3>
                        <p className="text-red-700 mb-0">
                          Limit garbage disposal use, as it increases the amount of solids entering your tank, requiring
                          more frequent pumping.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-red-800 font-bold text-lg mt-0">DON'T Ignore Warning Signs</h3>
                        <p className="text-red-700 mb-0">
                          Never ignore signs of septic problems. Addressing issues early can prevent more extensive and
                          expensive repairs later.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="mt-12 mb-6">Special Considerations for Different Seasons</h2>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Winter Care</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>
                          keep the area over your system clear of snow for better insulation (snow acts as an
                          insulator).
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>compact snow over your drain field with snowmobiles or other vehicles.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>
                          add a layer of mulch (8-12 inches) over the system before winter to provide extra insulation.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>
                          let your system sit unused for long periods during cold weather, as this can lead to freezing.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Summer Care</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>be mindful of increased water usage from summer guests or activities.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>
                          direct sprinklers to run over your drain field, as the soil needs to process wastewater.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>spread out water-intensive activities during hot weather to prevent overloading.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>allow swimming pools or hot tubs to drain near your septic system.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Rainy Season Care</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>ensure proper drainage away from your septic system during heavy rains.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>use excessive water during periods of heavy rainfall or flooding.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-green-700 font-bold whitespace-nowrap">DO</strong>
                        <span>check your system after severe weather events for signs of problems.</span>
                      </li>
                      <li className="flex gap-2">
                        <strong className="text-red-700 font-bold whitespace-nowrap">DON'T</strong>
                        <span>
                          pump your tank during or immediately after flooding, as it can cause the tank to float out of
                          the ground.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="mt-12 mb-6">What to Do If You Suspect a Problem</h2>
                <p className="mb-4">If you notice any warning signs of septic system problems, take these steps:</p>
                <ol className="list-decimal pl-5 space-y-3 mb-8">
                  <li className="pl-2">
                    <strong>Reduce water usage</strong> immediately to prevent further stress on the system.
                  </li>
                  <li className="pl-2">
                    <strong>Don't attempt DIY repairs</strong> on septic systems, as this can be dangerous and may
                    worsen the problem.
                  </li>
                  <li className="pl-2">
                    <strong>Contact Alpha Septic Services</strong> at (512) 793-7867 for professional assessment and
                    service.
                  </li>
                  <li className="pl-2">
                    <strong>Keep people and pets away</strong> from any wet areas or standing water near your septic
                    system until it's been inspected.
                  </li>
                  <li className="pl-2">
                    <strong>Document the issue</strong> with photos and notes for your records and potential insurance
                    claims.
                  </li>
                </ol>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-800 font-bold text-lg mt-0">Professional Maintenance</h3>
                      <p className="text-blue-700 mb-0">
                        The most important "do" for septic system care is to establish a regular maintenance schedule
                        with a professional service provider. Alpha Septic Pumping offers maintenance plans that include
                        regular inspections, pumping as needed, and expert advice tailored to your specific system and
                        usage patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Conclusion</h2>
                <p>
                  By following these septic system do's and don'ts, you can significantly extend the life of your
                  system, avoid costly repairs, and protect your property value. Remember that prevention is always less
                  expensive than emergency repairs or system replacement.
                </p>
                <p>
                  If you have questions about your septic system or would like to schedule maintenance, contact Alpha
                  Septic Services today. Our experienced team is ready to help you keep your septic system functioning
                  properly for years to come.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg">Schedule Septic Service</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
