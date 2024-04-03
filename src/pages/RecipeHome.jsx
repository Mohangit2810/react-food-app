/* eslint-disable react/prop-types */
import { useState } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";

import heroImg from "../assets/images/hero.png";
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

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

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

const RecipeHome = ({ handleCuisine, handleRecipeId }) => {
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState(recipeHome);

  return (
    <Helmet title="Home">
      <section id="hero_section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to Cook at your Home!</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> Recipe at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>
                <div className="hero__btns flex items-center gap-5 mt-4">
                  <button className="order__btn flex items-center justify-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service flex items-center gap-5 mt-5">
                  <p className="flex items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 recipeCategory">
        <RecipeCategory handleCuisine={handleCuisine} />
      </section>

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

      <section className="why__choose-us">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <img src={whyImg} alt="why-tasty-treat" className="w-full" />
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <ul className="mt-4 list-disc pl-4">
                  <li className="choose__us-title">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </li>
                  <li className="choose__us-title">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </li>
                  <li className="choose__us-title">
                    <p className="d-flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <TestimonialSlider />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <img src={networkImg} alt="testimonial-img" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default RecipeHome;
