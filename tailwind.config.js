/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {

      'md': '768px',
      'lg': '1024px',
    },
    colors: {
      'primary': '#404eed',
      'brand': '#5865f2',
      'notquiteblack': '#23272a',
      'offwhite': '#f6f6f6'
    },
    maxWidth: {
      'page-max-width': '1260px',
    }
  },
  plugins: [],
}
