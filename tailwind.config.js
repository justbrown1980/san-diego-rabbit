module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#71c8c0",
          dark: "#1d6d6e",
          DEFAULT: "#E4E7EE",
          bg: "#F6FAFB",
        },
      },
      fontFamily: {
        headline: "Bebas Neue, sans-serif",
        body: "Montserrat, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
