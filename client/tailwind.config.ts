/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dkblue' : '#001381',
      'white': '#ffffff',
      'errormsg' : '#e11d48',
      'disabledGray' : "#ECF0FF"
    }
  },
  plugins: [],
}