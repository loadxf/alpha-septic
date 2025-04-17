"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [service, setService] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          city,
          service,
          date,
          time,
          notes,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setAddress("")
      setCity("")
      setService("")
      setDate("")
      setTime("")
      setNotes("")
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to submit booking. Please try again.")
      setIsSubmitting(false)
    }
  }

  // Get today's date for min date attribute
  const today = new Date().toISOString().split("T")[0]

  return (
    <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
      {isSubmitted && (
        <div className={`p-4 rounded-md mb-6 bg-green-50 text-green-700`} role="alert" aria-live="polite">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>
              Thank you! Your booking request has been submitted successfully. We'll contact you shortly to confirm.
            </span>
          </div>
        </div>
      )}

      {error && (
        <div className={`p-4 rounded-md mb-6 bg-red-50 text-red-700`} role="alert" aria-live="polite">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your name"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
            aria-required="true"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your phone number"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="serviceType"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Service Type <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-required="true"
          >
            <option value="">Select a service</option>
            <option value="Residential Septic Pumping">Residential Septic Pumping</option>
            <option value="Commercial Septic Service">Commercial Septic Service</option>
            <option value="Emergency Septic Service">Emergency Septic Service</option>
            <option value="Grease Trap Cleaning">Grease Trap Cleaning</option>
            <option value="RV Septic Service">RV Septic Service</option>
            <option value="Septic Inspection">Septic Inspection</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="address"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Service Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Street address"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="city"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="City"
            aria-required="true"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="preferredDate"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="preferredTime"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-required="true"
          >
            <option value="">Select a time</option>
            <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
            <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
            <option value="Evening (4pm-6pm)">Evening (4pm-6pm)</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Please provide any additional details about your service needs"
        ></textarea>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book Appointment"
        )}
      </Button>
    </form>
  )
}
