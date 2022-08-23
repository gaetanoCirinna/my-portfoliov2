import { useContext, Fragment, useRef, useEffect, useState } from "react";
import "./GlitchImage.scss";

const GlitchImage = (props) => {
  const { bgImg } = props;
  const refImgV1 = useRef(null);
  const refImgV2 = useRef(null);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  useEffect(() => {
    if (refImgV2 && refImgV2.current) {
      refImgV2.current.style.right = X + "px";
      refImgV2.current.style.top = -Y + "px";
    }
    if (refImgV1 && refImgV1.current) {
      refImgV1.current.style.right = -X + "px";
      refImgV1.current.style.top = Y + "px";
    }
  }, [X, Y]);

  useEffect(() => {
    const setFromEvent = (e) => {
      setX(parseInt((e.clientX * 5) / window.innerWidth));
      setY(parseInt((e.clientY * 3) / window.innerHeight));
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <div className="GlitchImage__img-container">
      <img src={bgImg} className="image" ref={refImgV1}></img>
      <img src={bgImg} className="image2" ref={refImgV2}></img>
    </div>
  );
};

export default GlitchImage;
