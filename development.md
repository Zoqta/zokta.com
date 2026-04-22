## Development & Deployment Guide

This project is now a **Next.js App Router** website with a MongoDB-backed waitlist API and agent discovery endpoints.

---

## Project Structure

```text
zokta.com/
├── app/
│   ├── page.js                     # Main landing page
│   ├── layout.js                   # Metadata + global shell
│   ├── globals.css                 # Design tokens + shared styles
│   ├── robots.js                   # /robots.txt generator
│   ├── sitemap.js                  # /sitemap.xml generator
│   └── api/
│       ├── waitlist/route.js       # POST waitlist endpoint
│       └── markdown-home/route.js  # Markdown endpoint for agents
├── components/                     # Reusable landing page sections
├── lib/
│   ├── mongodb.js                  # MongoDB connection cache
│   └── homeMarkdown.js             # Shared markdown payload
├── middleware.js                   # Accept:text/markdown negotiation for "/"
├── public/.well-known/             # API catalog, agent skills, OAuth, MCP card
├── next.config.mjs                 # Link headers + api-catalog content-type
├── package.json
├── vercel.json
└── .gitignore
```

---

## Motion & accessibility

- **Ambient grid / glow**: Layers use `z-index ≥ 0` inside `.page-shell` so they paint **above** the `html` gradient (fixed layers with negative `z-index` sit behind `body`/canvas and disappear).
- **Reduced motion**: Controlled by the OS/browser setting (**Windows**: Settings → Accessibility → Visual effects → **Animation effects** off; **Chrome DevTools**: `Ctrl+Shift+P` → “Rendering” → **Emulate CSS prefers-reduced-motion: reduce**). On load, `ReducedMotionSync` mirrors that preference to `<html class="reduce-motion">` so animations and button lifts stay in sync.

---

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Validate production build:

```bash
npm run build
npm start
```

---

## MongoDB Configuration

Required environment variable:

- `MONGODB_URI`

Optional:

- `MONGODB_DB_NAME` (default: `zoqta`)
- `MONGODB_WAITLIST_COLLECTION` (default: `waitlist`)

Used by: `app/api/waitlist/route.js`.

---

## Agent Discovery & Compliance

Implemented endpoints/features:

- `/sitemap.xml` (from `app/sitemap.js`)
- `/robots.txt` (from `app/robots.js`)
- `/.well-known/api-catalog`
- `/.well-known/agent-skills/index.json`
- `/.well-known/mcp/server-card.json`
- `/.well-known/openid-configuration`
- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`
- markdown negotiation via `middleware.js` for `Accept: text/markdown`
- markdown endpoint at `/api/markdown-home`
- Link discovery headers on `/` via `next.config.mjs`

---

## Deploy (Vercel)

1. Push to your Git repo.
2. Import project in Vercel.
3. Set environment variables:
   - `MONGODB_URI`
   - optional DB/collection names.
4. Deploy.

No custom build command is needed; Vercel detects Next.js automatically.

