/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        mainBg: "#09090f",
        secBg: "#121219",
        secText: "#c9ccd2",
        border: "#1e1e25",
      },
      fontSize: {
        pText: "16px",
        h1Text: "24px",
        h2Text: "18px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
