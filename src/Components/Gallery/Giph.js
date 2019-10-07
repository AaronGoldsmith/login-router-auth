import React, { useState, useEffect } from "react";
import "../../CSS/gallery.css";

export const Giph = props => {
  const [imageSrc, setImageSrc] = useState(props.src);
  const stopGif = () => setImageSrc(props.src);
  const startGif = () => setImageSrc(props.animatedSrc);
  return (
    <div
      className="gridItem"
      id={props.id}
      onMouseOver={() => startGif()}
      onMouseLeave={() => stopGif()}
      // onClick={props.handleClick}
    >
      <img src={imageSrc} alt={props.label} />
      <p id={props.label} className="title">
        {props.label}
      </p>
      {/* title */}
    </div>
  );
};
