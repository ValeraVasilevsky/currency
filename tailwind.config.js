export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},

      fontSize: {},

      boxShadow: {},

      borderRadius: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
