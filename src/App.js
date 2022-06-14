import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Nav />
      <Home />
      <About />
    </>
  );
}

export default App;
