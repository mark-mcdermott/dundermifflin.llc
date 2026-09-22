// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import imageManifest from './integrations/image-manifest.mjs'

// Static by default: every page prerenders. Only the /api/* endpoints opt out
// with `export const prerender = false`, so they run as Vercel functions and
// can honour query params (?department=, ?limit=, /random).
export default defineConfig({
  site: 'https://dundermifflin.llc',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [sitemap({ filter: (page) => !page.includes('/api/') }), imageManifest()],
  vite: {
    plugins: [tailwindcss()],
  },
})
