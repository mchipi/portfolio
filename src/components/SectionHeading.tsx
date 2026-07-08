import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  id?: string
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-10 md:mb-14"
    >
      <p className="font-utility text-eyebrow uppercase tracking-[0.12em] text-plum mb-3">— {eyebrow}</p>
      <h2 id={id} className="font-display text-opener text-ink">
        {title}
      </h2>
    </motion.div>
  )
}
