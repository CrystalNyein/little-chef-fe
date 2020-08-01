import React from "react";
import Cook from "../Assets/cook.svg";
import Choose from "../Assets/choose.svg";
import Enjoy from "../Assets/enjoy.svg";
import "./StartCooking.css";

const StartCooking = () => {
  return (
    <div id="howItWork" className="StartCooking container">
      <div className="row cook-title my-3">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold text-capitalize my-2">
            delicious meal is just 3 steps away
          </h3>
        </div>
      </div>
      <div className="row cooking-step">
        <div className="col-md-4 text-center step-choose">
          <img src={Choose} className="my-3" alt="Choose recipe" />
          <h5 className="font-weight-bold text-uppercase">Choose</h5>
          <p>
            Choose a meal from our wide varieties of deliciously prepared meal
            recipes that catches your taste bug most.
          </p>
        </div>
        <div className="col-md-4 text-center step-cook">
          <img src={Cook} className="my-3" alt="cooking" />
          <h5 className="font-weight-bold text-uppercase">Cook</h5>
          <p>
            Our meal recipes come pre-measured and prepped, saving you time. All
            you have to do is follow easy step-by-step instructions with photos.
          </p>
        </div>
        <div className="col-md-4 text-center step-enjoy">
          <img src={Enjoy} className="my-3" alt="cooking" />
          <h5 className="font-weight-bold text-uppercase">Enjoy</h5>
          <p>
            Go ahead, pat yourself on the back. You'll be amazed by the tasty,
            restaurant-worthy meal you cooked. New recipes every week!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <a
            href="/menu"
            className="btn start-btn text-left font-weight-bold text-uppercase my-3 rounded-pill"
          >
            Start Cooking
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartCooking;
