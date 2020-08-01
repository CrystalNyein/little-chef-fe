import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer text-center text-white border-top shadow">
      <div className="logo-footer py-3 d-flex flex-row justify-content-between flex-wrap">
        <p className="ml-3 h6">&copy;All rights reserved</p>
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
          <a href="" className="px-3 py-1 text-success mr-3">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
