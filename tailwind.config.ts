import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
        },
      },
    },
  },
  plugins: [],
};
export default config;