import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-Conatiner">
        <div className="Footer-options">
          <img src="./Icons/Circle_Home.png" alt="" />
          <a href="">Home</a>
        </div>
        <div className="Footer-options">
          <img src="./Icons/Long_Search.png" alt="" />
          <a href="">Search</a>
        </div>
        <div className="Footer-options">
          <img src="./Icons/Add_Circle.png" alt="" />
          <a href="">Add/join</a>
        </div>
        <div className="Footer-options">
          <img src="./Icons/Alerts.png" alt="" />
          <a href="">Alerts</a>
        </div>
    </div>
  );
};

export default Footer;
