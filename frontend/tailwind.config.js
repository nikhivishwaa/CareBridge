/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#1E3A8A',
        },
        red: {
          500: '#DC2626',
        },
        green: {
          500: '#059669',
        },
        yellow: {
          500: '#F59E0B',
        },
        purple: {
          500: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
}