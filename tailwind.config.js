module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        primary: {
          primary: "#34623F",
          secondary: "#86B0DA",
          accent: "#bdbdbd",
          neutral: "#60c689",
          neutral: "#60c689",
          "base-100": "#000000",
          info: "#303f9f",
          success: "#00890B",
          warning: "#ffa000",
          error: "#FA0F1B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
