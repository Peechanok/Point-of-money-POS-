import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./contents/Home";
import Settingshop from "./contents/Settingshop";
import Navigations from "./components/Navigations";


function App() {
  const mystyle = {
    fontFamily: "Kanit",
  };

  return (
    <div class="app" style={mystyle} >
      <Navigations />

      <Router>

      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/Settingshop" component={Settingshop} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;
