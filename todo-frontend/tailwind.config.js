/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwind/defaultTheme')
// import defaultTheme from 'tailwind/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue.js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      }
    },
  },
  plugins: [],
}

