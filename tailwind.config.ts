import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'neutral-dark': 'hsl(var(--color-neutral-dark) / <alpha-value>)',
        'neutral-light': 'hsl(var(--color-neutral-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
        serif: ['var(--font-family-serif)'],
      },
    },
  },
  plugins: [],
}
export default config
