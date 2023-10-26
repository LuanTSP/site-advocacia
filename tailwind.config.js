/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'Roboto': "Roboto",
    },
    fontSize: {
      'title1': "2.25rem",
    },
    extend: {
      backgroundImage: {
        'judges': "url('/src/imgs/judges.jpg')",
        'logo': "url('/src/imgs/logo.png')",
        'logo_nome': "url('/src/imgs/logo_nome.png')"
      },
      colors: {
        'darkGray': "#101010",
      },
    },
  },
  plugins: [],
}

