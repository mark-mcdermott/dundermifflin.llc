import manifest from 'virtual:image-manifest'

const stem = (file: string) => file.replace(/\.[^.]+$/, '')

const avatarFiles = new Map(manifest.avatars.map((file) => [stem(file), file]))
const photoFiles = new Map(manifest.photos.map((file) => [stem(file), file]))
const siteImages = new Set(manifest.img)

/** Path to a person's headshot: the real file if one has been dropped into public/avatars, otherwise a generated placeholder. */
export function avatarPath(slug: string): string {
  const file = avatarFiles.get(slug)
  return file ? `/avatars/${file}` : `/api/avatars/${slug}.svg`
}

/** Path to a group photo: the real file if present in public/photos, otherwise a generated placeholder. */
export function photoPath(slug: string): string {
  const file = photoFiles.get(slug)
  return file ? `/photos/${file}` : `/api/photos/${slug}.svg`
}

export const hasAvatar = (slug: string) => avatarFiles.has(slug)
export const hasPhoto = (slug: string) => photoFiles.has(slug)

/** Whether a site-chrome image (hero, header art) has been dropped into public/img. */
export const hasSiteImage = (file: string) => siteImages.has(file)
