#!/bin/bash
set -e

# Validate NGINX_HOST
if [ -z "$NGINX_HOST" ]; then
  echo "Error: NGINX_HOST environment variable is not set"
  exit 1
fi

# Detect script location and app root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Create required directories
echo "Creating required directories for $NGINX_HOST..."
mkdir -p \
  "$APP_ROOT/nginx/conf.d" \
  "$APP_ROOT/nginx/ssl/live/${NGINX_HOST}" \
  "$APP_ROOT/nginx/www" \
  "$APP_ROOT/public/uploads"

# Set base permissions
echo "Setting base permissions..."
chmod -R 755 "$APP_ROOT/nginx"
chmod 755 "$APP_ROOT/nginx/ssl/live/${NGINX_HOST}"

# Set SSL certificate permissions if files exist
SSL_DIR="$APP_ROOT/nginx/ssl/live/${NGINX_HOST}"
if [ -f "$SSL_DIR/privkey.pem" ]; then
  echo "Validating private key..."
  openssl rsa -in "$SSL_DIR/privkey.pem" -check -noout || {
    echo "Warning: Invalid private key or could not validate"
    # Don't exit on error, just warn - we might be in a development environment
  }
  chmod 640 "$SSL_DIR/privkey.pem" || echo "Warning: Could not set permissions on private key"
fi

if [ -f "$SSL_DIR/fullchain.pem" ]; then
  echo "Validating certificate..."
  openssl x509 -in "$SSL_DIR/fullchain.pem" -text -noout || {
    echo "Warning: Invalid certificate or could not validate"
    # Don't exit on error, just warn - we might be in a development environment
  }
  chmod 644 "$SSL_DIR/fullchain.pem" || echo "Warning: Could not set permissions on certificate"
fi

echo "Directory setup completed successfully"
exit 0 