module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}","./containers/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: ["black"]
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};