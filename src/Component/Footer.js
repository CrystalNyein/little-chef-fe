import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer text-center text-white border-top shadow">
      <div className="container">
        <div className="logo-footer py-3 d-flex flex-row justify-content-between">
          <p>&copy;All rights reserved</p>
          <div className="link">
            <a
              href=""
              className="border-right border-secondary px-3 py-1 text-success"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href=""
              className="border-right border-secondary px-3 py-1 text-success"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href=""
              className="border-right border-secondary px-3 py-1 text-success"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="px-3 py-1 text-success">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
