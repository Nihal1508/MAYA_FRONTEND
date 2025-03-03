/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#6B46C1", // Add custom colors if needed for the design.
        grayDark: "#1F1F1F",
      },
    },
  },
  plugins: [],
}

