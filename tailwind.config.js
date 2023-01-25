/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blacklight: "#242424",
        black: "#0D0D0D",
        input: "#242424",
        red: "#DD4E68",
        green: "#27AE60",
        yellow: "#F2C94C",
        black80: "#1F1F1FCC",
        black50: "#1F1F1F80",
        black20: "#1F1F1F4D",
        white80: "#F2F2F2CC",
        white20: "#F2F2F233",
        blurbackground: "#1f1f1f33",
        gray: {
          95: "#191919",
          90: "#262626",
          80: "#404040",
          70: "#595959",
          60: "#737373",
          50: "#8C8C8C",
          40: "#A6A6A6",
          30: "#BFBFBF",
          20: "#D9D9D9",
          10: "#F2F2F2",
        },
        backgroundImage: {
          "Gradient/Pile":
            " linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, rgba(13, 13, 13, 0.8) 100%)",
          "Gradient/Top":
            "linear-gradient(180deg, rgba(13, 13, 13, 0.3) 0%, rgba(31, 31, 31, 0) 100%, rgba(31, 31, 31, 0) 100%)",
          "Gradient/Top60":
            "linear-gradient(180deg, rgba(13, 13, 13, 0.6) 0%, rgba(31, 31, 31, 0) 100%)",
        },
      },
      translate: {
        center: "50%",
      },
      fontSize: {
        title28: [
          "28px",
          {
            lineHeight: "34px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        title24: [
          "24px",
          {
            lineHeight: "33.6px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        title18: [
          "18px",
          {
            lineHeight: "25px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        title20: [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        caption13: [
          "13px",
          {
            lineHeight: "16px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        caption12: [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        Button16: [
          "16px",
          {
            lineHeight: "22.4px",
            letterSpacing: "-1%",
            fontWeight: 500,
          },
        ],
        Button14: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-1%",
            fontWeight: 500,
          },
        ],
        Body16: [
          "16px",
          {
            lineHeight: "21px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
        Body14: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-1%",
            fontWeight: 400,
          },
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),
  ],
};
