import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../content/profile'
import { Annotation } from './Annotation'

const headlineLines = ['Good software is a problem', 'solved twice', '— once for the machine, once for the person using it.']

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? undefined : { opacity: 0, y: 12 }

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-utility text-eyebrow uppercase tracking-[0.12em] text-plum mb-6"
        >
          {profile.eyebrow}
        </motion.p>

        <h1 id="hero-heading" className="font-display text-hero text-ink max-w-5xl">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
              className="block"
            >
              {line === 'solved twice' ? (
                <span className="relative inline-block">
                  {line}
                  <Annotation
                    variant="underline"
                    delay={0.7}
                    className="absolute left-0 -bottom-1 md:-bottom-2 w-full h-4 md:h-5"
                  />
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          className="font-display italic text-signature text-plum mt-6"
        >
          — {profile.signature}
        </motion.p>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className="font-body text-standfirst text-ink/90 max-w-measure mt-6"
        >
          {profile.standfirst}
        </motion.p>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-wrap items-center gap-6 mt-10"
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
          transition={{ duration: 0.5, delay: 0.85 }}
          className="font-utility text-xs uppercase tracking-[0.08em] text-ink/70 mt-14"
        >
          {profile.socials.map((social, i) => (
            <span key={social.label}>
              <a
                href={social.href}
                className="hover:text-accent-ink transition-colors duration-150"
                {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {social.label}
              </a>
              {i < profile.socials.length - 1 && <span className="mx-3 text-ink/40">·</span>}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}
