/**
 * @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1470EF",
        secondaryBlue: "#2E90FA",
        tertiaryBlue: "#1849A9",
        quatenaryBlue: "#EFF8FF",

        textPrimary: "#101828",
        textSecondary: "#175CD3",
        textTertiary: "#465467",

        textLabel: "#334054",
        textQuote: "#B2DDFF",
        textQuote2: "#666666",
        
        textYellow: "#FDE047",

        iconInput: "#667085",
        
        borderPrimary: "#D0D5DD",
        borderSecondary: "#85CAFF",
        borderTertiary: "#94A3B8"
      },
    },
  },
  plugins: [],
};
