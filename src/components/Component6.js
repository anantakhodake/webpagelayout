import React from "react";
import "./Component6.css";
import rohit from "./images/rohit.jpg";
import nature from "./images/nature.jpg";
import planet from "./images/planet.jpg";

function Component6() {
  return (
    <div className="c6_containermain">
      <div className="component6_container">
        <div className="C6card">
          <img src={nature}></img>
        </div>
      </div>
      <div className="component6_container">
        <div className="C6card">
          <img src={rohit}></img>
        </div>
      </div>
      <div className="component6_container">
        <div className="C6card">
          <img src={planet}></img>
        </div>
      </div>
      <div className="component6_container">
        <div className="C6card">
          <img src={rohit}></img>
        </div>
      </div>
      <div className="component6_container">
        <div className="C6card">
          <img src={nature}></img>
        </div>
      </div>
    </div>
  );
}

export default Component6;
