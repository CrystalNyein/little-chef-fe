import React, { useState, useEffect } from "react";
import Axios from "axios";
import { appendApiKey } from "../utils";
import "./MenuPage.css";
import FoodItemCard from "./FoodItemCard";
import Loader from "./Loader";

const MenuPage = () => {
  const [menuList, setMenuList] = useState([]);
  const fetchMenuData = async () => {
    const link = appendApiKey("feeds/list-similarities");
    try {
      const res = await Axios.get(link, {
        params: {
          authorId: "Yummly",
          apiFeedType: "moreFrom",
          // start: "0",
          // id: "Soft-and-Chewy-Keto-Sugar-Cookies-9029522",
          // limit: "18",
        },
      });
      setMenuList(
        res.data.feed.filter((feed) => feed.type === "single recipe")
      );
      console.log(res.data.feed);
    } catch (err) {
      setMenuList([]);
    }
  };
  useEffect(() => {
    fetchMenuData();
  }, []);
  return (
    <div className="MenuPage">
      <div className="container bg-white border-left border-right shadow-md">
        {menuList.length > 0 ? (
          <div className="row">
            <div className="col-md-12 my-3">
              <h3 className="font-weight-bold">Just For You</h3>
            </div>
          </div>
        ) : (
          <Loader />
        )}
        <div className="row">
          <div className="col-md-12 d-flex flex-row flex-wrap justify-content-around">
            {menuList &&
              menuList.length > 0 &&
              menuList.map((food, index) => (
                <FoodItemCard key={index} food={food} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
