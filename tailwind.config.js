/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#BB92FF", // Add custom colors if needed for the design.
        grayDark: "#1F1F1F",
      },

    },
  },

  plugins: [],
}

