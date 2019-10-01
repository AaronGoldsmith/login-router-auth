import React from "react";
import ReactDOM from "react-dom";
import dotenv from 'dotenv'

import App from "./App";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase"

import {uiConfig, firebaseConfig} from "./config"

const rootElement = document.getElementById("root");
dotenv.config()
firebase.initializeApp(firebaseConfig)

new firebaseui.auth
    .AuthUI(firebase.auth())
    .start("#firebaseui-auth-container", uiConfig);

ReactDOM.render(<App />, rootElement);
