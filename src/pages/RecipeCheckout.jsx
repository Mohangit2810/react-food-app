/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

function RecipeCheckout({ addShippingInfo }) {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const cartTotalAmount = useSelector(
    (state) => state.recipeCart.recipeTotalAmount
  );
  const shippingCost = 30;
  const history = useNavigate();

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const newShippingInfo = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    addShippingInfo(newShippingInfo);

    history("/confirmation");
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="customer-name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="customer-email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    name="customer-number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="customer-country"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="customer-city"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    name="customer-code"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="block w-full border rounded px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="addTOCart__btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Place Order
                </button>
              </form>
            </div>

            <div className="checkout__bill">
              <h6 className="flex items-center justify-between mb-3">
                Subtotal: <span>${cartTotalAmount.toFixed(2)}</span>
              </h6>
              <h6 className="flex items-center justify-between mb-3">
                Shipping: <span>${shippingCost.toFixed(2)}</span>
              </h6>
              <div className="checkout__total">
                <h5 className="flex items-center justify-between">
                  Total: <span>${totalAmount.toFixed(2)}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default RecipeCheckout;
