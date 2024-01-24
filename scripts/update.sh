#!/bin/bash

# Navigate to the website directory
cd ..

# Pull the latest changes from the GitHub repository
git pull origin main

# Restart your web server or perform any other necessary actions
# For example, if using Nginx:
sudo systemctl restart nginx
