import { useContext, Fragment, useRef, useEffect, useState } from "react";

import "./App.scss";

import { pagesMapping, RoutingContext } from "./routing";

// Layout
import Footer from "./layout/Footer/Footer";

// Pages
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import Header from "./layout/Header/Header";

function App() {
  const { page } = useContext(RoutingContext);

  return (
    <div className="App">
      {/* <div className="bg"></div>
      <div className="overlay"></div> */}
      {/* <div className="overlay glitch overlay-v2"></div> */}
      {/* <div className="glitch-v2"></div>
      <img src={img} className="image"></img>
      <img src={img} className="image2" ref={refImgV2}></img> */}
      <Header></Header>
      <Fragment>
        {pagesMapping.home === page && <Homepage />}
        {pagesMapping.project === page && <Project />}
      </Fragment>
      <Footer></Footer>
    </div>
  );
}

export default App;
