/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/recipe-cart/recipeCartSlice";
import { foodCartActions } from "../store/shopping-cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Confirmation({ shippingInfo, layout }) {
  console.log(layout);
  const recipeCartItems = useSelector(
    (state) => state.recipeCart.recipeCartItems
  );
  const recipeTotalAmount = useSelector(
    (state) => state.recipeCart.recipeTotalAmount
  );
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const history = useNavigate();

  const dispatch = useDispatch();
  function clearCartHandler() {
    layout === "Food"
      ? dispatch(cartActions.clearCart())
      : dispatch(foodCartActions.clearCart());
  }

  function clearAndContinueHandler() {
    clearCartHandler();
    layout === "Food" ? history("/recipeHome") : history("/home");
  }
  function continueHandler() {
    layout === "Food" ? history("/recipeHome") : history("/home");
  }

  return (
    <div className="max-w-full mx-auto py-6 px-8 md:px-20 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Yay! Your order has been placed Successfully!
      </h2>
      <h3 className="text-xl font-semibold mb-4">
        Here&apos;s your order Summary
      </h3>

      <div className="">
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-2">Shipping Address</h4>
          <ul className="text-gray-700">
            <li>{shippingInfo.name}</li>
            <li>{shippingInfo.email}</li>
            <li>{shippingInfo.phone}</li>
            <li>{shippingInfo.country}</li>
            <li>{shippingInfo.city}</li>
            <li>{shippingInfo.postalCode}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Order Summary</h4>
          {layout === "Food" ? (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Product Title</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {(layout === "Food" ? recipeCartItems : cartItems).map(
                  (item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-center flex justify-center">
                        <img
                          src={
                            item.image.length < 20
                              ? `https://img.spoonacular.com/ingredients_100x100/${item.image}`
                              : `https://img.spoonacular.com/products/${item.id}-636x393.jpeg`
                          }
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2 text-center first-letter:uppercase">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 text-center">${item.price}</td>
                      <td className="px-4 py-2 text-center">{item.quantity}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Product Title</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {(layout === "Food" ? recipeCartItems : cartItems).map(
                  (item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-center">
                        <img
                          src={item.image01}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2 text-center first-letter:uppercase">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 text-center">${item.price}</td>
                      <td className="px-4 py-2 text-center">{item.quantity}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}

          <div>
            <h5 className="text-lg font-semibold mt-4 mb-2">
              Your Billing Summary
            </h5>
            <p className="text-gray-700">
              Cart Total: $
              {layout === "Food"
                ? recipeTotalAmount.toFixed(2)
                : totalAmount.toFixed(2)}
            </p>
            <p className="text-gray-700">Shipping Cost: $30.00</p>
            <p className="text-gray-700">
              Total Amount: $
              {layout === "Food"
                ? recipeTotalAmount.toFixed(2) + 30
                : totalAmount.toFixed(2) + 30}
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-4">
        Would you like to clear the cart and continue shopping?
      </h4>
      <div className="flex gap-16 mt-2">
        <button
          onClick={clearAndContinueHandler}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Clear and Continue
        </button>
        <button
          onClick={continueHandler}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Just Continue
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
