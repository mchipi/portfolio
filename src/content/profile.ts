export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  eyebrow: string
  headline: string
  standfirst: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  email: string
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Marija Chipishkova',
  role: 'Software Engineer',
  eyebrow: 'Building useful digital products',
  headline: 'Software Engineer and Maker of Useful Things',
  standfirst:
    'I build thoughtful digital products with clean architecture, careful details, and a bias toward things people actually enjoy using.',
  primaryCta: { label: 'Read the work', href: '#work' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  email: 'marija@chipishkova.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mchipi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chipishkova' },
    { label: 'Email', href: 'mailto:marija@chipishkova.com' },
  ],
}
