import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Makeup from "./Components/Makeup/Makeup";
import Photography from "./Components/Photography/Photography";
import "./App.css"
const App = () => {
  return (
    <div className="Container">
      <div className="header">
        <Header />
      </div>
      <div className="Main-Content">
        <Photography />
        {/* <Makeup /> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
