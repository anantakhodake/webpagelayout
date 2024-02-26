import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h2>Webpage Layout</h2>
      <ul className="nav_lists">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
      </ul>
      <div className="button">
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
