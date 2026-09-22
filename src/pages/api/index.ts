import type { APIRoute } from 'astro'
import { API_VERSION, counts, json, originOf, preflight } from '../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request }) => {
  const origin = originOf(request)
  return json({
    name: 'Dunder Mifflin API',
    tagline: 'People. Paper. Placeholder Data.',
    version: API_VERSION,
    docs: `${origin}/docs`,
    counts,
    endpoints: {
      people: `${origin}/api/people`,
      person: `${origin}/api/people/{id|slug}`,
      randomPeople: `${origin}/api/people/random?count=3`,
      departments: `${origin}/api/departments`,
      department: `${origin}/api/departments/{slug}`,
      branches: `${origin}/api/branches`,
      branch: `${origin}/api/branches/{slug}`,
      photos: `${origin}/api/photos`,
      photo: `${origin}/api/photos/{slug}`,
      avatar: `${origin}/api/avatars/{slug}`,
    },
  })
}

export const OPTIONS: APIRoute = preflight
