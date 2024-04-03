import { createSlice } from "@reduxjs/toolkit";

const recipeItems =
  localStorage.getItem("recipeCartItems") !== null
    ? JSON.parse(localStorage.getItem("recipeCartItems"))
    : [];

const recipeTotalAmount =
  localStorage.getItem("recipeTotalAmount") !== null
    ? JSON.parse(localStorage.getItem("recipeTotalAmount"))
    : 0;

const recipeTotalQuantity =
  localStorage.getItem("recipeTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("recipeTotalQuantity"))
    : 0;

const setItemFunc = (recipeItem, recipeTotalAmount, recipeTotalQuantity) => {
  localStorage.setItem("recipeCartItems", JSON.stringify(recipeItem));
  localStorage.setItem("recipeTotalAmount", JSON.stringify(recipeTotalAmount));
  localStorage.setItem(
    "recipeTotalQuantity",
    JSON.stringify(recipeTotalQuantity)
  );
};

const initialState = {
  recipeCartItems: recipeItems,
  recipeTotalQuantity: recipeTotalQuantity,
  recipeTotalAmount: recipeTotalAmount,
};

const recipeCartSlice = createSlice({
  name: "recipeCart",
  initialState,

  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.recipeCartItems.find(
        (item) => item.id === newItem.id
      );
      state.recipeTotalQuantity++;

      if (!existingItem) {
        // ===== note: if you use just redux you should not mute state array instead of clone the state array, but if you use redux toolkit that will not a problem because redux toolkit clone the array behind the scene

        state.recipeCartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.recipeTotalAmount = state.recipeCartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );

      setItemFunc(
        state.recipeCartItems.map((item) => item),
        state.recipeTotalAmount,
        state.recipeTotalQuantity
      );
    },

    // ========= remove item ========

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.recipeCartItems.find((item) => item.id === id);
      state.recipeTotalQuantity--;

      if (existingItem.quantity === 1) {
        state.recipeCartItems = state.recipeCartItems.filter(
          (item) => item.id !== id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.recipeTotalAmount = state.recipeCartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.recipeCartItems.map((item) => item),
        state.recipeTotalAmount,
        state.recipeTotalQuantity
      );
    },

    //============ delete item ===========

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.recipeCartItems.find((item) => item.id === id);

      if (existingItem) {
        state.recipeCartItems = state.recipeCartItems.filter(
          (item) => item.id !== id
        );
        state.recipeTotalQuantity =
          state.recipeTotalQuantity - existingItem.quantity;
      }

      state.recipeTotalAmount = state.recipeCartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.recipeCartItems.map((item) => item),
        state.recipeTotalAmount,
        state.recipeTotalQuantity
      );
    },

    // =========== clear cart ===========
    clearCart(state) {
      state.recipeCartItems = [];
      state.recipeTotalAmount = 0;
      state.recipeTotalQuantity = 0;
      setItemFunc([], 0, 0);
    },
  },
});

export const cartActions = recipeCartSlice.actions;
export default recipeCartSlice;
