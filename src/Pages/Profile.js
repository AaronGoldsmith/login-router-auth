import React, { Component, useState } from "react";
import * as firebase from "firebase/app";
import "../styles.css";


const UserImage = ({ imgSrc, name }) => (
  <img className="userImage" src={imgSrc} alt={name} />
)
function Profile () {
  const [user, setUser] = useState(null)
  firebase.auth().onAuthStateChanged( user => setUser(user) )

    var name = user ? user.displayName : ""
    return (
      <div>
        <h1> Your profile </h1>
        {user && <UserImage imgSrc={user.photoURL} name={name} />}
        <p>{name}</p> 
      </div>
    );
  }

export default Profile;

