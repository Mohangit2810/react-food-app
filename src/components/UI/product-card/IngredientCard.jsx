/* eslint-disable react/prop-types */

import "../../../styles/product-card.css";

import { useEffect, useState } from "react";
import { environment } from "../../../environments/environment";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/recipe-cart/recipeCartSlice";

function IngredientCard({ result }) {
  const { id, name, image } = result;
  const [price, setPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const apiKey = environment.apiKey;

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/${result.id}/information?amount=1&apiKey=${apiKey}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const ingredientInfo = await response.json();
        const ingPrice = ingredientInfo.estimatedCost;
        setPrice(ingPrice.value);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [result.id, apiKey]);
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
    setShowPopup(true);
  };

  return (
    <div>
      <li className="similar-card shadow hover:shadow-2xl">
        <div className="content">
          <div className="front">
            <div className="img">
              <img
                className="cover"
                src={`https://img.spoonacular.com/ingredients_500x500/${result.image}`}
                alt={result.id}
              />
            </div>
            <div className="front-content flex justify-between">
              <small className="badge first-letter:uppercase">
                {result.possibleUnits[0]}
              </small>
              <div className="description">
                <div className="flex justify-around items-center">
                  <p className="title">
                    <strong className="first-letter:uppercase">
                      {result.name}
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
  );
}

export default IngredientCard;
