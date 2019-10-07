import React from "react";

//require('dotenv')

import ReactDOM from "react-dom";

import App from "./App";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase"

import {uiConfig, firebaseConfig} from "./API/config"

const rootElement = document.getElementById("root");

firebase.initializeApp(firebaseConfig)

new firebaseui.auth
    .AuthUI(firebase.auth())
    .start("#firebaseui-auth-container", uiConfig);

ReactDOM.render(<App />, rootElement);
