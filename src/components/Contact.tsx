import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { Annotation } from './Annotation'
import { profile } from '../content/profile'

export function Contact() {
  const githubLink = profile.socials.find((s) => s.label === 'GitHub')!
  const linkedinLink = profile.socials.find((s) => s.label === 'LinkedIn')!

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Let's talk." />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-body text-standfirst text-ink/90 max-w-measure mb-10"
        >
          Interested in working together or discussing a role — email is the fastest way to reach me.
        </motion.p>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="relative inline-block max-w-full no-underline font-display text-[clamp(1.45rem,7.5vw,3.75rem)] leading-tight tracking-[-0.02em] sm:tracking-normal text-accent-ink hover:text-ink transition-colors duration-150 mb-14 [overflow-wrap:anywhere]"
        >
          {profile.email}
          <Annotation variant="underline" className="absolute left-0 -bottom-2 w-full h-3 md:h-4" />
        </motion.a>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 font-utility text-sm uppercase tracking-[0.08em]">
          <li>
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-accent-ink hover:decoration-accent transition-colors duration-150"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={linkedinLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-accent-ink hover:decoration-accent transition-colors duration-150"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
