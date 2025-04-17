import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { CheckCircle, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Careers | Join Our Team | Alpha Septic Services",
  description:
    "Join the Alpha Septic Services team. View current job openings and learn about our company culture, benefits, and growth opportunities.",
  keywords: "septic service jobs, septic technician careers, Austin septic jobs, septic service employment",
}

// Sample job listings
const jobListings = []

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedBreadcrumb items={[{ label: "Careers", href: "/careers", isCurrent: true }]} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Build your career with Alpha Septic Services, Austin's premier septic service provider.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-6xl py-12">
            <div className="bg-white p-8 rounded-lg shadow-custom mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-500">
                    We believe in promoting from within and providing opportunities for career advancement and skill
                    development.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Competitive Compensation</h3>
                  <p className="text-gray-500">
                    We offer competitive pay, comprehensive benefits, and performance incentives to reward your hard
                    work.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Supportive Team</h3>
                  <p className="text-gray-500">
                    Join a team that values collaboration, respect, and a positive work environment where everyone's
                    contribution matters.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Training & Development</h3>
                  <p className="text-gray-500">
                    We invest in our team members through ongoing training, certification opportunities, and
                    professional development.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-500">
                    We understand the importance of family and personal time, and strive to maintain reasonable
                    schedules and flexibility.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Community Impact</h3>
                  <p className="text-gray-500">
                    Take pride in providing essential services that protect public health and the environment in our
                    community.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Current Job Openings</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-custom">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-brand-blue" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1 text-brand-blue" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-brand-blue" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-brand-blue" />
                          <span>Posted: {new Date(job.datePosted).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link href={`/careers/${job.id}`}>
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand-green mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-custom mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h2>
              <p className="text-gray-500 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on
                file for future opportunities.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      {/* Job Posting Schema for each job */}
      {jobListings.map((job) => (
        <JsonLd
          key={job.id}
          data={{
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: job.datePosted,
            validThrough: job.validThrough,
            employmentType: job.type,
            hiringOrganization: {
              "@type": "Organization",
              name: "Alpha Septic Services",
              sameAs: "https://CallAlphaSeptic.com",
              logo: "https://CallAlphaSeptic.com/logo.webp",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "US",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: {
                "@type": "QuantitativeValue",
                minValue: Number.parseInt(job.salary.split(" - ")[0].replace(/\D/g, "")),
                maxValue: Number.parseInt(job.salary.split(" - ")[1].split(" ")[0].replace(/\D/g, "")),
                unitText: "YEAR",
              },
            },
            qualifications: job.requirements.join(", "),
            skills: job.requirements.join(", "),
            benefits: job.benefits.join(", "),
          }}
        />
      ))}

      {/* Organization Schema with careers info */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Alpha Septic Services",
          url: "https://CallAlphaSeptic.com",
          logo: "https://CallAlphaSeptic.com/logo.webp",
          sameAs: ["https://facebook.com/alphasepticservices", "https://instagram.com/alphasepticservices"],
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "15",
          },
          foundingDate: "2025",
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Austin",
              addressRegion: "TX",
              addressCountry: "US",
            },
          },
        }}
      />
    </div>
  )
}
