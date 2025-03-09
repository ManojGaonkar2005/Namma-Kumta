import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header-Conatiner">
      <div className="Header-Logo">
        <img src="./Images/Nam_Kumta.png" alt="" />
        <a href="">Namma Kumata</a>
      </div>
      <div className="Header-left">
        <div className="Img-1">
          <img src="./Icons/bell.png" alt="" />
        </div>
        <div className="Img-2">
          <img src="./Icons/user.png" alt="" />
        </div>
        <div className="Img-3">
          <img src="./Icons/Language.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
