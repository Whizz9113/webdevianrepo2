#!/bin/sh

# Warte kurz
sleep 2

# Starte Next.js auf Port 3000
cd /app && PORT=3000 NODE_ENV=production node server.js &
NEXT_PID=$!

# Warte, bis Next.js gestartet ist
sleep 5

# Überprüfe ob Next.js läuft
if ! kill -0 $NEXT_PID 2>/dev/null; then
    echo "Next.js failed to start"
    exit 1
fi

echo "Next.js is running on port 3000"

# Starte Nginx
exec nginx -g 'daemon off;'
