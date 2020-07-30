import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Component/MainPage";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import MenuPage from "./Component/MenuPage";
import StartCooking from "./Component/StartCooking";
import FoodPage from "./Component/FoodPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/food/:id" component={FoodPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
