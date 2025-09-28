/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // this is for custom added colors, you need it in the Extend section here so the tailwind base set colors still work
      colors: {
      'blueberry' : '#001381',
      'strawberry' : '#e11d48',
      'disabledGray' : "#ECF0FF",
      'orangeCream' : "#FDBA74"

    }
    },
    
    
  },
  plugins: [],
}