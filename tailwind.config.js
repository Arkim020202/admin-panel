/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#624bff",
      secondary: "#6C757D",
      success: "#198754",
      danger: "#DC3545",
      warning: "#FFC107",
      info: "#0DCAF0",
      light: "#F8F9FA",
      dark: "#212529",
      white: "#fff",
      black: "#000",
      transparent:"#ffffff00",
      gray: {
        100: "#f8f9fa",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#919EAB",
        600: "#637381",
        700: "#495057",
        800: "#212B36",
        900: "#212529",
      },
    },
    extend: {
      boxShadow: {
        smooth:
          "0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08);",
      },
      fontFamily: {
        inter: ["Inter"],
        DmSans: ["DM Sans", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
