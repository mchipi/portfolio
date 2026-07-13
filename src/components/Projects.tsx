import { SectionHeading } from './SectionHeading'
import { ProjectSpread } from './ProjectSpread'
import { projects } from '../content/projects'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading id="projects-heading" eyebrow="Selected projects" title="Built after hours." />

        <div className="space-y-24 md:space-y-36">
          {projects.map((project, i) => (
            <ProjectSpread key={project.name} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
