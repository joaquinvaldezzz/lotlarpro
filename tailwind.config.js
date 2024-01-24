const files = require('./files')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...files],
  theme: {
    extend: {},
  },
  plugins: [],
}
