FROM ghcr.io/railwayapp/nixpacks:ubuntu-1725321821

WORKDIR /app

# Kopieren der package.json und package-lock.json
COPY package*.json ./

# Installation der Dependencies
RUN npm ci

# Installation der zusätzlichen Dependencies (falls nötig)
RUN npm install @radix-ui/react-dialog @radix-ui/react-icons @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react --legacy-peer-deps

# Kopieren des restlichen Projektcodes
COPY . .

# Build der Anwendung
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
