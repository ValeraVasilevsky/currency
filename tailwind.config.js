export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#242424",
      },

      fontSize: {},

      boxShadow: {
        custom: "0px 8px 20px 1px rgba(0, 0, 0, 0.25)",
      },

      borderRadius: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
