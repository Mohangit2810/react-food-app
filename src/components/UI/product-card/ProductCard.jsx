/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { foodCartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
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

  const addToCart = () => {
    dispatch(
      foodCartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    setShowPopup(true);
  };

  return (
    <>
      <div className="product__item">
        <div className="product__img ">
          <img src={image01} alt="product-img" className="w-24 mx-auto" />
        </div>

        <div className="product__content">
          <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
          <div className=" flex items-center justify-between ">
            <span className="product__price">${price}</span>
            <button className="cartButton addTOCart__btn" onClick={addToCart}>
              Add to Cart
            </button>
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
    </>
  );
};

export default ProductCard;
