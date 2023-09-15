/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#000',
        secondary:'#f1f5f9',
        mycolor:'#93c5fd',
        buttoncolor:'#2563eb'
      },
      fontSize:{
        xxs:'10px'
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}