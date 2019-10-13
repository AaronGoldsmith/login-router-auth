

import React from "react";
import ReactDOM from "react-dom";


import App from "./App";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase"

import { uiConfig, firebaseConfig } from "./Config/config"
const rootElement = document.getElementById("root");

// only firebase instance in the app
firebase.initializeApp(firebaseConfig)
// initialize the login UI
new firebaseui.auth
  .AuthUI(firebase.auth())
  .start("#firebaseui-auth-container", uiConfig);

  
ReactDOM.render(<App />, rootElement);