import type { APIRoute } from 'astro'
import { findPerson } from '../../../data/people'
import { json, notFound, originOf, preflight, serializePerson } from '../../../lib/api'

export const prerender = false

export const GET: APIRoute = ({ params, request }) => {
  const person = findPerson(params.id ?? '')
  if (!person) return notFound(`No person with id or slug "${params.id}". See /api/people.`)
  return json(serializePerson(person, originOf(request)))
}

export const OPTIONS: APIRoute = preflight
