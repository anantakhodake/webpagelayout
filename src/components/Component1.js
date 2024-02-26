import React from "react";
import "./Component1.css";
import background from "./images/background.webp";
import rohit from "./images/rohit.jpg";

function Component1() {
  return (
    <div className="main_container">
      <div className="container1">
        <div className="img_div"></div>
      </div>
      <div className="container2">
        <h5>This is Heading</h5>
        <h1>
          We create a strategic <br /> Webflow Website For <br /> Passionate
          Entreprenours
        </h1>
        <button>Show More</button>
      </div>
    </div>
  );
}

export default Component1;
