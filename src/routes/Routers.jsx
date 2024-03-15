import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import SearchRecipe from "../pages/SearchRecipe";
import RecipePage from "../pages/RecipePage";

const Routers = () => {
  const [recipeId, setrecipeId] = useState([]);
  function handleRecipeId(id) {
    setrecipeId(id);
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/searchRecipe"
        element={<SearchRecipe handleRecipeId={handleRecipeId} />}
      />
      <Route path="/recipePage" element={<RecipePage recipeId={recipeId} />} />
    </Routes>
  );
};

export default Routers;
