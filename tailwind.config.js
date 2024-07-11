/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '502px',
        'xs': '412px',
      },
      fontFamily: {
        cursive: ['Comic Sans MS', 'cursive'],
        luxuryScript: ['LuxuriousScript', 'cursive'],
        petitFormalScript: ['PetitFormalScript', 'cursive'],
        septemberScript: ['SeptemberScript', 'cursive'],
        cherrySwashScript: ['CherrySwash', 'cursive'],
        chopinScript: ['ChopinScript', 'cursive'],
      },
      padding: {
        '0.5': '0.125rem',
      },
      colors: {
        'gray-350': '#a3abb5',
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundImage: {
        'construction-stripes': "repeating-linear-gradient(55deg, #000000, #000000 15px,#fac800 15px,#fac800 30px)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

