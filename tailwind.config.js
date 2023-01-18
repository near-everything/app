/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blacklight: "#242424",
      },
      fontSize: {
        "Large-Title": [
          "32px",
          {
            lineHeight: "44.8px",
            fontWeight: "400",
          },
        ],
        "Large-Titleb": [
          "32px",
          {
            lineHeight: "44.8px",
            fontWeight: "700",
          },
        ],
        "Title-1": [
          "26px",
          {
            lineHeight: "36.4px",
            fontWeight: "400",
          },
        ],
        "Title-1b": [
          "26px",
          {
            lineHeight: "36.4px",
            fontWeight: "700",
          },
        ],
        "Title-X": [
          "24px",
          {
            lineHeight: "33.6px",
            fontWeight: "400",
          },
        ],
        "Title-Xb": [
          "24px",
          {
            lineHeight: "33.6px",
            fontWeight: "400",
          },
        ],
        "Title-3": [
          "18px",
          {
            lineHeight: "25.2px",
            fontWeight: "400",
          },
        ],
        "Title-3b": [
          "18px",
          {
            lineHeight: "25.2px",
            fontWeight: "700",
          },
        ],
        Body: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        Bodyb: [
          "16px",
          {
            lineHeight: "22.4px",
            fontWeight: "700",
          },
        ],
        Button: [
          "16px",
          {
            lineHeight: "22.4px",
            fontWeight: "500",
          },
        ],
        Buttonb: [
          "16px",
          {
            lineHeight: "22.4px",
            fontWeight: "600",
          },
        ],
        Callout: [
          "15px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        Calloutb: [
          "15px",
          {
            lineHeight: "21px",
            fontWeight: "600",
          },
        ],
        Subheadline: [
          "14px",
          {
            lineHeight: "19.6px",
            fontWeight: "400",
          },
        ],
        Subheadlineb: [
          "14px",
          {
            lineHeight: "19.6px",
            fontWeight: "600",
          },
        ],
        "Caption-1": [
          "13px",
          {
            lineHeight: "15.6px",
            fontWeight: "400",
          },
        ],
        "Caption-1b": [
          "13px",
          {
            lineHeight: "18.2px",
            fontWeight: "600",
          },
        ],
        "Caption-2": [
          "12px",
          {
            lineHeight: "16.8px",
            fontWeight: "400",
          },
        ],
        "Caption-2b": [
          "12px",
          {
            lineHeight: "16.8px",
            fontWeight: "500",
          },
        ],
        "Caption-3": [
          "11px",
          {
            lineHeight: "15.4px",
            fontWeight: "400",
          },
        ],
        "Caption-3b": [
          "11px",
          {
            lineHeight: "15.4px",
            fontWeight: "600",
          },
        ],
        "Caption-4": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
        "Caption-4b": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "600",
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
