import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
