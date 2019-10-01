import React from "react";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import "../styles.css";
const WrappedIcon = props => <Icon {...props} color="inherit" />;
const LinkedIcon = props => (
  <Link className="Link" to={`/${props.url}`}>
    {props.children}
  </Link>
);
const ButtonIcon = props => {
  const goHome = props.url.length > 0 ? props.url : props.name;
  return (
    <LinkedIcon url={props.url}>
      <WrappedIcon className="material-icons" role="button">
        {" "}
        {props.name}
      </WrappedIcon>
    </LinkedIcon>
  );
};
export default ButtonIcon;
