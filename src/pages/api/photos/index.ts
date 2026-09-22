import type { APIRoute } from 'astro'
import { photos } from '../../../data/photos'
import { json, originOf, preflight, serializePhoto } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request }) => {
  const origin = originOf(request)
  return json(photos.map((photo) => serializePhoto(photo, origin)))
}

export const OPTIONS: APIRoute = preflight
