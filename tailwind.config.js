module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [{ dark: {
      "primary": "#f3f4f6",          
      "secondary": "#e5e7eb",
      "accent": "#9ca3af",
      "neutral": "#ffffff",
      "base-100": "#000000",
      "info": "#4b5563",
      "success": "#374151",
      "warning": "#1f2937",
      "error": "#111827",
    } }],
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};