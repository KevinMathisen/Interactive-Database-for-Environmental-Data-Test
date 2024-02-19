#!/bin/bash

set -euo pipefail  # Exists if any command fail

# Navigate to the website directory
cd /home/ubuntu/Interactive-Database-for-Environmental-Data-Test

# Pull the latest changes from the GitHub repository
git pull origin main

# Restart your web server or perform any other necessary actions

# Stops and remove the container if it exists, ignoring errors if it's not running
docker stop staticwebserver:latest || true
docker rm staticwebserver:latest || true

# Build the Docker image
docker build -t "staticwebserver:latest" ./web-server

# Run the Docker container
docker run --restart=always -p 3000:3000 -d staticwebserver:latest

echo "Static web server started successfully."
