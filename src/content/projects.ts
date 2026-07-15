export type PosterTint = 'lilac' | 'olive' | 'plum'
export type ProjectVisual = 'portfolio' | 'apartments' | 'pet-care' | 'events'

export interface ProjectLink {
  kind: 'link'
  label: string
  href: string
}

export interface ProjectStatus {
  kind: 'status'
  label: string
}

export type ProjectAction = ProjectLink | ProjectStatus

export interface Project {
  name: string
  year: string
  dek: string
  description: string
  stack: string[]
  links: ProjectAction[]
  posterTint: PosterTint
  visual: ProjectVisual
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Portfolio Website',
    year: '2026',
    dek: 'Personal Developer Portfolio - Static Editorial Website',
    description:
      'A single-page editorial portfolio built with Vite, React 18, TypeScript, Tailwind CSS, and Framer Motion, using typed content modules, a custom typography and color system, responsive sections, reduced-motion support, and static deployment setup.',
    stack: ['Vite', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [{ kind: 'status', label: 'You are already here' }],
    posterTint: 'plum',
    visual: 'portfolio',
    featured: true,
  },
  {
    name: 'SkopjeApartments.com',
    year: '2025',
    dek: 'Skopje Real Estate Listings - Full Stack App with Data Extraction Pipeline',
    description:
      'A production-grade listings platform deployed on AWS with React and TypeScript, Flask and Python, PostgreSQL, MongoDB, Docker, AWS Lambda, Nginx, and HTTPS. Automated Apache Airflow pipelines scrape, clean, and deduplicate listings from multiple sources, while Google Identity Services and JWT provide secure authentication and session management.',
    stack: ['React', 'TypeScript', 'Flask', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS Lambda', 'Nginx', 'Apache Airflow'],
    links: [{ kind: 'link', label: 'skopjeapartments.com', href: 'https://skopjeapartments.com' }],
    posterTint: 'lilac',
    visual: 'apartments',
    featured: true,
  },
  {
    name: 'PawsyCare',
    year: '2024',
    dek: 'Pet Services - Cross-Platform Mobile App',
    description:
      'A cross-platform Flutter app developed to connect pet owners with veterinarians and groomers, with Firebase-powered appointment scheduling, real-time notifications, and Google Maps location-based services.',
    stack: ['Flutter', 'Firebase', 'Google Maps'],
    links: [{ kind: 'link', label: 'GitHub', href: 'https://github.com/mchipi/PawsyCare' }],
    posterTint: 'olive',
    visual: 'pet-care',
  },
  {
    name: 'FindFun',
    year: '2023',
    dek: 'Event Management Website',
    description:
      'A full-stack event management app built as independent microservices with Spring Boot and Java, React and JavaScript, Leaflet and OpenStreetMap, and PostgreSQL. Every service was containerized with Docker and deployed to Azure Container Registry.',
    stack: ['Spring Boot', 'Java', 'React', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'PostgreSQL', 'Docker', 'Azure'],
    links: [{ kind: 'link', label: 'GitHub', href: 'https://github.com/mchipi/FindFun' }],
    posterTint: 'plum',
    visual: 'events',
  },
]
