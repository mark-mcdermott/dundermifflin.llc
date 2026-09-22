export const SITE_NAME = 'Dunder Mifflin Paper Company'
export const SITE_TAGLINE = 'People. Paper. Placeholder Data.'
export const CONTACT_EMAIL = 'hello@dundermifflin.llc'

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
