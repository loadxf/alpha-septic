#!/bin/bash

# Create a backup of the current .env file
if [ -f .env ]; then
  cp .env .env.backup
  echo "Backed up existing .env to .env.backup"
fi

# Check if NEXT_PUBLIC_SITE_URL is set in .env
if grep -q "NEXT_PUBLIC_SITE_URL" .env; then
  # Update the URL to include protocol if it doesn't already
  current_url=$(grep "NEXT_PUBLIC_SITE_URL" .env | cut -d '=' -f2)
  if [[ $current_url != http* ]]; then
    # Replace the URL with https:// prefix
    sed -i "s|NEXT_PUBLIC_SITE_URL=.*|NEXT_PUBLIC_SITE_URL=https://$current_url|g" .env
    echo "Fixed NEXT_PUBLIC_SITE_URL to include https:// protocol"
  else
    echo "NEXT_PUBLIC_SITE_URL already includes protocol, no changes needed"
  fi
else
  # Add the URL with protocol if it doesn't exist
  echo "NEXT_PUBLIC_SITE_URL=https://callalphaseptic.com" >> .env
  echo "Added NEXT_PUBLIC_SITE_URL with https:// protocol"
fi

# Display the current .env file
echo "Current environment variables:"
cat .env

# Instructions for rebuilding
echo ""
echo "Run the following commands to rebuild the containers:"
echo "docker compose build"
echo "docker compose up -d" 