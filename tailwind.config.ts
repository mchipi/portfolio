import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7E1C9',
        ink: '#273222',
        accent: '#EA973B',
        lilac: '#CBBFD3',
        plum: '#683651',
        olive: '#68660F',
        // Accent darkened with ink — for text on paper, where pure accent
        // fails WCAG AA contrast (~1.8:1). Pure accent stays reserved for
        // backgrounds, strokes, and decoration lines.
        'accent-ink': '#755A2C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'serif'],
        body: ['"Source Serif 4"', 'ui-serif', 'serif'],
        utility: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 1.5rem + 5vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        opener: ['clamp(2.25rem, 1.25rem + 3vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        poster: ['clamp(2rem, 1rem + 6vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        signature: ['1.5rem', { lineHeight: '1.3' }],
        standfirst: ['1.125rem', { lineHeight: '1.65' }],
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      maxWidth: {
        measure: '68ch',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
