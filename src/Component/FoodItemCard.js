import React from "react";
import "./FoodItemCard.css";
import { Link } from "react-router-dom";
import { getTrackingId } from "../utils";

const FoodItemCard = ({ food }) => {
  return (
    <div className="FoodItemCard mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={food.display.images[0]}
          className="card-img-top"
          style={{ height: "200px" }}
          alt={food.display.displayName}
        />
        <div className="card-body">
          <h5 className="card-title">{food.display.displayName}</h5>
          <Link to={`/food/${getTrackingId(food["tracking-id"])}`}>
            <div className="btn rounded-pill">Learn More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
