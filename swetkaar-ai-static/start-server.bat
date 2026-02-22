@echo off
echo Starting local server...
echo.
echo Your site will open at: http://localhost:8080
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
python -m http.server 8080
pause


