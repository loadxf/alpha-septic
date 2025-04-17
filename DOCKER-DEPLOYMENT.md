# Docker Deployment Guide - Alpha Septic Website

This guide provides detailed instructions for deploying the Alpha Septic Website using Docker and Docker Compose.

## Prerequisites

Before deploying, ensure you have the following installed on your server:

- Docker (version 20.10.x or later)
- Docker Compose (version 2.x or later)
- Git (to clone the repository)

You can check your installed versions with:

```bash
docker --version
docker compose --version
git --version
```

## Step 1: Prepare the Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alpha-septic-website.git
   cd alpha-septic-website
   ```

2. Create a production `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Edit the `.env` file with your production values:
   ```bash
   nano .env
   ```

   Ensure all required environment variables are set:
   - `RESEND_API_KEY` - Get from [Resend.io](https://resend.io)
   - `EMAIL_USER` and `EMAIL_PASSWORD` - Your SMTP email credentials
   - `NEXT_PUBLIC_ADMIN_EMAIL` and `NEXT_PUBLIC_ADMIN_PASSWORD` - Secure admin credentials
   - `TOKEN_SECRET` - Generate with `openssl rand -hex 32`
   - `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., `https://callalphaseptic.com`)
   - `CONTACT_EMAIL` and `BOOKING_EMAIL` - Where form submissions are sent
   - `NEXT_PUBLIC_GTM_ID` - Your Google Tag Manager ID

## Step 2: Configure Docker

1. Review the `docker-compose.yml` file to ensure it meets your needs:
   ```bash
   nano docker-compose.yml
   ```

2. Important settings to check:
   - `ports`: The default is `3000:3000`. Change the first number if you want to use a different external port.
   - `restart`: Set to `always` for automatic container restarts.
   - `environment`: Ensure it includes all necessary environment variables.
   - `healthcheck`: Verify the health check configuration.

3. If you need to make further customizations to the Docker build process, review the `Dockerfile`:
   ```bash
   nano Dockerfile
   ```

## Step 3: Build and Deploy

1. Build and start the Docker containers in detached mode:
   ```bash
   docker compose up -d
   ```

2. Watch the build process and initial container logs:
   ```bash
   docker compose logs -f
   ```

3. Check if the container is running and healthy:
   ```bash
   docker compose ps
   ```

## Step 4: Connect to a Web Server (Optional)

For production deployments, you should use a proper web server like Nginx as a reverse proxy:

1. Install Nginx (on Ubuntu/Debian):
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Create an Nginx configuration file for your domain:
   ```bash
   sudo nano /etc/nginx/sites-available/callalphaseptic.com
   ```

3. Add the following configuration (replace `callalphaseptic.com` with your domain):
   ```nginx
   server {
       listen 80;
       server_name callalphaseptic.com www.callalphaseptic.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

4. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/callalphaseptic.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. Set up SSL with Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d callalphaseptic.com -d www.callalphaseptic.com
   ```

## Step 5: Verify Deployment

1. Open your domain in a web browser to ensure the site loads correctly.
2. Test all forms and features to verify they work.
3. Check that emails are being sent correctly.
4. Verify Google Tag Manager is working by checking for the GTM container in the page source.

## Maintenance Commands

Here are some useful commands for maintaining your Docker deployment:

- View container logs:
  ```bash
  docker compose logs -f
  ```

- Stop the containers:
  ```bash
  docker compose down
  ```

- Update the application:
  ```bash
  git pull
  docker compose down
  docker compose up -d --build
  ```

- Check container status:
  ```bash
  docker compose ps
  ```

- View resource usage:
  ```bash
  docker stats
  ```

## Backup Strategy

Regularly backup your environment variables and any data directories:

1. Backup the `.env` file:
   ```bash
   cp .env .env.backup-$(date +%Y%m%d)
   ```

2. If you added volumes to the `docker-compose.yml` file, backup those directories as well.

## Troubleshooting

If you encounter issues with your deployment:

1. Check the container logs:
   ```bash
   docker compose logs -f
   ```

2. Verify your environment variables:
   ```bash
   docker compose exec web printenv | grep NEXT
   ```

3. Check if the health check is passing:
   ```bash
   docker inspect --format "{{json .State.Health }}" $(docker compose ps -q web) | jq
   ```

4. Rebuild the container with no cache:
   ```bash
   docker compose build --no-cache
   docker compose up -d
   ```

## Security Considerations

1. Never expose the Docker API to the public internet.
2. Use strong, unique passwords for all services.
3. Regularly update your Docker images and the host system.
4. Consider using Docker secrets for sensitive information instead of environment variables.
5. Implement proper network security rules to restrict access to your server. 