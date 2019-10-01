import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Settings from "./Pages/Settings";
import User from "./Pages/User";
import Home from "./Pages/Home";
import notFound from "./Pages/notFound";
import Login from "./Pages/Login";
import Navbar from "./Navbar";

import "./styles.css";

// Giphy gallery goes here
function App () {
  
   return (
      <Router>
        <Navbar  />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile/:id" component={User} />
          <Route path="/settings" component={Settings} />
          <Route component={notFound} />
        </Switch>
    </Router>
   )  
}
export default App;
