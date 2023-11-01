/** @type { import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease forwards',
        'fade-rotate-scale-in': 'fade-rotate-scale-in 0.5s ease forwards',
        'fade-rotate-in': 'fade-rotate-in 0.5s ease-in-out forwards',
        'fade-rotate-in-lg': 'fade-rotate-in-lg 0.5s ease forwards',
        'fade-slide-in': 'fade-slide-in 0.5s ease-in-out',
        'fade-slide-in-lg': 'fade-slide-in-lg 0.5s ease-in-out',
        'fade-blur-in': 'fade-blur-in 0.5s ease-in-out',
        'float-rotate': 'float-rotate 2s ease-in-out infinite',
        'float-rotate-lg': 'float-rotate-lg 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'checkmark': 'checkmark 0.5s ease-in-out',
      }, 
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        checkmark: {
          '0%': {
              "stroke-dashoffset": 25
          },       
          to: {
             "stroke-dashoffset": 0
          }
        },
        'fade-in': {
          '0%': {
              opacity: 0
          },
          to: {
              opacity: 1
          }
        },
        'fade-rotate-scale-in': {
          '0%': {
              opacity: 0,
              transform: "rotate(6deg) scale(.75) translateY(1rem)"
          },
          to: {
              opacity: 1,
              transform: "rotate(0) scale(1) translateY(0)"
          }
        },
        'fade-rotate-in': {
          '0%': {
              opacity: 0,
              transform: "rotate(3deg) translateY(1.75rem)"
          },
          to: {
              opacity: 1,
              transform: "rotate(0) translateY(0)"
          }
        },
        'fade-rotate-in-lg': {
          '0%': {
              opacity: 0,
              transform: "rotate(2deg) translateY(1.25rem)"
          },
          to: {
              opacity: 1,
              transform: "rotate(0) translateY(0)"
          }
        },
        'fade-slide-in': {
          '0%': {
              opacity: 0,
              transform: "translateY(1.25rem)"
          },
          to: {
              opacity: 1,
              transform: "translateY(0)"
          }
        },
        'fade-slide-in-lg': {
          '0%': {
              opacity: 0,
              transform: "translateY(1.25rem)"
          },
          to: {
              opacity: 1,
              transform: "translateY(0)"
          }
        },
        'fade-blur-in': {
          '0%': {
              opacity: 0,
              filter: "blur(.25rem)"
          },
          to: {
              opacity: 1,
              filter: "blur(0)"
          }
        },
        'float-rotate': {
          '0%': {
              transform: "rotate(0) translateY(6px) translate(0)"
          },
          '50%': {
              transform: "rotate(4deg) translateY(-2px) translate(4px)"
          },
          to: {
              transform: "rotate(0) translateY(6px) translate(0)"
          }
        },
        'float-rotate-lg': {
          '0%': {
              transform: "rotate(0) translateY(1px) translate(0)"
          },
          '50%': {
              transform: "rotate(3deg) translateY(-2px) translate(2px)"
          },
          to: {
              transform: "rotate(0) translateY(1px) translate(0)"
          }
        },
        'wiggle': {
          '0%': {
              transform: "rotate(-3deg)"
          },
          '50%': {
              transform: "rotate(3deg)"
          },
          to: {
              transform: "rotate(-3deg)"
          }
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
