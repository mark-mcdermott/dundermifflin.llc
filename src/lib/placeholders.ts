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
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="${color}"/>
  <circle cx="200" cy="150" r="70" fill="#ffffff" fill-opacity="0.18"/>
  <path d="M60 400c0-90 62-150 140-150s140 60 140 150z" fill="#ffffff" fill-opacity="0.18"/>
  <text x="200" y="228" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="140" font-weight="bold" fill="#ffffff">${escapeXml(initials)}</text>
  <text x="200" y="372" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-size="22" letter-spacing="4" fill="#ffffff" fill-opacity="0.8">DUNDER MIFFLIN</text>
</svg>`
}

/** Landscape group-photo stand-in with the photo's title. */
export function photoPlaceholder(title: string, slug: string, count: number): string {
  const color = PALETTE[hash(slug) % PALETTE.length]
  const heads = Array.from({ length: Math.min(count, 12) }, (_, index) => {
    const x = 70 + (index % 6) * 112
    const y = index < 6 ? 170 : 300
    return `<circle cx="${x}" cy="${y}" r="34" fill="#ffffff" fill-opacity="0.22"/><path d="M${x - 58} ${y + 120}c0-50 26-82 58-82s58 32 58 82z" fill="#ffffff" fill-opacity="0.22"/>`
  }).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="${color}"/>
  <rect width="800" height="500" fill="url(#g)"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/><stop offset="1" stop-color="#000000" stop-opacity="0.25"/></linearGradient></defs>
  ${heads}
  <text x="400" y="70" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="bold" fill="#ffffff">${escapeXml(title)}</text>
  <text x="400" y="470" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-size="22" letter-spacing="4" fill="#ffffff" fill-opacity="0.8">DUNDER MIFFLIN PAPER COMPANY</text>
</svg>`
}
