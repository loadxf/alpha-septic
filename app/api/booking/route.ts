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
    const { name, email, phone, address, city, service, date, time, notes } = body

    // Validate required fields with enhanced validation
    const validationErrors = [];

    if (!name || !name.trim()) {
      validationErrors.push("Name is required");
    }
    
    if (!email || !EMAIL_REGEX.test(email)) {
      validationErrors.push("Please provide a valid email address");
    }
    
    if (!service || !service.trim()) {
      validationErrors.push("Service selection is required");
    }
    
    if (!date) {
      validationErrors.push("Preferred date is required");
    }
    
    if (!time) {
      validationErrors.push("Preferred time is required");
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

    const recipientEmail = process.env.BOOKING_EMAIL || "bookings@callalphaseptic.com"
    
    // Create email content
    const emailContent = {
      subject: `New Booking Request - ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Service: ${service}
        Preferred Date: ${date}
        Preferred Time: ${time}
        
        Address: ${address || "Not provided"}
        City: ${city || "Not provided"}
        
        Additional Notes:
        ${notes || "None provided"}
      `,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        
        <h3>Appointment Details:</h3>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        
        <h3>Location:</h3>
        <p><strong>Address:</strong> ${address || "Not provided"}</p>
        <p><strong>City:</strong> ${city || "Not provided"}</p>
        
        <h3>Additional Notes:</h3>
        <p>${notes ? notes.replace(/\n/g, "<br>") : "None provided"}</p>
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
      console.error("Booking form error:", result.error)
      return NextResponse.json(
        { error: getServiceUnavailableMessage() },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Booking form error:", error)
    return NextResponse.json(
      { error: "Failed to submit booking request. Please try again later." },
      { status: 500 }
    )
  }
}
