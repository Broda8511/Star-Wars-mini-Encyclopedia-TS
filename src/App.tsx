import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <img src={logo} className="logo" alt="logo" />
          </h1>
          <span>
            <p>Mini Encyclopedia</p>
          </span>
        </header>

        <nav className="nav">
          <Navbar />
        </nav>

        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
