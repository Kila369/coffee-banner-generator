/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGray: "#2B2B2B",
        darkGray: "#424243",
        lightGray: "#D3D3D3",
        darkBlue: "#11A0DB",
        lightBlue: "#B8E3F4",
      },
    },
  },
  plugins: [],
};
