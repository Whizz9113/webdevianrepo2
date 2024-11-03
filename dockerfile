FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
LABEL coolify.deploymentId=occs8cg0kog80s4gkssg8kcs

# Kopiere die gebaute Next.js Anwendung
COPY --from=og40c0o8gw04g8g8cks0oc8g:70879e5f3ab7e02e4c17cd44dff7064ac37b82f0-build /app/.next/standalone /app/
COPY --from=og40c0o8gw04g8g8cks0oc8g:70879e5f3ab7e02e4c17cd44dff7064ac37b82f0-build /app/.next/static /app/.next/static
COPY --from=og40c0o8gw04g8g8cks0oc8g:70879e5f3ab7e02e4c17cd44dff7064ac37b82f0-build /app/public /app/public

# Installiere Node.js
RUN apk add --no-cache nodejs

# Kopiere nginx Konfiguration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Kopiere und bereite start Script vor
COPY ./start.sh /start.sh
RUN chmod +x /start.sh

# Setze Umgebungsvariablen
ENV NODE_ENV=production
ENV PORT=3000

# Exponiere Port
EXPOSE 80

# Health Check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl --fail http://localhost/health || exit 1

# Starte die Anwendung
CMD ["/start.sh"]
