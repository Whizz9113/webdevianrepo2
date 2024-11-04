FROM node:18-alpine

WORKDIR /app

# Systemabhängigkeiten
RUN apk add --no-cache libc6-compat python3 make g++

# Package-Dateien kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm install

# Quellcode kopieren
COPY . .

# Toast-Komponenten entfernen
RUN rm -f src/components/ui/toast.tsx \
    src/components/ui/toaster.tsx \
    src/components/ui/use-toast.ts \
    src/components/ui/use-toast.tsx

# Entferne oder kommentiere Toast-Imports in Layout aus
RUN if [ -f src/app/layout.tsx ]; then \
    sed -i 's/import.*Toaster.*//g' src/app/layout.tsx && \
    sed -i 's/<Toaster.*\/>//g' src/app/layout.tsx; \
    fi

# Build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Port und Environment
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start
CMD ["npm", "start"]
