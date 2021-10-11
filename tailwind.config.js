const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#3b7af9",
        lightBlue: "#6baeeb",
        red: "#da4c4e",
        green: "#2dc18a",
        black: "#101626",
        pure: "#fcfbfe",
        light: "#fcfbfc",
        lightGray: "#f7f7f7",
        gray: "#aeb3bb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme("colors.black"),
          background: theme("colors.light"),
        },
      })
    }),
  ],
}
