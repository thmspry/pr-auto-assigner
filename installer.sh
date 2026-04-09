#!/bin/bash

echo ""
echo "=== Repo update (git pull) ==="
git pull || { echo "Erreur git pull"; exit 1; }

echo ""
echo "=== Dependencies updates (npm install) ==="
npm i || { echo "Erreur npm install"; exit 1; }

echo ""
echo "=== Project build (npm run build) ==="
npm run build || { echo "Erreur build"; exit 1; }

echo ""
echo "Extension is updated !"