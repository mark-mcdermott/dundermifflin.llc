import { branches, findBranch, type Branch } from '../data/branches'
import { departments, findDepartment, type Department } from '../data/departments'
import { people, type Person } from '../data/people'
import { photos, type Photo } from '../data/photos'
import { avatarPath, photoPath } from './images'

export const API_VERSION = '1'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
}

const CACHE_PUBLIC = 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800'

export interface JsonOptions {
  status?: number
  headers?: Record<string, string>
  cache?: 'public' | 'none'
}

export function json(data: unknown, { status = 200, headers = {}, cache = 'public' }: JsonOptions = {}): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': cache === 'public' ? CACHE_PUBLIC : 'no-store',
      ...CORS_HEADERS,
      ...headers,
    },
  })
}

export function svg(markup: string): Response {
  return new Response(markup, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': CACHE_PUBLIC,
      ...CORS_HEADERS,
    },
  })
}

export function notFound(message: string): Response {
  return json({ error: 'Not Found', message }, { status: 404, cache: 'none' })
}

export function badRequest(message: string): Response {
  return json({ error: 'Bad Request', message }, { status: 400, cache: 'none' })
}

export const preflight = () => new Response(null, { status: 204, headers: CORS_HEADERS })

export const originOf = (request: Request) => new URL(request.url).origin

const email = (person: Person) =>
  `${person.firstName}.${person.lastName}`.toLowerCase().replace(/[^a-z.]/g, '') + '@dundermifflin.llc'

export function serializePerson(person: Person, origin: string) {
  const department = findDepartment(person.department)
  const branch = findBranch(person.branch)
  return {
    id: person.id,
    slug: person.slug,
    name: `${person.firstName} ${person.lastName}`,
    firstName: person.firstName,
    lastName: person.lastName,
    email: email(person),
    title: person.title,
    department: department?.name ?? person.department,
    departmentSlug: person.department,
    branch: branch?.name ?? person.branch,
    branchSlug: person.branch,
    phone: branch ? `${branch.phone} x${person.extension}` : null,
    extension: person.extension,
    bio: person.bio,
    avatar: `${origin}${avatarPath(person.slug)}`,
    url: `${origin}/api/people/${person.id}`,
  }
}

export function serializeDepartment(department: Department, origin: string, includePeople = false) {
  const members = people.filter((person) => person.department === department.slug)
  return {
    slug: department.slug,
    name: department.name,
    description: department.description,
    headcount: members.length,
    photo: `${origin}${photoPath(`department-${department.slug}`)}`,
    url: `${origin}/api/departments/${department.slug}`,
    ...(includePeople ? { people: members.map((person) => serializePerson(person, origin)) } : {}),
  }
}

export function serializeBranch(branch: Branch, origin: string, includePeople = false) {
  const members = people.filter((person) => person.branch === branch.slug)
  return {
    slug: branch.slug,
    name: branch.name,
    city: branch.city,
    state: branch.state,
    address: branch.address,
    phone: branch.phone,
    headcount: members.length,
    url: `${origin}/api/branches/${branch.slug}`,
    ...(includePeople ? { people: members.map((person) => serializePerson(person, origin)) } : {}),
  }
}

export function serializePhoto(photo: Photo, origin: string) {
  return {
    slug: photo.slug,
    title: photo.title,
    description: photo.description,
    headcount: photo.people.length,
    people: photo.people.map((slug) => `${origin}/api/people/${slug}`),
    image: `${origin}${photoPath(photo.slug)}`,
    url: `${origin}/api/photos/${photo.slug}`,
  }
}

export interface PeopleQuery {
  department?: string | null
  branch?: string | null
  q?: string | null
}

export function filterPeople({ department, branch, q }: PeopleQuery): Person[] {
  const needle = q?.trim().toLowerCase()
  return people.filter((person) => {
    if (department && person.department !== department) return false
    if (branch && person.branch !== branch) return false
    if (needle) {
      const haystack = `${person.firstName} ${person.lastName} ${person.title}`.toLowerCase()
      if (!haystack.includes(needle)) return false
    }
    return true
  })
}

export const MAX_LIMIT = 100

/** Parses a positive integer query param, clamped to [1, max]. Returns undefined when absent, null when malformed. */
export function parseCount(raw: string | null, max: number): number | null | undefined {
  if (raw === null || raw === '') return undefined
  const value = Number(raw)
  if (!Number.isInteger(value) || value < 0) return null
  return Math.min(value, max)
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swap]] = [copy[swap]!, copy[index]!]
  }
  return copy
}

export const counts = {
  people: people.length,
  departments: departments.length,
  branches: branches.length,
  photos: photos.length,
}
