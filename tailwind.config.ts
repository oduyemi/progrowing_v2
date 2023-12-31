export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    fontFamily: {
      sans: ['ClashDisplayRegular'],
    },
    colors: {
      yel: "#FB8B24",
      whi: "#F4F4F9",
      // ppl: "#820263",
      ppl: "#42113C",
      blu: "#DABFFF",
      fade: "#DABFFF"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
