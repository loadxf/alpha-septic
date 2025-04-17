import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Accessibility Statement | Alpha Septic Services",
  description: "Alpha Septic Services is committed to ensuring digital accessibility for people with disabilities.",
}

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb items={[{ label: "Accessibility", href: "/accessibility", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Accessibility Statement</h1>
              <p className="text-gray-500">Last Updated: April 9, 2025</p>
            </div>

            <div className="mt-8 prose prose-blue max-w-none">
              <h2>Our Commitment to Accessibility</h2>
              <p>
                Alpha Septic Services is committed to ensuring digital accessibility for people with disabilities. We
                are continually improving the user experience for everyone and applying the relevant accessibility
                standards.
              </p>

              <h2>Conformance Status</h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
                improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
                Level AA, and Level AAA.
              </p>
              <p>
                Alpha Septic Services' website is partially conformant with WCAG 2.1 level AA. Partially conformant
                means that some parts of the content do not fully conform to the accessibility standard.
              </p>

              <h2>Accessibility Features</h2>
              <p>Our website includes the following accessibility features:</p>
              <ul>
                <li>Semantic HTML to ensure proper structure and navigation</li>
                <li>ARIA attributes where appropriate to enhance accessibility</li>
                <li>Keyboard navigation for all interactive elements</li>
                <li>Alternative text for images</li>
                <li>Sufficient color contrast for text visibility</li>
                <li>Resizable text without loss of functionality</li>
                <li>Clear focus indicators for keyboard navigation</li>
              </ul>

              <h2>Limitations and Alternatives</h2>
              <p>
                Despite our best efforts to ensure accessibility of Alpha Septic Services' website, there may be some
                limitations. Below is a description of known limitations, and potential solutions. Please contact us if
                you observe an issue not listed below.
              </p>
              <p>Known limitations:</p>
              <ul>
                <li>
                  <strong>PDF Documents:</strong> Some older PDF documents may not be fully accessible. We are working
                  to remediate these documents or provide the information in alternative formats upon request.
                </li>
                <li>
                  <strong>Third-Party Content:</strong> Some content provided by third-party services may not be fully
                  accessible. We are working with our vendors to improve the accessibility of these components.
                </li>
              </ul>

              <h2>Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of Alpha Septic Services' website. Please let us know if
                you encounter accessibility barriers:
              </p>
              <ul>
                <li>
                  Phone: <a href="tel:5127937867">(512) 793-7867</a>
                </li>
                <li>
                  E-mail: <a href="mailto:service@callalphaseptic.com">service@callalphaseptic.com</a>
                </li>
                <li>Postal address: 396 Sunrise Terrace, Cedar Park, TX 78613</li>
              </ul>
              <p>
                We try to respond to feedback within 3 business days and aim to fix accessibility issues as quickly as
                possible.
              </p>

              <h2>Assessment Approach</h2>
              <p>Alpha Septic Services assessed the accessibility of this website by the following approaches:</p>
              <ul>
                <li>Self-evaluation</li>
                <li>External evaluation using automated tools</li>
                <li>User testing with assistive technologies</li>
              </ul>

              <h2>Compatibility with Browsers and Assistive Technology</h2>
              <p>
                Alpha Septic Services' website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
                <li>Speech recognition software</li>
                <li>Screen magnifiers</li>
                <li>Keyboard-only navigation</li>
              </ul>
              <p>
                The website is compatible with recent versions of major browsers including Chrome, Firefox, Safari, and
                Edge.
              </p>

              <h2>Technical Specifications</h2>
              <p>
                Accessibility of Alpha Septic Services' website relies on the following technologies to work with the
                particular combination of web browser and any assistive technologies or plugins installed on your
                computer:
              </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p>These technologies are relied upon for conformance with the accessibility standards used.</p>

              <h2>Continuous Improvement</h2>
              <p>
                Alpha Septic Services is committed to making its website accessible, in accordance with applicable laws
                and regulations. We are actively working to increase the accessibility and usability of our website and
                in doing so adhere to many of the available standards and guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
