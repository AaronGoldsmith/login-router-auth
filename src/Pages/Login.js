import React, { Component } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from "firebase/app";
import { uiConfig } from "../Config/config"

import "firebase/auth";
import "../styles.css";

// TODO: add as a modal popup
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  registerUser() {
    firebase.auth().onAuthStateChanged(user => {
      if (user && !user.isAnonymous) {
        this.setState({ user });
      } else {
        console.log("user is not signed in");
      }
    });
  }
  loginUI = (user) => {
    return user && !user.isAnonymous ?
      <pre>
        {(JSON.stringify(user, null, ' '))}
      </pre> :
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  }
  componentDidMount() {
    this.registerUser();
    if (window.location.href.includes('success')) {
      console.log('redirect')
    }
  }
  render() {
    var user = firebase.auth().currentUser;

    return (
      <div>
        <h1>login</h1>
        {this.loginUI(user)}
      </div>
    );
  }
}
export default Login;
