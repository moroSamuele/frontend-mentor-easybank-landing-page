const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",

        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)"
      },
      backgroundImage: {
        'mainGradient': "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)",
        'mobileMenuGradient': "linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%);"
      },
      screens: {
        'xs': '375px'
        // => @media (min-width: 375px) { ... }
      }
    },
  },
  plugins: [],
}
