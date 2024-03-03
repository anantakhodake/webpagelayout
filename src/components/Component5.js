import React from "react";
import "./Component5.css";
import rohit from "./images/rohit.jpg";
import coding from "./images/coding.jpg";

function Component5() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "41px", color:"blue" }}>
        Latest Projects{" "}
      </h1>
      <div className="component5_container">
        <div className="card">
          <img src={rohit}></img>
          <h2>Project Title Name</h2>
        </div>
        <div className="card">
          <img src={rohit}></img>
          <h2>Project Title Name</h2>
        </div>
        <div className="card">
          <img src={coding}></img>
          <h2>Project Title Name</h2>
        </div>
      </div>
      <div className="c5button">
        <button className="c5btn">Add more Cards</button>
      </div>
    </>
  );
}

export default Component5;
