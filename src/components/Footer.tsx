import { profile } from '../content/profile'

export function Footer() {
  return (
    <footer className="border-t border-ink/20 mt-24 md:mt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-utility text-sm text-ink">
            {profile.name} - {profile.role}
          </p>

          <ul className="flex items-center gap-6 font-utility text-sm uppercase tracking-[0.06em]">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-ink hover:text-accent-ink transition-colors duration-150"
                  aria-label={social.label}
                  {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
