import React from "react";

const Text = (props) => {
  return <span dangerouslySetInnerHTML={{ __html: props.children }}></span>;
};
export default Text;
