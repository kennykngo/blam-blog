import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Hero />
      </Router>
    </>
  );
}

export default App;
