module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900: "#000000",
        lime_700: "#cc9933",
        bluegray_100: "#d9d9d9",
        indigo_900: "#000066",
        white_A700: "#ffffff",
        red_A700: "#ff0000",
        yellow_100: "#ffeecc",
      },
      fontFamily: { ibmplexsans: "IBM Plex Sans", inter: "Inter" },
      borderRadius: { radius10: "10px", radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
