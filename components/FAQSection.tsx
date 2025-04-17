"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { JsonLd } from "@/components/json-ld"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQItem[]
  className?: string
  structured?: boolean
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
  className = "",
  structured = true,
}: FAQSectionProps) {
  // Generate schema.org FAQ data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section aria-labelledby="faq-heading" className={className}>
      {structured && <JsonLd data={faqSchema} />}
      <div className="text-center mb-8">
        <h2 id="faq-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-4 text-gray-500">{description}</p>}
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                <span id={`faq-question-${index}`}>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                  aria-labelledby={`faq-question-${index}`}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
