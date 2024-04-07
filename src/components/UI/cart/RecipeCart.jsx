import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import RecipeCartItem from "./RecipeCartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/recipe-cart/recipeCartSlice";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

function RecipeCart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.recipeCart.recipeCartItems);
  const totalAmount = useSelector(
    (state) => state.recipeCart.recipeTotalAmount
  );

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <RecipeCartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom flex flex-col md:flex-row items-center justify-between pb-4">
          <h6>
            Subtotal : <span>${totalAmount.toFixed(2)}</span>
          </h6>
          <div className="flex gap-4">
            <button onClick={clearCart}>Clear Cart</button>
            <button>
              <Link to="/recipeCheckout" onClick={toggleCart}>
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}

export default RecipeCart;
