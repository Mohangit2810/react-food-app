import { Link } from "react-router-dom";
import fastFood from "../../../assets/categories/cat-fast-food.png";
import pizza from "../../../assets/categories/cat-pizza.png";
import asianFood from "../../../assets/categories/cat-asian-food.png";
import bread from "../../../assets/categories/cat-bread.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: fastFood,
  },
  {
    display: "Pizza",
    imgUrl: pizza,
  },

  {
    display: "Asian Food",
    imgUrl: asianFood,
  },

  {
    display: "Bread",
    imgUrl: bread,
  },
];

const Category = () => {
  return (
    <div className="container mx-auto mt-24">
      <h2 className="mb-6 text-center">
        Check out our <span className="text-[#ff5f00]">Popular Food</span>{" "}
        Categories !!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryData.map((item, index) => (
          <div className="mb-4" key={index}>
            <Link to="/foods">
              <div className="category__item flex items-center gap-3">
                <div className="category__img flex justify-center">
                  <img
                    src={item.imgUrl}
                    alt="category__item"
                    className="w-1/2"
                  />
                </div>
                <h6 className="text-lg font-medium">{item.display}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
