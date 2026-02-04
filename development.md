## Development & Deployment Guide

This document describes how to develop, run, and deploy the Zoqta marketing site with the MongoDB‑backed waitlist API.

---

## Project Structure

High‑level layout:

```text
zokta.com/
├── index.html          # Main landing page (waitlist form, UI, scripts)
├── api/
│   └── waitlist.js     # Serverless API (Vercel) that writes to MongoDB
├── public/             # Public assets used by the site (favicons, logos)
│   ├── zoqtafinallogo/
│   └── namefinal/
├── backup/             # Backup logo/name assets
├── prompts/            # Internal prompt/planning docs
├── README.md           # High‑level project overview
├── development.md      # This file – dev & deploy notes
├── package.json        # Scripts and dependencies (http-server, mongodb, etc.)
├── package-lock.json
├── vercel.json         # Vercel build & routing config
└── .gitignore
```

Key behavior:

- `index.html` is served as a static site.
- The waitlist form in `index.html` submits to `POST /api/waitlist`.
- `/api/waitlist` (Node serverless function) inserts entries into MongoDB.

---

## Local Development

### 1. Install dependencies

From the project root:

```bash
npm install
```

This installs:

- `http-server` for simple local static hosting
- `mongodb` for the API route (when run on Vercel/Node)

### 2. Run a local static server

You can use the existing npm scripts:

```bash
npm run dev
# or
npm start
```

Then open:

```text
http://localhost:3000
```

Note: the `/api/waitlist` function is intended to run in Vercel’s serverless environment. For full end‑to‑end testing locally, you can:

- Either deploy to a Vercel preview environment (recommended), or
- Run your own small Node server that mounts `api/waitlist.js` (optional, not required for normal workflow).

---

## MongoDB Configuration

The API route `api/waitlist.js` uses environment variables to connect to MongoDB.

Required:

- `MONGODB_URI` – your MongoDB connection string (e.g. from MongoDB Atlas).

Optional (defaults shown):

- `MONGODB_DB_NAME` – database name, default: `zoqta`
- `MONGODB_WAITLIST_COLLECTION` – collection name, default: `waitlist`

### Example document stored in MongoDB

Each waitlist submission is stored roughly as:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "source": "website",
  "status": "pending",
  "created_at": "2025-01-01T12:34:56.789Z"
}
```

---

## Vercel Deployment

The project includes a `vercel.json` that tells Vercel how to build:

- `index.html` → `@vercel/static`
- `api/**/*.js` → `@vercel/node`

### 1. Push code to GitHub (or another Git provider)

If you haven’t yet:

```bash
git init
git add .
git commit -m "Initial Zoqta site with MongoDB waitlist"
git remote add origin https://github.com/yourusername/zoqta-website.git
git push -u origin main
```

### 2. Create / configure the MongoDB database

1. Create a MongoDB Atlas cluster (or use your own MongoDB instance).
2. Create a database (e.g. `zoqta`) and a collection (e.g. `waitlist`).
3. Get your connection string (MongoDB URI).

You do **not** need to pre‑create the collection if your MongoDB setup auto‑creates collections on first insert, but having it created explicitly is clearer.

### 3. Connect the repo to Vercel

1. Go to the Vercel dashboard.
2. “New Project” → import the Git repo.
3. Vercel will detect `vercel.json` and configure:
   - Static build for `index.html`
   - Serverless build for `api/waitlist.js`

### 4. Set environment variables in Vercel

In the Vercel project settings → **Environment Variables**, add:

- `MONGODB_URI` – your connection string
- (Optional) `MONGODB_DB_NAME` – e.g. `zoqta`
- (Optional) `MONGODB_WAITLIST_COLLECTION` – e.g. `waitlist`

Apply to the environments you use (`Preview` and `Production`).

### 5. Deploy

- Trigger a deploy (either automatically on push or manually from Vercel).
- Once deployed, visit your Vercel URL (e.g. `https://your-project.vercel.app`).
- Submit the waitlist form and confirm documents appear in your MongoDB collection.

---

## Notes & Tips

- The frontend is static; all dynamic data (waitlist) goes through `/api/waitlist`.
- If you change the API route path or collection names, update both:
  - The fetch URL in `index.html`.
  - The environment variables and constants in `api/waitlist.js`.
- For production, always keep secrets (MongoDB URI) in Vercel env vars, never in the repo.

