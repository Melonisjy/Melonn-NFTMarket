/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Shadows Into Light Two", "cursive"],
        subtitle: ["Rajdhani", "sans-serif"],
        display: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
