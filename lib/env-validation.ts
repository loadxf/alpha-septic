/**
 * Environment Variable Validation
 *
 * This utility validates that all required environment variables are set
 * and logs warnings for missing or potentially misconfigured variables.
 */

// Variables that should be set for production but can have fallbacks
const RECOMMENDED_VARIABLES = [
  'NEXT_PUBLIC_SITE_URL',
  'CONTACT_EMAIL',
  'BOOKING_EMAIL',
  'NEXT_PUBLIC_GTM_ID'
];

// Variables that are absolutely required with no fallbacks
const REQUIRED_VARIABLES = [
  'RESEND_API_KEY',
  'EMAIL_USER',
  'EMAIL_PASSWORD'
];

// Demo variables that should be replaced in production
const DEMO_VARIABLES = [
  'NEXT_PUBLIC_ADMIN_EMAIL',
  'NEXT_PUBLIC_ADMIN_PASSWORD',
  'TOKEN_SECRET'
];

/**
 * Validates environment variables and logs warnings/errors
 * Should be called during app initialization
 */
export function validateEnvironmentVariables(): void {
  // Skip validation in development mode
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  let hasErrors = false;
  
  // Check required variables
  for (const variable of REQUIRED_VARIABLES) {
    if (!process.env[variable]) {
      console.error(`🚨 ERROR: Required environment variable ${variable} is not set!`);
      hasErrors = true;
    }
  }
  
  // Check recommended variables
  for (const variable of RECOMMENDED_VARIABLES) {
    if (!process.env[variable]) {
      console.warn(`⚠️ WARNING: Recommended environment variable ${variable} is not set. Using fallback value.`);
    }
  }
  
  // Check for demo credentials in production
  for (const variable of DEMO_VARIABLES) {
    if (process.env[variable]) {
      const value = process.env[variable];
      if (variable === 'NEXT_PUBLIC_ADMIN_EMAIL' && value.includes('admin@callalphaseptic.com')) {
        console.warn(`⚠️ SECURITY WARNING: ${variable} is using demo value in production!`);
      }
      if (variable === 'NEXT_PUBLIC_ADMIN_PASSWORD' && (value === 'admin123' || value?.length < 8)) {
        console.warn(`⚠️ SECURITY WARNING: ${variable} appears to be using a weak password!`);
      }
      if (variable === 'TOKEN_SECRET' && value === 'change_this_to_a_long_random_string_in_production') {
        console.warn(`⚠️ SECURITY WARNING: ${variable} is using the default example value!`);
      }
    }
  }
  
  if (hasErrors) {
    console.error('🚨 Missing required environment variables. The application may not function correctly.');
    // We don't throw an error here to allow the app to at least try to start,
    // but the errors will be visible in the logs
  }
}

/**
 * Check specific email configuration and provide helpful messages
 */
export function validateEmailConfiguration(): void {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey && (!emailUser || !emailPassword)) {
    console.error('🚨 No email service configuration found! Neither Resend API key nor SMTP credentials are set.');
    return;
  }
  
  if (!resendApiKey) {
    console.warn('⚠️ Resend API key not configured. Falling back to SMTP.');
  }
  
  if (!emailUser || !emailPassword) {
    console.warn('⚠️ SMTP credentials not configured. Relying solely on Resend for email delivery.');
  }
  
  if (emailUser?.includes('gmail') && emailPassword && emailPassword.length < 16) {
    console.warn('⚠️ Gmail detected with short password. Be sure to use an App Password, not your regular Gmail password!');
  }
} 