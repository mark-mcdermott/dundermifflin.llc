export interface Branch {
  slug: string
  name: string
  city: string
  state: string
  address: string
  phone: string
}

export const branches: Branch[] = [
  {
    slug: 'scranton',
    name: 'Scranton Branch',
    city: 'Scranton',
    state: 'PA',
    address: '1725 Slough Avenue, Suite 200, Scranton, PA 18505',
    phone: '(570) 555-0100',
  },
  {
    slug: 'stamford',
    name: 'Stamford Branch',
    city: 'Stamford',
    state: 'CT',
    address: '2 Landmark Square, Stamford, CT 06901',
    phone: '(203) 555-0300',
  },
  {
    slug: 'utica',
    name: 'Utica Branch',
    city: 'Utica',
    state: 'NY',
    address: '600 Bleecker Street, Utica, NY 13501',
    phone: '(315) 555-0500',
  },
  {
    slug: 'corporate',
    name: 'Corporate Headquarters',
    city: 'New York',
    state: 'NY',
    address: '1 Dunder Mifflin Plaza, New York, NY 10001',
    phone: '(212) 555-0200',
  },
  {
    slug: 'tallahassee',
    name: 'Sabre Headquarters',
    city: 'Tallahassee',
    state: 'FL',
    address: '3000 Sabre Way, Tallahassee, FL 32301',
    phone: '(850) 555-0400',
  },
]

export function findBranch(slug: string): Branch | undefined {
  return branches.find((branch) => branch.slug === slug)
}
