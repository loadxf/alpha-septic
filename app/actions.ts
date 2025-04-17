"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = (formData.get("subject") as string) || "Contact Form Submission"
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" }
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Invalid email format" }
  }

  try {
    // Get recipient email from environment variable or use fallback
    const recipientEmail = process.env.CONTACT_EMAIL || "service@callalphaseptic.com"

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Alpha Septic Contact Form <no-reply@callalphaseptic.com>",
      to: [recipientEmail],
      subject: `New Contact Form: ${subject}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Error sending contact form email:", error)
      return { success: false, error: "Failed to send message" }
    }

    // Send confirmation email to the customer
    const { error: confirmationError } = await resend.emails.send({
      from: "Alpha Septic Services <no-reply@callalphaseptic.com>",
      to: [email],
      subject: "Thank You for Contacting Alpha Septic Services",
      text: `
        Dear ${name},
        
        Thank you for contacting Alpha Septic Services. We have received your message and will get back to you shortly.
        
        If you need immediate assistance, please call us at (512) 793-7867.
        
        Best regards,
        The Alpha Septic Services Team
      `,
      html: `
        <h2>Thank You for Contacting Alpha Septic Services</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Alpha Septic Services. We have received your message and will get back to you shortly.</p>
        <p>If you need immediate assistance, please call us at <a href="tel:5127937867">(512) 793-7867</a>.</p>
        <p>Best regards,<br>The Alpha Septic Services Team</p>
      `,
    })

    if (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError)
      // Still return success since the main email was sent
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { success: false, error: "Failed to send message" }
  }
}

export async function bookAppointment(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string
  const city = formData.get("city") as string
  const serviceType = formData.get("serviceType") as string
  const preferredDate = formData.get("preferredDate") as string
  const preferredTime = formData.get("preferredTime") as string
  const message = formData.get("message") as string

  if (!name || !email || !phone || !address || !city || !serviceType || !preferredDate || !preferredTime) {
    return { success: false, error: "Missing required fields" }
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Invalid email format" }
  }

  try {
    // Get recipient email from environment variable or use fallback
    const recipientEmail = process.env.BOOKING_EMAIL || "bookings@callalphaseptic.com"

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Alpha Septic Booking <no-reply@callalphaseptic.com>",
      to: [recipientEmail],
      subject: `New Booking Request: ${serviceType}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        City: ${city}
        Service Type: ${serviceType}
        Preferred Date: ${preferredDate}
        Preferred Time: ${preferredTime}
        Additional Message: ${message || "None provided"}
      `,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Additional Message:</strong> ${message || "None provided"}</p>
      `,
    })

    if (error) {
      console.error("Error sending booking email:", error)
      return { success: false, error: "Failed to book appointment" }
    }

    // Send confirmation email to the customer
    const { error: confirmationError } = await resend.emails.send({
      from: "Alpha Septic Services <no-reply@callalphaseptic.com>",
      to: [email],
      subject: "Your Septic Service Booking Request",
      text: `
        Dear ${name},
        
        Thank you for booking with Alpha Septic Services. We have received your request for ${serviceType} on ${preferredDate} during the ${preferredTime} timeframe.
        
        Our team will contact you shortly to confirm your appointment. If you need to make any changes or have questions, please call us at (512) 793-7867.
        
        Best regards,
        The Alpha Septic Services Team
      `,
      html: `
        <h2>Your Septic Service Booking Request</h2>
        <p>Dear ${name},</p>
        <p>Thank you for booking with Alpha Septic Services. We have received your request for <strong>${serviceType}</strong> on <strong>${preferredDate}</strong> during the <strong>${preferredTime}</strong> timeframe.</p>
        <p>Our team will contact you shortly to confirm your appointment. If you need to make any changes or have questions, please call us at <a href="tel:5127937867">(512) 793-7867</a>.</p>
        <p>Best regards,<br>The Alpha Septic Services Team</p>
      `,
    })

    if (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError)
      // Still return success since the main email was sent
    }

    return { success: true }
  } catch (error) {
    console.error("Error booking appointment:", error)
    return { success: false, error: "Failed to book appointment" }
  }
}
