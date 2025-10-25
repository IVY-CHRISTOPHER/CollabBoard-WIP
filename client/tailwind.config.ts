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
        // White
        'lotion' : '#FAFAFA',
        'linen' : '#FCEDEB',
        'ghost' : '#EDF1FA',

        // Greys
        'slateGry' : '#6B7280',
        'cadetGry' : '#9CA3AF',
        'shadowGry' : '#404040',
        'aluminium' : '#AEAEB2',

        // Red + Orange
        'strawberry' : '#DC2626',
        'strawberryLt' : '#F9D4CE',
        'coralRed' : '#EF4444',
        'maxRed' : '#DC2626',
        'salmon' : '#F28568',
        'mistyRose' : '#FEE2E2' ,
        'faluRed' : '#7F1D1D',

        // Blue
        'linksBlu' : '#2A76F4',
        'midnightBlu' : '#243C5C',
        'mist' : '#D3DDF4',
        'steelBluLt' : '#AAC0EA',
        'electricBlu' : '#33517B',
        'cobaltBluLt' : '#83A7E2',
        'squidInk' : '#122035',
        'iceberg' : '#E3ECF5',
        'paleAqua' : '#D1E5FF',
        'yaleBlue' : '#014094',

        // Green
        'pigmentGreen' : '#16A34A',
        'magicMint' : '#BBF7D0',
        'parsley' : '#14532D',

        // Yellow 
        'lemonLt' : '#FEF3C7',
        'peanut' : '#78350F',

      },
    },
  },
  plugins: [],
}