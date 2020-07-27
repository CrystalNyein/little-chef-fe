import React from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import GetStarted from "./Component/GetStarted";
import StartCooking from "./Component/StartCooking";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GetStarted />
      <StartCooking />
    </div>
  );
}

export default App;
