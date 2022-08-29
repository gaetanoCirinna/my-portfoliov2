import { useContext, Fragment, useRef, useEffect, useState } from "react";
import "./Homepage.scss";
import { window } from "browser-monads";

import bgImg from "./../assets/test vaporwave2.png";
import betterlyIcon from "./../assets/betterly icon.png";
import worldIcon from "./../assets/icons/world.png";
import deaIcon from "./../assets/icons/dea favicon.png";
import fhicon from "./../assets/icons/fanhome favicon.svg";
import leroyIcon from "./../assets/icons/leroy favicon.ico";
import nasaIcon from "./../assets/icons/nasa favicon.ico";
import townImg from "./../assets/town portfolio.png";
import GlitchImage from "../components/GlitchImage/GlitchImage";
import Text from "../components/Text";
import bgLargeHero from "./../assets/background portfolio.png";
import GlitchText from "../components/GlitcgText";
import deaLocandina from "./../assets/locandine/deagostini.png";
import fhLocandina from "./../assets/locandine/fanhome.png";
import betterlyLocandina from "./../assets/locandine/betterly.png";

import { send } from "emailjs-com";
import Loading from "../components/Loading/Loading";

const Homepage = () => {
  const refImgV1 = useRef(null);
  const refImgV2 = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [thankyou, setThankyou] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    setLoading(true);
    setThankyou(false);
    e.preventDefault();
    send("service_lkzacwz", "template_jgmmcp9", toSend, "_Xux2pRTd-wZwpa9i")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setThankyou(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {/* Large hero */}
      <section className="hero-banner">
        <div className="main-content">
          <h3 className="second-title">
            <GlitchText>Gaetano Cirinnà</GlitchText>
          </h3>
          <h1 className="main-title">
            I'm a developer and I do stuff and things!
          </h1>
        </div>
        <div className="background">
          <div className="glitch-v2"></div>
          <div className="gradient"></div>
          <div className="grid-overlay"></div>

          <GlitchImage bgImg={townImg} background={true}></GlitchImage>
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
              <div className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img
                      className="fill-icon fill-icon--dea"
                      width={16}
                      height={16}
                      src={deaIcon}
                    ></img>
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
                <a
                  href="/project?id=deagostini"
                  className="card-body px-0 pb-0 pt-1"
                >
                  <div className="img-container">
                    <img src={deaLocandina}></img>
                  </div>
                </a>
              </div>
            </div>
            {/* Fanhome */}
            <div className="col-12 col-md-4">
              <a href="/project?id=fanhome" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img
                      className="fill-icon fill-icon--fh"
                      width={16}
                      height={16}
                      src={fhicon}
                    ></img>
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
                    <img src={fhLocandina}></img>
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
                    <img src={betterlyLocandina}></img>
                  </div>
                </div>
              </a>
            </div>
            {/* Leroy Merlin */}
            <div className="col-12 col-md-4">
              <a href="/project?id=leroy" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img
                      className="fill-icon fill-icon--leroy"
                      width={16}
                      height={16}
                      src={leroyIcon}
                    ></img>
                    <span>leroy_merlin.exe</span>
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
            {/* Visual Agency */}
            <div className="col-12 col-md-4">
              <a href="/project?id=asteroids" className="card window-border">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-1">
                    <img
                      className="fill-icon fill-icon--nasa"
                      width={16}
                      height={16}
                      src={nasaIcon}
                    ></img>
                    <span>asteroids_news.exe</span>
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

        <div className="grid-effect-container d-none">
          <div className="grid-effect-up"></div>
        </div>

        <GlitchImage
          moveX={5}
          moveY={5}
          bgImg={bgLargeHero}
          background={true}
        ></GlitchImage>
      </section>

      {/* Presentation */}
      <section className="presentation py-5" id="presentation">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="main-title">__hey</h2>
              <p className="description">
                Hi, I'm Gaetano! My education started with a Secondary School
                Diploma in IT and thanks to it I learned different kinds of
                languages like C++, PhP, Mysql. I continue my studies with a
                bachelor's degree in Technological arts that allowed me to
                improve my skills in design, photography and videomaking.
              </p>
              <p className="description">
                "Web accessibility" was the title of my thesis. I've explain one
                of the most important things during web development:
                accessibility. I have written this like a sort of a guide for
                everyone who wanna try to develop a website but has no
                experience in this field.
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
        <GlitchImage moveX={5} moveY={5} bgImg={bgImg}></GlitchImage>
      </section>

      {/* Contact me */}
      <section className="contact-me py-5" id="contactMe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="main-title">__contact me</h2>
            </div>
            {thankyou && (
              <div className="col-12">
                I've received the message, many thx! {"<3"}
              </div>
            )}
          </div>
        </div>
        {isLoading ? (
          <div>
            <Loading></Loading>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="container container-custom">
              <div className="row">
                <div className="col-4">
                  <label>Your e-mail*:</label>
                </div>
                <div className="col-8">
                  <input
                    required
                    type={"email"}
                    onChange={handleChange}
                    name="from_email"
                    value={toSend.from_email}
                    className="window-border-inset"
                  ></input>
                </div>
                <div className="col-4">
                  <label>Your name:</label>
                </div>
                <div className="col-8">
                  <input
                    onChange={handleChange}
                    name="from_name"
                    placeholder=""
                    value={toSend.from_name}
                    className="window-border-inset"
                  ></input>
                </div>
                <div className="col-4">
                  <label>Your message (help me to help yourself)*:</label>
                </div>
                <div className="col-8">
                  <textarea
                    required
                    onChange={handleChange}
                    name="from_message"
                    value={toSend.from_message}
                    className="window-border-inset"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
    </Fragment>
  );
};

export default Homepage;
