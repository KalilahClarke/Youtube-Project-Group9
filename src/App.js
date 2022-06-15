import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Home />
    </>
  );
}

export default App;
