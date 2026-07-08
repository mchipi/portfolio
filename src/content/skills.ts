export interface SkillGroupData {
  label: string
  items: string[]
}

export const skillGroups: SkillGroupData[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'C#', 'Python', 'Java', 'Bash'],
  },
  {
    label: 'Frameworks',
    items: ['Node.js', 'Angular', 'RxJS', 'Capacitor', 'React', '.NET Core', 'ASP.NET Core'],
  },
  {
    label: 'Technologies',
    items: [
      'REST APIs',
      'WebSockets',
      'SAP HANA',
      'Docker',
      'Git',
      'CI/CD',
      'JSON',
      'XML',
      'Stored Procedures',
      'Query Optimization',
      'Service Workers',
      'Push Notifications',
      'Email Tracking',
      'Google Analytics',
    ],
  },
  {
    label: 'Cloud',
    items: ['SAP BTP', 'Cloud Foundry', 'AWS', 'Azure'],
  },
  {
    label: 'Practices',
    items: [
      'Database Design',
      'API Design',
      'System Design',
      'Release Management',
      'Multi-Environment Deployments',
      'Agile/Scrum',
      'Code Reviews',
      'Mentoring',
      'AI-Assisted Development Workflows',
    ],
  },
]
