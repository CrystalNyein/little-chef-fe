import React from "react";
import GetStarted from "./GetStarted";
import StartCooking from "./StartCooking";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <React.Fragment>
      <GetStarted />
      <StartCooking />
    </React.Fragment>
  );
};

export default MainPage;
