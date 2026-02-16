#!/bin/bash
echo "Starting local server..."
echo ""
echo "Your site will open at: http://localhost:8080"
echo "Press Ctrl+C to stop the server"
echo ""
cd "$(dirname "$0")"
python3 -m http.server 8080


