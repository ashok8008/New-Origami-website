#!/usr/bin/env bash
# Hetzner deploy script for Origami (Next.js + FastAPI)
# Place at: ~/public_html/deploy.sh on the Hetzner server
# Make executable: chmod +x ~/public_html/deploy.sh
#
# Triggered by .github/workflows/deploy.yml on every push to main.

set -euo pipefail

echo "==> [$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy start"

# ---- 1. Pull latest code ---------------------------------------------------
git fetch --all
git reset --hard origin/main
echo "==> Code synced to $(git rev-parse --short HEAD)"

# ---- 2. Frontend (Next.js) -------------------------------------------------
cd frontend
echo "==> Installing frontend deps"
yarn install --frozen-lockfile

echo "==> Building Next.js"
yarn build

# ---- 3. Backend (FastAPI) --------------------------------------------------
cd ../backend
echo "==> Installing backend deps"
python3 -m pip install --quiet --upgrade pip
python3 -m pip install --quiet -r requirements.txt

# ---- 4. Restart services ---------------------------------------------------
# Adjust to your process manager. Examples:
#
#   pm2:        pm2 reload ecosystem.config.js
#   systemd:    sudo systemctl restart origami-frontend origami-backend
#   supervisor: sudo supervisorctl restart frontend backend
#
echo "==> Restarting services"
pm2 reload ecosystem.config.js || {
    echo "pm2 reload failed; falling back to systemctl"
    sudo systemctl restart origami-frontend origami-backend
}

echo "==> [$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy done ✓"
