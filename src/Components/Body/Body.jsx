import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Makeup from "../Makeup/Makeup";
import Photography from "../Photography/Photography";
import "./Body.css";
const Body = () => {
  return (
    <div className="Body-Container">
      <div className="Body-Header">
        <Header />
      </div>
      <div className="Body-Content">
        {/* <Photography/> */}
        <Makeup/>
      </div>
      <div className="body-Fotter">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
