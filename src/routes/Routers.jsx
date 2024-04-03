/* eslint-disable react/prop-types */
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Start from "../pages/Start";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import RecipeHome from "../pages/RecipeHome";
import SearchRecipe from "../pages/SearchRecipe";
import RecipePage from "../pages/RecipePage";
import GetIngredients from "../pages/GetIngredients";
import GetGroceries from "../pages/GetGroceries";
import RecipeCart from "../pages/RecipeCart";
import RecipeCheckout from "../pages/RecipeCheckout";
import Confirmation from "../pages/Confirmation";

const Routers = ({ layout, goToLayout }) => {
  const [recipeId, setrecipeId] = useState("4632");
  const [shippingInfo, setShippingInfo] = useState({});
  const [notPackedList, setNotPackedList] = useState([]);
  const [cuisine, setCuisine] = useState("");

  function handleNotPackedList(list) {
    setNotPackedList(list);
    console.log(list);
  }

  function handleRecipeId(id) {
    setrecipeId(id);
  }
  function addShippingInfo(info) {
    setShippingInfo(info);
  }

  function handleCuisine(cuisineName) {
    setCuisine(cuisineName);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={layout === "Food" ? "/recipeHome" : "/home"} />}
      />
      <Route path="/start" element={<Start goToLayout={goToLayout} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/checkout"
        element={<Checkout addShippingInfo={addShippingInfo} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/recipeHome"
        element={
          <RecipeHome
            handleCuisine={handleCuisine}
            handleRecipeId={handleRecipeId}
          />
        }
      />
      <Route
        path="/searchRecipe"
        element={
          <SearchRecipe handleRecipeId={handleRecipeId} cuisine={cuisine} />
        }
      />
      <Route
        path="/recipePage"
        element={
          <RecipePage
            recipeId={recipeId}
            handleRecipeId={handleRecipeId}
            notPackedList={notPackedList}
            handleNotPackedList={handleNotPackedList}
          />
        }
      />
      <Route path="/getIngredients" element={<GetIngredients />} />
      <Route path="/getGroceries" element={<GetGroceries />} />
      <Route path="/recipeCart" element={<RecipeCart />} />
      <Route
        path="/recipeCheckout"
        element={
          <RecipeCheckout
            shippingInfo={shippingInfo}
            addShippingInfo={addShippingInfo}
          />
        }
      />
      <Route
        path="/confirmation"
        element={<Confirmation shippingInfo={shippingInfo} />}
      />
    </Routes>
  );
};

export default Routers;
