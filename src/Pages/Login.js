import React, { Component } from "react";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
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
          console.log("signed out");
        }
      });
  }
  componentDidUpdate(){
    if(window.location.pathname.includes('success')){
      console.log('redirect')
    }
  }
  loginUI = (user) =>{
    return user ? <pre>{(JSON.stringify(user,null, ' '))}</pre> :
      <div id="firebaseui-auth-container" />
  }
  componentDidMount() {
    this.registerUser();

  }
  render() {
    var user = firebase.auth().currentUser;

    return (
      <div>
        <h1>login</h1>
         {/* {user ? user.displayName :
         <div id="firebaseui-auth-container" />} */}
         {this.loginUI(user)}
      </div>
    );
  }
}
export default Login;
