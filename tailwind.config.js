module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [{ dark: {
      "primary": "#000000",          
      "secondary": "#000000",
      "accent": "#000000",
      "neutral": "#6b7280",
      "base-100": "#000000",
      "info": "#000000",
      "success": "#000000",
      "warning": "#000000",
      "error": "#000000",
    } }],
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};