# Dunder Mifflin API

People. Paper. Placeholder Data.

A free, no-key JSON API of placeholder people (names, emails, titles, departments, bios, headshots, group photos)
from a fictional regional paper company, plus the retro corporate website that documents it.

```bash
curl https://dundermifflin.llc/api/people/1
```

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # types
pnpm build    # production build (Vercel output)
```

Astro 7 + Tailwind v4, deployed on Vercel. Pages are prerendered; `/api/*` endpoints run on demand.

## Endpoints

| Endpoint | Returns |
|---|---|
| `GET /api` | Index and counts |
| `GET /api/people` | All people. `?department=` `?branch=` `?q=` `?limit=` `?offset=` |
| `GET /api/people/{id\|slug}` | One person |
| `GET /api/people/random?count=n` | Random people |
| `GET /api/departments`, `/api/departments/{slug}` | Departments, with people on the detail |
| `GET /api/branches`, `/api/branches/{slug}` | Branches, with people on the detail |
| `GET /api/photos`, `/api/photos/{slug}` | Group photos. `.jpg` redirects to the image, `.svg` is the placeholder |
| `GET /api/avatars/{slug}` | Redirects to the headshot. `.svg` is the placeholder |

Full reference at `/docs`.

## Images

Put real files in `public/avatars/<person-slug>.jpg` (400×400), `public/photos/<photo-slug>.jpg` (800×500),
`public/img/hero-dwight.jpg` and `public/img/world-map.png`, then restart the dev server. Missing files fall back
to generated SVG placeholders.

## Not affiliated

Unofficial fan project. Not affiliated with NBCUniversal or *The Office*. All contact details in the data are fictional.
