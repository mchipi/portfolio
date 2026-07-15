import { motion } from 'framer-motion'
import type { ExperienceEntry as ExperienceEntryData } from '../content/experience'

interface ExperienceEntryProps {
  entry: ExperienceEntryData
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-measure"
    >
      <header className="mb-6">
        <h3 className="font-display text-2xl md:text-3xl text-ink">
          <span className="block">{entry.company}</span>
          <span className="mt-1 block text-plum">{entry.role}</span>
        </h3>
        <p className="font-utility text-xs uppercase tracking-[0.08em] text-ink/70 mt-2">{entry.period}</p>
      </header>

      <p className="font-body text-standfirst text-ink/90 mb-10">{entry.summary}</p>

      <div className="space-y-8">
        {entry.groups.map((group) => (
          <div key={group.heading}>
            <h4 className="font-utility text-xs uppercase tracking-[0.1em] text-plum mb-3">{group.heading}</h4>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="font-body text-base md:text-[1.0625rem] leading-[1.65] text-ink pl-5 relative">
                  <span className="absolute left-0 top-[0.6em] w-2 h-2 border border-accent rounded-full" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 font-utility text-xs leading-relaxed uppercase tracking-[0.08em] text-ink/65">
        <span className="text-plum">Core stack</span> / {entry.tech.join(' / ')}
      </p>
    </motion.article>
  )
}
