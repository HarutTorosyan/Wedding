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
        'aro-img':"url(../src/assets/img/elinatiko.jpg)",
        
      },

      fontFamily: {
          'montserrat': ['MontserratARM', 'sans-serif'],
        },
     "animation": {
            shimmer: "shimmer 3s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
     
    },
  },
  plugins: [require("daisyui")],
}

