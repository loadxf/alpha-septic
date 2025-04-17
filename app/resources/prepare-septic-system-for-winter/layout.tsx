import type React from "react"
import WinterSepticPreparationSchema from "./schema"

export default function WinterSepticPreparationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <WinterSepticPreparationSchema />
      {children}
    </>
  )
}
