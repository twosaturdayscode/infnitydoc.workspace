import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{html,ts,tsx}', './src/components/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans],
      },
      colors: {
        'brand': '#04B8AD',
        'brand.secondary': '#3F9282',
        'primary': '#1c1917',
        'secondary': '#a8a29e',
        'muted': '#d6d3d1',
        'border': '#e7e5e4',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
