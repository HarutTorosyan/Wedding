/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img':"url(../src/assets/img/hero-bg.jpg)",

      },
      fontFamily:{
        "pop": ["Poppins, sans-serif"],
        "fair": ["Playfair Display, sans-serif"],
        "lato": ["Lato, sans-serif"],
        "russo":["Russo One, sans-serif"],
        "monter":["Montserrat, sans-serif"]
      },
      colors: {
        'main-color': '#00173c',
        'main2-color': '#3660d9',
      },
    },
  },
  plugins: [],
}

