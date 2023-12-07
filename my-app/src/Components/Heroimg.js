import "./HeroimgStyles.css";

import React from "react";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={bg} alt="bg" />
      </div>
      <div className="content">
        <p>HI, I AM SHUBHI JAIN.</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/Project" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
