#!/bin/bash

# Azure App Service startup script for React SPA
echo "Starting React application on Azure App Service..."

# Install serve globally if not present
npm install -g serve

# Serve the built React app on the port provided by Azure
echo "Serving on port $PORT"
serve -s dist -l $PORT