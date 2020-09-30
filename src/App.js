import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        {/* <Hero /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
