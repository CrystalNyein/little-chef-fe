import React, { useState, useEffect } from "react";
import "./FoodPage.css";
import Axios from "axios";
import { appendApiKey, shortenDescription, roundUpDecimal } from "../utils";
import Loader from "./Loader";

const FoodPage = ({ match }) => {
  const [food, setFood] = useState({});
  const fetchFood = async () => {
    const link = appendApiKey("feeds/list-similarities");
    try {
      const res = await Axios.get(link, {
        params: {
          start: "0",
          id: match.params.id,
          limit: "18",
        },
      });
      setFood(res.data.feed[0]);
      console.log(res.data.feed[0]);
    } catch (err) {
      setFood({});
    }
  };
  useEffect(() => {
    fetchFood();
  }, []);
  return (
    <div className="FoodPage">
      {food.display ? (
        <div className="container">
          <div className="row flex-wrap">
            <div className="col-md-5 mt-3">
              <h2 className="font-weight-bold">{food.display.displayName}</h2>
              <p className="text-success my-3">
                {[...Array(food.content.details.rating)].map((e, i) => (
                  <i key={i} className="fas fa-star text-success"></i>
                ))}
                {[...Array(5 - food.content.details.rating)].map((e, i) => (
                  <i className="fas fa-star text-secondary" key={i}></i>
                ))}{" "}
                ({food.content.details.numberOfServings})
              </p>
              <br />
              <p className="review">
                <span className="font-weight-bold">
                  {food.content.reviews.reviews[0].user.displayName}
                </span>
                &nbsp;:&nbsp;"{food.content.reviews.reviews[0].text}"
              </p>
            </div>
            <div className="col-md-6 mt-3">
              <img
                src={food.display.images[0]}
                alt={food.display.displayName}
                className="food-img"
              />
            </div>
          </div>
          <hr className="my-3" />
          <div className="row">
            <div className="col-md-12">
              <h4 className="font-weight-bold my-3">Ingredients</h4>
              <br />
              {food.content.ingredientLines.map((ing) => (
                <p>
                  &nbsp;
                  <i className="fas fa-utensils text-success"></i>&nbsp;&nbsp;
                  {roundUpDecimal(ing.quantity)}&nbsp;{ing.unit}&nbsp;
                  <span className="font-weight-bold">{ing.ingredient}</span>
                  {ing.remainder && ", " + ing.remainder}
                </p>
              ))}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-11">
              <h4 className="font-weight-bold my-3">Directions</h4>
              <br />
              {food.content.preparationSteps.map((prep, i) => (
                <p className="text-secondary">
                  <span className="step text-dark">STEP {i + 1}</span> <br />
                  {prep}
                </p>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3 text-center">
              <h3 className="enjoy ">Bon Appetit!</h3>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default FoodPage;
