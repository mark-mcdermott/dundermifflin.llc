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
 * Curated group photos. SHELVED: nothing routes, renders or documents these yet. The images live in public/photos/
 * (landscape, about 1200px wide) and each entry names everyone in the frame, shelved people included. The endpoints,
 * docs and UI that exposed them were removed in the commit after 0a8432b; restore from `git show 0a8432b` once every
 * photo has its pictured list.
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
