/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lohit: ['"Lohit Bengali"', 'sans-serif'],
        libre: ['"Libre Franklin"', 'sans-serif'],
      },
      scrollbar: ['rounded'], // Ajout des extensions pour scrollbar
    },
    screens: {
      sm: { min: "320px", max: "425px" },
      md: { min: "426px", max: "767px" },
      lg: { min: "768px", max: "991px" },
      xl: { min: "992px", max: "1024px" },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
