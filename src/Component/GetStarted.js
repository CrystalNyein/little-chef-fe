import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <div className="h-100 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-5  get-started-content">
            <h1 className="font-weight-bold text-left text-uppercase header1">
              Recipe is a story that end with a good meal
            </h1>
            <p className="text-left">
              Now offering varieties of food recipes, which are all fast and
              easy to be cooked.
            </p>
            <a
              className="text-left font-weight-bold btn text-uppercase mt-3 start"
              href="#"
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
