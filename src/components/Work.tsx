import { SectionHeading } from './SectionHeading'
import { ExperienceEntry } from './ExperienceEntry'
import { experience, education } from '../content/experience'

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-32 bg-lilac/25">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading id="work-heading" eyebrow="Work experience" title="The day job." />

        <ExperienceEntry entry={experience} />

        <p className="font-utility text-xs uppercase tracking-[0.08em] text-ink/70 mt-12 pt-8 border-t border-ink/15 max-w-measure">
          {education}
        </p>
      </div>
    </section>
  )
}
