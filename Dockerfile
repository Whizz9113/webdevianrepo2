FROM ghcr.io/railwayapp/nixpacks:ubuntu-1725321821

WORKDIR /app

# Kopieren der Package-Dateien
COPY package.json package-lock.json ./

# Installation der Dependencies
RUN npm install --legacy-peer-deps

# Kopieren des restlichen Projektcodes
COPY . .

# Build der Anwendung
RUN npm run build

# Setzen der Umgebungsvariablen
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
