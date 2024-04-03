import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import RecipeCartItem from "./RecipeCartItem";
import { useDispatch, useSelector } from "react-redux";
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

        <div className="cart__bottom flex items-center justify-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/recipeCheckout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
}

export default RecipeCart;
