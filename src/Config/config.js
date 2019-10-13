 import firebase from "firebase";
 import dotenv from "dotenv"

 import * as firebaseui from "firebaseui"

 export const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_PROJECT}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT}.firebaseio.com`,
  projectId: `${process.env.REACT_APP_PROJECT}`,
  storageBucket: `${process.env.REACT_APP_PROJECT}.appspot.com`,
  messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};


export const uiConfig = {
  signInSuccessUrl: "login?status=success",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ]
};