/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: "2rem", // Adds padding inside the container
      },
      colors: {
        headerColor: "#000000",
        buttonColor: "#A87676",
        buttonHoverColor: "#7D5A5A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
