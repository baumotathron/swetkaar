# PowerShell script to start local server
Write-Host "Starting local server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your site will be available at: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

$currentDir = Get-Location
Set-Location $PSScriptRoot

# Try Python first
try {
    python -m http.server 3000
} catch {
    Write-Host "Python not found. Trying alternative..." -ForegroundColor Red
    # Try Node.js http-server
    try {
        npx http-server -p 3000 -o
    } catch {
        Write-Host "Neither Python nor Node.js found. Please install one of them." -ForegroundColor Red
        Write-Host "Or use VS Code Live Server extension." -ForegroundColor Yellow
    }
}


