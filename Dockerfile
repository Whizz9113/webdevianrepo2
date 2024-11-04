# Base image
FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Package.json Dateien kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm install

# Projektdateien kopieren
COPY . .

# Next.js Build
RUN npm run build

# Port exponieren
EXPOSE 3000

# Start Command
CMD ["npm", "start"]
