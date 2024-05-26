/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#65afff',
        secondary : '#1b2845',
      },
      fontFamily : {
        poppins : ['Poppins']
      }
    },
  },
  plugins: [],
}

