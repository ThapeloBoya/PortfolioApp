/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Source Code Pro', 'monospace'], // For body
        heading: ['Poppins', 'sans-serif'], // For headings
      },
    },
  },
  plugins: [],
}
