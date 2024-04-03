/* eslint-disable react/prop-types */

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/recipe-cart/recipeCartSlice";

function RecipeCartItem({ item }) {
  const { id, image, name, price, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="cart__item p-4">
      <div className="cart__item-info flex items-center gap-4">
        <img
          src={`https://img.spoonacular.com/ingredients_500x500/${image}`}
          alt="product-img"
          className="w-16 h-16 object-cover rounded-md"
        />

        <div className="cart__product-info flex flex-row w-full justify-between gap-4">
          <div>
            <h6 className="cart__product-title">{name}</h6>
            <p className="flex items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="flex items-center gap-4">
              <span
                className="increase__btn cursor-pointer"
                onClick={incrementItem}
              >
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span
                className="decrease__btn cursor-pointer"
                onClick={decreaseItem}
              >
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn cursor-pointer" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCartItem;
