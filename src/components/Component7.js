import React from "react";
import "./Component7.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Component7() {
  return (
    <div className="component7_container">
      <h4>Footer for webpage</h4>
      <ul className="footer_links">
        <li>
          <a>Term of service</a>
        </li>
        <li>
          <a>Privacy</a>
        </li>
        <li>
          <a>Legal</a>
        </li>
      </ul>
      <div className="C7icons">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Component7;
