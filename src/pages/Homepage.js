import { useContext, Fragment, useRef, useEffect, useState } from "react";
import "./Homepage.scss";
import { window } from "browser-monads";

import bgImg from "./../assets/test vaporwave2.png";
import betterlyIcon from "./../assets/betterly icon.png";
import worldIcon from "./../assets/icons/world.png";
import GlitchImage from "../components/GlitchImage/GlitchImage";
import Text from "../components/Text";
import bgLargeHero from "./../assets/background portfolio.png";

const Homepage = () => {
  const refImgV1 = useRef(null);
  const refImgV2 = useRef(null);

  return (
    <Fragment>
      {/* Large hero */}
      <section className="hero-banner">
        <div className="main-content">
          <h3 className="second-title">Gaetano Cirinnà</h3>
          <h1 className="main-title">
            I'm a developer and I do stuff and things!
          </h1>
        </div>
        <div className="background">
          <div className="glitch-v2"></div>
          <div className="gradient"></div>
          <div className="grid-overlay"></div>

          <GlitchImage bgImg={bgLargeHero} background={true}></GlitchImage>
        </div>
      </section>

      {/* Projects */}
      <section className="projects py-5" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="main-title"> __projects</h2>
            </div>
          </div>

          <div className="row">
            {/* De Agostini */}
            <div className="col-12 col-md-4">
              <a href="/project?id=deagostini" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img width={16} height={16} src={betterlyIcon}></img>
                    <span>deagostini.exe</span>
                  </div>
                  <div className="card-controls">
                    <div role="button" className="card-icon">
                      <div className="icon-zoom"></div>
                    </div>
                    <div role="button" className="card-icon">
                      <div className="icon-close">X</div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pb-0 pt-1">
                  <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1661105029962-898acb801f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
                  </div>
                </div>
              </a>
            </div>
            {/* Fanhome */}
            <div className="col-12 col-md-4">
              <a href="/project?id=fanhome" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img width={16} height={16} src={betterlyIcon}></img>
                    <span>fanhome.exe</span>
                  </div>
                  <div className="card-controls">
                    <div role="button" className="card-icon">
                      <div className="icon-zoom"></div>
                    </div>
                    <div role="button" className="card-icon">
                      <div className="icon-close">X</div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pb-0 pt-1">
                  <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1661105029962-898acb801f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
                  </div>
                </div>
              </a>
            </div>
            {/* Betterly */}
            <div className="col-12 col-md-4">
              <a href="/project?id=betterly" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img width={16} height={16} src={betterlyIcon}></img>
                    <span>betterly.exe</span>
                  </div>
                  <div className="card-controls">
                    <div role="button" className="card-icon">
                      <div className="icon-zoom"></div>
                    </div>
                    <div role="button" className="card-icon">
                      <div className="icon-close">X</div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0 pb-0 pt-1">
                  <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1661105029962-898acb801f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid-effect-container">
          <div className="grid-effect-up"></div>
        </div>
      </section>

      {/* Presentation */}
      <section className="presentation py-5" id="presentation">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="main-title">__hey</h2>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem IpsumLorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="job-main-title mt-4">--timeline</h3>
            </div>
            <div className="col-12 col-md-3">
              <div className="d-flex align-items-center justify-content-start gap-1">
                <img width={24} height={24} src={worldIcon}></img>
                <span className="place-description">Milan</span>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="d-flex align-items-center justify-content-start gap-1">
                <span className="year-description">2020 - current</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column align-items-start gap-1">
                <h6> De Agostini Publishing</h6>
                <p className="job-description">
                  <ul>
                    Fanhome:
                    <li>New feature implementation after the first release</li>
                  </ul>
                  <ul>
                    DeAgostini Publishing:
                    <li>Responsabile frontend del nuovo sito.</li>
                    <li>Definizione dell'architettura,</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <GlitchImage bgImg={bgImg}></GlitchImage>
      </section>

      {/* Contact me */}
      <section className="contact-me py-5" id="contactMe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="main-title">__contact me</h2>
            </div>
          </div>
        </div>
        <form>
          <div className="container container-custom">
            <div className="row">
              <div className="col-4">
                <label>Your e-mail:</label>
              </div>
              <div className="col-8">
                <input className="window-border-inset"></input>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Homepage;
