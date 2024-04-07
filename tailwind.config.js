/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/recipe-bg.jpg')",
        whyRecipe: "url('/src/assets/images/why-recipe.jpg')",
      },
    },
  },
  plugins: [],
};
