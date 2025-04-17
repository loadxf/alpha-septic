# Monitoring and Maintenance Guide - Alpha Septic Website

This guide provides instructions for monitoring, maintaining, and troubleshooting the Alpha Septic Website after deployment.

## Monitoring

### Container Monitoring

1. **Basic Docker Stats:**
   ```bash
   docker stats
   ```

2. **Container Logs:**
   ```bash
   docker compose logs -f
   ```

3. **Container Health:**
   ```bash
   docker inspect --format "{{json .State.Health }}" $(docker compose ps -q web) | jq
   ```

### Application Monitoring

1. **Uptime Monitoring:**
   Set up an uptime monitoring service like UptimeRobot, Pingdom, or StatusCake to check your site's availability.

2. **Server Monitoring:**
   Consider using Netdata, Prometheus with Node Exporter, or similar tools for real-time server metrics.

3. **Log Monitoring:**
   - View application logs:
     ```bash
     docker compose logs -f web | grep -i error
     ```
   
   - For advanced log management, consider setting up ELK Stack (Elasticsearch, Logstash, Kibana) or using a service like Datadog.

4. **Performance Monitoring:**
   - Use Lighthouse in Chrome DevTools to check performance metrics
   - Consider setting up a New Relic or DataDog account for more detailed metrics

5. **Error Tracking:**
   - Consider implementing Sentry.io for real-time error tracking

## Regular Maintenance Tasks

### Daily Checks

1. **Monitor Uptime:**
   - Verify the site is accessible
   - Check server response times

2. **Review Logs:**
   - Check for errors or warnings
   - Look for unusual patterns

3. **Verify Emails:**
   - Ensure contact and booking form emails are being delivered
   - Check for any email delivery issues

### Weekly Maintenance

1. **Update Docker Images:**
   ```bash
   docker compose pull
   docker compose up -d
   ```

2. **Backup Configuration:**
   ```bash
   cp .env .env.backup-$(date +%Y%m%d)
   ```

3. **Check Security Updates:**
   - Review security bulletins for Docker, Nginx, and Node.js
   - Apply any critical patches

4. **Test Forms:**
   - Submit test contact and booking forms to ensure they work
   - Verify email delivery

5. **Check SSL Certificate:**
   - Verify SSL certificate validity
   - Renew if necessary:
     ```bash
     sudo certbot renew
     ```

### Monthly Maintenance

1. **Update Application:**
   ```bash
   git pull
   docker compose down
   docker compose up -d --build
   ```

2. **Verify Redirects:**
   - Check that all redirects are working correctly
   - Test on both www and non-www domains

3. **Website Security Scan:**
   - Run a security scan with tools like OWASP ZAP or online scanners
   - Address any vulnerabilities found

4. **SEO Check:**
   - Verify that sitemaps are accessible
   - Check for crawl errors in Google Search Console
   - Run the link checker script:
     ```bash
     node scripts/link-checker.js
     ```

5. **Performance Audit:**
   - Run Lighthouse audits for performance, accessibility, and SEO
   - Check Core Web Vitals in Google Search Console
   - Address any performance issues

## Database Backups (if applicable)

If you add database functionality in the future:

1. **Backup Database:**
   ```bash
   docker compose exec db mysqldump -u [user] -p [database] > backup-$(date +%Y%m%d).sql
   ```

2. **Restore Database:**
   ```bash
   docker compose exec -i db mysql -u [user] -p [database] < backup-file.sql
   ```

## Troubleshooting Common Issues

### Container Won't Start

1. Check the logs:
   ```bash
   docker compose logs web
   ```

2. Verify environment variables:
   ```bash
   docker compose config
   ```

3. Try rebuilding without cache:
   ```bash
   docker compose build --no-cache
   docker compose up -d
   ```

### Website Is Slow

1. Check server resources:
   ```bash
   docker stats
   ```

2. Run Lighthouse performance audit

3. Check for large unoptimized images:
   ```bash
   node scripts/optimize-images.js
   ```

4. Verify caching headers:
   ```bash
   curl -I https://callalphaseptic.com
   ```

### Form Submissions Not Working

1. Check email service status:
   - Verify Resend API status
   - Test SMTP credentials

2. Check application logs for email errors:
   ```bash
   docker compose logs web | grep -i email
   ```

3. Verify environment variables:
   ```bash
   docker compose exec web printenv | grep EMAIL
   ```

### SSL Certificate Issues

1. Check certificate validity:
   ```bash
   echo | openssl s_client -servername callalphaseptic.com -connect callalphaseptic.com:443 2>/dev/null | openssl x509 -noout -dates
   ```

2. Renew certificate:
   ```bash
   sudo certbot renew --force-renewal
   ```

3. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Security Maintenance

1. **Regular Updates:**
   - Update Node.js version in Dockerfile when new LTS versions are released
   - Keep npm packages updated (with caution)

2. **Security Scanning:**
   - Run npm audit:
     ```bash
     npm audit
     ```
   - Fix vulnerabilities:
     ```bash
     npm audit fix
     ```

3. **Login Protection:**
   - Consider implementing rate limiting for login attempts
   - Review admin access logs

4. **Firewall Configuration:**
   - Ensure firewall only allows necessary ports (80, 443)
   - Block unnecessary access to the server

## Scaling (if needed)

1. **Horizontal Scaling:**
   - Add more containers in docker-compose.yml
   - Set up a load balancer

2. **Performance Optimization:**
   - Implement Redis for caching
   - Optimize images and assets further

## Emergency Contacts

Maintain a list of emergency contacts:

1. Hosting provider support
2. Domain registrar contact
3. Development team contacts
4. Client emergency contact

## Documentation Updates

Keep this documentation updated:

1. Record any major changes to the application
2. Document troubleshooting steps for recurring issues
3. Update maintenance procedures as needed 