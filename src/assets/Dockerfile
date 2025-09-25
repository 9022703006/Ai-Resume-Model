# Use official n8n image
FROM n8nio/n8n:latest

# Set working directory
WORKDIR /home/node

# Copy package.json if you have custom dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Expose default n8n port (informational)
EXPOSE 5678

# Start n8n
CMD ["n8n", "start"]
