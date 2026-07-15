import { motion } from 'framer-motion'
import type { Project, PosterTint } from '../content/projects'
import { StampTag } from './StampTag'

interface ProjectSpreadProps {
  project: Project
  reverse: boolean
}

const tintClasses: Record<PosterTint, { bg: string; bgHover: string }> = {
  lilac: { bg: 'bg-lilac/40', bgHover: 'group-hover:bg-lilac/65' },
  olive: { bg: 'bg-olive/[0.16]', bgHover: 'group-hover:bg-olive/[0.28]' },
  plum: { bg: 'bg-plum/[0.12]', bgHover: 'group-hover:bg-plum/[0.22]' },
}

function MapPin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  )
}

function Paw({ className = '' }: { className?: string }) {
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

function ProjectVisual({ visual }: Pick<Project, 'visual'>) {
  if (visual === 'portfolio') {
    return (
      <div className="absolute inset-[9%] overflow-hidden rounded-lg border border-plum/25 bg-paper/75 shadow-[5px_7px_0_rgba(104,54,81,0.1)]" aria-hidden="true">
        <div className="flex h-7 items-center gap-1.5 border-b border-plum/15 px-3">
          <i className="h-1.5 w-1.5 rounded-full bg-plum/45" />
          <i className="h-1.5 w-1.5 rounded-full bg-accent" />
          <div className="ml-auto flex gap-2"><i className="h-1 w-8 rounded bg-ink/15" /><i className="h-1 w-6 rounded bg-ink/15" /><i className="h-1 w-8 rounded bg-accent/70" /></div>
        </div>
        <div className="relative h-[calc(100%-1.75rem)] p-4 sm:p-5">
          <div className="font-utility text-[0.42rem] uppercase tracking-widest text-plum">Portfolio / selected work</div>
          <div className="mt-3 space-y-1.5"><div className="h-2.5 w-3/4 rounded bg-ink/75" /><div className="h-2.5 w-1/2 rounded bg-ink/75" /></div>
          <div className="mt-3 h-1.5 w-2/3 rounded bg-plum/30" />
          <div className="mt-5 grid grid-cols-[1.25fr_.75fr] gap-3 border-t border-ink/10 pt-3">
            <div className="space-y-2"><div className="h-1.5 w-full rounded bg-ink/20" /><div className="h-1.5 w-5/6 rounded bg-ink/15" /><div className="h-1.5 w-2/3 rounded bg-ink/15" /><div className="mt-3 h-5 w-16 rounded bg-accent/80" /></div>
            <div className="grid place-items-center rounded bg-lilac/40"><span className="font-display text-2xl text-plum/60">Aa</span></div>
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex gap-2"><i className="h-1 flex-1 rounded bg-plum/20" /><i className="h-1 flex-1 rounded bg-olive/25" /><i className="h-1 flex-1 rounded bg-accent/60" /></div>
        </div>
      </div>
    )
  }

  if (visual === 'pet-care') {
    return (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <Paw className="absolute -left-5 -bottom-4 h-28 w-28 text-olive/10" />
        <div className="absolute left-[12%] top-[18%] w-[38%] rounded-[1.5rem] border border-ink/15 bg-paper/75 p-3 shadow-[4px_6px_0_rgba(39,50,34,0.09)] -rotate-6 transition-transform duration-300 group-hover:-rotate-3">
          <div className="mx-auto mb-3 h-1 w-7 rounded-full bg-ink/20" />
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-olive/20"><Paw className="h-5 w-5 text-olive" /></div>
            <div className="space-y-1"><div className="h-1.5 w-12 rounded bg-ink/60" /><div className="h-1 w-8 rounded bg-ink/20" /></div>
          </div>
          <div className="mt-4 rounded-lg border border-olive/20 bg-paper/70 p-2"><div className="mb-2 h-1.5 w-16 rounded bg-olive/60" /><div className="h-8 rounded bg-olive/10" /></div>
        </div>
        <div className="absolute right-[12%] top-[10%] w-[42%] rounded-[1.5rem] border border-ink/15 bg-[#f4d9bb] p-3 shadow-[4px_6px_0_rgba(39,50,34,0.09)] rotate-3 transition-transform duration-300 group-hover:rotate-1">
          <div className="mx-auto mb-3 h-1 w-7 rounded-full bg-ink/20" />
          <div className="font-utility text-[0.5rem] uppercase tracking-wide text-olive">Book care</div>
          <div className="mt-2 space-y-2">
            {['Veterinarian', 'Groomer'].map((label) => <div key={label} className="rounded-md bg-paper/70 p-2"><div className="h-1.5 w-14 rounded bg-ink/50" /><div className="mt-1 font-utility text-[0.4rem] text-ink/50">{label}</div></div>)}
          </div>
          <div className="mt-2 flex items-center gap-1 text-olive"><MapPin className="h-3 w-3" /><div className="h-1 w-12 rounded bg-olive/35" /></div>
        </div>
        <div className="absolute bottom-[13%] right-[8%] rounded-full border border-olive/25 bg-paper px-3 py-2 font-utility text-[0.5rem] uppercase tracking-wide text-olive shadow-sm">Appointment confirmed</div>
      </div>
    )
  }

  if (visual === 'events') {
    return (
      <div className="absolute inset-[9%] overflow-hidden rounded-lg border border-plum/25 bg-paper/65 shadow-[5px_7px_0_rgba(104,54,81,0.1)]" aria-hidden="true">
        <div className="flex h-7 items-center gap-1.5 border-b border-plum/15 px-3"><i className="h-1.5 w-1.5 rounded-full bg-plum/50" /><i className="h-1.5 w-1.5 rounded-full bg-accent" /><div className="ml-2 h-2 w-2/5 rounded bg-plum/10" /></div>
        <div className="p-3 sm:p-4">
          <div className="mb-3 flex gap-1.5">{['Today', 'Music', 'Art'].map((item) => <span key={item} className="rounded-full border border-plum/20 px-2 py-1 font-utility text-[0.42rem] uppercase text-plum">{item}</span>)}</div>
          <div className="grid grid-cols-[1.2fr_.8fr] gap-3">
            <div className="grid grid-cols-2 gap-2">{[0, 1, 2, 3].map((item) => <div key={item} className="rounded border border-plum/15 bg-plum/[0.06] p-2"><div className="mb-2 h-8 rounded bg-plum/10" /><div className="h-1.5 w-3/4 rounded bg-plum/50" /><div className="mt-1.5 h-1 w-1/2 rounded bg-plum/20" /></div>)}</div>
            <div className="relative min-h-24 rounded border border-plum/15 bg-[#dfc3c1]/60"><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(35deg,transparent_48%,#683651_49%,#683651_51%,transparent_52%)] [background-size:35px_35px]" />{['left-1/4 top-1/4', 'right-1/4 top-1/2', 'left-1/2 bottom-1/4'].map((pos) => <MapPin key={pos} className={`absolute ${pos} h-4 w-4 text-plum`} />)}</div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 opacity-40"><i className="h-2 w-2 rounded-full bg-plum" /><i className="h-px w-5 bg-plum" /><i className="h-2 w-2 rounded-full bg-plum" /><i className="h-px w-5 bg-plum" /><i className="h-2 w-2 rounded-full bg-plum" /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-[9%] overflow-hidden rounded-lg border border-plum/20 bg-paper/70 shadow-[5px_7px_0_rgba(104,54,81,0.09)]" aria-hidden="true">
      <div className="flex h-7 items-center gap-1.5 border-b border-plum/15 px-3"><i className="h-1.5 w-1.5 rounded-full bg-plum/40" /><i className="h-1.5 w-1.5 rounded-full bg-accent" /><div className="ml-2 h-2 w-2/5 rounded bg-plum/10" /></div>
      <div className="p-3 sm:p-4">
        <div className="flex gap-2"><div className="h-7 flex-1 rounded border border-plum/15 bg-paper px-2 py-1.5"><div className="h-1.5 w-2/3 rounded bg-ink/20" /></div><div className="grid h-7 w-14 place-items-center rounded bg-plum font-utility text-[0.45rem] uppercase text-paper">Search</div></div>
        <div className="mt-3 grid grid-cols-[.65fr_1.35fr] gap-3">
          <div className="space-y-2 rounded border border-plum/15 p-2"><div className="font-utility text-[0.45rem] uppercase text-plum">Filters</div>{[1, 2, 3].map((item) => <div key={item} className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm border border-plum/30" /><i className="h-1 w-2/3 rounded bg-ink/15" /></div>)}</div>
          <div className="space-y-2">{[0, 1].map((item) => <div key={item} className="flex gap-2 rounded border border-plum/15 bg-lilac/20 p-2"><div className="h-11 w-14 rounded bg-plum/15" /><div className="flex-1"><div className="flex justify-between"><i className="h-1.5 w-3/5 rounded bg-ink/50" /><span className="text-[0.55rem] text-plum">{item ? '♡' : '♥'}</span></div><div className="mt-2 h-1 w-1/2 rounded bg-ink/20" /><div className="mt-2 flex items-center gap-1 font-utility text-[0.4rem] text-plum"><MapPin className="h-2.5 w-2.5" /> listing details</div></div></div>)}</div>
        </div>
        <div className="absolute bottom-3 right-3 rounded-full border border-plum/20 bg-paper px-2 py-1 font-utility text-[0.42rem] uppercase text-plum">2 similar listings grouped</div>
      </div>
    </div>
  )
}

export function ProjectSpread({ project, reverse }: ProjectSpreadProps) {
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
        <div
          className={`relative aspect-[4/5] sm:aspect-[3/2] md:aspect-[4/5] overflow-hidden rounded-sm border border-ink/10 ${tint.bg} ${tint.bgHover} transition-colors duration-200`}
        >
          <ProjectVisual visual={project.visual} />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl text-ink">{project.name}</h3>
          <span className="shrink-0 font-utility text-xs tracking-[0.08em] text-plum">{project.year}</span>
        </div>
        <p className="font-body text-standfirst text-ink/90 mb-5">{project.dek}</p>

        <p className="mb-6 font-body text-base leading-[1.65] text-ink/90">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <StampTag key={tech} label={tech} />
          ))}
        </div>

        {primaryLink && (
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="font-utility text-sm uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-150 hover:text-accent-ink focus-visible:text-accent-ink">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
