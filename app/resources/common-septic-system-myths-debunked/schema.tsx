import { ArticleSchema } from "@/components/article-schema"
import { FAQSchema } from "@/components/faq-schema"

export default function CommonSepticSystemMythsDebunkedSchema() {
  const faqs = [
    {
      question: "Do septic additives eliminate the need for pumping?",
      answer:
        "No, septic additives cannot replace regular pumping. While some bacterial additives may help maintain a healthy bacterial balance, they cannot break down non-biodegradable solids that accumulate in your tank. Regular pumping (typically every 2-4 years) is still necessary to remove these solids and prevent system failure.",
    },
    {
      question: "Is it true that older septic systems are 'grandfathered in' and don't need to meet current codes?",
      answer:
        "This is partially true but commonly misunderstood. While existing systems may be allowed to operate without upgrading to current standards, this only applies if they're functioning properly. If your system fails or poses a health hazard, most jurisdictions will require repairs or replacements that meet current codes, regardless of when the original system was installed.",
    },
    {
      question: "Do garbage disposals work well with septic systems?",
      answer:
        "Garbage disposals can be used with septic systems,  but they require additional considerations. Food waste increases the solid load in your tank, requiring more frequent pumping (potentially 1-2 years sooner than normal). If you use a disposal with a septic system, you should consider a larger tank, more frequent maintenance, and avoiding putting fibrous or starchy foods down the disposal.",
    },
    {
      question: "Is it okay to build patios, sheds, or plant gardens over a drain field?",
      answer:
        "No, building structures or planting anything besides grass over your drain field can cause serious problems. Structures prevent evaporation, limit oxygen exchange, and make maintenance access impossible. Deep-rooted plants can damage pipes. The drain field area should be covered only with grass and kept free from vehicles, structures, and heavy landscaping.",
    },
    {
      question: "Does a gurgling toilet always indicate a septic problem?",
      answer:
        "Not always, but it shouldn't be ignored. Gurgling toilets or drains can indicate a simple plumbing vent issue, but they can also signal a filling septic tank or drain field problems. If the gurgling persists or is accompanied by slow drains, sewage odors, or wet spots in the yard, it's likely a septic issue that requires professional inspection.",
    },
  ]

  return (
    <>
      <ArticleSchema
        headline="Common Septic System Myths Debunked"
        description="Separate fact from fiction with our guide to common septic system myths. Learn the truth about additives, pumping frequency, and proper system care."
        url="/resources/common-septic-system-myths-debunked"
        image="/images/septic-myths.webp"
        datePublished="2025-04-10"
        dateModified="2025-04-10"
      />
      <FAQSchema faqs={faqs} />
    </>
  )
}
