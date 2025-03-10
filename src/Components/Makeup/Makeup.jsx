import React from "react";
import "./Makeup.css";
import { MakeupData } from "../Data/Card";
const Makeup = () => {
  return (
    <div className="Makeup-Container">
      <div className="Section-Head">
        <img src="./Icons/Arrow-Back.png" alt="" />
        <a href="">Hair & Makeup</a>
      </div>
      <div className="Full-Body-Content">
      {MakeupData.map((item) => (
        <div className="Contagary" key={item.id}>
          <div className="Contagary-upper">
            <div className="Contagary-Img">
              <img src={item.image} alt="" />
            </div>
            <div className="Contagary-details">
              <div className="Contagary-heading">{item.title}</div>
              <div className="Contagary-info">{item.info}</div>
                <div className="Contagary-Rating"> <span className="rating-number">{item.rating}</span>★</div>
            </div>
          </div>
          <div className="Contagary-lower">
            <button>More details</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Makeup;
