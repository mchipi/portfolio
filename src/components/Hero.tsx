import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content/profile'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? undefined : { opacity: 0, y: 12 }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-4rem)] flex items-center py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-utility text-eyebrow uppercase tracking-[0.12em] text-plum mb-5"
        >
          {profile.eyebrow}
        </motion.p>

        <h1 id="hero-heading" className="font-display text-opener md:text-hero text-ink max-w-4xl">
          <motion.span
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            className="block"
          >
            {profile.name}
          </motion.span>
        </h1>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.28 }}
          className="font-display text-2xl md:text-4xl leading-tight text-plum mt-4 max-w-5xl"
        >
          <span className="block md:inline">Software Engineer and</span>{' '}
          <span className="block whitespace-nowrap md:inline">Maker of Useful Things</span>
        </motion.p>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="font-body text-standfirst text-ink/90 max-w-measure mt-5"
        >
          {profile.standfirst}
        </motion.p>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.52 }}
          className="flex flex-wrap items-center gap-5 mt-9"
        >
          <a
            href={profile.primaryCta.href}
            className="inline-flex items-center bg-accent text-ink font-utility text-sm uppercase tracking-[0.08em] px-6 py-3 rounded-[6px] hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            {profile.primaryCta.label}
          </a>
          <a
            href={profile.secondaryCta.href}
            className="font-utility text-sm uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-ink transition-colors duration-150"
          >
            {profile.secondaryCta.label}
          </a>
        </motion.div>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="font-utility text-xs uppercase tracking-[0.08em] text-ink/70 mt-10"
        >
          {profile.socials.map((social, i) => (
            <span key={social.label}>
              <a
                href={social.href}
                className="hover:text-accent-ink transition-colors duration-150"
                {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {social.label}
              </a>
              {i < profile.socials.length - 1 && <span className="mx-3 text-ink/40">.</span>}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}
