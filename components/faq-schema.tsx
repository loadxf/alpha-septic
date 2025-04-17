import { JsonLd } from "./json-ld"

interface FAQItem {
  question: string
  answer: string
  datePublished?: string
  author?: string
}

// Define the expected structure of the schema.org FAQPage object
interface FAQPageSchema {
  "@context": string;
  "@type": string;
  mainEntity: Record<string, any>[];
  headline?: string;
  dateModified?: string;
  mainEntityOfPage?: {
    "@type": string;
    "@id": string;
  };
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  headline?: string
  dateModified?: string
  mainEntityOfPage?: string
}

export function FAQSchema({ 
  faqs,
  headline,
  dateModified = new Date().toISOString(),
  mainEntityOfPage
}: FAQSchemaProps) {
  // Explicitly type the schema object
  const schema: FAQPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const question: Record<string, any> = {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        }
      };
      
      // Add optional fields if they exist
      if (faq.datePublished) {
        question.datePublished = faq.datePublished;
      }
      
      if (faq.author) {
        question.author = {
          "@type": "Person",
          name: faq.author
        };
      }
      
      return question;
    }),
  };
  
  // Add optional page data if provided
  if (headline) {
    schema.headline = headline;
  }
  
  if (dateModified) {
    schema.dateModified = dateModified;
  }
  
  if (mainEntityOfPage) {
    schema.mainEntityOfPage = {
      "@type": "WebPage",
      "@id": mainEntityOfPage.toLowerCase()
    };
  }

  return <JsonLd data={schema} />
}
