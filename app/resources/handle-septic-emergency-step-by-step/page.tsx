import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { HowToSchema } from "@/components/how-to-schema"

export const metadata: Metadata = {
  title: "Handle a Septic Emergency: Step-by-Step Guide | Alpha Septic Services",
  description:
    "Learn how to handle septic emergencies with our step-by-step guide. Know when to call professionals and what immediate actions to take.",
  keywords: "septic emergency, septic backup, septic overflow, septic system failure, emergency septic service",
}

export default function HandleSepticEmergencyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Handle a Septic Emergency: Step-by-Step",
            href: "/resources/handle-septic-emergency-step-by-step",
            isCurrent: true,
          },
        ]}
      />

      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Handle a Septic Emergency: Step-by-Step Guide
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Learn how to respond quickly and effectively when your septic system fails
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl py-12">
              <div className="relative w-full h-64 md:h-80 mb-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/septic-emergency-pumping.webp"
                  alt="Septic emergency response"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="prose prose-blue max-w-none">
                <h2>Recognizing a Septic Emergency</h2>
                <p>
                  Septic emergencies can happen suddenly and require immediate attention. Knowing how to identify and
                  respond to these situations can help minimize damage to your property and protect your family's
                  health. Here are the common signs of a septic emergency:
                </p>

                <ul>
                  <li>Multiple drains backing up simultaneously</li>
                  <li>Sewage backing up into toilets, tubs, or sinks</li>
                  <li>Standing wastewater or sewage in your yard</li>
                  <li>Strong sewage odors inside or outside your home</li>
                  <li>Unusually soggy ground around your septic tank or drain field</li>
                  <li>Bright green, spongy grass over the drain field area</li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="font-medium">
                    <strong>Warning:</strong> Sewage contains harmful bacteria and pathogens. Always wear protective
                    gear when dealing with a septic emergency and keep children and pets away from affected areas.
                  </p>
                </div>

                <h2>Immediate Steps to Take</h2>

                <h3>Step 1: Stop Using Water</h3>
                <p>The first and most important step is to stop adding water to your septic system:</p>
                <ul>
                  <li>Turn off all faucets and water-using appliances</li>
                  <li>Don't flush toilets</li>
                  <li>Avoid using showers, washing machines, and dishwashers</li>
                  <li>If necessary, turn off the main water supply to your home</li>
                </ul>

                <h3>Step 2: Protect Your Family and Property</h3>
                <p>Take these precautions to minimize health risks and property damage:</p>
                <ul>
                  <li>Keep family members and pets away from affected areas</li>
                  <li>Block off areas with sewage backup to prevent spreading contamination</li>
                  <li>Open windows to ventilate areas with sewage odors</li>
                  <li>
                    If sewage has backed up into your home, wear rubber gloves, boots, and a mask when in affected areas
                  </li>
                  <li>Remove valuable items from areas at risk of flooding</li>
                </ul>

                <h3>Step 3: Document the Situation</h3>
                <p>Before cleanup begins, document the emergency for insurance purposes:</p>
                <ul>
                  <li>Take photos or videos of the affected areas</li>
                  <li>Make notes about when you first noticed the problem</li>
                  <li>Document any property damage</li>
                </ul>

                <h3>Step 4: Call a Professional Septic Service</h3>
                <p>Contact a licensed septic professional immediately. When calling, be prepared to provide:</p>
                <ul>
                  <li>A description of the emergency symptoms</li>
                  <li>The location of your septic tank and drain field (if known)</li>
                  <li>Information about your septic system (type, age, last pumping date)</li>
                  <li>Any recent changes in water usage or unusual events</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-medium">
                    <strong>Alpha Septic Services offers 24/7 emergency response.</strong> Call us at (512) 793-PUMP
                    (7867) for immediate assistance with your septic emergency.
                  </p>
                </div>

                <h2>While Waiting for Professional Help</h2>

                <h3>Do:</h3>
                <ul>
                  <li>Rope off or mark areas with sewage to prevent accidental contact</li>
                  <li>If safe to do so, check that the septic tank lid is secure</li>
                  <li>Locate your septic system records for the service provider</li>
                  <li>Move vehicles away from the septic tank and drain field to allow access for service trucks</li>
                </ul>

                <h3>Don't:</h3>
                <ul>
                  <li>Attempt to open the septic tank yourself (dangerous gases can be fatal)</li>
                  <li>Add chemical additives or "remedies" to your system</li>
                  <li>Try to pump the system yourself</li>
                  <li>Drive or park vehicles over the drain field or septic tank</li>
                  <li>Dig around the septic system components</li>
                </ul>

                <h2>After the Emergency</h2>

                <h3>Cleanup and Sanitization</h3>
                <p>After the septic professional has addressed the immediate emergency:</p>
                <ul>
                  <li>Wear protective gear (gloves, boots, mask) during cleanup</li>
                  <li>Remove and discard severely contaminated porous materials (carpet, drywall)</li>
                  <li>Clean hard surfaces with hot water and disinfectant</li>
                  <li>Wash contaminated clothing separately in hot water</li>
                  <li>Consider hiring professional cleaning services for extensive sewage backups</li>
                </ul>

                <h3>Prevention and Follow-up</h3>
                <p>Take these steps to prevent future emergencies:</p>
                <ul>
                  <li>Schedule a comprehensive septic system inspection</li>
                  <li>Follow the septic professional's recommendations for repairs or maintenance</li>
                  <li>Establish a regular pumping and maintenance schedule</li>
                  <li>Review and adjust household water usage habits</li>
                  <li>Keep detailed records of all septic system services</li>
                </ul>

                <h2>Common Causes of Septic Emergencies</h2>
                <p>Understanding what causes septic emergencies can help you prevent future problems:</p>

                <h3>System Overload</h3>
                <ul>
                  <li>Excessive water use (multiple loads of laundry, long showers)</li>
                  <li>Hosting large gatherings that increase water usage</li>
                  <li>Leaking fixtures adding constant water to the system</li>
                </ul>

                <h3>Blockages</h3>
                <ul>
                  <li>Flushing non-biodegradable items (wipes, feminine products, etc.)</li>
                  <li>Grease and oil buildup in pipes</li>
                  <li>Tree root intrusion into pipes or drain field</li>
                </ul>

                <h3>System Failure</h3>
                <ul>
                  <li>Neglected maintenance (infrequent pumping)</li>
                  <li>Aging system components</li>
                  <li>Soil compaction or drain field failure</li>
                  <li>Damage to tanks or pipes</li>
                </ul>

                <h2>When to Call for Emergency Service</h2>
                <p>
                  Not all septic issues require emergency service. Here's how to determine when to call for emergency
                  help versus scheduling a regular service appointment:
                </p>

                <h3>Call for Emergency Service When:</h3>
                <ul>
                  <li>Multiple drains are backing up</li>
                  <li>Sewage is coming up through drains</li>
                  <li>There's standing sewage in your yard</li>
                  <li>You notice strong sewage odors indoors</li>
                  <li>The septic alarm (if you have one) is sounding</li>
                </ul>

                <h3>Schedule Regular Service When:</h3>
                <ul>
                  <li>A single drain is slow</li>
                  <li>It's time for routine pumping</li>
                  <li>You notice minor odors outdoors only</li>
                  <li>You're planning preventative maintenance</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Septic emergencies require prompt action to minimize damage and health risks. By following this
                  step-by-step guide, you can effectively manage a septic emergency until professional help arrives.
                  Remember that the best approach to septic emergencies is prevention through regular maintenance and
                  proper system use.
                </p>
                <p>
                  Alpha Septic Services offers 24/7 emergency response for septic system failures throughout the Austin
                  area. Our experienced technicians can quickly diagnose and resolve your septic emergency, helping you
                  get back to normal as soon as possible.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold mb-4">Need Emergency Septic Service?</h3>
                  <p className="mb-4">
                    Don't wait until a small problem becomes a major emergency. Contact Alpha Septic Services for
                    prompt, professional assistance with your septic system.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button variant="default">Contact Us</Button>
                    </Link>
                    <Link href="/book-now">
                      <Button variant="outline">Schedule Service</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />

      <HowToSchema
        name="How to Handle a Septic Emergency"
        description="A step-by-step guide for managing septic system emergencies until professional help arrives"
        image="https://CallAlphaSeptic.com/images/septic-emergency-pumping.webp"
        steps={[
          {
            name: "Stop Using Water",
            text: "Turn off all faucets and water-using appliances to prevent adding more water to the system.",
          },
          {
            name: "Protect Your Family and Property",
            text: "Keep everyone away from affected areas and block off contaminated spaces.",
          },
          {
            name: "Document the Situation",
            text: "Take photos and notes about the emergency for insurance purposes.",
          },
          {
            name: "Call a Professional Septic Service",
            text: "Contact a licensed septic professional immediately for emergency assistance.",
          },
          {
            name: "Wait Safely for Help",
            text: "Rope off affected areas and prepare system information for the service provider.",
          },
          {
            name: "Clean and Sanitize",
            text: "After professional help has resolved the issue, properly clean and sanitize any affected areas.",
          },
        ]}
      />
    </div>
  )
}
