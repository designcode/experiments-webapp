/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'light-shade': '#FAFBFA',
        'light-accent': '#9EA3AA',
        primary: '#959293',
        'dark-accent': '#9AA2A7',
        'dark-shade': '#1F2735',
      },
    },
  },
  plugins: [],
};
