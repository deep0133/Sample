/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "Yeseva-One": ["Yeseva One", "sans-serif"],
        "Work-Sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
