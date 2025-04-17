import { NextResponse } from "next/server"
import { sendEmail, getServiceUnavailableMessage } from "@/lib/email"
import { apiMiddleware } from "@/lib/api-middleware"

// Regular expression for validating email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: Request) {
  try {
    // Apply middleware checks (CSRF, rate limiting)
    const middlewareResult = await apiMiddleware(request);
    if (middlewareResult) {
      return middlewareResult; // Return early if middleware check failed
    }
    
    const body = await request.json()
    const { name, email, phone, message, service } = body

    // Validate required fields with enhanced email validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      )
    }
    
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }
    
    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Simple rate limiting check using request headers
    // This is a basic implementation - a more robust solution would use Redis or similar
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown'
    // In a real implementation, we would check a rate limit store
    // For now we're just demonstrating the concept

    const recipientEmail = process.env.CONTACT_EMAIL || "service@callalphaseptic.com"
    
    // Create email content
    const emailContent = {
      subject: `New Contact Form Submission - ${service || "General Inquiry"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Service: ${service || "Not specified"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email using centralized helper
    const result = await sendEmail(emailContent, {
      to: recipientEmail,
      replyTo: email
    })

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Contact form error:", result.error)
      return NextResponse.json(
        { error: getServiceUnavailableMessage() },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
