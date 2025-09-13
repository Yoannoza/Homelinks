#!/bin/bash
# Production deployment script for Homelinks - Smart Home Interface

set -euo pipefail

echo "🏠 Homelinks - Interface Maison Connectée"
echo "=========================================="
  
# Variables
CONTAINER_NAME="homelinks-app"
IMAGE_NAME="homelinks-frontend"
PORT=4000

echo "� Déploiement de l'interface Homelinks..."

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo "❌ Error: Docker is not running or not accessible"
    exit 1
fi

echo "✅ Docker is running"

# Stop existing container if running
echo "🛑 Stopping existing container..."
if docker ps -q --filter name="$CONTAINER_NAME" | grep -q .; then
    docker stop "$CONTAINER_NAME"
    echo "Container stopped"
fi

if docker ps -aq --filter name="$CONTAINER_NAME" | grep -q .; then
    docker rm "$CONTAINER_NAME"
    echo "Container removed"
fi

# Build new image
echo "🐳 Building Docker image..."
if ! docker build -t "$IMAGE_NAME" .; then
    echo "❌ Error: Docker build failed"
    exit 1
fi

echo "✅ Docker image built successfully"

# Start new container
echo "🚀 Starting Homelinks container..."
if ! docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$PORT:4000" \
  --health-cmd="curl -f http://localhost:4000/health || exit 1" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  --health-start-period=10s \
  "$IMAGE_NAME"; then
    echo "❌ Error: Failed to start container"
    exit 1
fi
 
# Wait for service to be ready
echo "⏳ Waiting for service to start..."
sleep 10

# Health check
echo "🏥 Running health check..."
health_check_url="http://localhost:$PORT/health"

# Health check with retry
attempt=1
max_attempts=6

while [ $attempt -le $max_attempts ]; do
    if curl -f --connect-timeout 5 --max-time 10 "$health_check_url" >/dev/null 2>&1; then
        echo "✅ Service is healthy and running"
        break
    fi
    echo "⏳ Attempt $attempt/$max_attempts - waiting for service..."
    sleep 5
    attempt=$((attempt + 1))
done

# VERIFICATION FINALE
echo ""
echo "🔍 VERIFICATION FINALE..."
DEPLOYMENT_SUCCESS=true

# 1. Vérifier que le container tourne
if ! docker ps --filter name="$CONTAINER_NAME" --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    echo "❌ ECHEC: Container n'est pas en cours d'exécution"
    DEPLOYMENT_SUCCESS=false
else
    echo "✅ Container en cours d'exécution"
fi

# 2. Vérifier que l'application répond
if ! curl -f --connect-timeout 5 --max-time 10 "http://localhost:$PORT/" >/dev/null 2>&1; then
    echo "❌ ECHEC: Application ne répond pas sur le port $PORT"
    DEPLOYMENT_SUCCESS=false
else
    echo "✅ Application répond correctement"
fi

# 3. Vérifier le health status Docker
HEALTH_STATUS=$(docker inspect "$CONTAINER_NAME" --format='{{.State.Health.Status}}' 2>/dev/null || echo "none")
if [ "$HEALTH_STATUS" != "healthy" ] && [ "$HEALTH_STATUS" != "starting" ]; then
    echo "❌ ECHEC: Health check Docker = $HEALTH_STATUS"
    DEPLOYMENT_SUCCESS=false
else
    echo "✅ Health check Docker = $HEALTH_STATUS"
fi

echo "=========================================="

# Résultat final
if [ "$DEPLOYMENT_SUCCESS" = true ]; then
    echo "🎉 DEPLOIEMENT HOMELINKS REUSSI!"
    echo ""
    echo "📊 Container info:"
    docker ps --filter name="$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""
    echo "🏠 Interface Homelinks disponible à:"
    echo "   Local: http://localhost:$PORT"
    echo "   Network: http://$(hostname -I | awk '{print $1}'):$PORT"
    echo ""
    echo "🎛️ Contrôles disponibles:"
    echo "   - Éclairage intelligent"
    echo "   - Détecteurs sensoriels"
    echo "   - Contrôle climatique"
    echo "   - Sécurité des portes"
    echo "   - Commande vocale"
    
    exit 0
else
    echo "❌ DEPLOIEMENT ECHOUE!"
    echo ""
    echo "📋 Container status:"
    docker ps -a --filter name="$CONTAINER_NAME"
    echo ""
    echo "📋 Recent container logs:"
    docker logs "$CONTAINER_NAME" --tail 30 2>/dev/null || echo "Impossible de récupérer les logs"
    echo ""
    
    exit 1
fi