/* eslint-disable react/prop-types */

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/recipe-cart/recipeCartSlice";
import { Link } from "react-router-dom";

function RecipeCart() {
  const recipeCartItems = useSelector(
    (state) => state.recipeCart.recipeCartItems
  );
  const recipeTotalAmount = useSelector(
    (state) => state.recipeCart.recipeTotalAmount
  );
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="col-span-1">
            {recipeCartItems.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <table className="table-auto border border-collapse border-gray-200 w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Product Title</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {recipeCartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            )}

            <div className="mt-4 mb-8">
              <h6 className="mb-2">
                Subtotal: ${recipeTotalAmount.toFixed(2)}
              </h6>
              <p className="mb-4">
                Taxes and shipping will calculate at checkout
              </p>
              <div className="cart__page-btn">
                <button className="addTOCart__btn me-4">
                  <Link to="/getIngredients">Continue Shopping</Link>
                </button>
                <button className="addTOCart__btn">
                  <Link to="/recipeCheckout">Proceed to checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tr = (props) => {
  const { id, image, name, price, quantity } = props.item;
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
    <tr className="border-b border-gray-200">
      <td className="text-center cart__img-box p-2">
        <img
          src={
            image.length < 20
              ? `https://img.spoonacular.com/ingredients_100x100/${image}`
              : `https://img.spoonacular.com/products/${id}-636x393.jpeg`
          }
          alt=""
        />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">${price}</td>
      <td className="text-center flex gap-2 justify-center items-center">
        <span
          className="py-2 px-3 text-white bg-red-300 cursor-pointer"
          onClick={decreaseItem}
        >
          -
        </span>
        {quantity}px
        <span
          className="py-2 px-3 text-white bg-green-300 cursor-pointer"
          onClick={incrementItem}
        >
          +
        </span>
      </td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default RecipeCart;
