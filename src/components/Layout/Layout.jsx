import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers.jsx";
import Start from "../../pages/Start.jsx";

import Carts from "../UI/cart/Carts.jsx";
import RecipeCart from "../UI/cart/RecipeCart.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const history = useNavigate();
  const [layout, setLayout] = useState("Food");
  const [start, setStart] = useState(true);

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  function handleLayout(layoutName) {
    setLayout(layoutName);
  }

  function goToLayout(layoutName) {
    setLayout(layoutName);
    setStart(false);
    history(layoutName === "Food" ? "/recipeHome" : "/home");
  }

  return start ? (
    <Start goToLayout={goToLayout} />
  ) : (
    <div className="relative">
      <Header layout={layout} setLayout={setLayout} setStart={setStart} />

      {showCart ? layout === "Food" ? <RecipeCart /> : <Carts /> : null}

      <div>
        <Routes
          layout={layout}
          handleLayout={handleLayout}
          goToLayout={goToLayout}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
