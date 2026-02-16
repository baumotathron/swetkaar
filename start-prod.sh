#!/bin/bash

# Start Next.js Production Server
echo "🔨 Building Next.js application..."
npm run build

echo ""
echo "🚀 Starting production server..."
echo "📍 The site will be available at: http://localhost:3000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

npm start

