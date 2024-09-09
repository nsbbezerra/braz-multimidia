/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        jumbotronIndex: "url('../public/img/home/jumbo.jpg')",
        backgroundAbada: "url('../public/img/abada/bg-abada.png')",
        backgroundPesca: "url('../public/img/pesca/bg-pesca.png')",
        backgroundEsportivo: "url('../public/img/esportivo/bg-esportivo.png')",
        backgroundCiclismo: "url('../public/img/ciclismo/bg-ciclismo.png')",
      },
      fontFamily: {
        sans: ["PT Sans Narrow", "sans-serif"],
        serif: ["Signika", "sans-serif"],
      },
      colors: {
        marinho: {
          50: "#efefef",
          100: "#d5d5d5",
          200: "#aeaeae",
          300: "#747474",
          400: "#353535",
          500: "#1a1a1a",
          600: "#161616",
          700: "#131313",
          800: "#101010",
          900: "#0f0f0f",
        },
        orange: {
          50: "#fffee7",
          100: "#fffdc1",
          200: "#fff686",
          300: "#ffe941",
          400: "#ffd80d",
          500: "#edba00",
          600: "#d19200",
          700: "#a66802",
          800: "#89510a",
          900: "#74420f",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
