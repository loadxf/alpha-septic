import type React from "react"
import { GreaseTrapMaintenanceSchemas } from "./schema"

export default function GreaseTrapMaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GreaseTrapMaintenanceSchemas />
      {children}
    </>
  )
}
