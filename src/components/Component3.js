import React from "react";
import "./Component3.css";
import coding from "./images/coding.jpg";

function Component3() {
  return (
    <div className="component3_container">
      <div className="component3_container1">
        <h1 className="c3_heading">This is a Project Heading</h1>
        <p className="p">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
        </p>
        <p style={{ fontSize: "20px" }}>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <button className="c3_button">Show more</button>
      </div>
      <div className="cimg_div">
        <img src={coding}></img>
      </div>
    </div>
  );
}

export default Component3;
