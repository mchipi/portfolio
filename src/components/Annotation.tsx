import { motion, useReducedMotion } from 'framer-motion'

export type AnnotationVariant = 'underline' | 'circle' | 'arrow' | 'asterisk'

interface AnnotationProps {
  variant: AnnotationVariant
  className?: string
  delay?: number
}

const specs: Record<
  AnnotationVariant,
  { viewBox: string; paths: string[]; strokeWidth: number; preserveAspectRatio: string }
> = {
  underline: {
    viewBox: '0 0 300 24',
    paths: ['M4,14 C48,22 92,6 138,13 C182,20 240,4 296,12'],
    strokeWidth: 6,
    preserveAspectRatio: 'none',
  },
  circle: {
    viewBox: '0 0 140 70',
    paths: [
      'M64,6 C34,3 9,17 7,35 C5,53 27,66 58,66 C93,66 130,54 132,33 C134,15 105,3 74,5 C71,5.3 67,5.6 64,6',
    ],
    strokeWidth: 4,
    preserveAspectRatio: 'none',
  },
  arrow: {
    viewBox: '0 0 90 100',
    paths: ['M8,8 C24,28 33,50 44,80', 'M44,80 L27,70', 'M44,80 L39,60'],
    strokeWidth: 4,
    preserveAspectRatio: 'xMidYMid meet',
  },
  asterisk: {
    viewBox: '0 0 40 40',
    paths: ['M20,4 L20,36', 'M6,12 L34,28', 'M34,12 L6,28'],
    strokeWidth: 3.5,
    preserveAspectRatio: 'xMidYMid meet',
  },
}

export function Annotation({ variant, className, delay = 0 }: AnnotationProps) {
  const spec = specs[variant]
  const reduceMotion = useReducedMotion()

  return (
    <svg
      viewBox={spec.viewBox}
      preserveAspectRatio={spec.preserveAspectRatio}
      className={className}
      fill="none"
      stroke="#EA973B"
      strokeWidth={spec.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {spec.paths.map((d, i) =>
        reduceMotion ? (
          <path key={i} d={d} />
        ) : (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: delay + i * 0.15 }}
          />
        )
      )}
    </svg>
  )
}
