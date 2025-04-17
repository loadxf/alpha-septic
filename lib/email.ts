import nodemailer from "nodemailer"
import { Resend } from "resend"

type EmailContent = {
  subject: string
  text: string
  html: string
}

type EmailOptions = {
  to: string
  replyTo?: string
  attachments?: any[]
}

// Create a Resend instance with fallback for different API versions
const createResendClient = () => {
  try {
    // Create a simple wrapper around Resend to handle API compatibility issues
    const resendClient = new Resend(process.env.RESEND_API_KEY || '');
    
    // Return a wrapped client with compatibility handling
    return {
      emails: {
        send: async (options: any) => {
          try {
            // Try to use direct Resend API
            return await resendClient.emails.send(options);
          } catch (error: any) {
            // If we hit a React compatibility error with renderToReadableStream
            if (error.message && error.message.includes('renderToReadableStream')) {
              console.warn('Resend react-email compatibility issue detected, using text/html fallback');
              
              // Strip out React components and use plain HTML/text instead
              const fallbackOptions = {
                ...options,
                react: undefined // Disable React rendering
              };
              
              try {
                return await resendClient.emails.send(fallbackOptions);
              } catch (fallbackError) {
                // Fall back to nodemailer if everything else fails
                await sendWithNodemailer(options);
                return { data: { id: 'nodemailer-fallback' }, error: null };
              }
            }
            
            // For other errors, continue to nodemailer
            console.error('Resend error:', error);
            
            // Try to send using nodemailer instead
            await sendWithNodemailer(options);
            return { data: { id: 'nodemailer-fallback' }, error: null };
          }
        }
      }
    };
  } catch (error) {
    console.error('Error initializing Resend client:', error);
    // Return a fallback object with the same interface
    return {
      emails: {
        send: async (options: any) => {
          console.log('Using fallback email sender');
          // Try to send using nodemailer instead
          try {
            await sendWithNodemailer(options);
            return { data: { id: 'fallback-id' }, error: null };
          } catch (err) {
            return { data: null, error: err };
          }
        }
      }
    };
  }
};

// Initialize the client with our compatibility wrapper
export const resend = createResendClient();

// Nodemailer fallback for sending emails
async function sendWithNodemailer(options: any) {
  const { from, to, subject, html, text } = options;
  
  // Create a test account if no SMTP settings
  const account = await nodemailer.createTestAccount();
  
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || account.smtp.host,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : account.smtp.port,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || account.user,
      pass: process.env.SMTP_PASS || account.pass,
    },
  });
  
  // Send the email
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
  
  return info;
}

/**
 * Centralized email sending function with fallback
 * Tries to send using Resend.com first, falls back to SMTP if that fails
 */
export async function sendEmail(content: EmailContent, options: EmailOptions): Promise<{ success: boolean; error?: string }> {
  // First try Resend if API key is available
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      // Use our wrapper instead of direct Resend
      await resend.emails.send({
        from: "Alpha Septic <no-reply@callalphaseptic.com>",
        to: options.to,
        reply_to: options.replyTo,
        subject: content.subject,
        text: content.text,
        html: content.html,
        attachments: options.attachments,
      })
      return { success: true }
    } catch (error: any) {
      console.error("Resend email error:", error)
      // Continue to fallback method
    }
  }

  // Fallback to SMTP/Nodemailer
  try {
    // Check if SMTP credentials are available
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPassword) {
      throw new Error("SMTP credentials are not configured")
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Email content
    const mailOptions = {
      from: emailUser,
      to: options.to,
      replyTo: options.replyTo,
      subject: content.subject,
      text: content.text,
      html: content.html,
      attachments: options.attachments,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error: any) {
    console.error("Email sending error:", error)
    return { 
      success: false, 
      error: error.message || "Failed to send email"
    }
  }
}

/**
 * Helper for service availability notification
 */
export function getServiceUnavailableMessage(): string {
  return "Our email notification service is temporarily unavailable. Please call us directly at (512) 793-7867."
} 