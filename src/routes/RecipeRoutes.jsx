import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import SearchRecipe from "../pages/SearchRecipe";
import RecipePage from "../pages/RecipePage";
import GetIngredients from "../pages/GetIngredients";
import RecipeCart from "../pages/RecipeCart";

function RecipeRoutes() {
  const [recipeId, setrecipeId] = useState("4632");
  function handleRecipeId(id) {
    setrecipeId(id);
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/searchRecipe"
        element={<SearchRecipe handleRecipeId={handleRecipeId} />}
      />
      <Route
        path="/recipePage"
        element={
          <RecipePage recipeId={recipeId} handleRecipeId={handleRecipeId} />
        }
      />
      <Route path="/getIngredients" element={<GetIngredients />} />
      <Route path="/recipeCart" element={<RecipeCart />} />
    </Routes>
  );
}

export default RecipeRoutes;
