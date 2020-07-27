import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-sm navbar-light border-bottom shadow">
        <a className="navbar-brand" href="#">
          Little Chef
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it works
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item get-started rounded">
              <a className="nav-link start" href="#">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
