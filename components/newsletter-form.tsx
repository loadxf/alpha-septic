"use client"

import type React from "react"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Reset form
      setEmail("")
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to subscribe. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-gray-700">Get the latest septic system tips, maintenance advice, and special offers.</p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>Thank you for subscribing! Check your email for confirmation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>

          <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}
