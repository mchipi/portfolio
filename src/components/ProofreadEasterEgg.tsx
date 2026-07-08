import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const marks = [
  { top: '18%', left: '8%', rotate: -8, kind: 'circle' as const },
  { top: '32%', left: '62%', rotate: 4, kind: 'strike' as const },
  { top: '48%', left: '20%', rotate: -3, kind: 'squiggle' as const },
  { top: '58%', left: '70%', rotate: 6, kind: 'caret' as const },
]

function Mark({ kind, rotate }: { kind: (typeof marks)[number]['kind']; rotate: number }) {
  const common = {
    fill: 'none',
    stroke: '#B3261E',
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (kind === 'circle') {
    return (
      <svg viewBox="0 0 100 50" className="w-24 h-12" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
        <ellipse cx="50" cy="25" rx="44" ry="20" {...common} />
      </svg>
    )
  }
  if (kind === 'strike') {
    return (
      <svg viewBox="0 0 100 20" className="w-28 h-5" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
        <path d="M3,10 C30,4 70,16 97,9" {...common} />
      </svg>
    )
  }
  if (kind === 'squiggle') {
    return (
      <svg viewBox="0 0 100 20" className="w-28 h-5" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
        <path d="M2,12 C12,4 20,18 30,10 C40,2 48,18 58,10 C68,2 76,18 86,10 C92,6 96,8 98,10" {...common} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path d="M20,4 L8,30 M20,4 L32,30" {...common} />
    </svg>
  )
}

export function ProofreadEasterEgg() {
  const [active, setActive] = useState(false)
  const progress = useRef(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI[progress.current]
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === expected) {
        progress.current += 1
        if (progress.current === KONAMI.length) {
          progress.current = 0
          setActive(true)
          window.setTimeout(() => setActive(false), 1800)
        }
      } else {
        progress.current = key === KONAMI[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-x-6 md:inset-x-10 top-24 md:top-32 max-w-6xl mx-auto h-[60vh] pointer-events-none z-50">
          {marks.map((mark, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: mark.top, left: mark.left }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Mark kind={mark.kind} rotate={mark.rotate} />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
