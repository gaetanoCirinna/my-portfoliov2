import React, { Fragment, useRef, useState, useEffect } from "react";
import "./Project.scss";
import { window } from "browser-monads";

import Text from "../components/Text";
import logo from "./../assets/betterly logo styloso.png";

const Project = () => {
  const logo1 = useRef(null);
  const logo2 = useRef(null);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [data, setData] = useState({});
  const [param, setParam] = useState("");
  const [logo, setLogo] = useState("default");

  const dataRaw = {
    betterly: {
      title: "<a href='https://www.betterly.com/uk'>betterly.com</a>",
      tags: ["Angular", "SCSS", "ExpressJS", "NodeJS", "EJS"],
      secondTitle: "De Agostini",
      description: ["Unfortunately, it will be offline in the next few days"],
      websiteTitle:
        "Look the real <a href='https://www.betterly.com/uk'>website</a>!",
      websiteURL: "https://www.betterly.com/uk",
    },
    deagostini: {
      title: "<a href='https://www.deagostini.com/uk/'>deagostini.com</a>",
      tags: ["Gatsby", "React", "SCSS", "MobX"],
      secondTitle: "De Agostini Publishing",
      description: [""],
      websiteTitle: "Look the real website!",
      websiteURL: "https://www.deagostini.com/uk/",
    },
    fanhome: {
      title: "<a href='https://www.fanhome.com/uk/'>fanhome.com</a>",
      tags: ["Gatsby", "React", "SCSS", "MobX"],
      secondTitle: "De Agostini Publishing",
      description: [""],
      websiteTitle: "Look the real website!",
      websiteURL: "https://www.fanhome.com/uk/",
    },
    leroy: {
      title: "Leroy Merlin",
      tags: ["React", "HTML", "CSS"],
      secondTitle: "Mastercode, TAG, Milano - Final exam",
      description: [""],
      websiteTitle: "Look the real website!",
      websiteURL: "https://leroy-merlin-tag-final.netlify.app/",
      mobile: true,
    },
    asteroids: {
      title: "Asteroids news",
      tags: ["Angular", "SASS"],
      secondTitle: "Visual Agency - Assinment",
      description: [""],
      websiteTitle:
        "Look the real <a href='https://asteroidsneows-visualagency.netlify.app/'>website</a>!",
      websiteURL: "https://asteroidsneows-visualagency.netlify.app/",
      mobile: false,
    },

    default: {
      title: "Nothing found .-.",
      tags: ["Pizza", "Lasagne vegan", "Trilly"],
      secondTitle: "Just a lorem ipsum page",
      description: [
        "Veniam nulla pariatur veniam cupidatat. Cupidatat aliqua consectetur fugiat ullamco duis ipsum nostrud qui voluptate dolor consequat. Ullamco in anim veniam adipisicing ullamco adipisicing. Id sint irure excepteur ad velit pariatur est irure voluptate.",
      ],
      websiteTitle: "Look the website below!",
      websiteURL: "",
    },
  };

  useEffect(() => {
    function findGetParameter(parameterName) {
      var result = null,
        tmp = [];
      window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
      return result;
    }
    setParam(findGetParameter("id").toLowerCase());
  }, []);

  useEffect(() => {
    let img;
    try {
      img = require(`./../assets/${param}/logo.png`);
    } catch (err) {
      console.log("img error loading");
      img = img = require(`./../assets/default/logo.png`);
    }
    setLogo(img);
  }, [param]);

  useEffect(() => {
    if (logo2 && logo2.current) {
      logo2.current.style.left = X + "px";
      logo2.current.style.top = Y + "px";
    }
    if (logo1 && logo1.current) {
      logo1.current.style.left = -X + "px";
      logo1.current.style.top = -Y + "px";
    }
  }, [X, Y]);

  useEffect(() => {
    const setFromEvent = (e) => {
      setX(parseInt((e.clientX * 15) / window.innerWidth / 2));
      setY(parseInt((e.clientY * 13) / window.innerHeight / 2));
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <Fragment>
      <section className="large-hero-project d-flex flex-column align-items-start h-100 justify-content-center">
        <div className="container">
          <div className="main-content p-1 px-2 p-md-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="main-title">
                <Text>{dataRaw[param]?.title}</Text>
              </h1>

              <div className="img-container-logo">
                <img ref={logo1} src={logo} className="logo1"></img>
                <img ref={logo2} src={logo} className="logo2"></img>
              </div>
            </div>
            <p className="d-flex gap-2">
              {dataRaw[param]?.tags.map((tag, index) => {
                return (
                  <span key={index} className="window-border-inset px-1">
                    {tag}
                  </span>
                );
              })}
            </p>
            <p>{dataRaw[param]?.secondTitle}</p>

            <div className="row">
              <div className="col-8">
                {dataRaw[param]?.description.map((desc, index) => {
                  return <p key={index}>{desc}</p>;
                })}
              </div>

              <div className="col-12">
                <p className="mt-3 window-border-inset px-2 m-0">
                  <Text>{dataRaw[param]?.websiteTitle}</Text>
                </p>
              </div>
              <div className={`${dataRaw[param]?.mobile ? "col-6" : "col-12"}`}>
                <div className="mt-2 window-border-inset website-container">
                  <iframe
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="100%"
                    src={param && dataRaw[param]?.websiteURL}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Project;
