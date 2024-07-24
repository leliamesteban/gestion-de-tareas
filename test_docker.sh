#!/bin/bash

# Build Docker image
docker build -t gestion-de-tareas .

# Run Docker container
docker run -d -p 3001:3001 --name gestion-de-tareas-container gestion-de-tareas

# Wait for the server to start
sleep 10

# Test if the application is running
curl -f http://localhost:3001 || (echo "Application failed to start" && exit 1)

echo "Docker container is running successfully"
