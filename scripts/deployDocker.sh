#!/bin/bash

set -euo pipefail  # This ensures the script will exit if any command fails

# Stop and remove the container if it exists, ignoring errors if it's not running
docker stop staticwebserver:latest || true
docker rm staticwebserver:latest || true

# Build the Docker image
docker build -t "staticwebserver:latest" ./web-server

# Run the Docker container
docker run --restart=always -p 3000:3000 -d staticwebserver:latest

echo "Static web server started successfully."
