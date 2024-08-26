/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          orange: "hsl(25, 97%, 53%)",
          lightGrey: "hsl(217, 12%, 63%)",
          darkBlue: "hsl(213, 19%, 18%)",
          veryDarkBlue: "hsl(216, 12%, 8%)",
        },
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at top, hsl(213, 19%, 18%) 0%, hsl(213, 19%, 11%) 100%)",
      },
    },
  },
  plugins: [],
};
