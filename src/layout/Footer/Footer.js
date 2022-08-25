import React from "react";
import "./Footer.scss";

import logo from "./../../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="sun"></div>

      <div className="container skills">
        <div className="row">
          <div className="col-4">
            <div className="row">
              {/* General */}
              <div className="col-6">
                <span>__GENERAL SKILLS AND DEV TOOLS</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascripts</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Python</li>
                </ul>
              </div>
              {/* Build tools and task runner */}
              <div className="col-6">
                <span>__BUILD TOOLS / TASK RUNNERS</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Webpack</li>
                  <li>Gulp</li>
                </ul>
              </div>
              {/* TEMPLATING LANGUAGES */}
              <div className="col-6">
                <span>__TEMPLATING LANGUAGES</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>EJS</li>
                  <li>REACT</li>
                  <li>ANGULAR</li>
                </ul>
              </div>
              {/* __CSS PREPROCESSOR */}
              <div className="col-6">
                <span>__CSS PREPROCESSOR</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>SCSS</li>
                  <li>SASS</li>
                  <li>postCSS</li>
                </ul>
              </div>
              {/* Other skills */}
              <div className="col-6">
                <span>__OTHER SKILLS</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>InDesign</li>
                  <li>After Effects</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="last-item-on-footer d-flex flex-column align-items-center gap-2">
              <h4>Gaetano Cirinnà</h4>
              <img width={32} height={32} src={logo}></img>
              <p>
                Contare è la cosa più aggressiva che si possa fare a un
                computer, è l’equivalente del guardare un essereumano con aria
                minacciosa ripetendo: “Sangue... sangue... sangue... sangue".
              </p>
              <div className="d-flex w-100 gap-2 justify-content-center">
                <a href="https://github.com/gaetanoCirinna">Github</a>
                <a href="http://www.linkedin.com/in/gaetano-cirinna">
                  Linkedin
                </a>
                <a href="https://www.behance.net/gaetanociro">Behance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
