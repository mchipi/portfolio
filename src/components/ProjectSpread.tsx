import { motion } from 'framer-motion'
import type { Project, PosterTint } from '../content/projects'
import { StampTag } from './StampTag'
import { Annotation } from './Annotation'

interface ProjectSpreadProps {
  project: Project
  reverse: boolean
  annotateStart?: boolean
}

const tintClasses: Record<PosterTint, { bg: string; bgHover: string; glyph: string }> = {
  lilac: { bg: 'bg-lilac/40', bgHover: 'group-hover:bg-lilac/65', glyph: 'text-plum/70' },
  olive: { bg: 'bg-olive/[0.16]', bgHover: 'group-hover:bg-olive/[0.28]', glyph: 'text-olive/70' },
  plum: { bg: 'bg-plum/[0.12]', bgHover: 'group-hover:bg-plum/[0.22]', glyph: 'text-plum/70' },
}

function PosterGlyph({ glyph, className }: { glyph: Project['posterGlyph']; className?: string }) {
  if (glyph === 'ampersand') {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        <text
          x="50"
          y="78"
          textAnchor="middle"
          fontSize="110"
          fill="currentColor"
          fontFamily="Fraunces, ui-serif, serif"
        >
          &amp;
        </text>
      </svg>
    )
  }

  if (glyph === 'map-pin') {
    return (
      <svg viewBox="0 0 64 80" className={className} aria-hidden="true" fill="currentColor">
        <path d="M32 2C16.5 2 4 14.5 4 30c0 21 28 48 28 48s28-27 28-48C60 14.5 47.5 2 32 2zm0 39a11 11 0 1 1 0-22 11 11 0 0 1 0 22z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="50" cy="66" rx="20" ry="17" />
      <ellipse cx="22" cy="38" rx="10" ry="13" transform="rotate(-18 22 38)" />
      <ellipse cx="46" cy="24" rx="10" ry="13" />
      <ellipse cx="70" cy="30" rx="10" ry="13" transform="rotate(14 70 30)" />
      <ellipse cx="82" cy="52" rx="9" ry="12" transform="rotate(35 82 52)" />
    </svg>
  )
}

export function ProjectSpread({ project, reverse, annotateStart }: ProjectSpreadProps) {
  const tint = tintClasses[project.posterTint]
  const primaryLink = project.links[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`group grid md:grid-cols-2 gap-8 md:gap-14 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="relative">
        {annotateStart && (
          <div className="hidden md:flex absolute -left-16 top-6 flex-col items-center text-plum">
            <Annotation variant="arrow" className="w-10 h-12" />
            <span className="font-utility text-[0.65rem] uppercase tracking-[0.08em] -rotate-6 mt-1">start here</span>
          </div>
        )}
        <div
          className={`relative aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5] overflow-hidden rounded-sm border border-ink/10 ${tint.bg} ${tint.bgHover} transition-colors duration-200`}
        >
          <PosterGlyph
            glyph={project.posterGlyph}
            className={`absolute -right-3 -bottom-3 w-24 h-24 md:w-32 md:h-32 ${tint.glyph} transition-transform duration-200 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5`}
          />
          <span className="absolute inset-0 flex items-center p-6 md:p-8">
            <span className="font-display text-poster text-ink break-all min-w-0 block">{project.name}</span>
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">{project.name}</h3>
        <p className="font-body text-standfirst text-ink/90 mb-5">{project.dek}</p>

        <div className="space-y-3 mb-6 font-body text-base text-ink/90">
          <p>
            <span className="font-utility text-[0.7rem] uppercase tracking-[0.08em] text-plum mr-2">The problem</span>
            {project.problem}
          </p>
          <p>
            <span className="font-utility text-[0.7rem] uppercase tracking-[0.08em] text-plum mr-2">What I built</span>
            {project.built}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <StampTag key={tech} label={tech} />
          ))}
        </div>

        {primaryLink ? (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-utility text-sm uppercase tracking-[0.08em] text-accent-ink hover:text-ink transition-colors duration-150"
          >
            {primaryLink.label}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        ) : (
          <p className="font-utility text-xs uppercase tracking-[0.08em] text-ink/50">// TODO: add link</p>
        )}
      </div>
    </motion.article>
  )
}
