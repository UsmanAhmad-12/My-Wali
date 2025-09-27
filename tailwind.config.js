/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        THEMECOLOR: "#2D2D2D",
        LIGHTBLACK: "#2D2D2D",
        LIGHTGRAY: "#D3D3D3",
      },

      backgroundImage: {
        GRADIENTCOLOR: "linear-gradient(to right, #ff7e5f, #feb47b)",
      },
      screens: {
        xs: "400px",
        // sm: "600px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
