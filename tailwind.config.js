/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      ...defaultTheme.screens,
      '3xl': { 'max': '1799px' },
    },
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
  ],
}

