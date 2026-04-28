#!/usr/bin/env bash
# Hetzner deploy script for Origami (Next.js + FastAPI)
# Place at: ~/public_html/deploy.sh on the Hetzner server
# Make executable: chmod +x ~/public_html/deploy.sh
#
# Triggered by .github/workflows/deploy.yml on every push to main.

set -euo pipefail

echo "==> [$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy start"

# ---- 0. Ensure a clean shell ----------------------------------------------
# NODE_ENV must NOT be 'production' during install — otherwise yarn skips
# devDependencies and the Tailwind/PostCSS build pipeline can't compile
# globals.css. We force it for install, then let `next build` pick its own.
unset NODE_ENV

# ---- 1. Pull latest code ---------------------------------------------------
git fetch --all
git reset --hard origin/main
echo "==> Code synced to $(git rev-parse --short HEAD)"

# ---- 2. Frontend (Next.js) -------------------------------------------------
cd frontend
echo "==> Installing frontend deps (incl. dev deps for build)"
yarn install --frozen-lockfile --production=false

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
