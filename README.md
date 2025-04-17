# Alpha Septic Website

A modern, high-performance website for Alpha Septic Services built with Next.js.

## Features

- Fast, responsive design optimized for all devices
- SEO optimized with structured data
- Contact and booking forms with email notifications
- Service area pages with local SEO
- Admin dashboard for content management
- Optimized images and assets for performance

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Fill in the required environment variables
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

The following environment variables are required:

- `RESEND_API_KEY`: API key for Resend email service
- `EMAIL_USER`: SMTP email username (backup for Resend)
- `EMAIL_PASSWORD`: SMTP email password
- `NEXT_PUBLIC_ADMIN_EMAIL`: Admin login email
- `NEXT_PUBLIC_ADMIN_PASSWORD`: Admin login password
- `TOKEN_SECRET`: Secret for generating auth tokens
- `NEXT_PUBLIC_SITE_URL`: Production site URL
- `CONTACT_EMAIL`: Email where contact form submissions are sent
- `BOOKING_EMAIL`: Email where booking form submissions are sent
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager ID

## Pre-Deployment Checklist

Run the pre-deployment checklist script to verify that the site is ready for production:

```bash
node pre-deployment-checklist.js
```

This script checks:
- Environment variables
- Security measures
- Image optimization
- SEO configuration
- API endpoints
- Build process
- Docker setup

## Deployment

### Option 1: Docker Deployment

1. Make sure Docker and Docker Compose are installed
2. Create a `.env` file with production values
3. Build and run the Docker containers:
   ```bash
   docker-compose up -d
   ```
4. The site will be available at http://localhost:3000 (or your configured port)

### Option 2: Node.js Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

### Option 3: Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy the application

## Optimization Tools

The project includes several optimization tools:

- `scripts/optimize-images.js`: Identifies large images and provides optimization instructions
- `scripts/batch-optimize-images.js`: Automatically optimizes large images
- `scripts/check-page-rendering.js`: Analyzes rendering strategies for optimal performance

Run these tools as needed:

```bash
node scripts/check-page-rendering.js
node scripts/optimize-images.js
node scripts/batch-optimize-images.js
```

## Security

- Admin authentication is implemented with secure tokens
- CSRF protection is enabled for all forms
- Environment variables are validated at startup
- All API endpoints include validation and error handling

## License

Copyright © 2023 Alpha Septic Services. All rights reserved.