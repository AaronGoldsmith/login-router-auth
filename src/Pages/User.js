import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../styles.css";

class User extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <h1>
        User {this.props.giph}
        {params.id}
      </h1>
    );
  }
}
export default User;
