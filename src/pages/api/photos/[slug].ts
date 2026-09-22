import type { APIRoute } from 'astro'
import { findPhoto, picturedPeople } from '../../../data/photos'
import { json, notFound, originOf, preflight, redirect, serializePhoto, svg } from '../../../lib/api'
import { photoPath } from '../../../lib/images'
import { photoPlaceholder } from '../../../lib/placeholders'

export const prerender = false

/**
 * /api/photos/{slug}      → JSON record for the photo
 * /api/photos/{slug}.svg  → generated placeholder image
 * /api/photos/{slug}.jpg  → redirect to the best available image
 */
export const GET: APIRoute = ({ params, request }) => {
  const raw = params.slug ?? ''
  const match = raw.match(/^(.+?)\.(svg|jpe?g|png|webp)$/i)
  const slug = match?.[1] ?? raw
  const extension = match?.[2]?.toLowerCase()

  const photo = findPhoto(slug)
  if (!photo) return notFound(`No photo "${slug}". See /api/photos.`)

  if (extension === 'svg') return svg(photoPlaceholder(photo.title, photo.slug, picturedPeople(photo).length))
  if (extension) return redirect(`${originOf(request)}${photoPath(photo.slug)}`)
  return json(serializePhoto(photo, originOf(request)))
}

export const OPTIONS: APIRoute = preflight
