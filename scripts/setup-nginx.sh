#!/bin/bash
set -e

# Detect script location and app root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"

# Validate NGINX_HOST
if [ -z "$NGINX_HOST" ]; then
  echo "Error: NGINX_HOST environment variable is not set"
  exit 1
fi

echo "Configuring NGINX for host: $NGINX_HOST"

# Generate the nginx config by replacing environment variables
NGINX_CONF_TEMPLATE="$APP_ROOT/nginx/conf.d/default.conf"
NGINX_CONF_OUTPUT="/etc/nginx/conf.d/default.conf"

# Backup the original template if this is the first run
if [ ! -f "${NGINX_CONF_TEMPLATE}.original" ]; then
  cp "$NGINX_CONF_TEMPLATE" "${NGINX_CONF_TEMPLATE}.original"
  echo "Created backup of original NGINX config template"
fi

# Replace environment variables in the NGINX config
echo "Generating NGINX configuration with environment variables..."
envsubst '${NGINX_HOST}' < "${NGINX_CONF_TEMPLATE}.original" > "$NGINX_CONF_TEMPLATE"

echo "NGINX configuration setup completed successfully"

# SSL certificate check
SSL_DIR="$APP_ROOT/nginx/ssl/live/${NGINX_HOST}"
if [ -f "$SSL_DIR/privkey.pem" ] && [ -f "$SSL_DIR/fullchain.pem" ]; then
  echo "SSL certificates found"
else
  echo "WARNING: SSL certificates not found at $SSL_DIR"
  echo "You need to:"
  echo "1. Obtain SSL certificates using Let's Encrypt or similar"
  echo "2. Place them in $SSL_DIR with the following names:"
  echo "   - privkey.pem (private key)"
  echo "   - fullchain.pem (certificate chain)"
  echo "Or temporarily modify the NGINX configuration to disable SSL"
fi

exit 0 