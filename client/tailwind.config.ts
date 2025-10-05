/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // this is for custom added colors, you need it in the Extend section here so the tailwind base set colors still work
      fontFamily: {
          roboto : ['Roboto', 'sans-serif'],
        },
      colors: {
        'salmon' : '#F28568',
        'linen' : '#FCEDEB',
        'lotion' : '#FAFAFA',
        'strawberry' : '#DC2626',
        'strawberryLt' : '#F9D4CE',
        'linksBlu' : '#2A76F4',
        'slateGry' : '#6B7280',
        'cadetGry' : '#9CA3AF',
        'shadowGry' : '#404040',

      },
    },
  },
  plugins: [],
}