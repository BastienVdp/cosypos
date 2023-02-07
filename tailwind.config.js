/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'menu': '2fr 1fr'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#111315',
      gray: '#2D2D2D',
      'gray-100': '#858585',
      'gray-150': '#3C4041',
      white: '#FFFFFF',
      red: '#E24948',
      'pastel-red': '#F0C8CF',
      'pastel-orange': '#F0C8CF',
      'pastel-pink': '#FAC2D9',
      'pastel-green': '#CFDDDB',
      'pastel-purple': '#E4CDEE',
      'pastel-blue': '#C2DBE9',
    }
  },
  plugins: [],
}
