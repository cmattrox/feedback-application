const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        darkest: '#001219',
        dark: '#005F73',
        light: '#0A9396',
        lightest: '#94D2BD',
      },
      orange: {
        darkest: '#BB3E03',
        dark: '#CA6702',
        light: '#EE9B00',
        lightest: '#E9D8A6',
      },
      red: {
        dark: '#9B2226',
        light: '#AE2012',
      },
      green: { theme: '#1EB854' },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: false,
    styled: false,
  },
}
