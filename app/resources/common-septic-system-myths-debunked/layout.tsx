import type React from "react"
import CommonSepticSystemMythsDebunkedSchema from "./schema"

export default function CommonSepticSystemMythsDebunkedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CommonSepticSystemMythsDebunkedSchema />
      {children}
    </>
  )
}
