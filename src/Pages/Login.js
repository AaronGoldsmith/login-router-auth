import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "../styles.css";

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
      <div id="firebaseui-auth-container" />
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
