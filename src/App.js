import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header"
import VideoList from "./components/VideoList";
import Video from "./components/Video";
// import YouTube from 'react-youtube';


function App() {
  //Do not forget to add useEffect to import//

  const [videos, setVideos] = useState([])

  return (
    
    <>
      {/* <YouTube videoId="2g811Eo7K8U"  />; */}
    <div>
      <Router>
        <div className ="border">
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home videos={ videos } setVideos={ setVideos }/>} />
          <Route path="/About" element={<About />} />
          <Route path="/videoList" element={<VideoList />} />
          <Route path="/Video" element={<Video />} />

        </Routes>
        </div>
      </Router>
    </div>
    </>
    
  );
}

export default App;
