import type { APIRoute } from 'astro'
import { findBranch } from '../../../data/branches'
import { findDepartment } from '../../../data/departments'
import { badRequest, filterPeople, json, MAX_LIMIT, originOf, parseCount, preflight, serializePerson } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request, url }) => {
  const department = url.searchParams.get('department')
  const branch = url.searchParams.get('branch')
  const q = url.searchParams.get('q')

  if (department && !findDepartment(department)) return badRequest(`Unknown department "${department}". See /api/departments.`)
  if (branch && !findBranch(branch)) return badRequest(`Unknown branch "${branch}". See /api/branches.`)

  const limit = parseCount(url.searchParams.get('limit'), MAX_LIMIT)
  const offset = parseCount(url.searchParams.get('offset'), Number.MAX_SAFE_INTEGER)
  if (limit === null) return badRequest('limit must be a non-negative integer.')
  if (offset === null) return badRequest('offset must be a non-negative integer.')

  const matches = filterPeople({ department, branch, q })
  const start = offset ?? 0
  const page = matches.slice(start, limit === undefined ? undefined : start + limit)
  const origin = originOf(request)

  return json(
    page.map((person) => serializePerson(person, origin)),
    { headers: { 'X-Total-Count': String(matches.length) } },
  )
}

export const OPTIONS: APIRoute = preflight
