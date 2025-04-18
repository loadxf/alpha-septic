# Ubuntu Deployment Guide for Alpha Septic Website

This guide provides step-by-step instructions for deploying the Alpha Septic Website on an Ubuntu server using Docker and NGINX.

## Prerequisites

- Ubuntu 20.04 LTS or newer
- Docker and Docker Compose installed
- Domain name pointing to your server
- SSL certificates (Let's Encrypt recommended)

## Server Setup

1. Install Docker:
   ```bash
   sudo apt update
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   sudo apt update
   sudo apt install docker-ce
   ```

2. Install Docker Compose:
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.15.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. Verify Docker installation:
   ```bash
   docker --version
   docker-compose --version
   ```

4. Add your user to the docker group:
   ```bash
   sudo usermod -aG docker ${USER}
   ```
   (Log out and log back in for this to take effect)

## Application Deployment

1. Clone the repository:
   ```bash
   git clone <repository-url> /opt/alpha-septic
   cd /opt/alpha-septic
   ```

2. Create the .env file:
   ```bash
   cp env.example.txt .env
   nano .env
   ```

3. Configure environment variables in the .env file:
   ```
   NGINX_HOST=yourdomain.com
   RESEND_API_KEY=your_resend_api_key
   EMAIL_USER=your_email_username
   EMAIL_PASSWORD=your_email_password
   NEXT_PUBLIC_ADMIN_EMAIL=admin@yourdomain.com
   NEXT_PUBLIC_ADMIN_PASSWORD=secure_password
   TOKEN_SECRET=your_secure_token_secret
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   CONTACT_EMAIL=contact@yourdomain.com
   BOOKING_EMAIL=bookings@yourdomain.com
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
   ```

4. Obtain SSL certificates using Let's Encrypt:
   ```bash
   sudo apt install certbot
   sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
   ```

5. Create SSL directory structure:
   ```bash
   mkdir -p nginx/ssl/live/yourdomain.com nginx/ssl/archive/yourdomain.com
   ```

6. Copy SSL certificates:
   ```bash
   sudo cp -r /etc/letsencrypt/live/yourdomain.com/* nginx/ssl/live/yourdomain.com/
   sudo cp -r /etc/letsencrypt/archive/yourdomain.com/* nginx/ssl/archive/yourdomain.com/
   ```

7. Set proper permissions:
   ```bash
   sudo chown -R $USER:$USER nginx/ssl
   sudo chmod -R 755 nginx/ssl
   sudo chmod 640 nginx/ssl/live/yourdomain.com/privkey.pem
   ```

8. Build and start the containers:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

9. Verify the deployment:
   ```bash
   docker-compose ps
   docker-compose logs -f
   ```

10. Test the website by visiting https://yourdomain.com

## SSL Certificate Renewal

The Let's Encrypt certificates need to be renewed every 90 days. Create a script to handle this:

1. Create the renewal script:
   ```bash
   nano /opt/alpha-septic/scripts/renew-ssl.sh
   ```

2. Add the following content:
   ```bash
   #!/bin/bash
   set -e

   # Stop the containers
   cd /opt/alpha-septic
   docker-compose down

   # Renew the certificates
   certbot renew

   # Copy the renewed certificates
   cp -r /etc/letsencrypt/live/yourdomain.com/* /opt/alpha-septic/nginx/ssl/live/yourdomain.com/
   cp -r /etc/letsencrypt/archive/yourdomain.com/* /opt/alpha-septic/nginx/ssl/archive/yourdomain.com/

   # Fix permissions
   chmod 640 /opt/alpha-septic/nginx/ssl/live/yourdomain.com/privkey.pem

   # Restart the containers
   docker-compose up -d

   echo "SSL certificates renewed successfully"
   ```

3. Make the script executable:
   ```bash
   chmod +x /opt/alpha-septic/scripts/renew-ssl.sh
   ```

4. Set up a cron job to run the renewal script monthly:
   ```bash
   sudo crontab -e
   ```

   Add the following line:
   ```
   0 0 1 * * /opt/alpha-septic/scripts/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
   ```

## Troubleshooting

### NGINX Not Starting

Check if the NGINX configuration is valid:
```bash
docker-compose exec nginx nginx -t
```

### Website Not Loading

Check the logs for errors:
```bash
docker-compose logs web
docker-compose logs nginx
```

### SSL Certificate Issues

Verify certificates are in the correct location and have proper permissions:
```bash
ls -la nginx/ssl/live/yourdomain.com/
```

## Maintenance

### Updates

To update the application:
```bash
git pull
docker-compose build
docker-compose up -d
```

### Backups

Create a backup script:
```bash
nano /opt/alpha-septic/scripts/backup.sh
```

Add the following content:
```bash
#!/bin/bash
BACKUP_DIR="/opt/backups/alpha-septic"
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
mkdir -p $BACKUP_DIR

# Backup environment file
cp /opt/alpha-septic/.env $BACKUP_DIR/.env.$TIMESTAMP

# Backup SSL certificates
tar -czf $BACKUP_DIR/ssl-$TIMESTAMP.tar.gz -C /opt/alpha-septic/nginx/ssl .

# Backup uploaded content
tar -czf $BACKUP_DIR/uploads-$TIMESTAMP.tar.gz -C /opt/alpha-septic/public/uploads .

echo "Backup completed successfully to $BACKUP_DIR"
```

Make the script executable:
```bash
chmod +x /opt/alpha-septic/scripts/backup.sh
```

Set up a cron job for regular backups:
```bash
sudo crontab -e
```

Add the following line for weekly backups:
```
0 0 * * 0 /opt/alpha-septic/scripts/backup.sh >> /var/log/alpha-septic-backup.log 2>&1
``` 