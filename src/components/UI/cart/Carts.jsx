import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { foodCartActions } from "../../../store/shopping-cart/cartSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const clearCart = () => {
    dispatch(foodCartActions.clearCart());
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
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom flex flex-col md:flex-row items-center justify-between pb-4">
          <h6>
            Subtotal : <span>${totalAmount.toFixed(2)}</span>
          </h6>
          <div className="flex gap-4">
            <button>
              <Link to="/home" onClick={clearCart}>
                Clear Cart
              </Link>
            </button>
            <button>
              <Link to="/checkout" onClick={toggleCart}>
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
