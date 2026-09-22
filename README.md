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

Headshots live in `public/avatars/<person-slug>.png` (250×250). Group photos go in `public/photos/<photo-slug>.jpg`
(800×500), the hero in `public/img/hero-dwight.jpg` and the masthead art in `public/img/world-map.png`. Restart the
dev server after adding files; anything missing falls back to a generated SVG placeholder.

## TODO

Headshots still needed, as `public/avatars/<slug>.png` at 250×250. Each of these people is commented out in
`src/data/people.ts` until their file lands; uncomment the line to bring them back.

- [ ] `roy-anderson` — Roy Anderson, Warehouse Worker
- [ ] `holly-flax` — Holly Flax, Human Resources Representative
- [ ] `jan-levinson` — Jan Levinson, Vice President, Northeast Sales
- [ ] `david-wallace` — David Wallace, Chief Financial Officer
- [ ] `karen-filippelli` — Karen Filippelli, Regional Manager
- [ ] `josh-porter` — Josh Porter, Regional Manager
- [ ] `todd-packer` — Todd Packer, Traveling Sales Representative
- [ ] `charles-miner` — Charles Miner, Vice President, Northeast
- [ ] `gabe-lewis` — Gabe Lewis, Coordinating Director of Emerging Regions
- [ ] `jo-bennett` — Jo Bennett, Chief Executive Officer, Sabre
- [ ] `robert-california` — Robert California, Chief Executive Officer
- [ ] `nellie-bertram` — Nellie Bertram, Special Projects Manager
- [ ] `deangelo-vickers` — Deangelo Vickers, Regional Manager
- [ ] `clark-green` — Clark Green, Customer Service Representative
- [ ] `pete-miller` — Pete Miller, Customer Service Representative
- [ ] `cathy-simms` — Cathy Simms, Temp
- [ ] `val-johnson` — Val Johnson, Warehouse Foreman
- [ ] `nate-nickerson` — Nate Nickerson, Warehouse Worker
- [ ] `madge-madsen` — Madge Madsen, Warehouse Worker
- [ ] `lonny-collins` — Lonny Collins, Warehouse Worker
- [ ] `jerry-dicanio` — Jerry DiCanio, Warehouse Worker
- [ ] `jordan-garfield` — Jordan Garfield, Executive Assistant

Other images, all optional until they exist (generated SVG stand-ins are served meanwhile):

- [ ] `public/img/world-map.png` — faded art behind the masthead, transparent PNG
- [ ] `public/photos/<slug>.jpg` — group photos at 800×500: `team-scranton`, `team-everyone`, `department-<slug>`

## Not affiliated

Unofficial fan project. Not affiliated with NBCUniversal or *The Office*. All contact details in the data are fictional.
