import React, { useState, useEffect, useCallback } from "react";
import * as firebase from "firebase/app";

import { makeStyles } from "@material-ui/core/styles";
import ButtonIcon from "./Components/ButtonIcon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Link } from "react-router-dom";
 {/* <button onClick={()=>firebase.auth().signOut()} >logout</button> */}

const useStyles = makeStyles(theme => ({
  rootBar: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  white:{
    paddingRight: 20,
    color:"white"
  }
}));

function Navbar(){
  const [user,setUser] = useState(null);
  const styles = useStyles()

  
firebase.auth()
  .onAuthStateChanged(user => user ? setUser(user) : setUser(null))

  const name = user? user.displayName.split(' ')[0] : "Anonymous"
    return (
      <div className={"rootBar"}>
        <AppBar position="sticky">
          <Toolbar>
            <Link to={"/"}>
              <IconButton edge="start" aria-label="menu">
                <HomeIcon />
              </IconButton>
            </Link>

            <Typography variant="h6" className={"title"}>{name}</Typography>
           
            {user===null &&
            <Link className={styles.white} to="login">
              LOGIN
            </Link>}

            <Link to={`profile`}>
              <IconButton aria-label="profile" >
                <AccountCircle />
              </IconButton>
            </Link> 


            <ButtonIcon name="settings_applications" url="settings" />
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default Navbar;
