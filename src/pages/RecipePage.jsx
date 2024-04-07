/* eslint-disable react/prop-types */

// import fakeRecipe from "../assets/fake-data/recipe";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import similarRecipe from "../assets/fake-data/similarRecipe";
import { environment } from "../environments/environment";
import "../styles/recipePage.css";
import { Link } from "react-router-dom";
import { cartActions } from "../store/recipe-cart/recipeCartSlice";
function RecipePage({ recipeId, handleRecipeId }) {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [instrunctions, setInstrunctions] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [recipeCardUrl, setRecipeCardUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  const togglePacked = (id) => {
    setIngredientsList(
      ingredientsList.map((ingredients) =>
        ingredients.id === id
          ? { ...ingredients, packed: !ingredients.packed }
          : ingredients
      )
    );
  };
  const apiKey = environment.apiKey;
  const sendNotPacked = () => {
    const list = ingredientsList.filter(
      (ingredient) => ingredient.packed === false
    );
    list.map(async function fetchData(item) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/${item.id}/information?amount=1&apiKey=${apiKey}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const ingredientInfo = await response.json();
        const ingPrice = ingredientInfo.estimatedCost;
        const ingimage = ingredientInfo.image;
        dispatch(
          cartActions.addItem({
            id: item.id,
            name: item.cleanName,
            image: ingimage,
            price: ingPrice.value,
          })
        );
        setShowPopup(true);
      } catch (error) {
        console.error(error);
      }
    });
    // handleNotPackedList(list);
  };

  const toggleDone = (id) => {
    setInstrunctions(
      instrunctions.map((instruction) =>
        instruction.id === id
          ? { ...instruction, done: !instruction.done }
          : instruction
      )
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information/?&apiKey=${apiKey}&includeInstruction=true`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const similarResponse = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/similar/?&apiKey=${apiKey}&number=4`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recipeCard = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/card/?&apiKey=${apiKey}&number=4`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recipie = await response.json();
        const similar = await similarResponse.json();
        const url = await recipeCard.json();
        setRecipeCardUrl(url.url);
        setSimilarRecipes(similar);
        setRecipeInfo(recipie);
        const recipeInformation = recipie.extendedIngredients;
        const processedIngredients = recipeInformation.map(
          ({ id, original, nameClean }) => ({
            id,
            ingName: original,
            cleanName: nameClean,
            packed: false,
          })
        );
        setIngredientsList(processedIngredients);
        const instructions = recipie.analyzedInstructions[0].steps;
        const instructionsList = instructions.map(({ number, step }) => ({
          id: number,
          step: step,
          done: false,
        }));
        setInstrunctions(instructionsList);
        setCategories(recipie.dishTypes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [recipeId, apiKey]);

  return recipeId ? (
    <div className="container">
      <h2 className="text-center mb-12">Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="recipe-container col-span-2 ">
          <h1 className="text-left mb-8">{recipeInfo.title}</h1>
          <img
            className="mx-auto"
            src={`https://spoonacular.com/recipeImages/${recipeInfo.id}-636x393.jpg`}
            alt={` ${recipeInfo.title}`}
          />
          <h2 className="text-left mt-12 mb-6">Info</h2>
          <div
            className="recipe-summary"
            dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
          />
          <h2 className="text-left mt-12 mb-6">Ingredients</h2>
          <div className="mb-6">
            <p>Don&apos;t have the ingredients? Click below to order !!</p>
            <button
              onClick={sendNotPacked}
              className="bg-[#df2020] text-white p-2 rounded-lg mt-4"
            >
              Order Ingredients
            </button>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ingredientsList.map((ingredient, index) => (
              <li className="flex gap-4 items-center justify-start" key={index}>
                <label className="checkContainer">
                  <input
                    type="checkbox"
                    name={ingredient.ingName}
                    onClick={() => togglePacked(ingredient.id)}
                  />
                  <div className="checkmark"></div>
                </label>
                <span
                  className={
                    ingredient.packed
                      ? "strike-through example-1 packed text-lg"
                      : "strike-through example-1 text-lg"
                  }
                >
                  {ingredient.ingName}
                </span>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 mb-8">Steps</h2>
          <ul className="flex flex-col gap-4 mb-12">
            {instrunctions.map((step, index) => (
              <li className="flex gap-4 items-center justify-start" key={index}>
                <label className="checkContainer">
                  <input
                    type="checkbox"
                    name={step.step}
                    onClick={() => toggleDone(step.id)}
                  />
                  <div className="checkmark"></div>
                </label>
                <span
                  className={
                    step.done
                      ? "strike-through example-1 packed text-lg"
                      : "strike-through example-1 text-lg"
                  }
                >
                  {step.step}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="my-12 mb-8">
            Liked the Recipe? Click here to download the Recipe Card !!
            <a href={recipeCardUrl} target="_blank">
              <button className=" bg-[#df2020] text-white p-2 rounded-lg mt-4 block">
                Download Recipe Card
              </button>
            </a>
          </h3>
        </div>
        <div className="info-container">
          <h1 className="text-left mb-8">Categories</h1>
          <ul className="grid grid-cols-3  gap-x-3 gap-y-6 ">
            {categories.map((type, index) => (
              <li
                className="flex flex-col justify-center items-center gap-3 p-2 shadow rounded"
                key={index}
              >
                <img src={`src/assets/categories/${type}.svg`} alt="svg" />
                <p className="first-letter:uppercase">{type}</p>
              </li>
            ))}
          </ul>
          <h2 className="text-left my-8">Additional Info</h2>
          <ul className="flex flex-col gap-6">
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/vegetarian.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Vegetarian :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${
                  recipeInfo.vegetarian ? "true" : "false"
                }.svg`}
                alt="vegetarian"
              />
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/vegan.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Vegan :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${recipeInfo.vegan ? "true" : "false"}.svg`}
                alt="vegan"
              />
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/glutenFree.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Gluten Free :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${
                  recipeInfo.glutenFree ? "true" : "false"
                }.svg`}
                alt="glutenFree"
              />
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/diaryFree.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Diary Free :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${
                  recipeInfo.diaryFree ? "true" : "false"
                }.svg`}
                alt="diaryFree"
              />
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/healthy.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Healthy :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${
                  recipeInfo.veryHealthy ? "true" : "false"
                }.svg`}
                alt="veryHealthy"
              />
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <img
                className="w-6 h-6"
                src="src/assets/additionalInfo/cheap.svg"
                alt="vegetarian"
              />
              <span className="text-gray-700 font-semibold">Cheap :</span>
              <img
                className="w-6 h-6"
                src={`src/assets/${recipeInfo.cheap ? "true" : "false"}.svg`}
                alt="cheap"
              />
            </li>
          </ul>
          <h2 className="text-left my-8">Recipe Provider</h2>
          <ul className="flex flex-col gap-6">
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="hbLutKXhWcayySgZMOoJVa_5WudA7FPAIkC_gr1"
                  x1="13.02"
                  x2="34.556"
                  y1="7.644"
                  y2="39.725"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#8521b0"></stop>
                  <stop offset=".77" stopColor="#6c16a0"></stop>
                  <stop offset="1" stopColor="#64129a"></stop>
                </linearGradient>
                <path
                  fill="url(#hbLutKXhWcayySgZMOoJVa_5WudA7FPAIkC_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  d="M31.264,29.235c-0.493-0.328-1.11-0.389-1.655-0.161c-3.472,1.447-6.276,1.091-7.896-1	c-1.692-2.183-1.686-5.789,0.014-8.039c1.641-2.173,4.448-2.605,7.903-1.216c0.541,0.218,1.157,0.154,1.644-0.175	c0.485-0.328,0.774-0.872,0.774-1.457l0.001-2.628c0-0.963-0.646-1.803-1.57-2.042c-6.453-1.676-11.908-0.016-14.964,4.555	c-2.987,4.471-2.902,10.704,0.204,14.822c2.097,2.779,5.263,4.215,9.066,4.215c1.807,0,3.757-0.324,5.805-0.982	c0.873-0.28,1.459-1.088,1.459-2.01v-2.419C32.048,30.109,31.755,29.562,31.264,29.235z"
                  opacity=".05"
                ></path>
                <path
                  d="M30.986,29.651c-0.352-0.235-0.796-0.278-1.186-0.115c-3.701,1.542-6.713,1.131-8.484-1.155	c-1.821-2.35-1.816-6.229,0.01-8.647c1.037-1.372,3.52-3.378,8.489-1.378c0.392,0.156,0.83,0.109,1.178-0.125	c0.347-0.234,0.554-0.624,0.554-1.042l0.001-2.628c0-0.735-0.492-1.375-1.195-1.558c-6.24-1.617-11.493-0.033-14.423,4.349	c-2.874,4.299-2.795,10.29,0.188,14.243c1.997,2.647,5.026,4.015,8.676,4.015c1.753,0,3.649-0.316,5.644-0.957	c0.665-0.213,1.111-0.83,1.111-1.534v-2.419C31.548,30.277,31.338,29.886,30.986,29.651z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M30.283,34.176C8.864,41.061,9.198,8.03,30.227,13.487c0.485,0.126,0.821,0.573,0.821,1.074 c0,0.736,0,1.81,0,2.629c0,0.538-0.546,0.904-1.046,0.703c-13.978-5.622-14.161,18.003-0.009,12.105 c0.501-0.209,1.055,0.159,1.055,0.701c0,0.766,0,1.744,0,2.42C31.047,33.597,30.739,34.03,30.283,34.176z"
                ></path>
              </svg>
              <span className="text-gray-700 font-semibold">
                Original Source :{" "}
                <strong className="text-[#df2020]">
                  {recipeInfo.sourceName}
                </strong>
              </span>
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0078d4"
                  d="M7.782,40.218c3.71,3.71,9.725,3.71,13.435,0c1.733-1.733,5.267-5.267,7-7	c3.71-3.71,3.71-9.725,0-13.435c-3.71-3.71-9.725-3.71-13.435,0c-1.733,1.733-5.267,5.267-7,7	C4.073,30.492,4.073,36.508,7.782,40.218z M11.318,30.318c1.02-1.02,6.237-6.237,7-7c1.757-1.757,4.607-1.757,6.364,0	c1.757,1.757,1.757,4.607,0,6.364c-0.763,0.763-5.98,5.98-7,7c-1.757,1.757-4.607,1.757-6.364,0	C9.561,34.925,9.561,32.075,11.318,30.318z"
                ></path>
                <path
                  d="M23.609,22.509c0,0-0.609-1.509,0.77-3.131l1.369-1.37c-3.165-1.583-7.022-1.285-9.926,0.888	C15,22,16.197,25.439,16.197,25.439c1.04-1.04,1.872-1.872,2.121-2.121C19.758,21.879,21.851,21.613,23.609,22.509z"
                  opacity=".05"
                ></path>
                <path
                  d="M22.827,22.193c-0.082-0.664-0.178-2.024,1.022-3.345c0.07-0.07,0.92-0.94,1.143-1.163	c-2.642-1.109-5.689-0.896-8.192,0.57c-0.849,2.578-0.317,5.522,0,6.582c0.743-0.743,1.324-1.324,1.519-1.519	C19.548,22.088,21.254,21.714,22.827,22.193z"
                  opacity=".07"
                ></path>
                <path
                  fill="#1b9de2"
                  d="M40.218,7.782c-3.71-3.71-9.725-3.71-13.435,0c-1.733,1.733-5.267,5.267-7,7	c-3.71,3.71-3.71,9.725,0,13.435c3.71,3.71,9.725,3.71,13.435,0c1.733-1.733,5.267-5.267,7-7	C43.927,17.508,43.927,11.492,40.218,7.782z M36.682,17.682c-1.02,1.02-6.237,6.237-7,7c-1.757,1.757-4.607,1.757-6.364,0	c-1.757-1.757-1.757-4.607,0-6.364c0.763-0.763,5.98-5.98,7-7c1.757-1.757,4.607-1.757,6.364,0	C38.439,13.075,38.439,15.925,36.682,17.682z"
                ></path>
                <path
                  d="M24.386,25.476c0,0,0.614,1.524-0.765,3.146l-1.369,1.37c3.165,1.583,7.022,1.285,9.926-0.888	C33,26,31.803,22.561,31.803,22.561c-1.04,1.04-1.872,1.872-2.121,2.121C28.242,26.121,26.09,26.395,24.386,25.476z"
                  opacity=".05"
                ></path>
                <path
                  d="M25.188,25.806c0.082,0.664,0.163,2.025-1.037,3.346c-0.07,0.07-0.92,0.92-1.143,1.143	c2.642,1.109,5.718,0.897,8.196-0.628c0.849-2.578,0.314-5.445-0.004-6.504c-0.743,0.743-1.324,1.324-1.519,1.519	C28.452,25.912,26.673,26.271,25.188,25.806z"
                  opacity=".07"
                ></path>
                <path
                  fill="#0078d4"
                  d="M24.682,23.318c1.757,1.757,1.757,4.607,0,6.364c-0.763,0.763-5.98,5.98-7,7l3.536,3.536	c1.733-1.733,5.267-5.267,7-7c3.71-3.71,3.71-9.725,0-13.435L24.682,23.318z"
                ></path>
              </svg>
              <span className="text-gray-700 font-semibold">
                Original Url :
                <a
                  href={recipeInfo.sourceUrl}
                  target="_blank"
                  className="text-[#df2020] ml-2"
                >
                  Click Here!!
                </a>
              </span>
            </li>
            <li className="w-full flex gap-2 justify-start items-center p-4 rounded-lg shadow-md bg-white">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="SVGID_1__Ov4kJCn8JtAH_gr1"
                  x1="5.327"
                  x2="38.083"
                  y1="520.657"
                  y2="487.901"
                  gradientTransform="matrix(1 0 0 -1 0 526)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#889097"></stop>
                  <stop offset=".331" stopColor="#848c94"></stop>
                  <stop offset=".669" stopColor="#78828b"></stop>
                  <stop offset="1" stopColor="#64717c"></stop>
                </linearGradient>
                <path
                  fill="url(#SVGID_1__Ov4kJCn8JtAH_gr1)"
                  d="M43.4,19.2c-2.4,0-4.7-1.3-6-3.5c-1.2-2.1-1.2-4.6-0.2-6.7c-2.1-1.9-4.6-3.3-7.4-4.2C28.6,6.8,26.4,8,24,8	s-4.6-1.2-5.8-3.1c-2.8,0.8-5.3,2.3-7.4,4.2c1,2,1.1,4.6-0.2,6.7c-1.3,2.2-3.6,3.5-6,3.5C4.2,20.8,4,22.4,4,24	c0,1.3,0.1,2.5,0.4,3.8c2.5-0.1,4.9,1.2,6.2,3.5c1.4,2.4,1.2,5.2-0.2,7.3c2.1,1.9,4.6,3.5,7.3,4.4c1.1-2.3,3.5-4,6.3-4	s5.2,1.6,6.3,4c2.8-0.9,5.3-2.4,7.3-4.4c-1.4-2.1-1.6-5-0.2-7.3c1.3-2.3,3.7-3.5,6.2-3.5c0.2-1.2,0.4-2.5,0.4-3.8	C44,22.4,43.8,20.8,43.4,19.2z"
                ></path>
                <path
                  d="M30,18.1v1.3c-0.6-0.7-1.6-1.3-3.4-1.3h-4v6.6l-2.3-6.6h-3.7l-3.8,10.4H17l0.6-1.9h1.5l0.6,1.9h6.7v-2.9	c1.2,0,2.2-0.4,3-1c0.2-0.2,0.3-0.3,0.5-0.5v4.4h3.9V18.1H30z M26.5,22.2v-0.6c0.3,0,0.3,0.1,0.3,0.3C26.7,22.1,26.7,22.2,26.5,22.2	z"
                  opacity=".05"
                ></path>
                <path
                  d="M26.6,18.6h-3.5v9l-3.2-9H17L13.5,28h3.1l0.6-1.9h2.3l0.6,1.9H26v-2.9h0.4c1.1,0,2.1-0.3,2.8-0.9	c0.7-0.6,1.1-1.4,1.1-2.4C30.2,20.3,29.6,18.6,26.6,18.6z M18,23.7l0.4-1.2l0.4,1.2H18z M26.2,22.7H26v-1.6h0.2c0.9,0,1,0.4,1,0.8	C27.2,22.4,27.1,22.7,26.2,22.7z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M22.5,27.5h-2.1l-0.6-1.9h-3l-0.6,1.9h-2.1l3.1-8.4h2.2L22.5,27.5z M19.5,24.2l-0.9-2.8	c-0.1-0.2-0.1-0.5-0.1-0.8h0c0,0.2-0.1,0.5-0.1,0.7l-0.9,2.8H19.5z"
                ></path>
                <rect
                  width="2.9"
                  height="9.4"
                  x="30.5"
                  y="18.6"
                  opacity=".07"
                ></rect>
                <path
                  fill="#fff"
                  d="M25.5,24.6v2.9h-1.9v-8.4h3c2.1,0,3.2,0.9,3.2,2.7c0,0.8-0.3,1.5-0.9,2s-1.4,0.8-2.4,0.8H25.5z M25.5,20.6v2.6	h0.7c1,0,1.5-0.4,1.5-1.3c0-0.9-0.5-1.3-1.5-1.3H25.5z"
                ></path>
                <path fill="#fff" d="M32.9,27.5H31v-8.4h1.9V27.5z"></path>
              </svg>
              <span className="text-gray-700 font-semibold">
                API Powered By :
                <strong className="text-[#df2020]">
                  {" "}
                  <a
                    href="http://spoonacular.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    spoonacular.com
                  </a>
                </strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="similar-recipes col-span-full w-full">
          <h1 className="text-left mb-8">Similar Recipes</h1>

          <div className="similar-container grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {similarRecipes.map((recipe) => (
              <Link
                className="w-[300px] ml-auto md:w-[400px]"
                to="/recipePage"
                key={recipe.id}
                onClick={() => handleRecipeId(recipe.id)}
              >
                <div className="similar-card shadow hover:shadow-lg">
                  <div className="content">
                    <div className="front">
                      <div className="img">
                        <img
                          className="cover"
                          src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`}
                          alt={recipe.id}
                        />
                      </div>

                      <div className="front-content flex justify-between">
                        <small className=""></small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>{recipe.title}</strong>
                            </p>
                          </div>
                          <p className="card-footer">
                            {recipe.readyInMinutes} Mins &nbsp; | &nbsp;{" "}
                            {recipe.servings} Serving
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={`popup ${showPopup ? "active" : ""}`}>
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <p>Item has been added to cart!</p>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center">No Recipe Found</h1>
    </div>
  );
}

export default RecipePage;
