import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";
import Projects from  "./components/Projects/Projects"

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />

        <Route exact path="/" component={Home} />

        <Route path="/about-me" component={Bio} />

        <Route path="/projects" component={Projects}/>
        <Footer />
      </main>
    );
  }
}

export default App;
