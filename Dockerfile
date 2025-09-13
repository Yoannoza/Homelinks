# Dockerfile pour Homelinks - Interface Maison Connectée
FROM nginx:alpine

# Mettre à jour et installer curl pour les health checks
RUN apk update && apk add --no-cache curl

# Copier les fichiers de l'application web
COPY . /usr/share/nginx/html/

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 4000
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:4000/ || exit 1

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
