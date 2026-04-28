# Origami — Deployment Guide

Production deployment on Hetzner (or any Ubuntu/Debian VPS) via GitHub Actions
SSH push. The Next.js frontend builds **on the server** — `.next/` is never
committed to git.

---

## Architecture at a glance

```
┌────────────────────────────────────────────────┐
│  GitHub repo (main branch)                     │
└──────────────────┬─────────────────────────────┘
                   │  push to main
                   ▼
┌────────────────────────────────────────────────┐
│  GitHub Actions  (.github/workflows/deploy.yml)│
│  → SSH into Hetzner, run ~/public_html/deploy.sh│
└──────────────────┬─────────────────────────────┘
                   ▼
┌────────────────────────────────────────────────┐
│  Hetzner server (~/public_html/)               │
│  ├─ git pull                                   │
│  ├─ frontend → yarn install + yarn build       │
│  ├─ backend  → pip install                     │
│  └─ pm2 reload (or systemctl restart)          │
└────────────────────────────────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────────────┐
│  Nginx / Caddy                                 │
│  ├─ origami.dev          → frontend :6010      │
│  └─ origami.dev/api/*    → backend  :8001      │
└────────────────────────────────────────────────┘
```

- **Frontend**: Next.js 14, runs on port **6010**
- **Backend**: FastAPI, runs on port **8001**
- **Reverse proxy**: Nginx terminates HTTPS; routes `/api/*` to backend, everything else to frontend

---

## One-time server setup

### 1. SSH in, install runtimes

```bash
ssh root@your-hetzner-ip

# Node 20 (LTS) via NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm install 20
nvm alias default 20

# Yarn
npm install -g yarn pm2

# Python 3.11
sudo apt update
sudo apt install -y python3.11 python3.11-venv python3-pip git nginx
```

### 2. Set up SSH access for GitHub Actions

On your **local machine**:

```bash
ssh-keygen -t ed25519 -C "github-actions-origami" -f ~/.ssh/origami_deploy -N ""
# Copy the public key to the server
ssh-copy-id -i ~/.ssh/origami_deploy.pub root@your-hetzner-ip
# Print the private key — you'll paste it into GitHub secrets in step 4
cat ~/.ssh/origami_deploy
```

### 3. Clone the repo on the server

```bash
ssh root@your-hetzner-ip
cd ~
git clone git@github.com:YOUR_ORG/origami.git public_html
# (or HTTPS clone if you prefer — both work)
cd public_html
chmod +x deploy.sh
```

### 4. Add GitHub repo secrets

GitHub → repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Value |
|---|---|
| `HETZNER_HOST` | Your server IP or `origami.dev` |
| `HETZNER_USER` | `root` (or your deploy user) |
| `HETZNER_SSH_KEY` | Full contents of `~/.ssh/origami_deploy` (private key) |

### 5. Create env files on the server (NEVER commit these)

#### `~/public_html/frontend/.env`

```bash
# Same-origin: Nginx routes /api/* to the backend, so frontend uses relative URLs
NEXT_PUBLIC_BACKEND_URL=

# Production canonical URL — used by sitemap.xml, robots.txt and metadata
NEXT_PUBLIC_SITE_URL=https://origami.dev

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=origami.dev
NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.io/js/script.js
```

#### `~/public_html/backend/.env`

```bash
# Mongo (if/when used — backend has a stub today)
MONGO_URL=mongodb://localhost:27017
DB_NAME=origami

# Resend — contact form delivery
# Get from https://resend.com/api-keys
RESEND_API_KEY=re_your_real_key_here

# Sender — must be from a domain verified in your Resend dashboard
# Until you verify origami.dev, use 'onboarding@resend.dev' (Resend testing sender)
SENDER_EMAIL=noreply@origami.dev

# Where the contact form delivers to
RECIPIENT_EMAIL=hello@origami.dev
```

> **Important — Resend testing mode**: until you verify `origami.dev` at
> https://resend.com/domains, Resend will only deliver emails to the
> account-owner email address. Verify the domain (4 DNS records) before
> going live.

### 6. Run the first build manually (sanity check)

```bash
cd ~/public_html
./deploy.sh
```

If everything installs and builds clean, move on. If it fails, fix on the
server first — don't push broken stuff through the pipeline.

### 7. Set up PM2 to keep both processes alive

Create `~/public_html/ecosystem.config.js`:

