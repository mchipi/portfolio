function rotationFor(label: string): number {
  let hash = 0
  for (let i = 0; i < label.length; i++) {
    hash = (hash << 5) - hash + label.charCodeAt(i)
    hash |= 0
  }
  const normalized = (Math.abs(hash) % 21) / 10 - 1 // -1.0 .. 1.0
  return normalized
}

interface StampTagProps {
  label: string
}

export function StampTag({ label }: StampTagProps) {
  const rotation = rotationFor(label)

  return (
    <span
      className="inline-block bg-paper border border-ink/70 px-2.5 py-1 font-utility text-[0.6875rem] uppercase tracking-[0.06em] text-ink"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {label}
    </span>
  )
}
