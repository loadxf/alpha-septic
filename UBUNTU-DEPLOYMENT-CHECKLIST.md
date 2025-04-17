# Ubuntu Server Deployment Checklist

This checklist provides step-by-step instructions for deploying the Alpha Septic website on an Ubuntu server.

## 1. Server Preparation

- [ ] Update Ubuntu packages:
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```
- [ ] Install required dependencies:
  ```bash
  sudo apt install -y curl wget git apt-transport-https ca-certificates gnupg lsb-release
  ```
- [ ] Configure firewall:
  ```bash
  sudo ufw allow ssh
  sudo ufw allow http
  sudo ufw allow https
  sudo ufw enable
  ```
- [ ] Install Docker and Docker Compose:
  ```bash
  # Install Docker
  curl -fsSL https://get.docker.com | sudo sh
  
  # Add current user to docker group
  sudo usermod -aG docker $USER
  
  # Install Docker Compose
  sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  ```
- [ ] Verify Docker installation:
  ```bash
  docker --version
  docker-compose --version
  ```

## 2. Application Deployment

- [ ] Clone or copy the repository:
  ```bash
  git clone https://github.com/your-repo/alpha-septic-website.git
  cd alpha-septic-website
  ```
- [ ] Create and configure the `.env` file:
  ```bash
  cp .env.example .env
  nano .env
  ```
- [ ] Generate secure values for secrets:
  ```bash
  node scripts/generate-secrets.js
  ```
- [ ] Build and start Docker containers:
  ```bash
  docker-compose build
  docker-compose up -d
  ```
- [ ] Verify container status:
  ```bash
  docker-compose ps
  docker-compose logs
  ```

## 3. SSL Certificate Setup

- [ ] Install Certbot for SSL:
  ```bash
  sudo apt install -y certbot python3-certbot-nginx
  ```
- [ ] Obtain SSL certificate:
  ```bash
  sudo certbot --nginx -d example.com -d www.example.com
  ```
- [ ] Configure SSL cert renewal cron job:
  ```bash
  echo "0 3 * * * /usr/bin/certbot renew --quiet" | sudo tee -a /etc/crontab
  ```
- [ ] Test certificate renewal:
  ```bash
  sudo certbot renew --dry-run
  ```
- [ ] Copy certificates to Nginx volume:
  ```bash
  sudo cp -r /etc/letsencrypt/live/example.com /path/to/project/nginx/ssl/live/
  sudo cp -r /etc/letsencrypt/archive/example.com /path/to/project/nginx/ssl/archive/
  sudo chown -R $(id -u):$(id -g) /path/to/project/nginx/ssl/
  ```

## 4. Post-Deployment Verification

- [ ] Run the pre-deployment checklist:
  ```bash
  docker-compose exec web node scripts/pre-deployment-checklist.js
  ```
- [ ] Test website access:
  ```bash
  curl -I https://example.com
  ```
- [ ] Test API endpoints functionality:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"test":"true"}' https://example.com/api/health
  ```
- [ ] Verify browser compatibility by accessing the site from different browsers

## 5. Monitoring and Maintenance Setup

- [ ] Configure log rotation:
  ```bash
  sudo nano /etc/logrotate.d/docker-logs
  ```
  Add the following content:
  ```
  /var/lib/docker/containers/*/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    copytruncate
  }
  ```
- [ ] Setup automated backups for environment and config:
  ```bash
  mkdir -p /home/username/backups
  echo "0 2 * * * cp -r /path/to/project/.env /home/username/backups/.env.backup-\$(date +\%Y\%m\%d)" | sudo tee -a /etc/crontab
  ```
- [ ] Enable automatic Docker container restarts:
  ```bash
  # Check that all containers have restart: always in docker-compose.yml
  grep "restart:" docker-compose.yml
  ```

## 6. Rollback Procedure

In case of deployment issues, follow these steps to rollback:

1. Stop the current containers:
   ```bash
   docker-compose down
   ```

2. Tag the current state (for reference):
   ```bash
   git tag -a rollback-$(date +%Y%m%d) -m "State before rollback"
   ```

3. Checkout the previous known working version:
   ```bash
   git checkout <previous-commit-or-tag>
   ```

4. Rebuild and restart the containers:
   ```bash
   docker-compose build
   docker-compose up -d
   ```

5. Verify the rollback was successful:
   ```bash
   docker-compose ps
   curl -I https://example.com
   ``` 