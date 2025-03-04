/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF6FF',
          100: '#D8EBFF',
          200: '#B3D6FF',
          300: '#85BBFF',
          400: '#5295FF',
          500: '#1A66FF',
          600: '#0047E1',
          700: '#0035A8',
          800: '#002370',
          900: '#001238',
          950: '#000C24',
        },
        secondary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DAFF',
          300: '#85BBFF',
          400: '#5295FF',
          500: '#1A66FF',
          600: '#0047E1',
          700: '#0035A8',
          800: '#002370',
          900: '#001238',
          950: '#000C24',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.45)', 
        'neon': '0 0 5px theme("colors.primary.400"), 0 0 20px theme("colors.primary.500")', 
        'neon-sm': '0 0 3px theme("colors.primary.400"), 0 0 10px theme("colors.primary.500")',
        'neon-lg': '0 0 10px theme("colors.primary.400"), 0 0 40px theme("colors.primary.500")'
      },
      backdropBlur: {
        'glass': 'blur(4px)',
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter var', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial-light': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic-light': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slide-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--primary': theme('colors.primary.700'),
          '--primary-foreground': theme('colors.white'),
          '--secondary': theme('colors.secondary.700'),
          '--secondary-foreground': theme('colors.white'),
        },
      });
    },
  ],
};