# dundermifflin.llc

**Stack:** AWR — Astro · tailWind · Resend. Astro 7 on Vercel, static pages plus on-demand `/api/*` endpoints. No React, no database. Resend only sends the contact form.

Commit: gitmoji · Automerge: off

## What this is

A free placeholder-data API and its marketing site, styled like a 2006 corporate website. People, departments,
branches and group photos from a fictional paper company, served as JSON with open CORS and no API key.
Production origin is `https://dundermifflin.llc`; the API lives under `/api`.

## Layout

- `src/data/` — the roster. `people.ts`, `departments.ts`, `branches.ts`, `photos.ts`. Ids and slugs are stable; append, never renumber.
- `src/lib/api.ts` — serializers, response helpers (`json`, `svg`, `notFound`, `badRequest`, `preflight`), filters. Every endpoint goes through these so CORS and cache headers stay uniform.
- `src/lib/images.ts` — resolves a person or photo to a real file in `public/` or the generated SVG placeholder.
- `src/lib/placeholders.ts` — the SVG stand-ins.
- `src/pages/api/**` — endpoints. Each exports `prerender = false`, a `GET`, and `OPTIONS = preflight`. The exception is `contact.ts`: POST only, same-origin only, no CORS, sends through Resend.
- `src/pages/*.astro` — prerendered site pages. `src/layouts/Layout.astro` owns the masthead, nav and footer.
- `src/styles/global.css` — Tailwind v4 theme tokens plus the retro component classes (`.panel`, `.nav`, `.hero`, `.link-list`, ...). Prefer those classes over ad-hoc utilities so the chrome stays consistent.
- `integrations/image-manifest.mjs` — reads `public/avatars`, `public/photos`, `public/img` at startup into `virtual:image-manifest`.

## Images

Drop files in and restart `pnpm dev`; the manifest is read once at startup.

- `public/avatars/<slug>.png` — square headshots, 250×250. Slug is the person's `slug` in `people.ts` (e.g. `michael-scott.png`). jpg/webp also accepted. People without a file are commented out in `people.ts`; uncomment when it lands.
- `public/photos/<slug>.jpg` — group photos, 800×500. Slugs: `team-scranton`, `team-everyone`, `department-<dept-slug>`.
- `public/img/hero-dwight.jpg` — home-page hero (about 600×500, portrait crop, face upper-centre).
- `public/img/world-map.png` — faded map behind the masthead; optional, transparent PNG.

Anything missing falls back to a generated SVG at the same dimensions, so the site never shows a broken image.
Live at https://dundermifflin.llc (apex primary, www redirects); Vercel deploys from `main`.

## Env

`RESEND_API_KEY` (server secret, declared in `astro.config.mjs` under `env.schema`, read via `astro:env/server`).
Local copy comes from `vercel env pull` into `.env.local`, which is gitignored. `hello@dundermifflin.llc` is a
Namecheap forwarder to the owner's inbox; Resend is verified on the domain with sending only.

## Verify loop

```bash
pnpm check   # astro check (types + templates)
pnpm build   # full build incl. Vercel output
pnpm dev     # http://localhost:4321
```

Smoke-test the API after changes: `curl -s localhost:4321/api/people/1`, `.../api/people?department=sales&limit=2`,
`.../api/people/random?count=3`, `.../api/departments/accounting`, `.../api/avatars/pam-beesly.svg`.

## Setup TODO

- [ ] Remaining headshots, hero, masthead art and group photos: tracked in `README.md` → TODO.
- [ ] `RESEND_API_KEY` on Vercel (all environments) and `vercel env pull` locally. Until then the contact form answers 503.
