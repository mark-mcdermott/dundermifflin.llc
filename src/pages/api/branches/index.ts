import type { APIRoute } from 'astro'
import { branches } from '../../../data/branches'
import { json, originOf, preflight, serializeBranch } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ request }) => {
  const origin = originOf(request)
  return json(branches.map((branch) => serializeBranch(branch, origin)))
}

export const OPTIONS: APIRoute = preflight
