/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
   
    extend: {
      'yellow': {
        light: '#fef08a',
        DEFAULT: '#fde047',
        dark: '#eab308',
      },
      'lime': {
        light: '#d9f99d',
        DEFAULT: '#bef264',
        dark: '#65a30d',
      },
      'stone': {
        light: '#d6d3d1',
        DEFAULT: '#78716c',
        dark: '#292524',
      },
    },
  },
  plugins: [],
}
