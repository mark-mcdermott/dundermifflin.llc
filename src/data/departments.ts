export interface Department {
  slug: string
  name: string
  description: string
}

export const departments: Department[] = [
  {
    slug: 'management',
    name: 'Management',
    description: 'Regional leadership for the Scranton branch. Runs the meetings, the morale, and the conference room calendar.',
  },
  {
    slug: 'sales',
    name: 'Sales',
    description: 'The people who actually sell the paper. Phones, quotas, client lunches at Cooper’s.',
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    description: 'Three desks, one adding machine, and every expense report in the building.',
  },
  {
    slug: 'customer-service',
    name: 'Customer Service',
    description: 'First line of defense for late orders, wrong orders, and orders that were technically correct.',
  },
  {
    slug: 'hr',
    name: 'Human Resources',
    description: 'Policy, complaints, and the annex. Reports to corporate, not to the regional manager.',
  },
  {
    slug: 'warehouse',
    name: 'Warehouse',
    description: 'Loading dock, forklifts, and the only part of the building that ships on time.',
  },
  {
    slug: 'reception',
    name: 'Reception',
    description: 'Front desk, switchboard, and the unofficial information hub of the office.',
  },
  {
    slug: 'quality-assurance',
    name: 'Quality Assurance',
    description: 'One person. Nobody is entirely sure what they do. Watermark incidents are handled here.',
  },
  {
    slug: 'supplier-relations',
    name: 'Supplier Relations',
    description: 'Keeps the vendors happy, the truck drivers happier, and the fridge situation tense.',
  },
  {
    slug: 'corporate',
    name: 'Corporate',
    description: 'Executives at headquarters and Sabre. Conference calls, budgets, and surprise visits.',
  },
  {
    slug: 'temp',
    name: 'Temps',
    description: 'Temporary staff. Some stay a week, some end up running the company.',
  },
]

export function findDepartment(slug: string): Department | undefined {
  return departments.find((department) => department.slug === slug)
}
