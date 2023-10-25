/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'judges': "url('/src/images/judges.jpg')"
      }
    },
  },
  plugins: [],
}

