// @ts-check
import { defineConfig, envField } from 'astro/config'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import imageManifest from './integrations/image-manifest.mjs'

// Static by default: every page prerenders. Only the /api/* endpoints opt out
// with `export const prerender = false`, so they run as Vercel functions and
// can honour query params (?department=, ?limit=, /random).
export default defineConfig({
  site: 'https://dundermifflin.llc',
  env: {
    schema: {
      // Resend key for the contact form. Optional so the site builds and runs
      // without it; the endpoint answers 503 until it is set.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [sitemap({ filter: (page) => !page.includes('/api/') }), imageManifest()],
  vite: {
    plugins: [tailwindcss()],
  },
})
