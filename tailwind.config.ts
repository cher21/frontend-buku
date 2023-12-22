/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["poppins-regular"],
        "poppins-medium": ["poppins-medium"],
        "poppins-semibold": ["poppins-semibold"],
        "poppins-bold": ["poppins-bold"],
        "poppins-light": ["poppins-light"],
      },
      colors: {
        primary: "#d5ebed",
        secondary: "#276C72",
        third: "#8DD2D8",
        active: "#D9F0F2",
        bgGreen: "#B3E1E5",
        textPrimary: "#1C2434",
        textSecondary: "#3B3D40",
        textPurple: "#5B33A8",
        textGray: "#8A92A6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
