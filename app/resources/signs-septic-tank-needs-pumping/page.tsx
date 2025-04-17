import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { AlertTriangle, CheckCircle, Droplet, Ear, Skull, Waves, Flower2, Bell, Clock, Users, ChevronRight,  } from 'lucide-react'
import { ArticleSchema } from "@/components/article-schema"

export const metadata: Metadata = {
  title: "Signs Your Septic Tank Needs Pumping | Alpha Septic Services",
  description:
    "Learn to recognize the warning signs that your septic tank needs pumping to prevent costly repairs and system failures.",
}

export default function SignsSepticTankNeedsPumpingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Schema */}
      <ArticleSchema
        headline="Signs Your Septic Tank Needs Pumping"
        description="Learn to recognize the warning signs that your septic tank needs pumping to prevent costly repairs and system failures."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        image="/images/5-signs-septic-tank-needs-pumping.webp"
      />

      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/5-signs-septic-tank-needs-pumping.webp')] bg-cover bg-center"></div>
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
                Signs Your Septic Tank Needs Pumping
              </h1>
              <p className="text-xl text-blue-100 md:text-2xl max-w-2xl mx-auto">
                Recognize the warning signs before small issues become major problems
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
                  href="#why-important"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <AlertTriangle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Why It's Important</span>
                </a>
                <a
                  href="#warning-signs"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <AlertTriangle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">10 Warning Signs</span>
                </a>
                <a href="#what-to-do" className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">What To Do</span>
                </a>
                <a
                  href="#preventative"
                  className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="bg-blue-200 rounded-full p-1.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-blue-800 font-medium">Preventative Maintenance</span>
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
                src="/images/5-signs-septic-tank-needs-pumping.webp"
                alt="Septic tank pumping service"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 text-lg font-medium">
                  Regular septic tank pumping is essential to prevent system failures and costly repairs
                </p>
              </div>
            </div>

            <div className="prose prose-blue max-w-none">
              <h2 id="why-important" className="text-2xl font-bold text-blue-900 flex items-center gap-2 scroll-mt-24">
                <AlertTriangle className="h-6 w-6 text-blue-700" />
                Why Recognizing Warning Signs Is Important
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <p>
                  Your septic system works silently beneath the ground, processing household waste day after day. When
                  functioning properly, you might forget it's even there. However, ignoring the warning signs of a full
                  septic tank can lead to expensive repairs, property damage, and even health hazards.
                </p>
                <p className="mb-0">
                  Most septic tanks need pumping every 3-5 years, but this can vary based on household size, tank
                  capacity, and water usage. Learning to recognize when your tank needs attention can help you avoid
                  emergency situations and extend the life of your system.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-amber-800 font-bold text-xl mt-0 mb-2">Don't Wait Until It's Too Late</h3>
                    <p className="text-amber-700 mb-0">
                      Waiting until your septic system fails completely can cost thousands of dollars in repairs and
                      property damage. Regular pumping typically costs $300-$600, while a full system replacement can
                      cost $5,000-$25,000 or more.
                    </p>
                  </div>
                </div>
              </div>

              <h2
                id="warning-signs"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <AlertTriangle className="h-6 w-6 text-blue-700" />
                10 Warning Signs Your Septic Tank Needs Pumping
              </h2>

              {/* Warning Signs Cards */}
              <div className="grid gap-6 md:grid-cols-2 my-8">
                {/* Sign 1 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Droplet className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">1. Slow Drains Throughout Your Home</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      When multiple drains in your home are slow to empty, it's often a sign that your septic tank is
                      reaching capacity. This occurs because the solid waste layer in your tank has built up, reducing
                      the tank's capacity to accept new wastewater.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to look for:</strong> Multiple sinks, tubs, and toilets draining slowly, not just a
                      single fixture (which might indicate a localized clog).
                    </p>
                  </div>
                </div>

                {/* Sign 2 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Ear className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">2. Gurgling Sounds in Plumbing</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      Unusual gurgling noises coming from your drains, toilets, or pipes can indicate that your septic
                      tank is full and gases are being forced back through the system.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to listen for:</strong> Bubbling or gurgling sounds when using water fixtures or
                      flushing toilets.
                    </p>
                  </div>
                </div>

                {/* Sign 3 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Skull className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">3. Sewage Odors Indoors or Outdoors</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      A properly functioning septic system should not produce noticeable odors. If you detect sewage
                      smells inside your home or around your yard, especially near the drain field or septic tank, it's
                      a strong indication that your tank needs pumping.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to smell for:</strong> Rotten egg or sulfur-like odors around drains, in basements,
                      or in your yard.
                    </p>
                  </div>
                </div>

                {/* Sign 4 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Waves className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">4. Pooling Water or Soggy Soil</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      When a septic tank is full, wastewater can back up and surface around the tank or drain field
                      area. This creates wet, soggy patches in your yard, even during dry weather.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to look for:</strong> Unusually wet areas, standing water, or spongy ground over your
                      septic system components.
                    </p>
                  </div>
                </div>

                {/* Sign 5 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-red-100 p-4 flex items-center gap-3">
                    <div className="bg-red-200 rounded-full p-2">
                      <AlertTriangle className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-lg font-bold text-red-900 m-0">5. Sewage Backup in Drains or Toilets</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      This is one of the most serious and unmistakable signs that your septic tank needs immediate
                      attention. When wastewater begins backing up into your home through drains or toilets, your tank
                      is likely completely full or has a significant blockage.
                    </p>
                    <p className="font-medium text-red-800 mb-0">
                      <strong>What to look for:</strong> Black or gray water coming up through drains or toilets,
                      especially in lower-level fixtures.
                    </p>
                  </div>
                </div>

                {/* Emergency Warning Box */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4 md:col-span-2">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-red-800 font-bold text-xl mt-0 mb-2">Emergency Warning Sign</h3>
                    <p className="text-red-700 mb-0">
                      Sewage backup into your home is a serious health hazard requiring immediate professional
                      attention. Call Alpha Septic Services's emergency line at (512) 793-7867 right away if you
                      experience this issue.
                    </p>
                  </div>
                </div>

                {/* Sign 6 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Flower2 className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">6. Unusually Lush, Green Grass</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      While it might seem like a positive sign, unusually green or lush grass over your drain field
                      compared to the rest of your yard often indicates that excess nutrients from wastewater are
                      reaching the surface due to a full tank or system failure.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to look for:</strong> A distinct pattern of greener, faster-growing grass directly
                      above your drain field.
                    </p>
                  </div>
                </div>

                {/* Sign 7 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Flask className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">7. High Nitrate or Bacteria Levels</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      If you have a well on your property, regular water testing might reveal elevated levels of
                      nitrates or bacteria, which can indicate that your septic system is leaking and contaminating
                      groundwater.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to do:</strong> Test your well water regularly, especially if you notice other
                      warning signs of septic issues.
                    </p>
                  </div>
                </div>

                {/* Sign 8 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Bell className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">8. Septic Alarm Going Off</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      Many modern septic systems, especially those with pumps, have alarms that alert homeowners when
                      the tank is reaching capacity or when there's a malfunction.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to do:</strong> Never ignore a septic alarm—contact a professional immediately.
                    </p>
                  </div>
                </div>

                {/* Sign 9 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Clock className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">9. It's Been More Than 3-5 Years</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      Even if you're not experiencing obvious symptoms, if it's been more than 3-5 years since your last
                      septic pumping (or you don't know when it was last pumped), it's time to schedule service.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to do:</strong> Keep records of septic maintenance and schedule regular pumping based
                      on your system's needs.
                    </p>
                  </div>
                </div>

                {/* Sign 10 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 flex items-center gap-3">
                    <div className="bg-blue-200 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 m-0">10. Increased Household Size</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-2">
                      If your household has grown (new family members, long-term guests) or your water usage has
                      significantly increased (new water-intensive appliances, lifestyle changes), your septic system
                      may need more frequent pumping.
                    </p>
                    <p className="font-medium text-blue-800 mb-0">
                      <strong>What to consider:</strong> Each person in your home adds approximately 50-70 gallons of
                      wastewater to your septic system daily.
                    </p>
                  </div>
                </div>
              </div>

              <h2
                id="what-to-do"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <CheckCircle className="h-6 w-6 text-blue-700" />
                What to Do If You Notice These Signs
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
                <ol className="list-none p-0 space-y-4 mb-0">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                      <span className="block w-5 h-5 text-blue-700 font-bold text-center">1</span>
                    </div>
                    <div>
                      <strong className="text-blue-900">Don't delay:</strong> The longer you wait, the worse the problem
                      will become and the more expensive it will be to fix.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                      <span className="block w-5 h-5 text-blue-700 font-bold text-center">2</span>
                    </div>
                    <div>
                      <strong className="text-blue-900">Call a professional:</strong> Contact Alpha Septic Services at
                      (512) 793-7867 to schedule an inspection and pumping service.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                      <span className="block w-5 h-5 text-blue-700 font-bold text-center">3</span>
                    </div>
                    <div>
                      <strong className="text-blue-900">Reduce water usage:</strong> Until your tank can be pumped,
                      minimize water use to prevent backups and overflows.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                      <span className="block w-5 h-5 text-blue-700 font-bold text-center">4</span>
                    </div>
                    <div>
                      <strong className="text-blue-900">Don't use chemical additives:</strong> These products often
                      claim to reduce the need for pumping but can actually damage your system.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                      <span className="block w-5 h-5 text-blue-700 font-bold text-center">5</span>
                    </div>
                    <div>
                      <strong className="text-blue-900">Maintain records:</strong> After service, keep detailed records
                      of when your tank was pumped to help establish an appropriate maintenance schedule.
                    </div>
                  </li>
                </ol>
              </div>

              <h2
                id="preventative"
                className="text-2xl font-bold text-blue-900 flex items-center gap-2 mt-12 scroll-mt-24"
              >
                <CheckCircle className="h-6 w-6 text-blue-700" />
                Preventative Maintenance: The Best Approach
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm my-6">
                <div className="p-6">
                  <p className="mb-4">
                    The most effective way to avoid septic emergencies is through regular preventative maintenance.
                    Here's what we recommend:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        Schedule regular pumping every 3-5 years (or as recommended by your septic professional)
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>Have annual inspections to catch potential issues early</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>Practice water conservation to reduce strain on your system</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        Be mindful of what goes down your drains (no grease, non-biodegradable items, or harsh
                        chemicals)
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3 sm:col-span-2">
                      <div className="bg-blue-100 rounded-full p-1.5 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>Keep records of all septic maintenance and service</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-green-800 font-bold text-xl mt-0 mb-2">Maintenance Reminder Service</h3>
                    <p className="text-green-700 mb-0">
                      Alpha Septic Services offers a free maintenance reminder service. We'll contact you when it's time
                      for your next recommended pumping, so you never have to worry about forgetting this important
                      maintenance task.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-12">Conclusion</h2>
              <div className="bg-blue-50 rounded-xl p-6 my-6">
                <p className="mb-4">
                  Being attentive to the warning signs that your septic tank needs pumping can save you thousands of
                  dollars in repairs and prevent disruption to your home life. Regular maintenance is always less
                  expensive and less stressful than emergency repairs.
                </p>
                <p className="mb-0">
                  If you're noticing any of the warning signs described above, or if it's been more than 3-5 years since
                  your last septic pumping, contact Alpha Septic Services today to schedule service.
                </p>
              </div>

              <div className="bg-blue-900 text-white rounded-xl p-8 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your Septic Pumping?</h3>
                <p className="text-blue-100 mb-6">
                  Don't wait for warning signs to become emergencies. Our professional team is ready to help you
                  maintain your septic system and prevent costly repairs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-now">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 w-full">
                      Schedule Septic Pumping
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Link href="/book-now">
                  <Button size="lg" className="w-full">
                    Schedule Septic Pumping
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full">
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
