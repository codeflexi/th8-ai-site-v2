/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['"Prompt"', 'system-ui', 'sans-serif'],
      },
      colors: {
        th8: {
          primary: "#FF2E2E",
          accent: "#FF4747",
          surface: "#FFFFFF",
          border: "#E2E8F0",
          text: "#0F172A",
          red: "#FF2E2E",
        },
      },
    },
  },
  plugins: [],
};
