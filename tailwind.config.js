/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      colors: {
        primary: "#3498db",
        f_darkishGreen: "#112211",
        f_green: "#8DD3BB",
        f_lightGreen: "#CDEAE1",
        f_red: "#FF8682",
        f_background: "#FFFFFF",
        f_text: "#000000",
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
    },
  },
  plugins: [],
}
