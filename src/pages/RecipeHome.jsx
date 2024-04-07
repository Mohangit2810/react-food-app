/* eslint-disable react/prop-types */
import { useState } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";

import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import RecipeCategory from "../components/UI/category/RecipeCategory.jsx";
import IngredientCard from "../components/UI/product-card/IngredientCard";
import ingResults from "../assets/fake-data/ingredientResults.js";
import recipeHome from "../assets/fake-data/recipeHome.js";
import recipeBurger from "../assets/fake-data/recipeBurger.js";
import recipePizza from "../assets/fake-data/recipePizza.js";
import recipePasta from "../assets/fake-data/recipePasta.js";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import networkImg from "../assets/images/recipe-testimonial.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const RecipeHome = ({ handleCuisine, handleRecipeId, layout }) => {
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState(recipeHome);

  return (
    <Helmet title="Home">
      {/*-------------------- Hero Section ------------------------*/}
      <section id="hero_section" className="!bg-hero ">
        <div className="container flex items-center justify-center">
          <div className="hero__content mt-20 md:mt-2 flex flex-col items-center">
            <h5 className="mb-3 text-white">Welcome to Our Feastify!</h5>
            <h1 className="mb-4 hero__title text-white text-center">
              <span>Delicious</span> dishes,
              <br /> that you can cook <span>youself</span>!
            </h1>
            <p>
              Discover the best foods from around the world and enjoy them in
              your kitchen!
            </p>
            <Link to="/foods">
              <button className="flex gap-6 items-center justify-center text-white bg-[#ff5f00] hover:text-[#ff5f00] hover:bg-white  font-medium rounded-full text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 mt-4 transition-all ease-in-out delay-200  ">
                See all Recipes
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                >
                  <path d="M 49.011719 20.876953 A 1.0001 1.0001 0 0 0 48.15625 22.423828 C 48.15625 22.423828 49.310646 24.245605 51.173828 26.310547 C 52.725124 28.029829 54.858354 29.800168 57.259766 31.027344 C 53.445228 34.053454 50.758235 36.490715 48.492188 39.095703 C 49.157266 35.776356 50.7333 33.6417 52.65625 31.71875 A 1.0001 1.0001 0 0 0 51.949219 30.011719 L 4.9492188 30.011719 A 1.0001 1.0001 0 1 0 4.9492188 32.011719 L 49.736328 32.011719 C 47.780968 34.419832 46.238103 37.49908 46.136719 42.089844 A 1.0001 1.0001 0 0 0 47.953125 42.689453 C 50.825054 38.634737 53.794426 36.280613 59.621094 31.671875 A 1.0001 1.0001 0 0 0 59.337891 29.947266 C 56.830218 29.047897 54.405771 26.907511 52.658203 24.970703 C 50.910636 23.033895 49.84375 21.351562 49.84375 21.351562 A 1.0001 1.0001 0 0 0 49.011719 20.876953 z"></path>
                </svg>
              </button>
            </Link>

            <div className="hero__service flex items-center gap-5 mt-5">
              <p className="flex items-center gap-2">
                <span className="shipping__icon">
                  <i className="ri-restaurant-line"></i>
                </span>{" "}
                Easy to cook
              </p>
              <p className="flex items-center gap-2">
                <span className="shipping__icon">
                  <i className="ri-knife-line"></i>
                </span>{" "}
                Order Ingredients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------- Category Section ------------------------*/}
      <section className="pt-0 recipeCategory">
        <RecipeCategory handleCuisine={handleCuisine} />
      </section>

      {/*-------------------- Feature Section ------------------------*/}
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="feature__subtitle mb-4">What we serve</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
            <p className="feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureData.map((item, index) => (
              <div key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-1/4 mx-auto mb-3"
                  />
                  <h5 className="font-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*-------------------- Popular Recipe Section ------------------------*/}
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2>Popular Recipe</h2>
          </div>

          <div className="food__category flex justify-center items-center gap-4 mt-4">
            <button
              className={`all__btn popButton ${
                category === "ALL" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setAllProducts(recipeHome);
                setCategory("ALL");
              }}
            >
              All
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "BURGER" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setAllProducts(recipeBurger);
                setCategory("BURGER");
              }}
            >
              <img src={foodCategoryImg01} alt="" className="w-8" />
              Burger
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "PIZZA" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setAllProducts(recipePizza);
                setCategory("PIZZA");
              }}
            >
              <img src={foodCategoryImg02} alt="" className="w-8" />
              Pizza
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "PASTA" ? "foodBtnActive" : ""
              }`}
              onClick={() => {
                setAllProducts(recipePasta);
                setCategory("PASTA");
              }}
            >
              <img src={foodCategoryImg03} alt="" className="w-8" />
              Pasta
            </button>
          </div>

          <ul className=" container mt-8 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {allProducts.map((result, index) => (
              <Link
                to="/recipePage"
                key={index}
                onClick={() => handleRecipeId(result.id)}
              >
                <li className="similar-card shadow hover:shadow-2xl">
                  <div className="content">
                    <div className="front">
                      <div className="img">
                        <img
                          className="cover"
                          src={`https://spoonacular.com/recipeImages/${result.id}-312x231.jpg`}
                          alt={result.id}
                        />
                      </div>
                      <div className="front-content flex justify-between">
                        <small className="badge first-letter:uppercase">
                          {result.dishTypes[0]}
                        </small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>{result.title}</strong>
                            </p>
                          </div>
                          <p className="card-footer">
                            {result.readyInMinutes} Mins &nbsp; | &nbsp;{" "}
                            {result.servings} Serving
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>

      {/*-------------------- Popular Ingredients Section ------------------------*/}
      <section className="pt-0">
        <div className="container mx-auto">
          <div className="text-center mb-5">
            <h2>Popular Ingredients</h2>
          </div>

          <ul className=" container mt-8 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {ingResults.map((result, index) => (
              <IngredientCard result={result} key={index} />
            ))}
          </ul>
        </div>
      </section>

      {/*-------------------- Why Choose Us Section ------------------------*/}
      <section className="why__choose-us bg-whyRecipe bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1"></div>
            <div className="col-span-1 md:col-span-1">
              <div className="why__feastify">
                <h2 className="feastify-title text-white mb-4">
                  Why <span className="text-[#ff5f00]">Feastify?</span>
                </h2>
                <p className="feastify-desc text-white leading-loose">
                  Feastify is your one-stop solution for all your culinary
                  adventures. We offer a wide range of recipes from various
                  cuisines, all curated and tested by our team of food experts.
                  Our platform is designed to be user-friendly, making it easy
                  for anyone to find and follow our recipes. Choose Feastify,
                  because we make cooking a joy, not a chore.
                </p>
                <ul className="mt-4 list-disc pl-4">
                  <li className="font-bold text-[#ff5f00] mb-4">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty Recipes
                    </p>
                    <p className="text-white">
                      Our recipes use fresh ingredients for the best taste
                      experience.
                    </p>
                  </li>
                  <li className="font-bold text-[#ff5f00] mb-4">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Easy to follow
                    </p>
                    <p className="text-white">
                      Our recipes are easy to follow, even for beginners.
                    </p>
                  </li>
                  <li className="font-bold text-[#ff5f00] mb-4">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order missing
                      ingredients!
                    </p>
                    <p className="text-white">
                      Don&apos;t have all the ingredients? No problem! Order
                      them directly from our platform.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------- Testimonial Section ------------------------*/}
      <section>
        <div className="container mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Don&apos;t just take our word for it. Here&apos;s what our
                  customers have to say about their experience with Feastify.
                </p>
                <TestimonialSlider layout={layout} />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <img src={networkImg} alt="testimonial-img" className="w-3/5" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default RecipeHome;
