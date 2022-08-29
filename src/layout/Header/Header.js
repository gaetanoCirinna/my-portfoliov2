import React, { useEffect, useState } from "react";
import "./Header.scss";
import { window } from "browser-monads";

import logo from "./../../assets/icons/logo.png";
const Header = () => {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("project")) {
      console.log("yuppi");
      setDark(true);
    }
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2">
      <a href="/">
        <img width={48} height={48} src={logo}></img>
      </a>
      <nav className={`nav ${isDark ? "nav-dark" : "nav-light"}`}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#presentation">About</a>
          </li>
          <li>
            <a href="#contactMe">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
