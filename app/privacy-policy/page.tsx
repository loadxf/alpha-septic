import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Alpha Septic Services",
  description: "Learn about how Alpha Septic Services collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-gray-500">Last Updated: April 8, 2025</p>
            </div>

            <div className="mt-8 prose prose-blue max-w-none">
              <p>
                Alpha Septic Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                CallAlphaSeptic.com (the "Site") or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the Site or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we collect may include:</p>

              <h3>Personal Data</h3>
              <p>
                When you schedule services, request information, or contact us, we may collect personally identifiable
                information, such as:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Service address</li>
                <li>Service history</li>
              </ul>

              <h3>Website Usage Data</h3>
              <p>
                When you visit our Site, we may collect non-personal identification information about you, including:
              </p>
              <ul>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect from you for the following purposes:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To process and complete transactions</li>
                <li>To send administrative information, such as appointment confirmations and service updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>
                  To send promotional communications, such as special offers or other information we think you may find
                  interesting
                </li>
                <li>To improve our website and services</li>
                <li>To understand how our Site is being used</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>

              <h2>Cookies and Web Beacons</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help
                customize the Site and improve your experience. When you access the Site, your personal information is
                not collected through the use of tracking technology. Most browsers are set to accept cookies by
                default. You can remove or reject cookies, but be aware that such action could affect the availability
                and functionality of the Site.
              </p>

              <h2>Third-Party Websites</h2>
              <p>
                The Site may contain links to third-party websites and applications of interest, including
                advertisements and external services, that are not affiliated with us. Once you have used these links to
                leave the Site, any information you provide to these third parties is not covered by this Privacy
                Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and
                providing any information to any third-party websites, you should inform yourself of the privacy
                policies and practices of the third party responsible for that website and should take those steps
                necessary to, in your discretion, protect the privacy of your information.
              </p>

              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our Site and services are not directed to children under the age of 13, and we do not knowingly collect
                personal information from children under the age of 13. If we learn we have collected or received
                personal information from a child under the age of 13, we will delete that information.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information that we have collected. You
                may also request that we restrict the processing of your personal information or object to such
                processing. To exercise these rights, please contact us using the information provided below.
              </p>

              <h2>Do Not Track Features</h2>
              <p>
                Most web browsers and some mobile operating systems include a "Do Not Track" ("DNT") feature or setting
                you can activate to signal your privacy preference not to have data about your online browsing
                activities monitored and collected. No uniform technology standard for recognizing and implementing DNT
                signals has been finalized. As such, we do not currently respond to DNT browser signals or any other
                mechanism that automatically communicates your choice not to be tracked online.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage
                you to review this Privacy Policy frequently to be informed of how we are protecting your information.
              </p>

              <h2>Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
