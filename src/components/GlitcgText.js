import React from "react";

const GlitchText = (props) => {
  return (
    <div className="glitch-text">
      <span>{props.children}</span>
    </div>
  );
};

export default GlitchText;
