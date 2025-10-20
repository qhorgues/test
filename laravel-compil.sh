#!/bin/bash

# ===============================
# Build & Deploy Package Generator
# ===============================

# === CONFIGURATION ===
DEPLOY_DIR="deploy"                 # Dossier de sortie
ENV_FILE=".env"                     # Fichier .env pour PROD
NPM_CMD="bun"                       # Remplace par "yarn" ou "pnpm" si besoin
# ===============================

echo "Génération du package de déploiement Laravel Inertia React"

# 1. Nettoyage du dossier deploy
rm -rf $DEPLOY_DIR
mkdir $DEPLOY_DIR

# 2. Installer dépendances PHP pour production
echo "Installation des dépendances PHP (production)"
composer install --no-dev --optimize-autoloader || { echo ":x: Composer failed"; exit 1; }

# 3. Installer dépendances JS + Build
echo "Installation des dépendances NPM + build React"
$NPM_CMD install || { echo ":x: NPM/Yarn install failed"; exit 1; }
$NPM_CMD run build || { echo ":x: JS build failed"; exit 1; }

# 4. Caches Laravel
echo "Optimisation Laravel"
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 5. Copier les fichiers nécessaires dans deploy/
echo "Préparation du dossier deploy/"
rsync -av --exclude=node_modules --exclude=.git --exclude=tests \
    --exclude=.env --exclude=storage/logs --exclude=storage/framework/sessions \
    --exclude=$DEPLOY_DIR \
    ./ $DEPLOY_DIR/

# 6. Copier vendor et build
cp -r vendor $DEPLOY_DIR/
cp -r public/build $DEPLOY_DIR/public/

# 7. Ajouter .env.production
if [ -f "$ENV_FILE" ]; then
    cp $ENV_FILE $DEPLOY_DIR/.env
    echo ".env de production ajouté"
else
    echo "Aucun fichier $ENV_FILE trouvé. Pense à en créer un !"
fi

# 8. Donner les droits à storage
chmod -R 775 $DEPLOY_DIR/storage
chmod -R 775 $DEPLOY_DIR/bootstrap/cache

echo "Package prêt à être envoyé dans $DEPLOY_DIR/"
echo "Upload FTP: envoyer tout le contenu de $DEPLOY_DIR/ sur ton serveur mutualisé"
echo "Déploiement terminé !"
