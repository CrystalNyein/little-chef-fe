import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <div className="h-100 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-5  get-started-content mx-3">
            <h1 className="display-4 font-weight-bold text-left text-uppercase header1 ml-3">
              Recipe is a story that ends with food
            </h1>
            <p className="h2 text-left mb-3 ml-3">
              <strong>Little Chef</strong> is now offering varieties of food
              recipes, which are all fast and easy to be cooked. <br />
            </p>
            <a
              className="text-left font-weight-bold btn text-uppercase mt-3 start-btn ml-3 rounded-pill"
              href="/menu"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
