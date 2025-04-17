"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"

export default function TestimonialForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [rating, setRating] = useState(5)
  const [service, setService] = useState("")
  const [testimonial, setTestimonial] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          rating,
          testimonial,
          service,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Reset form
      setName("")
      setEmail("")
      setRating(5)
      setService("")
      setTestimonial("")
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to submit testimonial. Please try again.")
      setIsSubmitting(false)
    }
  }

  const services = [
    "Residential Septic Pumping",
    "Commercial Septic Pumping",
    "Grease Trap Pumping",
    "RV Septic Services",
    "Emergency Septic Services",
    "Septic Inspection",
    "Other",
  ]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-medium">Thank you for your feedback!</p>
          <p>Your testimonial has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Used
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating *</label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none mr-1"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star className={`w-8 h-8 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                </button>
              ))}
              <span className="ml-2 text-gray-600">{rating}/5</span>
            </div>
          </div>

          <div>
            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
              Your Testimonial *
            </label>
            <textarea
              id="testimonial"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please share your experience with our service..."
            ></textarea>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Testimonial"}
          </button>
        </form>
      )}
    </div>
  )
}
