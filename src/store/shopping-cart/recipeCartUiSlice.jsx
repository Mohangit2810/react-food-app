import { createSlice } from "@reduxjs/toolkit";

const recipeCartUiSlice = createSlice({
  name: "RecipeCartUi",
  initialState: { recipeCartIsVisible: false },

  reducers: {
    toggle(state) {
      state.recipeCartIsVisible = !state.recipeCartIsVisible;
    },
  },
});

export const recipeCartUiActions = recipeCartUiSlice.actions;
export default recipeCartUiSlice;
