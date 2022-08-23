import React from "react";
import "./Header.scss";

import logo from "./../../assets/icons/logo.png";
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <a href="/">
        <img width={48} height={48} src={logo}></img>
      </a>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
