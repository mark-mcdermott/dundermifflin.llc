import type { APIRoute } from 'astro'
import { findBranch } from '../../../data/branches'
import { json, notFound, originOf, preflight, serializeBranch } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ params, request }) => {
  const branch = findBranch(params.slug ?? '')
  if (!branch) return notFound(`No branch "${params.slug}". See /api/branches.`)
  return json(serializeBranch(branch, originOf(request), true))
}

export const OPTIONS: APIRoute = preflight
