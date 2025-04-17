import { NextResponse } from "next/server"
import { sendEmail, getServiceUnavailableMessage } from "@/lib/email"

// Regular expression for validating email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, rating, testimonial, service } = body

    // Validate required fields with enhanced validation
    const validationErrors = [];

    if (!name || !name.trim()) {
      validationErrors.push("Name is required");
    }
    
    if (!email || !EMAIL_REGEX.test(email)) {
      validationErrors.push("Please provide a valid email address");
    }
    
    if (!rating || isNaN(parseInt(rating)) || parseInt(rating) < 1 || parseInt(rating) > 5) {
      validationErrors.push("Valid rating from 1-5 is required");
    }
    
    if (!testimonial || !testimonial.trim()) {
      validationErrors.push("Testimonial content is required");
    }
    
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors.join(", ") },
        { status: 400 }
      );
    }

    // Simple rate limiting check using request headers
    // This is a basic implementation - a more robust solution would use Redis or similar
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown'
    // In a real implementation, we would check a rate limit store
    // For now we're just demonstrating the concept

    const recipientEmail = process.env.CONTACT_EMAIL || "service@callalphaseptic.com"
    
    // Create email content
    const emailContent = {
      subject: "New Testimonial Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service || "Not specified"}
        Rating: ${rating}/5
        
        Testimonial:
        ${testimonial}
      `,
      html: `
        <h2>New Testimonial Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Rating:</strong> ${rating}/5</p>
        <h3>Testimonial:</h3>
        <p>${testimonial.replace(/\n/g, "<br>")}</p>
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
      console.error("Testimonial submission error:", result.error)
      return NextResponse.json(
        { error: getServiceUnavailableMessage() },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Testimonial submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit testimonial. Please try again later." },
      { status: 500 }
    )
  }
}
