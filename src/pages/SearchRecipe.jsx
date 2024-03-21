/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/search.css";
import { Link } from "react-router-dom";

function SearchRecipe({ handleRecipeId }) {
  const [recipeResults, setrecipeResults] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const apiKey = "585107672c1b407e816e2d9fe6e7a271";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}&number=12&addRecipeInformation=true`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recipie = await response.json();
        setrecipeResults(recipie.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [recipeName]);

  return (
    <div>
      <div className="searchBox mx-auto ">
        <input
          className="searchInput"
          type="text"
          name="recipeName"
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="Search something"
        />
        <button
          className="searchButton flex justify-center items-center"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <g clipPath="url(#clip0_2_17)">
              <g filter="url(#filter0_d_2_17)">
                <path
                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2_17"
                x="-0.418549"
                y="3.70435"
                width="29.7139"
                height="29.7139"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_17"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_17"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_2_17">
                <rect
                  width="28.0702"
                  height="28.0702"
                  fill="white"
                  transform="translate(0.403503 0.526367)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <ul className=" container mt-8 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {recipeResults.map((result, index) => (
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
                      src={`https://spoonacular.com/recipeImages/${result.id}-480x360.jpg`}
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
  );
}

export default SearchRecipe;
