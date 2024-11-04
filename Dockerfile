FROM node:18-alpine

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache libc6-compat python3 make g++

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm ci
RUN npm install @radix-ui/react-dialog @radix-ui/react-toast @radix-ui/react-icons @radix-ui/react-slot @radix-ui/react-dropdown-menu \
    class-variance-authority clsx tailwind-merge lucide-react \
    --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
