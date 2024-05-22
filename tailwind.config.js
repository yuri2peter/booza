/* eslint-disable node/no-unpublished-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{css,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
