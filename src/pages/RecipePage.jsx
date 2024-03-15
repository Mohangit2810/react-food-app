/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function RecipePage() {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instrunctions, setInstrunctions] = useState([]);

  const apiKey = "585107672c1b407e816e2d9fe6e7a271";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/654959/information/?&apiKey=${apiKey}&includeInstruction=true`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recipie = await response.json();
        console.log(recipie);
        setRecipeInfo(recipie);
        setIngredients(recipie.extendedIngredients);
        setInstrunctions(recipie.analyzedInstructions[0].steps);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipe Information</h1>
      <img src={recipeInfo.image} alt={` ${recipeInfo.title}`} />
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <p> {ingredient.original}</p>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={`${ingredient.name}`}
          />
        </div>
      ))}
      <h2>Steps</h2>
      <ul>
        {instrunctions.map((step, index) => (
          <li key={index}>
            <p>{step.step}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePage;
