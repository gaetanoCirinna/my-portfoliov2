import React, { Fragment } from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
