export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  location: string
  eyebrow: string
  headline: string
  headlineEmphasis: string
  signature: string
  standfirst: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  email: string
  socials: SocialLink[]
  footerSignoff: string
}

export const profile: Profile = {
  name: 'Marija Chipishkova',
  role: 'Fullstack Software Engineer',
  location: 'Skopje, North Macedonia',
  eyebrow: 'Fullstack Software Engineer — Skopje',
  headline: 'Good software is a problem solved twice — once for the machine, once for the person using it.',
  headlineEmphasis: 'solved twice',
  signature: 'Marija Chipishkova',
  standfirst:
    'I build and ship a production HR platform end to end — from the database to the screens people use every day. I like the whole stack: the schema design, the API, the interface, and the small decisions in between.',
  primaryCta: { label: 'Read the work ↓', href: '#work' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  email: 'marija@chipishkova.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mchipi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chipishkova' },
    { label: 'Email', href: 'mailto:marija@chipishkova.com' },
  ],
  footerSignoff: 'Set in Fraunces & Source Serif on chai-latte paper. No template was harmed.',
}
