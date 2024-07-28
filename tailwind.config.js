/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "execom-card": "0px 17px 94px 0px rgba(0,0,0,0.2)",
      }
    },
  },
  plugins: [],
}

