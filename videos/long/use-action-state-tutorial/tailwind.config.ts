import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#faf5cf",
          700: "#a37d54",
        },
        grayscale: {
          200: "#e6e6e6",
          400: "#c4c4c4",
          700: "#2b2b2b",
          800: "#1a1a1a",
          900: "#000",
        },
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
export default config;
