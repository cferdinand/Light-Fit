import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Messages from "./Components/Messages.jsx";
import "./styles.css";

const mountNode = document.getElementById("app");
const routing = (
  <div className="top-level-app">
    <Nav />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/messages" component={Home} />
    </Switch>
  </div>
);

ReactDOM.render(<Router>{routing}</Router>, mountNode);
