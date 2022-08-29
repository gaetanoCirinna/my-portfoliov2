import React from "react";
import "./Footer.scss";

import logo from "./../../assets/Personal logo white.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="sun"></div>

      <div className="container skills">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="row">
              {/* General */}
              <div className="col-md-6 col-12">
                <span>__GENERAL SKILLS AND DEV TOOLS</span>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascripts</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Python</li>
                  <li>Go</li>
                </ul>
              </div>
              {/* Build tools and task runner */}
              <div className="col-md-6 col-12">
                <span>__BUILD TOOLS / TASK RUNNERS</span>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>Webpack</li>
                  <li>Gulp</li>
                </ul>
              </div>
              {/* TEMPLATING LANGUAGES */}
              <div className="col-md-6 col-12">
                <span>__TEMPLATING LANGUAGES</span>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>EJS</li>
                  <li>REACT</li>
                  <li>ANGULAR</li>
                </ul>
              </div>
              {/* __CSS PREPROCESSOR */}
              <div className="col-md-6 col-12">
                <span>__CSS PREPROCESSOR</span>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>SCSS</li>
                  <li>SASS</li>
                  <li>postCSS</li>
                </ul>
              </div>
              {/* Other skills */}
              <div className="col-md-6">
                <span>__OTHER SKILLS</span>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>InDesign</li>
                  <li>After Effects</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="last-item-on-footer d-flex flex-column align-items-center gap-2">
              <h4>Gaetano Cirinnà</h4>
              <img width={32} height={32} src={logo}></img>
              <p>
                Just remember: "Albus Dumbledore" was the real villain in Harry
                Potter.
              </p>
              <div className="d-flex w-100 gap-2 justify-content-center">
                <a target="_blank" href="https://github.com/gaetanoCirinna">
                  Github
                </a>
                <a
                  target="_blank"
                  href="http://www.linkedin.com/in/gaetano-cirinna"
                >
                  Linkedin
                </a>
                <a target="_blank" href="https://www.behance.net/gaetanociro">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <h6 className="copyright-text pt-3 pb-5">
            @Copyright Gaetano Cirinnà 2022 (???)
          </h6>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
