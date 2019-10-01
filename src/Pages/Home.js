import React, { Component } from "react";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";

import "../styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  
  render() {
    return (
      <div style={{background:"#3F51B5", height: "80vh"}}>
        <h1></h1>
      </div>
    );
  }
}
export default Home;
