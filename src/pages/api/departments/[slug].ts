import type { APIRoute } from 'astro'
import { findDepartment } from '../../../data/departments'
import { json, notFound, originOf, preflight, serializeDepartment } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ params, request }) => {
  const department = findDepartment(params.slug ?? '')
  if (!department) return notFound(`No department "${params.slug}". See /api/departments.`)
  return json(serializeDepartment(department, originOf(request), true))
}

export const OPTIONS: APIRoute = preflight
