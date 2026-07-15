import { useEffect, useRef, useState } from 'react'
import { profile } from '../content/profile'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const openedWithKeyboard = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const menuEl = menuRef.current
    const focusable = menuEl?.querySelectorAll<HTMLElement>('a[href], button')
    if (openedWithKeyboard.current) {
      focusable?.[0]?.focus()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-200 ${
          scrolled ? 'bg-paper border-b border-ink/15' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#main" className="font-display text-lg md:text-xl text-ink">
            {profile.name}
          </a>

          <ul className="hidden md:flex items-center gap-8 font-utility text-sm uppercase tracking-[0.08em]">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink hover:text-accent-ink transition-colors duration-150">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline text-sm font-utility uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-ink transition-colors duration-150"
          >
            Get in touch
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="md:hidden text-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={(event) => {
              openedWithKeyboard.current = event.detail === 0
              setMenuOpen((v) => !v)
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="20" y2="20" />
                  <line x1="20" y1="6" x2="6" y2="20" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="22" y2="8" />
                  <line x1="4" y1="18" x2="22" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-ink hover:text-accent-ink transition-colors duration-150 focus:outline-none focus-visible:outline-none focus-visible:text-accent-ink focus-visible:underline focus-visible:decoration-accent focus-visible:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-utility text-sm uppercase tracking-[0.08em] text-accent-ink underline underline-offset-4 focus:outline-none focus-visible:outline-none focus-visible:decoration-accent"
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  )
}
