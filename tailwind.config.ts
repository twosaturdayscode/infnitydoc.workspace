import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  presets: [require('./src/styles/animations.preset')],
  content: ['./app/**/*.{html,ts,tsx}', './src/**/*.tsx'],
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
        sans: ['Plus Jakarta Sans', ...fontFamily.sans],
      },
      colors: {
        'brand': "#04B7AC", //'#415DA1',
        'brand-light': '#EBFFFB',
        'primary': '#222',
        'secondary': '#39394A',
        'muted': '#d6d3d1',
        'border': '#e7e5e4',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
