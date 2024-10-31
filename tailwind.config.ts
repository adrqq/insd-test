import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,             // Centers the container
        padding: '0',          // Adds padding to the sides of the container
        screens: {
          // Specify a custom max-width for the container at the largest breakpoint
          '2xl': '1440px',
        }
      }
    },
  },
  plugins: [],
};
export default config;
