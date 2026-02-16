#!/bin/bash

# Production Build Script for Swetkaar AI
echo "🔨 Building Swetkaar AI for production..."
echo ""

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the application
echo "🏗️  Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build completed successfully!"
  echo ""
  echo "📊 Build Statistics:"
  du -sh .next 2>/dev/null || echo "Build directory size: N/A"
  echo ""
  echo "🚀 To start the production server, run:"
  echo "   npm start"
  echo ""
  echo "📦 To export static files, run:"
  echo "   npm run build && npx next export"
  echo ""
else
  echo ""
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi

