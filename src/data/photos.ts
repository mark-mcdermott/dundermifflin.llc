import { departments } from './departments'
import { people } from './people'

export interface Photo {
  slug: string
  title: string
  description: string
  people: string[]
}

const scranton = people.filter((person) => person.branch === 'scranton')

const featured: Photo[] = [
  {
    slug: 'team-scranton',
    title: 'The Scranton Branch',
    description: 'The whole Scranton office, or at least everyone who showed up on photo day.',
    people: scranton.map((person) => person.slug),
  },
  {
    slug: 'team-everyone',
    title: 'Dunder Mifflin, Company-Wide',
    description: 'Every branch, corporate, and Sabre in one frame. Somebody blinked.',
    people: people.map((person) => person.slug),
  },
]

const byDepartment: Photo[] = departments.map((department) => ({
  slug: `department-${department.slug}`,
  title: department.name,
  description: `The ${department.name} team, Scranton branch and beyond.`,
  people: people.filter((person) => person.department === department.slug).map((person) => person.slug),
}))

export const photos: Photo[] = [...featured, ...byDepartment]

export function findPhoto(slug: string): Photo | undefined {
  return photos.find((photo) => photo.slug === slug)
}
