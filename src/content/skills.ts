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
    label: 'Frontend',
    items: ['Angular', 'React', 'RxJS', 'Capacitor', 'Tailwind', 'Service Workers'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', '.NET Core', 'ASP.NET Core', 'Flask', 'Spring Boot', 'WebSockets'],
  },
  {
    label: 'Databases',
    items: ['SAP HANA', 'MS SQL', 'PostgreSQL', 'MongoDB', 'Stored Procedures', 'Query Optimization', 'Database Design'],
  },
  {
    label: 'Cloud / DevOps',
    items: ['SAP BTP', 'Cloud Foundry', 'AWS', 'Azure', 'Firebase', 'Docker', 'CI/CD', 'Git', 'Multi-Environment Deployments', 'Release Management'],
  },
  {
    label: 'Integrations / Platform',
    items: ['SAP SuccessFactors', 'Firebase Cloud Messaging', 'Twilio', 'Google Analytics', 'Email Tracking', 'Push Notifications'],
  },
  {
    label: 'Practices',
    items: [
      'API Design',
      'System Design',
      'Agile/Scrum',
      'Code Reviews',
      'Mentoring',
      'AI-Assisted Development Workflows',
    ],
  },
]
