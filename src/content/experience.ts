export interface ExperienceGroup {
  heading: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  summary: string
  groups: ExperienceGroup[]
  tech: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}

export const experience: ExperienceEntry = {
  company: 'SEMOS CLOUD',
  role: 'Fullstack Software Engineer',
  period: 'Jan 2024 - Present',
  summary:
    'I build and maintain a production enterprise HR SaaS platform integrated with SAP SuccessFactors HCM, working from database internals and backend services through to the portals people use.',
  groups: [
    {
      heading: 'Selected work',
      items: [
        'Design Node.js and Express services and REST APIs in a multi-tenant, microservice-oriented architecture, powering data synchronization, scheduled jobs, media handling, notification pipelines, and HR automation.',
        'Plan schemas, stored procedures, functions, indexes, and tuned queries across SAP HANA and MS SQL datasets with tables containing millions of rows, processing HR data through SQL, JSON, and XML.',
        'Build Angular and TypeScript admin and employee portals with guarded routing, lazy-loaded modules, reusable components, session handling, service workers, and Capacitor mobile initialization.',
        'Deliver compensation and benefit workflows, dynamic documents, transactional email, SMS, push notifications, real-time communication, and engagement tracking across complex HR processes.',
        'Develop AI-assisted survey generation and automated reporting for employee feedback, alongside MCP-based AI tooling integrated into backend workflows.',
        'Manage 6+ development, test, production, and client environments across SAP BTP and Cloud Foundry, support Azure storage workflows, and mentor 4 interns and junior developers through planning, code reviews, and technical guidance.',
      ],
    },
  ],
  tech: ['Node.js', 'Express', 'Angular', 'TypeScript', 'SAP HANA', 'MS SQL', 'SAP BTP', 'Cloud Foundry', 'Azure'],
}

export const education: EducationEntry = {
  degree: 'Bachelor of Science in Software Engineering and Information Technologies',
  institution: 'Faculty of Computer Science and Engineering, Ss. Cyril and Methodius University',
  period: 'Oct 2020 - Jun 2024',
}
