const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require('@material-tailwind/react/utils/withMT')

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/styles/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: {
          50: '#e9eaf0',
          100: '#d3d6e0',
          200: '#bcc1d1',
          300: '#a6acc1',
          400: '#9098b2',
          500: '#7a83a3',
          600: '#646e93',
          700: '#4d5984',
          800: '#374574',
          900: '#213065',
        },
        gray: {
          100: '#f0f1f5',
          200: '#e1e3ea',
          300: '#d3d6e0',
          400: '#c4c8d5',
          500: '#b5bacb',
          600: '#9195a2',
          700: '#6d707a',
          800: '#484a51',
          900: '#242529',
        },
        yellow: {
          50: '#ffecb3',
          100: '#ffe8a3',
          200: '#ffe494',
          300: '#ffe185',
          400: '#ffdd75',
          500: '#ffd966',
          600: '#e6c35c',
          700: '#ccae52',
          800: '#b39847',
          900: '#99823d',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      base: '1.25rem',
      lg: 'clamp(1.4063rem, 1.3251rem + 0.4058vi, 1.5625rem)',
      xl: 'clamp(1.582rem, 1.3893rem + 0.9639vi, 1.9531rem)',
      '2xl': 'clamp(1.7798rem, 1.4361rem + 1.7185vi, 2.4414rem)',
      '3xl': 'clamp(2.0023rem, 1.4571rem + 2.726vi, 3.0518rem)',
      '4xl': 'clamp(2.2525rem, 1.441rem + 4.0575vi, 3.8147rem)',
      '5xl': 'clamp(2.5341rem, 1.3735rem + 5.8033vi, 4.7684rem)',
    },
  },
  plugins: [],
})
