import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  presets: [require('./src/styles/animations.preset')],
  content: ['./app/**/*.{html,ts,tsx}', './src/components/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', ...fontFamily.sans],
      },
      colors: {
        'brand': '#04B8AD',
        'primary': '#292524',
        'secondary': '#44403c',
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
