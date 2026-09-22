import type { APIRoute } from 'astro'
import { departments } from '../../../data/departments'
import { json, originOf, preflight, serializeDepartment } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request }) => {
  const origin = originOf(request)
  return json(departments.map((department) => serializeDepartment(department, origin)))
}

export const OPTIONS: APIRoute = preflight
