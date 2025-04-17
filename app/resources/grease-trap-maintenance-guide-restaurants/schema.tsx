import { ArticleSchema } from "@/components/article-schema"
import { HowToSchema } from "@/components/how-to-schema"

export function GreaseTrapMaintenanceSchemas() {
  return (
    <>
      <ArticleSchema
        headline="The Complete Guide to Grease Trap Maintenance for Restaurants"
        description="Learn how proper grease trap maintenance can prevent costly backups, keep your restaurant compliant with local regulations, and protect the environment."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        image="/images/grease-trap.webp"
      />

      <HowToSchema
        name="Maintain Your Restaurant's Grease Trap"
        description="A comprehensive guide to properly maintaining your restaurant's grease trap for compliance, efficiency, and environmental protection."
        image="/images/grease-trap.webp"
        steps={[
          "Establish a regular cleaning schedule based on usage",

          "Train staff on proper FOG disposal practices",
          "Keep detailed maintenance records",
          "Implement best practices for daily kitchen operations",
          "Schedule professional cleanings with certified service providers",
          "Monitor grease trap performance between cleanings",
        ]}
      />
    </>
  )
}
