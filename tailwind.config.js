/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#495E57",
        yellowPrimary: "#F4CE14",
        orangeSecondary: "#EE9972",
        lightOrangeSecondary: "#FBDABB",
        graySecondary: "#EDEFEE",
        blackSecondary: "#333333",
      },
      screens: {
        sm: "0px",
        md: "450px",
        lg: "830px",
        xl: "1300px",
        "2xl": "1200px",
      },
      fontFamily: {
        markazi: ['"Markazi Text"', "serif"], // Markazi Text Medium
        karla: ['"Karla"', "sans-serif"], // karla regular
      },
    },
  },
  plugins: [],
};
