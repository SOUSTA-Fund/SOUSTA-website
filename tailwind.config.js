const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
        serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
