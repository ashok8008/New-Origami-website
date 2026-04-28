#!/usr/bin/env bash
# Hetzner deploy script for Origami (Next.js + FastAPI)
# Place at: ~/public_html/deploy.sh on the Hetzner server
# Make executable: chmod +x ~/public_html/deploy.sh
#
# Triggered by .github/workflows/deploy.yml on every push to main.

set -euo pipefail

echo "==> [$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy start"

# ---- 0. Force a clean install env -----------------------------------------
# NODE_ENV must NOT be 'production' during install — otherwise yarn skips
# devDependencies and the Tailwind/PostCSS pipeline can't compile globals.css.
unset NODE_ENV

# ---- 1. Pull latest code ---------------------------------------------------
git fetch --all
git reset --hard origin/main
git clean -fd
echo "==> Code synced to $(git rev-parse --short HEAD)"

# ---- 2. Frontend (Next.js) -------------------------------------------------
cd frontend

# Wipe caches that survive across commits — guarantees a clean build
echo "==> Cleaning stale build artifacts"
rm -rf .next node_modules/.cache

echo "==> Installing frontend deps (production=false to keep dev tooling)"
yarn install --frozen-lockfile --production=false

echo "==> Building Next.js (produces .next/ on the server)"
yarn build

# Sanity check — fail loudly if .next is missing
if [ ! -f .next/BUILD_ID ]; then
    echo "!! .next/BUILD_ID not found — build did not complete cleanly. Aborting."
    exit 1
fi
echo "==> Build OK — BUILD_ID: $(cat .next/BUILD_ID)"

# ---- 3. Backend (FastAPI) --------------------------------------------------
cd ../backend
echo "==> Installing backend deps"
python3 -m pip install --quiet --upgrade pip
python3 -m pip install --quiet -r requirements.txt

# ---- 4. Restart services (production mode) --------------------------------
# IMPORTANT: pm2 must run `yarn prod` (which is `next start`), NOT `yarn start`.
# `next start` serves the pre-built .next/ output and never touches Tailwind
# at runtime. `next dev` compiles on demand and is fragile in production.
cd ..

echo "==> Restarting services with pm2"
pm2 reload ecosystem.config.js --update-env || {
    echo "pm2 reload failed; trying restart"
    pm2 restart ecosystem.config.js --update-env || {
        echo "pm2 restart failed; falling back to systemctl"
        sudo systemctl restart origami-frontend origami-backend
    }
}

echo "==> [$(date -u +'%Y-%m-%dT%H:%M:%SZ')] Deploy done ✓"
