import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import {
  Snowflake,
  ThermometerSnowflake,
  Droplet,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Shovel,
  Ruler,
  Wrench,
  Leaf,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How to Prepare Your Septic System for Winter | Alpha Septic Services",
  description:
    "Essential tips and best practices for winterizing your septic system to prevent freezing, damage, and costly repairs during cold weather.",
}

export default function WinterSepticPreparationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/winter-septic-pumping.webp')] bg-cover bg-center"></div>
        </div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="space-y-4">
              <Link
                href="/resources"
                className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
              >
                <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
                Back to Resources
              </Link>
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                How to Prepare Your Septic System for Winter
              </h1>
              <p className="text-xl text-blue-100 md:text-2xl max-w-2xl mx-auto">
                Protect your septic system from freezing temperatures and prevent costly winter damage
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-4">In This Guide:</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href="#why-winterize"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <ThermometerSnowflake className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Why Winterize</span>
                </a>
                <a
                  href="#before-winter"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <Leaf className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Before Winter Checklist</span>
                </a>
                <a
                  href="#during-winter"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <Snowflake className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">During Winter Tips</span>
                </a>
                <a href="#emergency" className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <AlertTriangle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Emergency Situations</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
              <Image
                src="/images/winter-septic-pumping.webp"
                alt="Winter septic system maintenance"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 text-lg font-medium">
                  Proper winterization helps prevent frozen septic components and system failures
                </p>
              </div>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 id="why-winterize" className="text-2xl font-bold text-blue-900 flex items-center gap-2 scroll-mt-24">
                <ThermometerSnowflake className="h-6 w-6 text-blue-700" />
                Why Winterizing Your Septic System Is Important
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p>
                  Winter can be particularly harsh on septic systems. Freezing temperatures can cause components to
                  freeze, leading to system backups, damage to pipes, and costly emergency repairs. In extreme cases,
                  frozen septic systems can leave your home without proper waste disposal during the coldest months of
                  the year.
                </p>
                <p className="mb-0">
                  Properly winterizing your septic system helps maintain its functionality throughout the cold season
                  and prevents expensive repairs. Taking preventative measures before winter arrives is much easier and
                  more cost-effective than dealing with a frozen or damaged system during freezing temperatures.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Droplet className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-blue-800 font-bold text-xl mt-0 mb-2">Did You Know?</h3>
                    <p className="text-blue-700 mb-0">
                      Snow actually acts as an insulator for your septic system. A good snow cover can help prevent the
                      ground from freezing as deeply. However, compacted snow from foot traffic, vehicles, or
                      snowmobiles loses this insulating quality and can drive frost deeper into the ground.
                    </p>
                  </div>
                </div>
              </div>

              <h2
                id="before-winter"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <Leaf className="h-6 w-6 text-blue-700" />
                Before Winter Checklist
              </h2>

              <p>
                Fall is the ideal time to prepare your septic system for winter. Complete these tasks before the first
                freeze to ensure your system is ready for cold weather:
              </p>

              {/* Before Winter Cards */}
              <div className="grid gap-6 md:grid-cols-2 my-8">
                {/* Item 1 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 flex items-center gap-3">
                    <div className="bg-amber-200 rounded-full p-2">
                      <Shovel className="h-5 w-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 m-0">Schedule a Pumping</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      If your tank is due or nearly due for pumping, schedule it before winter. A full tank is more
                      susceptible to problems during freezing weather, and emergency pumping in winter is more difficult
                      and expensive.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 flex items-center gap-3">
                    <div className="bg-amber-200 rounded-full p-2">
                      <Ruler className="h-5 w-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 m-0">Inspect the System</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Have a professional inspect your entire septic system, including the tank, pipes, and drain field.
                      They can identify and fix any issues that could become major problems during winter.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 flex items-center gap-3">
                    <div className="bg-amber-200 rounded-full p-2">
                      <Wrench className="h-5 w-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 m-0">Fix Leaks</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Repair any leaking faucets, running toilets, or other plumbing issues. Constant water flow, even a
                      small trickle, can freeze in pipes leading to your septic system.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-4 flex items-center gap-3">
                    <div className="bg-amber-200 rounded-full p-2">
                      <Leaf className="h-5 w-5 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-900 m-0">Clear Fallen Leaves</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-0">
                      Remove fallen leaves and debris from your septic tank lid, inspection ports, and the area around
                      your drain field. This organic material can reduce insulation and lead to freezing issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Add Insulation</h3>
                <p className="mb-4">
                  Adding insulation is one of the most effective ways to prevent your septic system from freezing:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <strong>Insulate pipes:</strong> Wrap exposed pipes with foam pipe insulation or heat tape,
                      especially those in unheated areas.
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <strong>Add mulch:</strong> Apply a 8-12 inch layer of mulch, straw, or hay over the tank and
                      pipes to provide additional insulation.
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <strong>Install insulation boards:</strong> Place foam insulation boards over the septic tank and
                      distribution box.
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <strong>Let grass grow longer:</strong> Allow the grass over your drain field to grow slightly
                      longer in the fall for additional insulation.
                    </div>
                  </div>
                </div>
              </div>

              <h2
                id="during-winter"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <Snowflake className="h-6 w-6 text-blue-700" />
                During Winter Tips
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p className="mb-4">
                  Once winter arrives, follow these practices to keep your septic system functioning properly:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Maintain Regular Water Usage</h4>
                      <p className="mb-0">
                        Regular water flow helps prevent freezing. If you're away from home for extended periods,
                        arrange for someone to use water in your home periodically, or install a drip system.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Spread Out Water Usage</h4>
                      <p className="mb-0">
                        Avoid doing multiple loads of laundry, running the dishwasher, and taking showers back-to-back.
                        Spread water usage throughout the day to maintain a consistent flow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Keep Snow Cover Intact</h4>
                      <p className="mb-0">
                        Don't remove snow cover from your septic tank or drain field area. Snow acts as natural
                        insulation. Mark your septic system components before snowfall so you can avoid compacting snow
                        in these areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Avoid Compacting Snow</h4>
                      <p className="mb-0">
                        Keep vehicles, snowmobiles, and heavy foot traffic off your drain field and tank area. Compacted
                        snow loses its insulating properties and can drive frost deeper into the ground.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Minimize Use of Antibacterial Products</h4>
                      <p className="mb-0">
                        Excessive use of antibacterial soaps and cleaners can kill beneficial bacteria in your septic
                        tank, which are especially important during winter when bacterial activity is naturally slower.
                      </p>
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
                    <h3 className="text-amber-800 font-bold text-xl mt-0 mb-2">What NOT to Do in Winter</h3>
                    <ul className="text-amber-700 mb-0 space-y-2">
                      <li>Don't add antifreeze or salt to your septic system</li>
                      <li>Don't attempt to thaw frozen pipes with an open flame</li>
                      <li>Don't run water continuously as a preventative measure</li>
                      <li>Don't drive heavy equipment over your septic system to remove snow</li>
                      <li>Don't pump your septic tank during freezing conditions unless absolutely necessary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2
                id="emergency"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <AlertTriangle className="h-6 w-6 text-blue-700" />
                Handling Winter Septic Emergencies
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p className="mb-4">
                  If you suspect your septic system has frozen despite your preventative measures, look for these signs:
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-1.5 mt-1">
                      <AlertTriangle className="h-4 w-4 text-red-700" />
                    </div>
                    <div>Toilets that won't flush or drain slowly</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-1.5 mt-1">
                      <AlertTriangle className="h-4 w-4 text-red-700" />
                    </div>
                    <div>Gurgling sounds in the plumbing</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-1.5 mt-1">
                      <AlertTriangle className="h-4 w-4 text-red-700" />
                    </div>
                    <div>Water backing up in sinks and bathtubs</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-1.5 mt-1">
                      <AlertTriangle className="h-4 w-4 text-red-700" />
                    </div>
                    <div>Sewage odors inside or outside your home</div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                  <p className="font-medium mb-0">
                    If you experience these symptoms, contact Alpha Septic Services immediately at
                    <a href="tel:5127937867" className="text-blue-600 font-bold">
                      {" "}
                      (512) 793-7867
                    </a>{" "}
                    for emergency assistance. Do not attempt to thaw the system yourself with heat tape, open flames, or
                    other methods that could damage your system or create safety hazards.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-12">Conclusion</h2>
              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <p className="mb-4">
                  Preparing your septic system for winter is an essential part of home maintenance in colder climates.
                  By following these preventative measures and best practices, you can significantly reduce the risk of
                  freezing issues and ensure your septic system continues to function properly throughout the winter
                  months.
                </p>
                <p className="mb-0">
                  Remember that professional inspection and maintenance before winter arrives is the best insurance
                  against cold-weather septic problems. Contact Alpha Septic Services to schedule your pre-winter septic
                  system inspection and maintenance.
                </p>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Winterize Your Septic System?</h3>
                <p className="text-blue-100 mb-6">
                  Don't wait until freezing temperatures arrive. Our professional team can help you prepare your septic
                  system for winter and prevent costly cold-weather emergencies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-now">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 w-full">
                      Schedule Winter Preparation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
