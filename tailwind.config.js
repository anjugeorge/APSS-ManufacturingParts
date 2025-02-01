/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }, // Adds padding inside the container
      },
      colors: {
        headerColor: "#000000",
        buttonColor: "#3D606E",
        buttonHoverColor: "#153B47",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
