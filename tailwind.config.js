/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafbfc",
          "200": "#79747e",
          "300": "#1c1b1f",
          "400": "rgba(17, 34, 17, 0.75)",
          "500": "rgba(17, 34, 17, 0.5)",
          "600": "rgba(17, 34, 17, 0.4)",
          "700": "rgba(17, 34, 17, 0.8)",
          "800": "rgba(17, 34, 17, 0.7)",
          "900": "#fafafa",
          "1200": "rgba(0, 0, 0, 0.5)",
          "1300": "rgba(17, 34, 17, 0.6)",
          "1400": "rgba(17, 34, 17, 0.78)",
          "1500": "rgba(17, 34, 17, 0.25)",
        },
        "mint-green": "#8dd3bb",
        "blackish-green": "#112211",
        lightcyan: "#cdeae1",
        neutrals: "#fff",
        mediumaquamarine: {
          "100": "rgba(141, 211, 187, 0.6)",
          "200": "rgba(141, 211, 187, 0.4)",
        },
        black: "#000",
        lavender: "#d7e2ee",
        slamon: "#ff8682",
        whitesmoke: "#eaeaea",
        mintcream: "#ebf6f2",
        lightseagreen: {
          "100": "#59a187",
          "200": "rgba(89, 161, 135, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        "montserrat-medium-14": "Montserrat",
        "tradegothic-bold-16": "'TradeGothic LT Extended'",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        mini: "15px",
        "81xl": "100px",
        "12xs-7": "0.7px",
        "26xl": "45px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "25xl": "2.75rem",
      "16xl": "2.188rem",
      "7xl": "1.625rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "13xl": "2rem",
      "21xl": "2.5rem",
      "61xl": "5rem",
      "26xl": "2.813rem",
      "5xs": "0.5rem",
      "3xs": "0.625rem",
      "8xl": "1.688rem",
      "17xl": "2.25rem",
      "9xs": "0.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
