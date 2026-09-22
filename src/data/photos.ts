import { findPerson } from './people'

export interface Photo {
  slug: string
  title: string
  description: string
  /** Everyone in the frame, by slug, including people currently shelved without a headshot. */
  pictured: string[]
  /** Department this photo represents, if it is a department photo. */
  department?: string
}

/**
 * Curated group photos. Add an entry only when a real image exists at public/photos/<slug>.jpg (landscape,
 * about 1200px wide). The API lists only pictured people who are active in people.ts, so shelved people join their
 * photo automatically when their headshot lands.
 */
export const photos: Photo[] = [
  {
    slug: 'team-scranton',
    title: 'The Scranton Branch',
    description: 'The Scranton office on photo day, in the supply room, because the conference room was booked.',
    pictured: [
      'michael-scott',
      'dwight-schrute',
      'jim-halpert',
      'pam-beesly',
      'ryan-howard',
      'angela-martin',
      'kevin-malone',
      'oscar-martinez',
      'stanley-hudson',
      'phyllis-vance',
      'meredith-palmer',
      'creed-bratton',
      'kelly-kapoor',
      'toby-flenderson',
      'jan-levinson',
      'roy-anderson',
    ],
  },
]

export function findPhoto(slug: string): Photo | undefined {
  return photos.find((photo) => photo.slug === slug)
}

export function findDepartmentPhoto(department: string): Photo | undefined {
  return photos.find((photo) => photo.department === department)
}

/** Slugs of pictured people who are currently active. */
export function picturedPeople(photo: Photo): string[] {
  return photo.pictured.filter((slug) => findPerson(slug))
}
