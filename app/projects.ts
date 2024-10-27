

export interface Project {
  name: string
  path: string
  startYear: number
  endYear: number
  role: string
}

const projects = [
  {
    name: 'Deliverable',
    path: 'deliverable',
    startYear: 2023,
    endYear: 2024,
    role: 'Founding Engineer (Fullstack)'
  },
  {
    name: 'HomeLister',
    path: 'homelister',
    startYear: 2019,
    endYear: 2023,
    role: 'Engineering Lead (Fullstack)'
  },
  {
    name: 'BuildStream',
    path: 'buildstream',
    startYear: 2019,
    endYear: 2019,
    role: 'Sole Frontend Developer',
  },
  {
    name: 'Advance Auto Parts',
    path: 'advance-auto-parts',
    startYear: 2019,
    endYear: 2019,
    role: 'Sole Mobile Developer',
  },
  {
    name: 'Hero Traveler',
    path: 'hero-traveler',
    startYear: 2018,
    endYear: 2019,
    role: 'Lead Fullstack Engineer',
  },
]

export default projects
