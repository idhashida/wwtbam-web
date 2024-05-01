/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        default: '#152232',
        to75: '#7C838B',
        to50: '#C4C7CB',
        to25: '#F0F1F2'
      },
      secondary: {
        default: '#5EBC67',
        to75: '#A4D9A9',
        to50: '#D7EED9',
        to25: '#F5FBF5'
      },
      black: {
        default: '#000000',
        to75: '#707070',
        to50: '#BFBFBF',
        to25: '#EFEFEF'
      },
      white: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
