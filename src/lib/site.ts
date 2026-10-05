export const SITE_NAME = 'Dunder Mifflin Paper Company'
export const SITE_TAGLINE = 'People. Paper. Placeholder Data.'
/** The address shown to readers, on contact, privacy and terms. A Namecheap forwarder. */
export const CONTACT_EMAIL = 'hello@dundermifflin.llc'

/**
 * Where the contact form's notification actually lands — deliberately not `CONTACT_EMAIL`.
 *
 * Since 2026-10-05 this site sends through Resend's shared `onboarding@resend.dev` sender,
 * because the free tier's three domain slots went to the apps that need auth mail
 * (frunk.cloud, tova.so, diamondheart.app). That shared sender delivers **only to the
 * address the Resend account is registered under**, so the form cannot post to
 * `hello@dundermifflin.llc` any more, forwarder or not.
 *
 * The public address is unchanged and still reaches a human; only the machine-to-machine
 * hop moved.
 */
export const NOTIFY_EMAIL = 'mark@markmcdermott.io'

export const NAV = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'docs', label: 'Documentation', href: '/docs' },
  { key: 'people', label: 'People', href: '/people' },
  { key: 'examples', label: 'Examples', href: '/examples' },
  { key: 'use-cases', label: 'Use Cases', href: '/use-cases' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const

export type NavKey = (typeof NAV)[number]['key']

export const DOC_LINKS = [
  { label: 'What is the DM API?', href: '/docs#what-is' },
  { label: 'Get Started', href: '/docs#get-started' },
  { label: 'People Endpoint', href: '/docs#people' },
  { label: 'Departments', href: '/docs#departments' },
  { label: 'Photos & Avatars', href: '/docs#photos' },
  { label: 'Example Responses', href: '/docs#responses' },
  { label: 'Terms of Use', href: '/terms' },
]

/** Absolute origin for prerendered pages; falls back to the production domain. */
export const siteOrigin = (site: URL | undefined) => site?.origin ?? 'https://dundermifflin.llc'
