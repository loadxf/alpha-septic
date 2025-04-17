import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumb } from "@/components/breadcrumb"
import { AlertTriangle, CheckCircle, ClipboardCheck, AlertOctagon } from "lucide-react"
// Add the schema import at the top of the file, after the other imports
import SepticInspectionSchema from "./schema"

export const metadata: Metadata = {
  title: "Septic System Inspection: What to Expect | Alpha Septic Services Austin TX",
  description:
    "A comprehensive guide to septic system inspections: what happens during the inspection, how to prepare, what inspectors look for, and how to interpret the results.",
  keywords:
    "septic system inspection, septic tank inspection, septic inspection checklist, septic system examination, septic tank assessment",
}

export default function SepticSystemInspectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          {
            label: "Septic System Inspection: What to Expect",
            href: "/resources/septic-system-inspection-what-to-expect",
            isCurrent: true,
          },
        ]}
      />
      {/* Add the schema component right before the closing </div> of the main flex-col div */}
      {/* Around line 18, after the <Breadcrumb> component and before the <div className="flex-1"> div */}
      <SepticInspectionSchema />

      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Septic System Inspection: What to Expect
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A comprehensive guide to understanding the septic inspection process
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl py-12">
              <div className="relative w-full h-64 md:h-80 mb-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/septic-inspection-checklist.webp"
                  alt="Septic system inspection process"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-blue max-w-none">
                <h2>Introduction: Why Septic Inspections Matter</h2>
                <p>
                  Whether you're buying a home with a septic system, selling your property, or simply maintaining your
                  current system, regular septic inspections are crucial. A thorough inspection can identify potential
                  issues before they become expensive problems, ensure your system meets local regulations, and provide
                  peace of mind that your wastewater is being properly treated.
                </p>
                <p>
                  This guide will walk you through what happens during a professional septic inspection, how to prepare,
                  what inspectors look for, and how to interpret the results to maintain a healthy septic system.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="flex items-center font-medium">
                    <ClipboardCheck className="h-5 w-5 text-blue-500 mr-2" />
                    <strong>Pro Tip:</strong> Even if your septic system seems to be functioning normally, experts
                    recommend inspections every 1-3 years for conventional systems and annually for alternative systems
                    with mechanical components or pumps.
                  </p>
                </div>

                <h2>Types of Septic Inspections</h2>
                <p>Not all septic inspections are created equal. The three main types include:</p>

                <div className="space-y-6 my-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">1. Visual Inspection</h3>
                    <p className="text-gray-700">
                      <strong>What it includes:</strong> A basic visual assessment of the system without opening the
                      tank or performing detailed tests.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                      <li>Assessment of plumbing fixtures in the home</li>
                      <li>Checking for signs of backup or slow drains</li>
                      <li>Visual inspection of the drain field area for wet spots or odors</li>
                      <li>Verification of the system's location and visible components</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      <strong>Best for:</strong> Annual homeowner checkups or preliminary assessments
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">2. Full Inspection</h3>
                    <p className="text-gray-700">
                      <strong>What it includes:</strong> A comprehensive assessment that involves opening the tank and
                      examining internal components.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                      <li>Everything in a visual inspection</li>
                      <li>Opening and examining inside the septic tank</li>
                      <li>Measuring sludge and scum layers</li>
                      <li>Checking baffles, filters, and other components</li>
                      <li>Evaluating drain field condition more thoroughly</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      <strong>Best for:</strong> Regular maintenance inspections every 3-5 years or before purchasing a
                      property
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">3. Comprehensive Evaluation</h3>
                    <p className="text-gray-700">
                      <strong>What it includes:</strong> The most detailed inspection that includes all components of
                      the full inspection plus additional testing.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                      <li>Everything in a full inspection</li>
                      <li>Flow testing to check system capacity</li>
                      <li>Hydraulic load test</li>
                      <li>Camera inspection of pipes</li>
                      <li>Soil evaluation</li>
                      <li>Detailed assessment of advanced treatment components (if applicable)</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      <strong>Best for:</strong> Real estate transactions, suspected system failures, or when applying
                      for permits for home additions/renovations
                    </p>
                  </div>
                </div>

                <h2>Preparing for a Septic Inspection</h2>
                <p>
                  To ensure your septic inspection goes smoothly and provides accurate results, follow these preparation
                  steps:
                </p>

                <div className="bg-white rounded-lg p-6 shadow-sm my-6">
                  <h3 className="text-lg font-semibold mb-4">Before the Inspector Arrives</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Locate your septic system</p>
                        <p className="text-sm text-gray-600">
                          Find and mark the location of your septic tank, access ports, and drain field. If you're
                          unsure where these components are located, check your property records or previous inspection
                          reports.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Uncover access points</p>
                        <p className="text-sm text-gray-600">
                          If your septic tank access ports are buried, dig down to expose them. This saves time for the
                          inspector and may reduce service costs. Don't attempt to open the ports yourself.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Gather documentation</p>
                        <p className="text-sm text-gray-600">
                          Collect any records you have about your septic system, including previous inspection reports,
                          pumping receipts, repair records, permits, and the original system design if available.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Avoid heavy water usage before inspection</p>
                        <p className="text-sm text-gray-600">
                          Limit laundry, long showers, and running dishwashers for 24-48 hours before the inspection to
                          allow the system to operate under normal conditions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Clear access to the system</p>
                        <p className="text-sm text-gray-600">
                          Remove any obstacles, lawn furniture, potted plants, or vehicles that might block access to
                          your septic tank or drain field.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Prepare a list of questions or concerns</p>
                        <p className="text-sm text-gray-600">
                          Document any issues you've noticed (slow drains, gurgling sounds, odors, etc.) to discuss with
                          the inspector.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="flex items-center font-medium">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    <strong>Important:</strong> Never enter a septic tank or attempt to open the tank yourself. Septic
                    tanks contain toxic gases that can be fatal, and the structure can be unstable. Leave this work to
                    trained professionals with proper safety equipment.
                  </p>
                </div>

                <h2>What Happens During a Septic Inspection</h2>
                <p>
                  Understanding the inspection process can help you know what to expect and ensure you're getting a
                  thorough evaluation of your system.
                </p>

                <h3>Step 1: Initial Assessment and Documentation</h3>
                <p>The inspector will begin by:</p>
                <ul>
                  <li>Reviewing your system records and documentation</li>
                  <li>Asking about your water usage patterns, maintenance history, and any issues you've noticed</li>
                  <li>
                    Verifying the system type, age, size, and location of components based on visible evidence and your
                    records
                  </li>
                  <li>
                    Creating or updating a diagram of your system's layout (especially important if accurate records
                    don't exist)
                  </li>
                </ul>

                <h3>Step 2: Indoor Plumbing Evaluation</h3>
                <p>
                  Next, the inspector will check your home's plumbing to assess how it interacts with the septic system:
                </p>
                <ul>
                  <li>Running water in sinks, tubs, and showers to check drainage</li>
                  <li>Flushing toilets to verify proper flow</li>
                  <li>Checking for leaks, slow drains, or gurgling sounds</li>
                  <li>
                    Verifying that all wastewater sources in the home connect to the septic system (rather than
                    unauthorized straight pipes or gray water systems)
                  </li>
                  <li>
                    Confirming that sump pumps, water softeners, and other water-using appliances are properly
                    configured
                  </li>
                </ul>

                <h3>Step 3: Septic Tank Inspection</h3>
                <p>
                  During a full or comprehensive inspection, the inspector will open the septic tank access ports to
                  examine the interior:
                </p>
                <ul>
                  <li>Measuring the scum layer (floating materials) and sludge layer (settled solids)</li>
                  <li>
                    Checking the condition of baffles or tees (devices that prevent solids from entering the drain
                    field)
                  </li>
                  <li>Inspecting for cracks, leaks, or deterioration of the tank</li>
                  <li>Assessing water levels (abnormal levels can indicate problems)</li>
                  <li>Examining effluent filters if present</li>
                  <li>Checking for evidence of previous backups or system failures</li>
                </ul>

                <h3>Step 4: Drain Field Evaluation</h3>
                <p>
                  The drain field (leach field) is critical to the proper functioning of your septic system. The
                  inspector will:
                </p>
                <ul>
                  <li>Visually inspect the drain field area for signs of problems</li>
                  <li>Check for wet spots, unusual growth patterns, or odors</li>
                  <li>Look for evidence of compaction from vehicles or structures</li>
                  <li>Probe the soil to assess moisture levels (in comprehensive inspections)</li>
                  <li>
                    Verify adequate distance from wells, water bodies, and property lines (according to local codes)
                  </li>
                  <li>
                    Examine distribution boxes or other components that direct effluent flow to the drain field (if
                    accessible)
                  </li>
                </ul>

                <h3>Step 5: Additional Testing (For Comprehensive Inspections)</h3>
                <p>More detailed inspections may include:</p>
                <ul>
                  <li>
                    <strong>Dye Testing:</strong> Adding non-toxic dye to the system to track water flow and check for
                    leaks
                  </li>
                  <li>
                    <strong>Flow Testing:</strong> Running a calculated amount of water through the system to test its
                    capacity
                  </li>
                  <li>
                    <strong>Hydraulic Load Test:</strong> Introducing a large volume of water to stress-test the system
                  </li>
                  <li>
                    <strong>Camera Inspection:</strong> Using specialized cameras to examine pipes for damage or
                    blockages
                  </li>
                  <li>
                    <strong>Soil Analysis:</strong> Testing soil composition and percolation rate in the drain field
                  </li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">What Inspectors Look For: Red Flags</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Standing water or soggy soil over the drain field</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Slow-draining fixtures throughout the home</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Sludge level within 12 inches of the outlet baffle</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Damaged or missing baffles</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Cracks or leaks in the septic tank</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Evidence of previous backups</span>
                      </li>
                      <li className="flex items-start">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                        <span>Unusually lush, green vegetation over the drain field</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Signs of a Healthy System</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Good drainage throughout the house</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Appropriate water levels in the tank</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Solid baffles with no signs of deterioration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Uniform, non-soggy drain field</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>No odors inside or outside the home</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Even distribution of effluent in the drain field</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Tank walls and top in good condition</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2>After the Inspection: Understanding the Results</h2>
                <p>
                  Once the inspection is complete, you should receive a detailed report outlining the inspector's
                  findings. Here's what to expect and how to interpret the results:
                </p>

                <h3>Components of a Thorough Inspection Report</h3>
                <p>A professional septic inspection report should include:</p>
                <ul>
                  <li>System details (type, size, age, components)</li>
                  <li>A diagram or map of system components</li>
                  <li>Current condition of each component</li>
                  <li>Sludge and scum measurements</li>
                  <li>Issues discovered during inspection</li>
                  <li>Recommended repairs or maintenance</li>
                  <li>Estimated remaining lifespan of the system</li>
                  <li>Photos documenting key findings</li>
                  <li>Recommendations for future maintenance</li>
                </ul>

                <h3>Interpreting Inspection Results</h3>
                <p>Inspection results typically fall into three categories:</p>

                <div className="space-y-4 my-6">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold">Pass: System in Good Condition</h4>
                    <p className="text-sm">
                      The system is functioning properly with no significant issues. Regular maintenance is still
                      recommended, including pumping every 3-5 years (depending on household size and usage).
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold">Pass with Recommendations: Minor Issues Present</h4>
                    <p className="text-sm">
                      The system is operational but has issues that should be addressed to prevent future problems.
                      These might include minor baffle damage, a tank nearing capacity, or effluent filter cleaning
                      needs. Following the inspector's recommendations can extend the life of your system.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold">Fail: Significant Problems Identified</h4>
                    <p className="text-sm">
                      Major issues require immediate attention. These might include a failing drain field, a damaged
                      tank, sewage backups, or system designs that don't meet current codes. Repairs or replacement may
                      be necessary, and in some jurisdictions, a failed inspection may trigger legal requirements for
                      system upgrades.
                    </p>
                  </div>
                </div>

                <h3>Next Steps Based on Inspection Results</h3>
                <p>
                  Depending on the inspection findings, you'll want to take appropriate action to maintain your system's
                  health:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold">If your system passed with flying colors:</h4>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Create a maintenance schedule based on the inspector's recommendations</li>
                      <li>Keep records of the inspection for future reference</li>
                      <li>Continue good habits like water conservation and proper waste disposal</li>
                      <li>Schedule your next inspection according to recommendations (typically 1-3 years)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold">If your system passed with minor issues:</h4>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Address the recommended repairs or maintenance promptly</li>
                      <li>Consider scheduling a follow-up inspection after repairs are completed</li>
                      <li>Adjust your maintenance practices based on the inspector's advice</li>
                      <li>Budget for potential future repairs or component replacements</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold">If your system failed inspection:</h4>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Contact a qualified septic contractor to discuss repair or replacement options</li>
                      <li>Get multiple quotes for major repairs or system replacement</li>
                      <li>Check with local health departments about permits and requirements</li>
                      <li>Investigate financing options if major expenses are involved</li>
                      <li>
                        Consider water conservation measures to reduce strain on the failing system until repairs can be
                        made
                      </li>
                      <li>Schedule a re-inspection after repairs are completed</li>
                    </ul>
                  </div>
                </div>

                <h2>Common Questions About Septic Inspections</h2>

                <div className="space-y-6 my-8">
                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="font-semibold">How much does a septic inspection cost?</h3>
                    <p className="text-gray-700 mt-2">
                      Costs vary by location and inspection type. Visual inspections typically range from $100-$200,
                      while full inspections range from $300-$600. Comprehensive evaluations with additional testing can
                      cost $500-$900 or more. Some areas require certified inspectors, which may affect pricing.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="font-semibold">How long does a septic inspection take?</h3>
                    <p className="text-gray-700 mt-2">
                      A visual inspection may take 30-60 minutes. Full inspections typically require 1-2 hours.
                      Comprehensive evaluations with additional testing can take 2-4 hours or may be spread across
                      multiple days if soil testing or specialized assessments are needed.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="font-semibold">Do I need to be present for the inspection?</h3>
                    <p className="text-gray-700 mt-2">
                      While not always required, being present is recommended so you can learn about your system, ask
                      questions, and receive immediate feedback. If you can't be present, ensure the inspector has
                      access to all necessary areas and components.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="font-semibold">Is a septic inspection required when selling a home?</h3>
                    <p className="text-gray-700 mt-2">
                      Requirements vary by location. Many states and counties now require septic inspections during
                      property transfers. Even when not legally required, mortgage lenders often request them, and
                      buyers frequently include them as a contingency in purchase agreements.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-5">
                    <h3 className="font-semibold">How often should I have my septic system inspected?</h3>
                    <p className="text-gray-700 mt-2">
                      For conventional systems, every 3 years is recommended (coinciding with pumping). Alternative
                      systems with pumps, mechanical components, or advanced treatment features should be inspected
                      annually. More frequent inspections are advised for older systems or those with a history of
                      problems.
                    </p>
                  </div>
                </div>

                <h2>Choosing a Qualified Septic Inspector</h2>
                <p>
                  Not all septic inspectors offer the same level of service or expertise. Here's how to find a qualified
                  professional:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Look for proper credentials</p>
                      <p className="text-sm text-gray-600">
                        Verify that the inspector is licensed, certified, or registered according to your state or
                        county requirements. Many areas require specific certifications for septic inspectors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Check experience and specialization</p>
                      <p className="text-sm text-gray-600">
                        Look for inspectors with specific experience with your type of septic system. Some inspectors
                        specialize in conventional systems, while others have expertise in aerobic treatment units,
                        mound systems, or other alternative designs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Ask about inspection methods</p>
                      <p className="text-sm text-gray-600">
                        Inquire about the specific procedures they'll perform and what their inspection includes. A
                        thorough inspector should be able to clearly explain their process and what they'll be
                        evaluating.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Request sample reports</p>
                      <p className="text-sm text-gray-600">
                        Ask to see a sample inspection report to ensure it's comprehensive and easy to understand.
                        Quality reports include detailed findings, photos, and clear recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Check reviews and references</p>
                      <p className="text-sm text-gray-600">
                        Read online reviews and ask for references from past clients. A reputable inspector should be
                        willing to provide references upon request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="flex items-center font-medium">
                    <ClipboardCheck className="h-5 w-5 text-blue-500 mr-2" />
                    <strong>Pro Tip:</strong> Consider hiring an inspector who doesn't also offer septic system repairs
                    or installations to avoid potential conflicts of interest. An independent inspector may provide a
                    more objective assessment.
                  </p>
                </div>

                <h2>Conclusion: The Value of Regular Septic Inspections</h2>
                <p>
                  Regular septic inspections are an investment in your property's health and value. By identifying
                  issues early, you can avoid costly emergency repairs, protect your property value, and ensure your
                  system operates efficiently for years to come.
                </p>
                <p>
                  Whether you're a new homeowner learning about your septic system for the first time, preparing to sell
                  your property, or simply practicing good maintenance, understanding what happens during a septic
                  inspection helps you make informed decisions about your wastewater system.
                </p>
                <p>
                  Remember that proper maintenance extends beyond inspections—practicing water conservation, being
                  mindful of what goes down your drains, and scheduling regular pumping are all essential parts of
                  septic system care.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Need a Professional Septic Inspection?</h3>
                  <p className="mb-4">
                    Alpha Septic Services provides thorough, professional septic inspections throughout the Austin area.
                    Our certified technicians can help you understand your system and ensure it's operating at peak
                    performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
                    >
                      Contact Us
                    </a>
                    <a
                      href="/book-now"
                      className="inline-flex items-center justify-center rounded-md bg-white border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Schedule an Inspection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
