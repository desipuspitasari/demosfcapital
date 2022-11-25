/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": {
          100: "#F4F9FF",
          200: "#E7F3FF",
          300: "#BCDFFF",
          400: "#047CFF",
          500: "#022545",
        },
        neutral: {
          100: "#F9F9F9",
          200: "#F4F5FA",
          300: "#677489",
          400: "#999999",
          500: "#111B29",
        },
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      transitionDuration: {
        1500: "1500ms",
      },
      backgroundImage: {
        noise: 'url("/images/noise3.webp")',
        sekuritas: 'url("/images/sekuritas.webp")',
        dipay: 'url("/images/dipay.webp")',
        indofund: 'url("/images/indofund.webp")',
        pigijo: 'url("/images/pigijo.webp")',
        about: 'url("/images/about.webp")',
      },
    },
  },
  plugins: [],
};
