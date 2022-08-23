module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: ["forest",
      {
        main: {
          primary: "#2d56a3",
          secondary: "#f7b9ee",
          accent: "#9767db",
          neutral: "#141B24",
          "base-100": "#303540",
          info: "#7797F8",
          success: "#1D7C5B",
          warning: "#EFA14D",
          error: "#F06C60",
        },
      },
    ],
  },
};
