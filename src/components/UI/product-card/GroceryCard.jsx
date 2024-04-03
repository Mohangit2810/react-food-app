/* eslint-disable react/prop-types */

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/recipe-cart/recipeCartSlice";

function GroceryCard({ result }) {
  const { id, title, image } = result;
  const name = title;
  let price = 2;
  const dispatch = useDispatch();
  //   const apiKey = "585107672c1b407e816e2d9fe6e7a271";
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(
        //   `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}&number=12&addRecipeInformation=true`,
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
  };
  return (
    <div>
      <Link
        to="/recipeCart"
        // onClick={() => handleRecipeId(result.id)}
      >
        <li className="similar-card shadow hover:shadow-2xl">
          <div className="content">
            <div className="front">
              <div className="img">
                <img
                  className="cover"
                  src={`https://spoonacular.com/productImages/${result.id}-312x231.jpg`}
                  alt={result.id}
                />
              </div>
              <div className="front-content flex justify-between">
                <small className="badge first-letter:uppercase">
                  {/* {result.possibleUnits[0]} */}
                </small>
                <div className="description">
                  <div className="flex justify-around items-center">
                    <p className="title">
                      <strong className="first-letter:uppercase">
                        {result.title}
                      </strong>
                    </p>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default GroceryCard;
