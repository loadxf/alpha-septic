import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Info, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Understanding Your Septic System | Alpha Septic Services",
  description: "A comprehensive guide to how septic systems work, their components, and how to maintain them properly.",
}

export default function UnderstandingSepticSystemsPage() {
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
                Understanding Your Septic System
              </h1>
              <p className="text-gray-500 md:text-xl">
                A comprehensive guide to how septic systems work, their components, and how to maintain them properly.
              </p>
            </div>
            <div className="mt-8 space-y-8">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
                <Image
                  src="/images/how-septic-systems-work.webp"
                  alt="Detailed septic system diagram showing all components"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <p className="text-sm text-center text-gray-500 italic">
                Diagram showing the components and operation of a typical residential septic system.
              </p>

              <div className="prose prose-blue max-w-none">
                <h2>What Is a Septic System?</h2>
                <p>
                  A septic system is an underground wastewater treatment structure commonly used in rural areas without
                  centralized sewer systems. It's a self-contained, highly efficient system that treats wastewater from
                  household plumbing produced by bathrooms, kitchen drains, and laundry.
                </p>
                <p>
                  Approximately 20% of homes in the United States use septic systems instead of public sewers. When
                  properly designed, constructed, and maintained, a septic system can provide long-term, effective
                  treatment of household wastewater.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-blue-800 font-bold text-lg mt-0">Did You Know?</h3>
                      <p className="text-blue-700 mb-0">
                        A typical single-family home will generate approximately 70 gallons of wastewater per person per
                        day. A properly functioning septic system processes this wastewater naturally, returning clean
                        water to the groundwater supply.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>How Septic Systems Work</h2>
                <p>
                  Septic systems work through a combination of natural processes involving bacteria and the environment.
                  The system treats wastewater in stages:
                </p>

                <h3>Stage 1: Collection</h3>
                <p>
                  All water from your toilets, sinks, showers, and appliances exits your home through a main drainage
                  pipe into the septic tank.
                </p>

                <h3>Stage 2: Separation in the Septic Tank</h3>
                <p>
                  The septic tank is a buried, watertight container typically made of concrete, fiberglass, or
                  polyethylene. It holds the wastewater long enough for solids to settle to the bottom (forming sludge)
                  while oil and grease float to the top (forming scum).
                </p>
                <p>
                  Compartments and a T-shaped outlet prevent the sludge and scum from leaving the tank and traveling
                  into the drain field area. The liquid wastewater (effluent) then exits the tank into the drain field.
                </p>

                <h3>Stage 3: Treatment in the Drain Field</h3>
                <p>
                  The drain field is a shallow, covered excavation in unsaturated soil. The pretreated wastewater is
                  discharged through perforated pipes into porous surfaces that allow the wastewater to filter through
                  the soil. The soil accepts, treats, and disperses the wastewater as it percolates through the soil,
                  ultimately discharging to groundwater.
                </p>
                <p>
                  If the drain field is overloaded with too much liquid or clogged with solids, it can flood, causing
                  sewage to flow to the ground surface or create backups in toilets and sinks.
                </p>

                <h3>Stage 4: Soil Treatment</h3>
                <p>
                  The soil provides the final treatment of the wastewater. As the wastewater percolates through the
                  soil, harmful bacteria, viruses, and nutrients are removed before the wastewater reaches groundwater.
                </p>

                <h2>Main Components of a Septic System</h2>

                <h3>1. Septic Tank</h3>
                <p>
                  The septic tank is the initial processing unit of your septic system. Its primary functions include:
                </p>
                <ul>
                  <li>Receiving all wastewater from the house</li>
                  <li>Separating solids from liquids</li>
                  <li>Beginning the decomposition of organic matter through bacterial action</li>
                  <li>Storing solids (both floating scum and settled sludge)</li>
                  <li>Allowing partially treated water (effluent) to flow to the drain field</li>
                </ul>
                <p>
                  Septic tanks typically have a capacity of 1,000 to 2,000 gallons, depending on the size of the home
                  and local regulations. Modern tanks often have two compartments to improve solid separation.
                </p>

                <h3>2. Distribution Box</h3>
                <p>
                  The distribution box (D-box) is a small, concrete box that evenly distributes wastewater from the
                  septic tank to the drain field pipes. It ensures that all parts of the drain field receive an equal
                  amount of effluent, preventing overloading in one area.
                </p>

                <h3>3. Drain Field (Leach Field)</h3>
                <p>
                  The drain field consists of a series of perforated pipes laid in gravel-filled trenches or beds. Its
                  functions include:
                </p>
                <ul>
                  <li>Distributing effluent throughout a large soil area</li>
                  <li>Allowing effluent to percolate through the soil</li>
                  <li>Facilitating final treatment of wastewater through natural soil processes</li>
                </ul>
                <p>
                  The size of the drain field depends on the volume of wastewater flow and soil conditions. Proper
                  sizing is critical for effective treatment.
                </p>

                <h3>4. Soil</h3>
                <p>
                  The soil beneath and around your drain field is perhaps the most important component of your septic
                  system. It provides the final treatment of the wastewater through:
                </p>
                <ul>
                  <li>Physical filtration of remaining particles</li>
                  <li>Biological treatment by soil microorganisms</li>
                  <li>Chemical adsorption of contaminants</li>
                </ul>
                <p>
                  Different soil types have varying abilities to treat wastewater. Sandy soils allow water to percolate
                  quickly but provide less treatment, while clay soils treat wastewater more effectively but may not
                  allow sufficient percolation.
                </p>

                <h3>5. Optional Components</h3>
                <p>
                  Depending on site conditions and local regulations, your septic system may include additional
                  components:
                </p>
                <ul>
                  <li>
                    <strong>Pump Tank:</strong> Required when the drain field is located uphill from the septic tank or
                    when a specific dosing schedule is needed.
                  </li>
                  <li>
                    <strong>Effluent Filter:</strong> Installed at the outlet of the septic tank to prevent solids from
                    reaching the drain field.
                  </li>
                  <li>
                    <strong>Alternative Treatment Systems:</strong> Such as aerobic treatment units, sand filters, or
                    constructed wetlands, which provide additional treatment before wastewater reaches the drain field.
                  </li>
                </ul>

                <h2>Types of Septic Systems</h2>
                <p>
                  While the conventional septic system described above is most common, several other types exist to
                  accommodate different soil conditions, site constraints, or regulatory requirements:
                </p>

                <h3>Conventional System</h3>
                <p>
                  The standard system with a septic tank and drain field as described above. Suitable for sites with
                  good soil and sufficient land area.
                </p>

                <h3>Chamber System</h3>
                <p>
                  Similar to conventional systems but using a series of connected chambers instead of gravel-filled
                  trenches in the drain field. These provide a larger storage area and soil interface, making them
                  useful in areas with high groundwater or limited space.
                </p>

                <h3>Drip Distribution System</h3>
                <p>
                  Uses a network of small-diameter tubing to slowly release effluent into the soil. This system requires
                  a pump tank and is useful for sites with shallow soil or irregular terrain.
                </p>

                <h3>Aerobic Treatment Unit (ATU)</h3>
                <p>
                  Incorporates oxygen into the treatment process to enhance bacterial activity. ATUs produce a higher
                  quality effluent and may be used where conventional systems cannot meet treatment requirements.
                </p>

                <h3>Mound System</h3>
                <p>
                  Elevates the drain field above the natural soil surface using sand, gravel, and soil. Used in areas
                  with high groundwater, shallow soil depth, or poor soil permeability.
                </p>

                <h3>Sand Filter System</h3>
                <p>
                  Filters effluent through a constructed sand bed before it enters the drain field or is discharged.
                  Provides additional treatment for sites with poor soil conditions.
                </p>

                <h2>Septic System Maintenance</h2>
                <p>
                  Proper maintenance is essential for the longevity and effectiveness of your septic system. Here are
                  key maintenance practices every homeowner should follow:
                </p>

                <h3>Regular Pumping</h3>
                <p>
                  The most important maintenance task is regular pumping of your septic tank. Over time, solids that
                  cannot be broken down accumulate in the tank and must be removed to prevent them from flowing into the
                  drain field.
                </p>
                <ul>
                  <li>For most households, pumping every 3-5 years is recommended</li>
                  <li>Larger households or heavy usage may require more frequent pumping</li>
                  <li>Only use licensed, professional pumpers who will properly dispose of the waste</li>
                </ul>

                <h3>Regular Inspections</h3>
                <p>Professional inspections help identify potential problems before they become serious:</p>
                <ul>
                  <li>Have your system inspected every 1-3 years by a qualified professional</li>
                  <li>
                    Inspections should include checking tank levels, examining baffles and filters, and assessing drain
                    field condition
                  </li>
                  <li>Keep detailed records of all inspections and maintenance</li>
                </ul>

                <h3>Water Conservation</h3>
                <p>Reducing water usage helps prevent overloading your septic system:</p>
                <ul>
                  <li>Fix leaky faucets and running toilets promptly</li>
                  <li>Install water-efficient fixtures and appliances</li>
                  <li>Spread out laundry loads throughout the week</li>
                  <li>Take shorter showers and avoid filling the bathtub completely</li>
                  <li>Run dishwashers and washing machines only when full</li>
                </ul>

                <h3>Proper Waste Disposal</h3>
                <p>What goes down your drains affects your septic system's performance:</p>
                <ul>
                  <li>Never flush non-biodegradable items or harsh chemicals</li>
                  <li>Avoid or limit garbage disposal use</li>
                  <li>Never pour grease, oil, or fat down drains</li>
                  <li>Dispose of household hazardous wastes properly, not in drains or toilets</li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-green-800 font-bold text-lg mt-0">Maintenance Schedule</h3>
                      <p className="text-green-700 mb-0">
                        Alpha Septic Pumping offers customized maintenance schedules based on your specific system,
                        household size, and usage patterns. Our professional technicians can help you determine the
                        optimal schedule for your septic system and provide reminders when service is due.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Signs of Septic System Problems</h2>
                <p>
                  Being able to recognize the early warning signs of septic system problems can help you address issues
                  before they become major failures:
                </p>
                <ul>
                  <li>Slow drains or gurgling sounds in plumbing</li>
                  <li>Sewage odors inside or outside your home</li>
                  <li>Wet, spongy ground or standing water around the septic tank or drain field</li>
                  <li>Unusually lush, green grass over the drain field</li>
                  <li>Sewage backing up into toilets, sinks, or drains</li>
                  <li>High nitrate or bacteria levels in well water tests</li>
                </ul>
                <p>
                  If you notice any of these warning signs, contact Alpha Septic Services immediately for professional
                  assessment and service.
                </p>

                <h2>Septic System Lifespan and Replacement</h2>
                <p>
                  With proper maintenance, a well-designed septic system can last 25-30 years or more. However, all
                  systems eventually need replacement. Factors affecting system lifespan include:
                </p>
                <ul>
                  <li>Quality of original design and installation</li>
                  <li>Soil conditions and groundwater levels</li>
                  <li>Household size and water usage patterns</li>
                  <li>Maintenance history</li>
                  <li>Types of waste entering the system</li>
                </ul>
                <p>
                  When replacement becomes necessary, it's an opportunity to upgrade to newer, more efficient
                  technologies that may offer better performance and environmental protection.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Understanding how your septic system works is the first step toward proper maintenance and long-term
                  performance. By following recommended maintenance practices and being attentive to warning signs, you
                  can protect your investment, avoid costly repairs, and ensure your system operates effectively for
                  decades.
                </p>
                <p>
                  Alpha Septic Services is here to help with all your septic system needs, from routine maintenance to
                  emergency services. Contact us today to schedule an inspection or discuss a maintenance plan tailored
                  to your specific system.
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
