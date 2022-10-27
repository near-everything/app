module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}","./containers/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};