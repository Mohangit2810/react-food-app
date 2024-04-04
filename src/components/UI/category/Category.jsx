import { Link } from "react-router-dom";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Row Meat",
    imgUrl: categoryImg04,
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
                <div className="category__img">
                  <img
                    src={item.imgUrl}
                    alt="category__item"
                    className="w-full"
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
