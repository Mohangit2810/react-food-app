import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          &quot;This food delivery app has changed my life! The variety of
          restaurants and fast delivery times are unmatched. The app is easy to
          use and the customer service is always helpful. Highly
          recommend!&quot;
        </p>
        <div className=" slider__content flex items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &quot;I&apos;ve tried many pizza delivery apps, but this one truly
          stands out. The pizza is always hot, fresh, and incredibly tasty. The
          delivery is prompt and the app is user-friendly. I&apos;m definitely
          sticking with this app for my pizza cravings!&quot;
        </p>
        <div className="slider__content flex items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &quot;I love the convenience of this app. I can order food from my
          favorite restaurants with just a few clicks. The app is easy to
          navigate and the delivery is always on time. I&apos;m a loyal customer
          and highly recommend this app to anyone who loves good food!&quot;
        </p>
        <div className="slider__content flex items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
