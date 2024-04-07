/* eslint-disable react/prop-types */

import startOrder from "../assets/images/start-order.png";
import startCook from "../assets/images/start-cook.png";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Start({ goToLayout }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Reset animation when element is completely out of view
  });
  const orderProps = useSpring({
    opacity: inView ? 1 : 0,

    transform: `translate3d(${inView ? 0 : -185}px,0, 0)`,

    config: {
      duration: 1000, // Adjust the duration (in milliseconds) as needed
    },
  });
  const cookProps = useSpring({
    opacity: inView ? 1 : 0,

    transform: `translate3d(${inView ? 0 : 185}px,0, 0)`,

    config: {
      duration: 1000, // Adjust the duration (in milliseconds) as needed
    },
  });
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="relative h-1/2 md:h-full w-full bg-[#0088D1] gap-6 px-16 flex items-center justify-center">
        <img
          className="absolute z-3 w-[65%] md:w-full max-[600px]:top-[16px]  md:bottom-1/4 lg:bottom-0 left-[-22px] md:left-8  rotate-[320deg] md:rotate-0"
          src={startOrder}
          alt="order"
        />
        <animated.div ref={ref} style={orderProps}>
          <div className="flex flex-col items-center justify-center z-10 gap-6 md:mb-72">
            <h1 className="text-white text-4xl sm:text-6xl text-center">
              Order Food
            </h1>
            <p className="text-white text-center">
              Check out amazing foods and order them anywhere and anytime!
              <br />
              Click the button below to get started !!
            </p>
            <button
              type="button"
              onClick={() => goToLayout("Order")}
              className="flex gap-6 items-center justify-center text-white hover:text-[#0088D1] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-[#0088D1] dark:hover:bg-white dark:focus:ring-white"
            >
              Order
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
          </div>
        </animated.div>
      </div>
      <div className="relative h-1/2 md:h-full w-full bg-[#FFA000] px-16 flex items-center justify-center">
        <img
          className="absolute z-3 w-2/5 lg:w-[45%] bottom-[-11px] md:top-1/4 xl:-top-8 left-[60%] md:left-1/3 rotate-45 md:rotate-90"
          src={startCook}
          alt="cook"
        />
        <animated.div ref={ref} style={cookProps}>
          <div className="flex flex-col items-center justify-center z-10 gap-6 md:mt-72">
            <h1 className="text-white text-4xl sm:text-6xl text-center">
              Nah I&apos;d Cook
            </h1>
            <p className="text-white text-center">
              Check out amazing Recipes and cook yourself Restaraunt style
              Meals!
              <br />
              Click the button below to get started !!
            </p>

            <button
              type="button"
              onClick={() => goToLayout("Food")}
              className="flex gap-6 items-center justify-center text-white hover:text-[#FFA000] border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-xl font-bold px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-[#FFA000] dark:hover:bg-white dark:focus:ring-white"
            >
              Cook
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
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Start;
