import React, { useState } from "react";
import { UseStar } from "../SVG/Star"
import "../../CSS/gallery.css";

export const Giph = props => {
  const [imageSrc, setImageSrc] = useState(props.src);
  const stopGif = () => setImageSrc(props.src);
  const startGif = () => setImageSrc(props.animatedSrc);
  const title = props.label.length > 0 ? props.label.split('GIF')[0] : "Named Gif"
  return (
    <div
      className="gridItem"
      id={props.id}
      onMouseOver={() => startGif()}
      onMouseLeave={() => stopGif()}
      // onClick={props.handleClick}
    >
      <img src={imageSrc} alt={props.label} />
      <div className="shadowTitle">
          <p id={props.label}
            className="title">
              {title}
          </p>
        </div>

        <div className="actionItems">
            {/* <UseStar prefill={false} /> */}
            <UseStar  />
        </div>
    </div>
  );
};
