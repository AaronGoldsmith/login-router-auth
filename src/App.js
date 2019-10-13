import React,{useState} from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import User from "./Pages/User";
import notFound from "./Pages/notFound";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";

import "./styles.css";

// Giphy gallery goes here
function App () {
   return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/user/:id" component={User} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route component={notFound} />
        </Switch>
    </Router>
   )  
}
export default App;
