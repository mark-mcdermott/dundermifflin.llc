export interface Person {
  id: number
  slug: string
  firstName: string
  lastName: string
  title: string
  department: string
  branch: string
  extension: string
  bio: string
}

export const people: Person[] = [
  { id: 1, slug: 'michael-scott', firstName: 'Michael', lastName: 'Scott', title: 'Regional Manager', department: 'management', branch: 'scranton', extension: '101', bio: 'World’s best boss, according to a mug he bought himself. Believes every meeting is improved by an impression, and every impression by a longer one.' },
  { id: 2, slug: 'dwight-schrute', firstName: 'Dwight', lastName: 'Schrute', title: 'Assistant to the Regional Manager', department: 'sales', branch: 'scranton', extension: '102', bio: 'Beet farmer, volunteer sheriff’s deputy, and the branch’s top salesman three years running. Will tell you which of those he is proudest of.' },
  { id: 3, slug: 'jim-halpert', firstName: 'Jim', lastName: 'Halpert', title: 'Sales Representative', department: 'sales', branch: 'scranton', extension: '103', bio: 'Salesman with a talent for closing deals and an even greater talent for looking directly into the nearest camera.' },
  { id: 4, slug: 'pam-beesly', firstName: 'Pam', lastName: 'Beesly', title: 'Receptionist', department: 'reception', branch: 'scranton', extension: '100', bio: 'Runs the front desk, the phones, and quietly, most of the office. Draws in her spare time and has plans bigger than the reception area.' },
  { id: 5, slug: 'ryan-howard', firstName: 'Ryan', lastName: 'Howard', title: 'Temp', department: 'temp', branch: 'scranton', extension: '104', bio: 'Started as a temp, briefly ran the company, currently a temp again. Has a business degree and a lot of ideas about synergy.' },
  { id: 6, slug: 'andy-bernard', firstName: 'Andy', lastName: 'Bernard', title: 'Regional Director in Charge of Sales', department: 'sales', branch: 'scranton', extension: '105', bio: 'Cornell graduate (he will mention it) with a sales title he negotiated up himself. Sings a cappella, sometimes on purpose.' },
  { id: 7, slug: 'angela-martin', firstName: 'Angela', lastName: 'Martin', title: 'Head of Accounting', department: 'accounting', branch: 'scranton', extension: '106', bio: 'Keeps the books, the party planning committee, and a firm sense of what is and isn’t appropriate. Cat person.' },
  { id: 8, slug: 'kevin-malone', firstName: 'Kevin', lastName: 'Malone', title: 'Accountant', department: 'accounting', branch: 'scranton', extension: '107', bio: 'Accountant. Numbers are hard, but Kevin is thorough, usually, and his chili is legendary in the parking lot.' },
  { id: 9, slug: 'oscar-martinez', firstName: 'Oscar', lastName: 'Martinez', title: 'Accountant', department: 'accounting', branch: 'scranton', extension: '108', bio: 'The accountant who actually understands the spreadsheet. Patient about it, most of the time.' },
  { id: 10, slug: 'stanley-hudson', firstName: 'Stanley', lastName: 'Hudson', title: 'Sales Representative', department: 'sales', branch: 'scranton', extension: '109', bio: 'Sales veteran counting down to retirement one crossword at a time. Do not schedule anything on Pretzel Day.' },
  { id: 11, slug: 'phyllis-vance', firstName: 'Phyllis', lastName: 'Vance', title: 'Sales Representative', department: 'sales', branch: 'scranton', extension: '110', bio: 'Long-tenured sales rep with a warm smile and an excellent memory for slights. Married to Bob Vance, of Vance Refrigeration.' },
  { id: 12, slug: 'meredith-palmer', firstName: 'Meredith', lastName: 'Palmer', title: 'Supplier Relations Representative', department: 'supplier-relations', branch: 'scranton', extension: '111', bio: 'Handles supplier relations with a personal touch. Has opinions about the office fridge and is always up for a party.' },
  { id: 13, slug: 'creed-bratton', firstName: 'Creed', lastName: 'Bratton', title: 'Quality Assurance Director', department: 'quality-assurance', branch: 'scranton', extension: '112', bio: 'Quality assurance. Nobody is sure what that means, including Creed, and everyone has agreed to leave it there.' },
  { id: 14, slug: 'kelly-kapoor', firstName: 'Kelly', lastName: 'Kapoor', title: 'Customer Service Representative', department: 'customer-service', branch: 'scranton', extension: '113', bio: 'Customer service rep who can talk any customer down and any coworker into hearing about last night’s episode.' },
  { id: 15, slug: 'toby-flenderson', firstName: 'Toby', lastName: 'Flenderson', title: 'Human Resources Representative', department: 'hr', branch: 'scranton', extension: '114', bio: 'Human resources. Wants everyone to have a good day, and is reminded regularly that the regional manager does not feel the same.' },
  { id: 16, slug: 'darryl-philbin', firstName: 'Darryl', lastName: 'Philbin', title: 'Warehouse Foreman', department: 'warehouse', branch: 'scranton', extension: '120', bio: 'Runs the warehouse with more sense than the floor upstairs. Has a plan for moving up and is in no hurry to share it.' },
  { id: 17, slug: 'roy-anderson', firstName: 'Roy', lastName: 'Anderson', title: 'Warehouse Worker', department: 'warehouse', branch: 'scranton', extension: '121', bio: 'Warehouse worker. Lifts heavy things, watches the game, and has a long history with the front desk.' },
  { id: 18, slug: 'erin-hannon', firstName: 'Erin', lastName: 'Hannon', title: 'Receptionist', department: 'reception', branch: 'scranton', extension: '115', bio: 'Receptionist with boundless enthusiasm and an ongoing project to figure out how the phones work. Getting there.' },
  { id: 19, slug: 'holly-flax', firstName: 'Holly', lastName: 'Flax', title: 'Human Resources Representative', department: 'hr', branch: 'scranton', extension: '116', bio: 'HR rep who is a little funnier than she lets on and exactly as kind as she seems.' },
  { id: 20, slug: 'jan-levinson', firstName: 'Jan', lastName: 'Levinson', title: 'Vice President, Northeast Sales', department: 'corporate', branch: 'corporate', extension: '201', bio: 'Vice President of Northeast Sales. Corporate, composed, and somehow always in Scranton on Fridays.' },
  { id: 21, slug: 'david-wallace', firstName: 'David', lastName: 'Wallace', title: 'Chief Financial Officer', department: 'corporate', branch: 'corporate', extension: '200', bio: 'Chief Financial Officer. The calmest voice on any conference call and the one who has to say yes to the budget.' },
  { id: 22, slug: 'karen-filippelli', firstName: 'Karen', lastName: 'Filippelli', title: 'Regional Manager', department: 'management', branch: 'utica', extension: '500', bio: 'Regional Manager at the Utica branch, formerly Stamford sales. Competitive in the way that wins accounts.' },
  { id: 23, slug: 'josh-porter', firstName: 'Josh', lastName: 'Porter', title: 'Regional Manager', department: 'management', branch: 'stamford', extension: '300', bio: 'Regional Manager of the Stamford branch. Runs a tight office and keeps his résumé tighter.' },
  { id: 24, slug: 'todd-packer', firstName: 'Todd', lastName: 'Packer', title: 'Traveling Sales Representative', department: 'sales', branch: 'scranton', extension: '117', bio: 'Traveling sales rep. Almost never in the office, which the office considers ideal.' },
  { id: 25, slug: 'charles-miner', firstName: 'Charles', lastName: 'Miner', title: 'Vice President, Northeast', department: 'corporate', branch: 'corporate', extension: '202', bio: 'Vice President, Northeast. Serious about sales, suspicious of paper airplanes, and genuinely into soccer.' },
  { id: 26, slug: 'gabe-lewis', firstName: 'Gabe', lastName: 'Lewis', title: 'Coordinating Director of Emerging Regions', department: 'corporate', branch: 'tallahassee', extension: '401', bio: 'Coordinating Director of Emerging Regions for Sabre. Tall, earnest, and constantly trying to get everyone to use the new printers.' },
  { id: 27, slug: 'jo-bennett', firstName: 'Jo', lastName: 'Bennett', title: 'Chief Executive Officer, Sabre', department: 'corporate', branch: 'tallahassee', extension: '400', bio: 'Sabre’s CEO. Comes with two Great Danes and a Florida accent that means business.' },
  { id: 28, slug: 'robert-california', firstName: 'Robert', lastName: 'California', title: 'Chief Executive Officer', department: 'corporate', branch: 'scranton', extension: '118', bio: 'Chief Executive Officer. Speaks slowly, reads people quickly, and rarely explains either.' },
  { id: 29, slug: 'nellie-bertram', firstName: 'Nellie', lastName: 'Bertram', title: 'Special Projects Manager', department: 'management', branch: 'scranton', extension: '119', bio: 'Special Projects Manager. Arrived from Sabre, acquired the manager’s chair, and would prefer not to discuss how.' },
  { id: 30, slug: 'deangelo-vickers', firstName: 'Deangelo', lastName: 'Vickers', title: 'Regional Manager', department: 'management', branch: 'scranton', extension: '122', bio: 'Regional Manager, briefly. Loves the American Southwest, juggling, and a dramatic entrance.' },
  { id: 31, slug: 'clark-green', firstName: 'Clark', lastName: 'Green', title: 'Customer Service Representative', department: 'customer-service', branch: 'scranton', extension: '123', bio: 'Customer service rep with an eye on a sales desk. Keeps a suit at the office for when it happens.' },
  { id: 32, slug: 'pete-miller', firstName: 'Pete', lastName: 'Miller', title: 'Customer Service Representative', department: 'customer-service', branch: 'scranton', extension: '124', bio: 'Customer service rep. Steady, friendly, and the only person who has actually read the handbook.' },
  { id: 33, slug: 'cathy-simms', firstName: 'Cathy', lastName: 'Simms', title: 'Temp', department: 'temp', branch: 'scranton', extension: '125', bio: 'Temp covering the front desk. Organized, pleasant, and fully aware of who she is sitting near.' },
  { id: 34, slug: 'val-johnson', firstName: 'Val', lastName: 'Johnson', title: 'Warehouse Foreman', department: 'warehouse', branch: 'scranton', extension: '126', bio: 'Warehouse foreman. Sharp, direct, and the reason the loading dock runs on time.' },
  { id: 35, slug: 'nate-nickerson', firstName: 'Nate', lastName: 'Nickerson', title: 'Warehouse Worker', department: 'warehouse', branch: 'scranton', extension: '127', bio: 'Warehouse worker with big energy and interesting answers. Turn the radio up if he starts singing.' },
  { id: 36, slug: 'madge-madsen', firstName: 'Madge', lastName: 'Madsen', title: 'Warehouse Worker', department: 'warehouse', branch: 'scranton', extension: '128', bio: 'Warehouse. Says little, moves pallets, wins arguments.' },
  { id: 37, slug: 'lonny-collins', firstName: 'Lonny', lastName: 'Collins', title: 'Warehouse Worker', department: 'warehouse', branch: 'scranton', extension: '129', bio: 'Warehouse. Thirty years of experience and a complete lack of patience for upstairs.' },
  { id: 38, slug: 'jerry-dicanio', firstName: 'Jerry', lastName: 'DiCanio', title: 'Warehouse Worker', department: 'warehouse', branch: 'scranton', extension: '130', bio: 'Warehouse. Knows every truck driver in Lackawanna County by name.' },
  { id: 39, slug: 'jordan-garfield', firstName: 'Jordan', lastName: 'Garfield', title: 'Executive Assistant', department: 'management', branch: 'scranton', extension: '131', bio: 'Executive assistant to the regional manager. Hired for reasons, kept for competence.' },
]

export function findPerson(idOrSlug: string): Person | undefined {
  const id = Number(idOrSlug)
  if (Number.isInteger(id)) return people.find((person) => person.id === id)
  return people.find((person) => person.slug === idOrSlug)
}
