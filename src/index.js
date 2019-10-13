

import React from "react";
import ReactDOM from "react-dom";


import App from "./App";
import * as firebase from "firebase"

import { firebaseConfig } from "./Config/config"
const rootElement = document.getElementById("root");

// single firebase instance 
firebase.initializeApp(firebaseConfig)
  
ReactDOM.render(<App />, rootElement);