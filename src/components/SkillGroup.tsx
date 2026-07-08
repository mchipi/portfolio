import { motion } from 'framer-motion'
import type { SkillGroupData } from '../content/skills'
import { StampTag } from './StampTag'

interface SkillGroupProps {
  group: SkillGroupData
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <h3 className="font-utility text-xs uppercase tracking-[0.12em] text-plum mb-4 pb-2 border-b border-ink/15">
        {group.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <StampTag key={item} label={item} />
        ))}
      </div>
    </motion.div>
  )
}
