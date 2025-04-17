import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Terms of Service | Alpha Septic Services",
  description: "Read the terms and conditions governing the use of Alpha Septic Services' website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "Terms of Service", href: "/terms-of-service", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-gray-500">Last Updated: April 8, 2025</p>
            </div>

            <div className="mt-8 prose prose-blue max-w-none">
              <p>
                These Terms of Service ("Terms") govern your use of the website located at CallAlphaSeptic.com ("Site")
                and the services provided by Alpha Septic Services ("we," "us," or "our"). By accessing the Site or
                using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms,
                you may not access the Site or use our services.
              </p>

              <h2>1. Services</h2>
              <p>
                Alpha Septic Services provides septic system services including but not limited to septic tank pumping,
                cleaning, maintenance, inspections, repairs, and emergency services for residential and commercial
                properties. The specific services provided will be those agreed upon between you and Alpha Septic
                Services at the time of scheduling.
              </p>

              <h2>2. Service Appointments</h2>
              <p>
                2.1. <strong>Scheduling</strong>: Service appointments may be scheduled through our website, by phone,
                or by email. All appointments are subject to availability.
              </p>
              <p>
                2.2. <strong>Cancellations and Rescheduling</strong>: We request at least 24 hours' notice for
                cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.
              </p>
              <p>
                2.3. <strong>Access to Property</strong>: You are responsible for ensuring that our technicians have
                safe and adequate access to your septic system. This includes, but is not limited to, removing
                obstructions, restraining pets, and providing clear directions to the system location.
              </p>

              <h2>3. Payment Terms</h2>
              <p>
                3.1. <strong>Fees</strong>: Our service fees will be disclosed to you before the service is performed.
                Additional charges may apply if unforeseen circumstances arise during the service that require
                additional work or materials.
              </p>
              <p>
                3.2. <strong>Payment Methods</strong>: We accept various payment methods, which will be communicated to
                you at the time of scheduling. Payment is due upon completion of services unless other arrangements have
                been made in advance.
              </p>
              <p>
                3.3. <strong>Late Payments</strong>: Late payments may be subject to interest charges and/or late fees
                as permitted by law.
              </p>

              <h2>4. Website Use</h2>
              <p>
                4.1. <strong>License</strong>: We grant you a limited, non-exclusive, non-transferable, revocable
                license to access and use the Site for personal, non-commercial purposes.
              </p>
              <p>
                4.2. <strong>Prohibited Activities</strong>: You agree not to:
              </p>
              <ul>
                <li>Use the Site in any way that could disable, overburden, damage, or impair the Site</li>
                <li>Use any robot, spider, or other automatic device to access the Site</li>
                <li>Introduce any viruses, trojan horses, worms, or other harmful material</li>
                <li>Attempt to gain unauthorized access to any portion of the Site</li>
                <li>Interfere with the proper working of the Site</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                The Site and its original content, features, and functionality are owned by Alpha Septic Services and
                are protected by international copyright, trademark, patent, trade secret, and other intellectual
                property or proprietary rights laws. You may not copy, modify, create derivative works of, publicly
                display, publicly perform, republish, or transmit any of the material on our Site without prior written
                consent.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ALPHA SEPTIC SERVICES MAKES
                NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING,
                WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL ALPHA SEPTIC SERVICES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR
                CONSEQUENTIAL DAMAGES ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, YOUR USE OF THE SITE OR SERVICES,
                WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, EVEN IF ALPHA SEPTIC SERVICES HAS BEEN
                ADVISED OF THE POSSIBILITY OF DAMAGES.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Alpha Septic Services, its affiliates, licensors, and
                service providers, and its and their respective officers, directors, employees, contractors, agents,
                licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out
                of or relating to your violation of these Terms or your use of the Site or services.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas,
                without regard to its conflict of law principles. Any dispute arising under or relating to these Terms
                shall be resolved exclusively in the federal or state courts located in Travis County, Texas.
              </p>

              <h2>10. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such
                unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and
                such provisions shall be deleted without affecting the remaining provisions herein.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting to the Site. Your continued use of the Site after any changes to the Terms constitutes your
                acceptance of such changes.
              </p>

              <h2>12. Termination</h2>
              <p>
                We may terminate or suspend your access to the Site immediately, without prior notice or liability, for
                any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms
                which by their nature should survive termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>

              <h2>13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Alpha Septic Services
                <br />
                Email: service@callalphaseptic.com
                <br />
                Phone: (512) 793-7867
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
