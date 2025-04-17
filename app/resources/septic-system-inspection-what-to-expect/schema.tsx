import { HowToSchema } from "@/components/how-to-schema"

export default function SepticInspectionSchema() {
  return (
    <HowToSchema
      name="How to Prepare for a Septic System Inspection"
      description="A step-by-step guide to preparing for a professional septic system inspection"
      image="https://CallAlphaSeptic.com/images/septic-inspection-checklist.webp"
      steps={[
        "Locate your septic system components and mark access points",
        "Gather documentation about your system including previous maintenance records",
        "Avoid heavy water usage 24-48 hours before inspection",
        "Clear access to the septic tank and drain field area",
        "Prepare a list of questions or concerns for the inspector",
        "Be ready to discuss your water usage patterns and maintenance history",
      ]}
    />
  )
}
