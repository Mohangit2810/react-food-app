/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";

import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import whyFeast from "../assets/images/why-feast.png";

import testimonial from "../assets/images/testimonial.png";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "The food you love, delivered to your door with care.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Enjoy your favorite food in the comfort of your home.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Order online and pick up at your nearest location.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      {/* -------------- Hero Section -----------------*/}
      <section id="hero_section">
        <div className="container flex items-center justify-center">
          <div className="hero__content flex flex-col items-center">
            <h5 className="mb-3 text-white">Welcome to Our Feastify!</h5>
            <h1 className="mb-4 hero__title text-white text-center">
              <span>Delicious</span> dishes,
              <br /> delivered to your <span>door</span>!
            </h1>
            <p>
              Discover delicious dishes crafted with passion and served with
              love
            </p>
            <Link to="/foods">
              <button className="flex gap-6 items-center justify-center text-white bg-[#ff5f00] hover:text-[#ff5f00] hover:bg-white  font-medium rounded-full text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 mt-4 transition-all ease-in-out delay-200  ">
                See all foods
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
                  <i className="ri-car-line"></i>
                </span>{" "}
                Minimal shipping charge
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
      </section>

      {/* -------------- Category Section -----------------*/}
      <section className="pt-0">
        <Category />
      </section>

      {/* -------------- About Section -----------------*/}
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="feature__subtitle mb-4">What we serve</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Indulge in culinary delights that will tantalize your taste buds
              and leave you craving for more.
            </p>
            <p className="feature__text">
              Our chefs are dedicated to serving you the best dishes made from
              the freshest ingredients.
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

      {/* -------------- Popular Food Section -----------------*/}
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <h2>Popular Foods</h2>
          </div>

          <div className="food__category flex justify-center items-center gap-4 mt-4">
            <button
              className={`all__btn popButton ${
                category === "ALL" ? "foodBtnActive" : ""
              }`}
              onClick={() => setCategory("ALL")}
            >
              All
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "BURGER" ? "foodBtnActive" : ""
              }`}
              onClick={() => setCategory("BURGER")}
            >
              <img src={foodCategoryImg01} alt="" className="w-8" />
              Burger
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "PIZZA" ? "foodBtnActive" : ""
              }`}
              onClick={() => setCategory("PIZZA")}
            >
              <img src={foodCategoryImg02} alt="" className="w-8" />
              Pizza
            </button>
            <button
              className={`popButton flex items-center gap-2 ${
                category === "BREAD" ? "foodBtnActive" : ""
              }`}
              onClick={() => setCategory("BREAD")}
            >
              <img src={foodCategoryImg03} alt="" className="w-8" />
              Bread
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {allProducts.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- Why Choose Us Section -----------------*/}
      <section className="why__choose-us">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <img
                src={whyFeast}
                alt="why-tasty-treat"
                className="w-3/4 ml-16"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Feastify?</span>
                </h2>
                <p className="tasty__treat-desc">
                  At Feastify, we believe in delivering not just food, but
                  culinary experiences. Our commitment to quality ingredients,
                  innovative recipes, and exceptional service makes us the
                  preferred choice for food lovers. We strive to exceed
                  expectations with every order, ensuring that our customers
                  enjoy a memorable dining experience right at their homes.
                </p>
                <ul className="mt-4 list-disc pl-4 flex flex-col gap-4">
                  <li className="choose__us-title">
                    <p className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                    <p className="choose__us-desc mt-2">
                      At Feastify, we believe in delivering not just food, but a
                      culinary experience.
                    </p>
                  </li>
                  <li className="choose__us-title">
                    <p className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose__us-desc mt-2">
                      We provide 24/7 customer support services.
                    </p>
                  </li>
                  <li className="choose__us-title">
                    <p className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc mt-2">
                      We deliver food to your doorstep from any location.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- Hot Pizza Section -----------------*/}
      <section className="pt-0">
        <div className="container mx-auto">
          <div className="text-center mb-5">
            <h2>Hot Pizza</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotPizza.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- Testimonials Section -----------------*/}
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <div className="testimonial">
                <h4 className="testimonial__subtitle text-lg mb-4">
                  Testimonials
                </h4>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Our customers love us! Here are some of the reviews we have
                  received from our satisfied customers.
                </p>
                <TestimonialSlider />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <img src={testimonial} alt="testimonial-img" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