```javascript
module.exports = {
  apps: [
    {
      name: "origami-frontend",
      cwd: "./frontend",
      script: "yarn",
      args: "prod",             // runs `next start -p 6010 -H 0.0.0.0` (uses .next build output)
      env: { NODE_ENV: "production", PORT: "6010" },
      max_memory_restart: "1G",
    },
    {
      name: "origami-backend",
      cwd: "./backend",
      script: "uvicorn",
      args: "server:app --host 0.0.0.0 --port 8001 --workers 2",
      interpreter: "python3.11",
      max_memory_restart: "512M",
    },
  ],
};
```

Then:

```bash
cd ~/public_html
pm2 start ecosystem.config.js
pm2 save
pm2 startup            # follow the printed instructions to enable on reboot
pm2 status             # both processes should be 'online'
```

### 8. Configure Nginx

Create `/etc/nginx/sites-available/origami.dev`:

```nginx
# Redirect www → apex
server {
    listen 80;
    listen [::]:80;
    server_name www.origami.dev;
    return 301 https://origami.dev$request_uri;
}

server {
    listen 80;
    listen [::]:80;
    server_name origami.dev;

    client_max_body_size 10M;

    # Backend API
    location /api/ {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Next.js frontend (everything else)
    location / {
        proxy_pass http://127.0.0.1:6010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/origami.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 9. Add HTTPS with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d origami.dev -d www.origami.dev
# Cert auto-renews via the certbot.timer systemd service
```

---

## Day-to-day workflow

```bash
# Local
git add .
git commit -m "feat: …"
git push origin main
```

GitHub Actions watches `main`, SSHes into Hetzner, runs `deploy.sh`. Watch
the run in **GitHub → Actions** tab. Typical run takes 60–120 seconds.

### What `deploy.sh` does on each push

1. `git fetch && git reset --hard origin/main` — wipes any server-local edits
2. `unset NODE_ENV` then `yarn install --frozen-lockfile --production=false` — installs **all** deps (including Tailwind/PostCSS, which Next needs at build time)
3. `yarn build` — produces `.next/` on the server
4. `pip install -r backend/requirements.txt`
5. `pm2 reload` — zero-downtime restart of both processes

---

## Rollback

```bash
ssh root@your-hetzner-ip
cd ~/public_html
git log --oneline -10                    # find the commit you want
git reset --hard <commit-sha>
./deploy.sh
```

---

## Common issues

| Symptom | Fix |
|---|---|
| `Module parse failed: Unexpected character '@'` in globals.css | `tailwindcss`/`postcss` not installed — make sure they're in **`dependencies`** (not devDependencies), and `deploy.sh` uses `--production=false` |
| 502 Bad Gateway from Nginx | One of the PM2 processes crashed. `pm2 logs origami-frontend` / `pm2 logs origami-backend` |
| Contact form returns 500 | Resend domain not verified yet → check `RECIPIENT_EMAIL` matches the Resend account owner email until DNS is set up |
| GitHub Action says "Permission denied (publickey)" | The private key in `HETZNER_SSH_KEY` doesn't match a public key in `~/.ssh/authorized_keys` on the server, **or** the user (`HETZNER_USER`) is wrong |
| Sitemap shows `https://origami.dev/...` in preview/staging | Set `NEXT_PUBLIC_SITE_URL` correctly in that environment's `.env` |
| `pm2 reload` exits non-zero | Run `pm2 start ecosystem.config.js` once first, then `pm2 save` |

---

## Useful commands on the server

```bash
# Tail logs
pm2 logs origami-frontend --lines 100
pm2 logs origami-backend  --lines 100

# Status
pm2 status

# Restart manually
pm2 restart origami-frontend
pm2 restart origami-backend

# Disk usage of build artifacts
du -sh ~/public_html/frontend/.next ~/public_html/frontend/node_modules

# Manual deploy (skips GitHub Actions)
cd ~/public_html && ./deploy.sh
```

---

## Files in this repo that matter for deployment

| File | Purpose |
|---|---|
| `.github/workflows/deploy.yml` | GitHub Actions trigger |
| `deploy.sh` | Server-side build + restart script |
| `frontend/package.json` | Node deps + build scripts (port **6010**) |
| `frontend/.gitignore` | Excludes `.next/`, `node_modules`, `.env` |
| `frontend/postcss.config.js` | Tailwind/PostCSS pipeline config |
| `backend/server.py` | FastAPI app (`/api/health`, `/api/enquiry`) |
| `backend/requirements.txt` | Python deps |
| `DEPLOYMENT.md` | This file |

Never commit: `.env`, `.next/`, `node_modules/`.
