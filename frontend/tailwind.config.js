export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
