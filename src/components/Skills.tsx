import { SectionHeading } from './SectionHeading'
import { SkillGroup } from './SkillGroup'
import { skillGroups } from '../content/skills'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 md:py-32 bg-lilac/25">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="The toolbox." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
