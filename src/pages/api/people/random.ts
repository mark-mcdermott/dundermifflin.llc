import type { APIRoute } from 'astro'
import { findBranch } from '../../../data/branches'
import { findDepartment } from '../../../data/departments'
import { badRequest, filterPeople, json, MAX_LIMIT, originOf, parseCount, preflight, serializePerson, shuffle } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request, url }) => {
  const department = url.searchParams.get('department')
  const branch = url.searchParams.get('branch')
  if (department && !findDepartment(department)) return badRequest(`Unknown department "${department}". See /api/departments.`)
  if (branch && !findBranch(branch)) return badRequest(`Unknown branch "${branch}". See /api/branches.`)

  const count = parseCount(url.searchParams.get('count'), MAX_LIMIT)
  if (count === null) return badRequest('count must be a non-negative integer.')

  const origin = originOf(request)
  const picks = shuffle(filterPeople({ department, branch })).slice(0, count ?? 1)
  const payload = picks.map((person) => serializePerson(person, origin))

  return json(count === undefined ? (payload[0] ?? null) : payload, { cache: 'none' })
}

export const OPTIONS: APIRoute = preflight
