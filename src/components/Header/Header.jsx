/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import logo from "../../assets/images/logo-black.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Cook",
    path: "/start",
  },
];

const recipeLinks = [
  {
    display: "Home",
    path: "/recipeHome",
  },
  {
    display: "Search Recipe",
    path: "/searchRecipe",
  },
  {
    display: "View Recipe",
    path: "/recipePage",
  },
  {
    display: "Get Ingredients",
    path: "/getIngredients",
  },
  {
    display: "Recipe Cart",
    path: "/recipeCart",
  },
];

const Header = ({ layout, setStart }) => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const recipeTotalQuantity = useSelector(
    (state) => state.recipeCart.recipeTotalQuantity
  );
  const foodTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  let menu_links = layout === "Food" ? recipeLinks : nav__links;

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="container">
        <div className="nav__wrapper flex items-center justify-between">
          <div
            className="w-24 cursor-pointer p-2"
            onClick={() => setStart(true)}
          >
            <img src={logo} alt="logo" />
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu flex items-center gap-8">
              {menu_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  onClick={
                    item.display === "Cook" ? () => setStart(true) : null
                  }
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right flex items-center justify-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">
                {layout === "Food" ? recipeTotalQuantity : foodTotalQuantity}
              </span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
