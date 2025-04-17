import { NextResponse } from "next/server"
import { sendEmail, getServiceUnavailableMessage } from "@/lib/email"
import { apiMiddleware } from "@/lib/api-middleware"

// Regular expression for validating email - more comprehensive than just checking for @
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: Request) {
  try {
    // Apply middleware checks (CSRF, rate limiting)
    const middlewareResult = await apiMiddleware(request);
    if (middlewareResult) {
      return middlewareResult; // Return early if middleware check failed
    }
    
    const body = await request.json()
    const { email } = body

    // Enhanced email validation
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    // Simple rate limiting check using request headers
    // This is a basic implementation - a more robust solution would use Redis or similar
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown'
    // In a real implementation, we would check a rate limit store
    // For now we're just demonstrating the concept
    
    const recipientEmail = process.env.CONTACT_EMAIL || "service@callalphaseptic.com"

    // Email content for admin notification
    const adminEmailContent = {
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    }

    // Email content for subscriber confirmation
    const subscriberEmailContent = {
      subject: "Welcome to Alpha Septic Newsletter",
      text: `
        Thank you for subscribing to the Alpha Septic newsletter!
        
        You'll now receive updates on septic system maintenance tips, special offers, and industry news.
        
        If you didn't subscribe to this newsletter, please ignore this email.
      `,
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You'll now receive updates on septic system maintenance tips, special offers, and industry news from Alpha Septic.</p>
        <p>If you didn't subscribe to this newsletter, please ignore this email.</p>
        <hr>
        <p><small>Alpha Septic - Your trusted septic service provider in Austin and surrounding areas.</small></p>
      `,
    }

    // Send admin notification email
    const adminResult = await sendEmail(adminEmailContent, {
      to: recipientEmail
    })

    // Send subscriber confirmation email
    const subscriberResult = await sendEmail(subscriberEmailContent, {
      to: email
    })

    if (adminResult.success || subscriberResult.success) {
      // Consider it successful if at least one email was sent
      return NextResponse.json({ success: true })
    } else {
      console.error("Newsletter subscription error:", 
        adminResult.error || subscriberResult.error
      )
      return NextResponse.json(
        { error: getServiceUnavailableMessage() },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter. Please try again later." },
      { status: 500 }
    )
  }
}
