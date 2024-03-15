import { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Side Images */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-wrap gap-3">
                <div
                  className="img__item mb-3  flex justify-center items-center"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-1/3" />
                </div>
                <div
                  className="img__item mb-3  flex justify-center items-center"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-1/3" />
                </div>
                <div
                  className="img__item  flex justify-center items-center"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-1/3" />
                </div>
              </div>
            </div>
            {/* Main Image */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-full" />
              </div>
            </div>
            {/* Cart Details */}
            <div className="col-span-2 flex justify-start items-center">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Description and Review */}
            <div className="col-span-full">
              <div className="tabs flex items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <h3 className="mb-6">Please, Submit your Review here</h3>
                  {/* Add more reviews here */}
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className="col-span-full">
              <h2 className="related__Product-title">You might also like</h2>
            </div>
            {relatedProduct.map((item) => (
              <div
                className="col-span-1 md:col-span-1 lg:col-span-1"
                key={item.id}
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
