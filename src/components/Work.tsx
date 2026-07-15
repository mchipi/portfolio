import { SectionHeading } from './SectionHeading'
import { ExperienceEntry } from './ExperienceEntry'
import { experience, education } from '../content/experience'

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-32 bg-lilac/25">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading id="work-heading" eyebrow="Work experience" title="The day job." />

        <ExperienceEntry entry={experience} />

        <section aria-labelledby="education-heading" className="mt-14 max-w-measure border border-ink/15 bg-paper/45 p-5 md:p-6">
          <p className="mb-3 font-utility text-xs uppercase tracking-[0.12em] text-plum">Education</p>
          <h3 id="education-heading" className="font-display text-xl leading-snug text-ink md:text-2xl">
            {education.degree}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink/80 md:text-base">{education.institution}</p>
          <p className="mt-4 font-utility text-xs uppercase tracking-[0.08em] text-ink/65">{education.period}</p>
        </section>
      </div>
    </section>
  )
}
