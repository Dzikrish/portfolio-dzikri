/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0369a1",
        dark: "#0a0a0a",
        secondary: "#64748b",
        danger: "#e74c3c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
