import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "../styles.css";

const UserImage = ({ imgSrc, name }) => (
  <img class="userImage"
       src={imgSrc} alt={name} />
)
class User extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <div>
        <h1>
          User {params.id}
        </h1>
      </div>
    );
  }
}
export default User;
