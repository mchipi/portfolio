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
}

export const experience: ExperienceEntry = {
  company: 'Semos Cloud',
  role: 'Fullstack Software Engineer',
  period: 'Jan 2024 - Present',
  summary:
    'I work across a production HR SaaS platform integrated with SAP SuccessFactors HCM - from database internals to the features users touch.',
  groups: [
    {
      heading: 'Platform & backend',
      items: [
        'Build modular HR platform features: employee self-service, admin workflows, scheduled jobs, transactional messaging, APIs, analytics, and document generation, plus mobile backend services.',
        'Write Node.js services for APIs, scheduled jobs, data sync workflows, notification pipelines, and HR automation logic.',
        'Do database-heavy work on SAP HANA - schema planning, stored procedures, functions, indexing, query tuning, and structured processing of HR data with SQL, JSON, and XML.',
      ],
    },
    {
      heading: 'Product features & integrations',
      items: [
        'Build frequency-based payment logic and compensation and benefit payout workflows.',
        'Ship dynamic document generation, transactional email, SMS, push notifications, and real-time communication.',
        'Integrate with SAP SuccessFactors, Twilio, Unlayer, Gotenberg, Google Analytics, WebSockets, service workers, and cloud storage.',
        'Build engagement analytics - email open, read-through, and link-click tracking, plus GA events.',
        'Work on AI-assisted survey generation and automated reporting for employee feedback and HR reporting.',
      ],
    },
    {
      heading: 'Ownership & people',
      items: [
        'Manage 6+ development, test, production, and client-specific environments on SAP BTP and Cloud Foundry - deployments, release prep, environment configuration, and client instance setup.',
        'Mentor 2 interns and junior developers through task planning, code reviews, debugging support, and technical guidance.',
      ],
    },
  ],
}

export const education =
  'B.Sc. Software Engineering & Information Technologies - Faculty of Computer Science and Engineering (FINKI), Ss. Cyril and Methodius University - 2020-2024'
