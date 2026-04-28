# Origami Softwares — Company Website

Production-grade Next.js 14 website with a FastAPI backend for the contact
form. **90 URLs** of programmatic SEO surface (services, work, industries,
AI use cases, tech stacks, solutions, comparisons, insights), live on
[origami.dev](https://origami.dev).

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 14 (App Router), Tailwind CSS, lucide-react |
| Backend | FastAPI, Resend (transactional email) |
| Analytics | Plausible (privacy-friendly, no cookie banner) |
| Hosting | Hetzner VPS, PM2, Nginx reverse-proxy, Let's Encrypt |
| CI/CD | GitHub Actions → SSH deploy |

---

## Project structure

```
.
├── .github/workflows/deploy.yml     # CI: SSH into Hetzner on push to main
├── DEPLOYMENT.md                    # Step-by-step server setup + recovery
├── deploy.sh                        # Server-side build/restart script
├── ecosystem.config.js              # PM2 process config (frontend + backend)
├── backend/
│   ├── server.py                    # FastAPI: /api/health + /api/enquiry
│   └── requirements.txt
├── frontend/
│   ├── public/brand/                # Logos and 10 client wordmarks
│   ├── src/
│   │   ├── app/                     # Next.js App Router pages (90 routes)
│   │   │   ├── ai/                  # AI practice + 6 use-case pages
│   │   │   ├── build/               # 12 tech-stack landing pages
│   │   │   ├── compare/             # 6 decision-stage comparisons
│   │   │   ├── industries/          # 7 industry verticals
│   │   │   ├── insights/            # 4 editorial articles
│   │   │   ├── services/            # 8 service detail pages
│   │   │   ├── solutions/           # 23 service × industry combos
│   │   │   ├── work/                # 10 case studies
│   │   │   ├── layout.js, page.js, robots.js, sitemap.js, …
│   │   ├── components/              # SiteHeader, SiteFooter, home/*
│   │   └── lib/content.js           # Single source of truth for all data
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
└── memory/PRD.md                    # Product requirements + changelog
```

---

## Local development

```bash
# Frontend
cd frontend
yarn install
yarn dev         # http://localhost:6010

# Backend (separate terminal)
cd backend
python3 -m pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

Required env files (see `DEPLOYMENT.md` for samples):
- `frontend/.env`
- `backend/.env`

---

## Deployment

See **`DEPLOYMENT.md`** for the full step-by-step. Short version:

```bash
git push origin main
```

GitHub Actions SSHes into Hetzner, runs `deploy.sh`, which pulls, builds,
and zero-downtime-reloads PM2.

---

## Adding new content

Everything is driven by `frontend/src/lib/content.js`. To add a new client,
service, industry, comparison or insight, edit the relevant array and
the corresponding routes + sitemap regenerate automatically.

---

## License

Proprietary — © Origami Softwares.
