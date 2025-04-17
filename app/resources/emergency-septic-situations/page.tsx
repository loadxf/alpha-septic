import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { AlertTriangle, PhoneCall, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Septic Situations: What to Do | Alpha Septic Services",
  description:
    "Learn how to handle septic emergencies safely and effectively, including steps to take while waiting for professional help.",
}

export default function EmergencySepticSituationsPage() {
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
                Emergency Septic Situations: What to Do
              </h1>
              <p className="text-gray-500 md:text-xl">
                Steps to take when facing a septic emergency to protect your property, health, and the environment.
              </p>
            </div>
            <div className="mt-8 space-y-8">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-custom">
                <Image
                  src="/images/septic-emergency-pumping.webp"
                  alt="Emergency septic service responding to a septic system failure"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-center text-gray-500 italic">
                Septic emergencies can happen at any time. Knowing how to respond quickly can minimize damage and health
                risks.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-10 w-10 text-red-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-red-800 font-bold text-xl mt-0 mb-1">24/7 Emergency Septic Hotline</h2>
                    <p className="text-red-700 mb-2">
                      For immediate assistance with septic emergencies, call our 24/7 hotline:
                    </p>
                    <a
                      href="tel:5127937867"
                      className="text-2xl font-bold text-red-700 hover:underline flex items-center gap-2"
                    >
                      (512) 793-PUMP (7867)
                    </a>
                  </div>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <h2>Recognizing a Septic Emergency</h2>
                <p>
                  Septic emergencies require immediate attention to prevent property damage, health hazards, and
                  environmental contamination. Here are signs that indicate you're dealing with an emergency situation
                  rather than a minor issue:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-amber-800 font-bold text-lg mt-0">Sewage Backup in Home</h3>
                        <p className="text-amber-700 mb-0">
                          Raw sewage backing up into toilets, sinks, tubs, or floor drains presents an immediate health
                          hazard and requires emergency response.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-amber-800 font-bold text-lg mt-0">Pooling Sewage</h3>
                        <p className="text-amber-700 mb-0">
                          Visible sewage or wastewater pooling on the ground surface around your septic tank or drain
                          field area.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-amber-800 font-bold text-lg mt-0">Strong Sewage Odors</h3>
                        <p className="text-amber-700 mb-0">
                          Persistent, strong sewage odors inside your home or in your yard, especially near the septic
                          system components.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-amber-800 font-bold text-lg mt-0">Alarm Activation</h3>
                        <p className="text-amber-700 mb-0">
                          If your system has an alarm and it's activated (beeping, flashing, etc.), this indicates a
                          potential emergency situation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Immediate Steps to Take During a Septic Emergency</h2>
                <p>
                  If you're experiencing a septic emergency, follow these steps to minimize damage and protect health
                  while waiting for professional help:
                </p>

                <h3>1. Stop Using Water Immediately</h3>
                <p>The most important first step is to stop adding water to the system:</p>
                <ul>
                  <li>Turn off all faucets and water-using appliances</li>
                  <li>Don't flush toilets</li>
                  <li>Don't run dishwashers or washing machines</li>
                  <li>Don't take showers or baths</li>
                  <li>Consider turning off the water main if the situation is severe</li>
                </ul>
                <p>
                  Every drop of water you send down the drain will make the situation worse until the problem is
                  resolved.
                </p>

                <h3>2. Keep People and Pets Away from Affected Areas</h3>
                <p>Sewage contains harmful bacteria, viruses, and parasites that can cause serious illness:</p>
                <ul>
                  <li>Block off areas with sewage backups or pooling</li>
                  <li>Keep children and pets away from outdoor areas with visible sewage</li>
                  <li>Avoid walking through affected areas to prevent spreading contamination</li>
                </ul>

                <h3>3. Call for Emergency Service</h3>
                <p>
                  Contact Alpha Septic Services' 24/7 emergency hotline at (512) 793-PUMP (7867). When you call, be
                  prepared to provide:
                </p>
                <ul>
                  <li>Your name, address, and contact information</li>
                  <li>A description of the emergency (what you're seeing, smelling, etc.)</li>
                  <li>When you first noticed the problem</li>
                  <li>Any recent changes in water usage or system operation</li>
                  <li>The location of your septic tank and drain field (if known)</li>
                </ul>

                <h3>4. Ventilate Affected Indoor Areas</h3>
                <p>If you have sewage backup inside your home:</p>
                <ul>
                  <li>Open windows and doors to provide ventilation</li>
                  <li>Use fans to move air toward open windows (not toward other parts of the house)</li>
                  <li>Turn off central air conditioning or heating to prevent spreading contaminated air</li>
                </ul>

                <h3>5. Document the Situation</h3>
                <p>For insurance purposes, document the emergency:</p>
                <ul>
                  <li>Take photos or videos of affected areas</li>
                  <li>Make notes about when the problem started and what you observed</li>
                  <li>Keep receipts for any emergency services or repairs</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-red-800 font-bold text-lg mt-0">Safety Warning</h3>
                      <p className="text-red-700 mb-0">
                        Never enter a septic tank or attempt to open septic tank lids during an emergency. Septic tanks
                        contain toxic gases that can cause loss of consciousness or death within minutes. Leave all
                        inspection and repair work to trained professionals with proper safety equipment.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Handling Specific Emergency Situations</h2>

                <h3>Sewage Backup Inside Your Home</h3>
                <p>If sewage is backing up into your home through drains or toilets:</p>
                <ol>
                  <li>Stop using all water immediately</li>
                  <li>If safe to do so, turn off electricity to affected areas to prevent electrical hazards</li>
                  <li>Avoid contact with sewage-contaminated water</li>
                  <li>Call our emergency hotline at (512) 793-PUMP (7867)</li>
                  <li>
                    If the backup is minor, you can place towels or rags around toilets or drains to absorb small
                    amounts of overflow
                  </li>
                  <li>For major backups, evacuate the affected areas of your home until help arrives</li>
                </ol>

                <h3>Sewage Surfacing in Your Yard</h3>
                <p>If you notice wet areas, pooling, or sewage on the ground surface:</p>
                <ol>
                  <li>Keep people and pets away from the area</li>
                  <li>Avoid mowing or walking through the affected area</li>
                  <li>Call our emergency hotline at (512) 793-PUMP (7867)</li>
                  <li>If possible, rope off or mark the area to prevent accidental contact</li>
                  <li>Do not attempt to clean up or disinfect the area yourself</li>
                </ol>

                <h3>Septic Alarm Activation</h3>
                <p>If your system has an alarm that's activated:</p>
                <ol>
                  <li>Check which type of alarm is sounding (high water, pump failure, etc.)</li>
                  <li>Reduce water usage immediately</li>
                  <li>Do not silence or disable the alarm</li>
                  <li>Call our emergency hotline at (512) 793-PUMP (7867) and report the specific alarm type</li>
                  <li>Continue to minimize water usage until help arrives</li>
                </ol>

                <h3>Drain Field Flooding</h3>
                <p>If your drain field is flooded due to heavy rain or rising groundwater:</p>
                <ol>
                  <li>Reduce water usage dramatically until the area dries out</li>
                  <li>Avoid driving or placing heavy equipment on the drain field</li>
                  <li>Call our office to schedule an inspection once flooding subsides</li>
                  <li>Consider having your tank pumped to relieve pressure on the system</li>
                </ol>

                <h2>After the Emergency: Clean-Up and Recovery</h2>
                <p>Once our team has addressed the immediate emergency, proper cleanup is essential:</p>

                <h3>Professional Cleanup</h3>
                <p>
                  For significant sewage backups inside your home, we recommend professional cleaning services that
                  specialize in biohazard cleanup. These professionals have the proper equipment, disinfectants, and
                  training to safely clean contaminated areas.
                </p>

                <h3>DIY Cleanup for Minor Issues</h3>
                <p>If you're handling minor cleanup yourself:</p>
                <ul>
                  <li>Wear protective gear: rubber gloves, boots, eye protection, and a mask</li>
                  <li>
                    Remove and discard contaminated soft materials (carpet, upholstery, etc.) that cannot be properly
                    disinfected
                  </li>
                  <li>
                    Clean hard surfaces with hot water and detergent, then disinfect with a chlorine bleach solution (1
                    cup bleach to 1 gallon water)
                  </li>
                  <li>Ensure thorough ventilation during and after cleaning</li>
                  <li>Wash all clothing worn during cleanup separately in hot water and detergent</li>
                </ul>

                <h3>Follow-Up Inspection</h3>
                <p>After an emergency, we recommend a thorough inspection of your entire septic system to:</p>
                <ul>
                  <li>Identify the root cause of the emergency</li>
                  <li>Assess any damage to system components</li>
                  <li>Recommend repairs or modifications to prevent future emergencies</li>
                  <li>Develop a maintenance plan to ensure ongoing system health</li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-green-800 font-bold text-lg mt-0">Preventative Maintenance</h3>
                      <p className="text-green-700 mb-0">
                        The best way to handle septic emergencies is to prevent them from happening in the first place.
                        Alpha Septic Services offers preventative maintenance programs that include regular inspections,
                        pumping, and system assessments to identify potential issues before they become emergencies.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Insurance Considerations</h2>
                <p>Septic emergencies can be costly. Here's what you should know about insurance coverage:</p>
                <ul>
                  <li>
                    Standard homeowner's insurance policies typically do not cover septic system failures or backups
                  </li>
                  <li>Some insurers offer septic system coverage as an add-on or rider to your policy</li>
                  <li>Sewer backup coverage may help with cleanup costs for sewage backups inside your home</li>
                  <li>Document all damage with photos and detailed notes</li>
                  <li>Contact your insurance provider as soon as possible after an emergency</li>
                </ul>
                <p>
                  We recommend reviewing your homeowner's insurance policy and considering additional coverage if your
                  septic system isn't currently protected.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Septic emergencies require prompt, appropriate action to minimize damage and protect health. By
                  knowing what to do when an emergency occurs, you can reduce the impact on your property and family
                  while waiting for professional help.
                </p>
                <p>
                  Remember that Alpha Septic Services is available 24/7 for emergency service. Our experienced
                  technicians will respond quickly to address your emergency and help you get your system back to normal
                  operation as soon as possible.
                </p>
                <p>For emergency septic service, call our hotline at (512) 793-PUMP (7867) any time, day or night.</p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg">Schedule Preventative Maintenance</Button>
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
