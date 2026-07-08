export type PosterTint = 'lilac' | 'olive' | 'plum'
export type PosterGlyph = 'map-pin' | 'paw' | 'ampersand'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  name: string
  dek: string
  problem: string
  built: string
  stack: string[]
  links: ProjectLink[]
  posterTint: PosterTint
  posterGlyph: PosterGlyph
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'skopjeapartments.com',
    dek: 'A real-estate listings platform for Skopje, built end to end — including the pipeline that keeps it fed.',
    problem:
      'Apartment listings in Skopje are scattered across sources, duplicated, and go stale fast. Renters and buyers need one clean, current view.',
    built:
      'A cloud-native platform on AWS: an Angular frontend, a Flask API, PostgreSQL and MongoDB, Docker, and an Nginx reverse proxy with HTTPS. Apache Airflow pipelines scrape, clean, and deduplicate listings from multiple sources on a schedule, and Google Identity Services handles auth via JWT sessions.',
    stack: ['Angular', 'TypeScript', 'Flask', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS Lambda', 'Nginx', 'Apache Airflow'],
    links: [{ label: 'Live', href: 'https://www.skopjeapartments.com/' }],
    posterTint: 'lilac',
    posterGlyph: 'map-pin',
    featured: true,
  },
  {
    name: 'PawsyCare',
    dek: 'A cross-platform app connecting pet owners with vets and groomers.',
    problem:
      'Booking a vet or groomer for a pet usually means phone calls and guesswork about availability.',
    built:
      'A Flutter and Firebase app with appointment scheduling, real-time notifications, and Google Maps location features to find and book nearby care.',
    stack: ['Flutter', 'Firebase', 'Google Maps'],
    links: [],
    posterTint: 'olive',
    posterGlyph: 'paw',
  },
  {
    name: 'FindFun',
    dek: 'An event-management site built as a set of small, independent services.',
    problem: 'Discovering and organizing local events needed a platform that could scale each concern independently.',
    built:
      'A Spring Boot and React app with a microservices architecture, Leaflet and OpenStreetMap for event locations, and PostgreSQL for storage — every service containerized with Docker and deployed to Azure Container Registry.',
    stack: ['Spring Boot', 'Java', 'React', 'Leaflet', 'OpenStreetMap', 'PostgreSQL', 'Docker', 'Azure'],
    links: [{ label: 'GitHub', href: 'https://github.com/mchipi/FindFun' }],
    posterTint: 'plum',
    posterGlyph: 'ampersand',
  },
]

// TODO: add link for PawsyCare once it has a public home.
