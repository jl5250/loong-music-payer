import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': `url('/pan.png')`
      },
      screens: {
        xs: '400px'
      },
      colors: {
        primary: '#539dfd', // 添加自定义颜色
        'black-a': '#232931',
        'black-b': '#2c333e'
      },
      transitionDuration: {
        DEFAULT: '300ms' // 添加默认过渡时间为0.3秒
      },
      animation: {
        cycle: 'cycle infinite 10s linear'
      },
      animationPlayState: {
        paused: 'paused',
        running: 'running'
      },
      keyframes: {
        cycle: {
          '0%': { transform: 'rotate(0)' },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    heroui(),
    function ({ addUtilities }) {
      const newUtilities = {
        '.animate-paused': {
          animationPlayState: 'paused'
        },
        '.animate-running': {
          animationPlayState: 'running'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}

module.exports = config
