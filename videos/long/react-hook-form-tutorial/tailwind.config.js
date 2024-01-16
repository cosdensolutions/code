/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#f6c160",
          600: "#e0b058",
        },
        secondary: {
          500: "#f6b060",
          600: "#db9c53",
        },
        background: {
          700: "#292929",
          800: "#1a1a1a",
        },
        gray: {
          300: "#f8f9fa",
          400: "#adb5bd",
        },
      },
    },
  },
  plugins: [],
};
