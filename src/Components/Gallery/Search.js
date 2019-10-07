import React from "react";
import { Magnify } from "../SVG/Magnify";
import "../../CSS/header.css";

const Search = props => {
  return (
    <div className="pageHead">
      {/* SHOW magnifying glass */}
      {!props.useMag && <Magnify scrolled={props.top?'':'scrolled'}/>}
      <textarea
        className={`textRegion ${props.top?'':'scrolled'}`}
        placeholder={"Search Giphy"}
        onChange={e => props.updateVal(e.currentTarget.value)}
      />
    </div>
  );
};
export default Search;
