# Portfolio (Vite + React + TypeScript)

A modern, accessible, dark-themed portfolio site built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Elegant black & red palette (#0b0b0d, #e01111)
- Fully responsive, accessible (WCAG AA), keyboard-friendly
- Data-driven: all content from `src/data/resume.json`
- Sticky glassy Navbar with scrollspy, mobile drawer
- Animated Hero, particles, CTA
- Projects grid with 3D tilt, modals
- Experience timeline, skills cloud
- Contact form with validation, mailto fallback
- SEO: sensible meta, OG, favicon, robots.txt, sitemap.xml
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90

## Getting Started

```sh
cd frontend
npm install
npm run dev
```

## Deploy to Railway (Static)

1. Create a new **Static** project on Railway.
2. Set **Build Command**: `npm ci && npm run build`
3. Set **Output Directory**: `frontend/dist` (or `dist` if deploying from `frontend/`)
4. **Start Command**: leave empty (Static)
5. If repo root contains `frontend/`, go to Railway → Settings → Root Directory = `frontend`
6. For custom domain: add in Railway UI, set CNAME, and enable HTTPS.
7. For cache headers: use Railway's static settings to set `Cache-Control` headers for assets (e.g., `public, max-age=31536000, immutable` for static assets).
8. **SPA fallback**: In Railway UI, enable "SPA fallback" to `index.html` for client-side routing (like Vercel's `vercel.json` fallback).

## Accessibility & Quality
- Strict TypeScript, ESLint, Prettier
- All components typed, ARIA labels, focus outlines
- No unused deps, clean code, comments for non-obvious logic

---

## Example `resume.json`
See `src/data/resume.json` for a well-commented example schema.
