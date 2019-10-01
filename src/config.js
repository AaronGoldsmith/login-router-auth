 import firebase from "firebase";
 import * as firebaseui from "firebaseui"
 import dotenv from 'dotenv'

 dotenv.config()

 export const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.PROJECT}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT}.firebaseio.com`,
  projectId: `${process.env.PROJECT}`,
  storageBucket: `${process.env.PROJECT}.appspot.com`,
  messagingSenderId: `${process.env.SENDER_ID}`,
  appId: `${process.env.APP_ID}`
};

export const uiConfig = {
  signInSuccessUrl: "login?status=success",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ]
};
//  export default firebase.initializeApp(firebaseConfig);
