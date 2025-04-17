export const generalFaqs = [
  {
    question: "How often should I pump my septic tank?",
    answer:
      "For most households, septic tanks should be pumped every 3-5 years. However, this can vary based on household size, tank size, and water usage. We can help determine the optimal schedule for your system.",
  },
  {
    question: "What are the signs of septic system problems?",
    answer:
      "Warning signs include slow drains, gurgling pipes, sewage odors, wet spots in the yard, unusually lush grass over the drain field, and sewage backups. If you notice any of these signs, contact us immediately.",
  },
  {
    question: "How can I extend the life of my septic system?",
    answer:
      "Regular pumping, water conservation, proper waste disposal (no flushing of non-biodegradable items), avoiding harsh chemicals, and keeping heavy vehicles off the drain field can all help extend your system's life.",
  },
  {
    question: "How long does septic pumping take?",
    answer:
      "A typical residential septic pumping takes 1-2 hours, depending on tank size, accessibility, and system condition. Commercial systems may take longer based on size and complexity.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes, we provide 24/7 emergency septic services for urgent situations like backups, overflows, and system failures. Call our emergency line at (512) 793-7867 for immediate assistance.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, and many more communities. Check our <a href='/service-areas' class='text-brand-blue hover:underline'>Service Areas</a> page for a complete listing.",
  },
]

export const residentialFaqs = [
  {
    question: "How often should I pump my residential septic tank?",
    answer:
      "Most residential septic tanks should be pumped every 3-5 years. However, this can vary based on household size, tank size, and water usage. Homes with garbage disposals, large families, or smaller tanks may need more frequent pumping.",
  },
  {
    question: "What happens during a septic tank pumping service?",
    answer:
      "During a septic tank pumping service, our technicians locate and expose the access lid, pump out all solids and liquids from the tank, inspect the tank's interior components, check baffles and filters, and provide recommendations for any necessary repairs or maintenance.",
  },
  {
    question: "How can I prepare for a septic tank pumping appointment?",
    answer:
      "To prepare for a septic tank pumping appointment, locate your septic tank and access lid if possible, clear a path for our truck to access the tank (within 100 feet), remove any obstacles or landscaping around the tank lid, and have information ready about your system's maintenance history.",
  },
  {
    question: "What should I do if my septic system is backing up?",
    answer:
      "First, stop using water to prevent further backup. Then call our emergency line at (512) 793-7867 for immediate assistance. Do not attempt to open the septic tank yourself, as this can be dangerous.",
  },
  {
    question: "Can I use septic additives to reduce pumping frequency?",
    answer:
      "We don't recommend using additives as a substitute for regular pumping. Some additives can actually harm your system by killing beneficial bacteria or causing solids to suspend and flow into the drain field.",
  },
]

export const commercialFaqs = [
  {
    question: "How often should commercial septic systems be pumped?",
    answer:
      "Commercial septic systems typically need pumping every 3-12 months depending on the size of the system, the volume of wastewater generated, and the number of people using the facilities. High-volume businesses like restaurants may require more frequent service.",
  },
  {
    question: "Can you service my business without disrupting operations?",
    answer:
      "Yes, we offer flexible scheduling including early morning, evening, and weekend appointments to minimize disruption to your business operations. Our technicians work efficiently and discreetly to complete the service with minimal impact on your customers and staff.",
  },
  {
    question: "Do you provide maintenance contracts for commercial properties?",
    answer:
      "Yes, we offer customized maintenance contracts for commercial properties that include regular inspections, scheduled pumping, and priority emergency service. These contracts help ensure compliance with local regulations and prevent costly system failures.",
  },
  {
    question: "How often should restaurant grease traps be cleaned?",
    answer:
      "Most restaurants need grease trap cleaning every 1-3 months, depending on the size of the trap and the volume of food prepared. High-volume establishments may require more frequent service. Local regulations may also dictate minimum cleaning frequencies.",
  },
  {
    question: "What happens if I don't clean my grease trap regularly?",
    answer:
      "Neglected grease traps can cause sewage backups into your kitchen, foul odors, slow drains, and potential health code violations. This can lead to expensive emergency repairs and even temporary closure of your business. Regular maintenance prevents these issues.",
  },
]

export const emergencyFaqs = [
  {
    question: "What constitutes a septic emergency?",
    answer:
      "Septic emergencies include sewage backups into your home, overflowing toilets or drains, pooling sewage in your yard, strong sewage odors, and septic alarm activation. Any situation that poses an immediate health risk or property damage requires emergency service.",
  },
  {
    question: "How quickly can you respond to a septic emergency?",
    answer:
      "Our emergency response team is available 24/7 and typically arrives within 1-2 hours of your call, depending on your location in the Austin area. We prioritize emergencies to minimize damage to your property.",
  },
  {
    question: "What should I do while waiting for emergency septic service?",
    answer:
      "While waiting for our technicians to arrive, stop using all water in your home to prevent additional sewage backup. Keep people and pets away from affected areas, and if possible, turn off water to toilets that are backing up. Do not attempt to open or access the septic tank yourself.",
  },
  {
    question: "Is sewage backup dangerous?",
    answer:
      "Yes, sewage backup is a serious health hazard as it contains harmful bacteria, viruses, and parasites. Avoid contact with sewage, keep children and pets away from affected areas, and wear protective gear if you must be near it. Professional cleaning and sanitization are essential after a backup.",
  },
  {
    question: "Does insurance cover septic emergencies?",
    answer:
      "Some homeowner's insurance policies cover septic backups, while others require additional riders or separate coverage. Check your policy for details. We can provide documentation for insurance claims regardless of your coverage.",
  },
]

// Combined FAQs export for general use
export const faqs = [
  ...generalFaqs.slice(0, 4), // Include first 4 general FAQs
  ...residentialFaqs.slice(0, 2), // Include first 2 residential FAQs
  ...commercialFaqs.slice(0, 2), // Include first 2 commercial FAQs
  ...emergencyFaqs.slice(0, 2), // Include first 2 emergency FAQs
]
