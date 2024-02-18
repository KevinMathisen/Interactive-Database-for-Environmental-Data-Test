# Using the latest node image version
FROM node:latest
LABEL maintainer="Carl Petter Morch-Reiersen <carlpm.stud@ntnu.no>"

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY web-server/package*.json ./

# Install project dependencies
RUN npm install

# Copy SSL certificates
# COPY ssl-certificates/ /usr/src/app/ssl-certificates/

# Copy the rest of the apps source code
COPY web-server/src .

# Expose port 3000
EXPOSE 3000

# Define the command to run your app using CMD
CMD ["node", "app.js"]