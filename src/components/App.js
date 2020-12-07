import React, { Component, useState } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import LocationDisplay from "./locationDisplay";

function App()
 {
const NoMatch = () => {
  return <h1>No Match</h1>;
}
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }

export default App;