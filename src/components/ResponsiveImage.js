import React from "react";

const ResponsiveImage = (props) => {
  const { small, medium, large, className, ref } = props;

  return (
    <img
      ref={ref}
      className={className}
      src={small}
      srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
    />
  );
};
export default ResponsiveImage;
