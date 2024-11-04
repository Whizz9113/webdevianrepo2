FROM ghcr.io/railwayapp/nixpacks:ubuntu-1725321821

WORKDIR /app/

COPY .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix

RUN nix-env -if .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix && nix-collect-garbage -d

RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget

# dependencies phase
COPY package*.json /app/
RUN --mount=type=cache,id=d0k00skck8g84kg0040s4ks0-/root/npm,target=/root/.npm npm install --legacy-peer-deps
RUN npm install react-icons next-themes

# build phase
COPY . /app/.
RUN --mount=type=cache,id=d0k00skck8g84kg0040s4ks0-next/cache,target=/app/.next/cache --mount=type=cache,id=d0k00skck8g84kg0040s4ks0-node_modules/cache,target=/app/node_modules/.cache npm run build

# production phase
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
