const PALETTE = ['#1a4f9c', '#2d6cb5', '#3b5f8a', '#5a7ca6', '#245a8f', '#4a6f9e', '#1f4a7a', '#6b8bb3']

function hash(input: string): number {
  let value = 0
  for (const char of input) value = (value * 31 + char.charCodeAt(0)) >>> 0
  return value
}

const escapeXml = (text: string) =>
  text.replace(/[<>&'"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char)

/** Square headshot stand-in: initials on a company-blue field. */
export function avatarPlaceholder(name: string, slug: string): string {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const color = PALETTE[hash(slug) % PALETTE.length]
  return `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="${color}"/>
  <circle cx="200" cy="150" r="70" fill="#ffffff" fill-opacity="0.18"/>
  <path d="M60 400c0-90 62-150 140-150s140 60 140 150z" fill="#ffffff" fill-opacity="0.18"/>
  <text x="200" y="228" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="140" font-weight="bold" fill="#ffffff">${escapeXml(initials)}</text>
  <text x="200" y="372" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-size="22" letter-spacing="4" fill="#ffffff" fill-opacity="0.8">DUNDER MIFFLIN</text>
</svg>`
}
