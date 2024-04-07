/* eslint-disable react/prop-types */
import "../../../styles/category.css";
import indianCuisine from "../../../assets/categories/indian-cuisine.png";
import japaneseCuisine from "../../../assets/categories/japanese-cuisine.png";
import italianCuisine from "../../../assets/categories/italian-cuisine.png";
import chineseCuisine from "../../../assets/categories/chinese-cuisine.png";
import { Link } from "react-router-dom";
const categoryData = [
  {
    display: "Indian",
    imgUrl: indianCuisine,
  },
  {
    display: "Italian",
    imgUrl: italianCuisine,
  },

  {
    display: "Japanese",
    imgUrl: japaneseCuisine,
  },

  {
    display: "Chinese",
    imgUrl: chineseCuisine,
  },
];

function RecipeCategory({ handleCuisine }) {
  return (
    <div className="container mx-auto mt-24">
      <h2 className="mb-6 text-center">
        Check out our <span className="text-[#ff5f00]">Popular Recipe</span>{" "}
        Categories !!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryData.map((item, index) => (
          <div
            className="mb-4"
            key={index}
            onClick={() => handleCuisine(item.display)}
          >
            <Link to="/searchRecipe">
              <div className="category__item flex items-center gap-3">
                <div className="category__img">
                  <img
                    src={item.imgUrl}
                    alt="category__item"
                    className="w-[48px]"
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
}

export default RecipeCategory;
