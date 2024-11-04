# Build-Stage
FROM node:18-alpine AS build

WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest der Anwendung
COPY . .

# Baue die Anwendung
RUN npm run build

# Production-Stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

# Kopiere die gebaute Anwendung
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Kopiere nginx Konfiguration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponiere Port 80
EXPOSE 3000

# Starte nginx
CMD ["node", "server.js"]
