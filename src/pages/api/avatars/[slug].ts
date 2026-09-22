import type { APIRoute } from 'astro'
import { findPerson } from '../../../data/people'
import { notFound, originOf, preflight, svg } from '../../../lib/api'
import { avatarPath } from '../../../lib/images'
import { avatarPlaceholder } from '../../../lib/placeholders'

export const prerender = false

/**
 * /api/avatars/{slug}      → redirect to the best available headshot (stable URL for <img src>)
 * /api/avatars/{slug}.svg  → generated initials placeholder
 * /api/avatars/{slug}.jpg  → same redirect, for callers that want an extension
 */
export const GET: APIRoute = ({ params, request }) => {
  const raw = params.slug ?? ''
  const match = raw.match(/^(.+?)\.(svg|jpe?g|png|webp)$/i)
  const slug = match?.[1] ?? raw
  const extension = match?.[2]?.toLowerCase()

  const person = findPerson(slug)
  if (!person) return notFound(`No person "${slug}". See /api/people.`)

  if (extension === 'svg') return svg(avatarPlaceholder(`${person.firstName} ${person.lastName}`, person.slug))
  return Response.redirect(`${originOf(request)}${avatarPath(person.slug)}`, 302)
}

export const OPTIONS: APIRoute = preflight
