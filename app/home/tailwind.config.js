 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-500": "#FF6B00",
        "neutral-800": "#1F1F1F",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
