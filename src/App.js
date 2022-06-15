import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

import YouTube from 'react-youtube';


function App() {
  return (
    
    <>
      <YouTube videoId="2g811Eo7K8U"  />;
    <div>
      <Router>
  
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
    </>
    
  );
}

export default App;
