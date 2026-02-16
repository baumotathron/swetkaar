#!/bin/bash

# Cleanup script for Swetkaar AI
# Removes development/build artifacts that can be regenerated

echo "🧹 Cleaning up development files..."
echo ""

# Remove build cache
if [ -d ".next" ]; then
    echo "📦 Removing .next build cache..."
    rm -rf .next
    echo "✅ Removed .next folder"
else
    echo "ℹ️  .next folder not found (already clean)"
fi

# Remove dependencies
if [ -d "node_modules" ]; then
    echo "📦 Removing node_modules..."
    rm -rf node_modules
    echo "✅ Removed node_modules folder"
else
    echo "ℹ️  node_modules folder not found (already clean)"
fi

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📋 Next steps:"
echo "   To reinstall dependencies: npm install"
echo "   To rebuild: npm run build"
echo "   To start dev server: npm run dev"
echo ""
echo "💡 Note: .git folder is kept (contains version control history)"
echo "   To remove .git as well (if not needed): rm -rf .git"

