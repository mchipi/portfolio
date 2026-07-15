interface StampTagProps {
  label: string
}

export function StampTag({ label }: StampTagProps) {
  return (
    <span
      className="inline-block bg-paper border border-ink/70 px-2.5 py-1 font-utility text-[0.6875rem] uppercase tracking-[0.06em] text-ink"
    >
      {label}
    </span>
  )
}
