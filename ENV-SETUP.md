# Environment Variable Setup Guide

This document outlines all the environment variables required for the application to function properly, especially when building with Docker.

## Required Environment Variables

Create a `.env` file at the root of the project with the following variables:

```bash
# Required core configuration
NGINX_HOST=yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
TOKEN_SECRET=replace_with_long_random_string_use_openssl_rand_hex_32

# Email Configuration (Resend OR SMTP)
RESEND_API_KEY=re_your_resend_api_key_here
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password_here

# Contact addresses
CONTACT_EMAIL=contact@example.com
BOOKING_EMAIL=bookings@example.com

# Admin credentials
NEXT_PUBLIC_ADMIN_EMAIL=admin@example.com
NEXT_PUBLIC_ADMIN_PASSWORD=secure_admin_password_here

# Optional but recommended
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX

# SMTP Configuration (if needed)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=${EMAIL_USER}
SMTP_PASS=${EMAIL_PASSWORD}
```

## Important Notes

1. **URL Format**: `NEXT_PUBLIC_SITE_URL` must include the protocol (http:// or https://)
2. **Security**: Generate a secure random token for `TOKEN_SECRET` using: `openssl rand -hex 32`
3. **Email Configuration**: You must configure either Resend API key or SMTP credentials
4. **Building with Docker**: These environment variables are required at build time

## Docker Build Commands

To build and run the application with Docker:

```bash
# Ensure .env file is present and filled
# Pull latest changes
git pull

# Build and start containers
docker compose build
docker compose up -d
```

If you encounter any build errors, check your `.env` file for missing or incorrectly formatted variables. 