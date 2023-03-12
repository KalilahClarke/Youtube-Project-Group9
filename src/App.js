import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Video from "./components/Video";
import ComingSoon from "./components/ComingSoon";



function App() {

// const randomWords = require(`random-words`);
  let [videos, setVideos] = useState([]); // pass it down to [home]videolist to get video data
  const [search, setSearch] = useState("");
  const [submited, setSubmited] = useState(false);
  const [hamburger, setHamburger] = useState(false)
  const [theVideo, setTheVideo] = useState([]);
  const [randomVideos, setRandomVideos] = useState(false);
  const [displaySearch, setDisplaySearch] = useState("");

  return (
    <>
      <div>
        <Router>
          <div className="border">
            <TopNav
              search={search}
              setSearch={setSearch}
              videos={videos}
              setVideos={setVideos}
              submited={submited}
              setSubmited={setSubmited}
              hamburger ={hamburger}
              setHamburger ={setHamburger}
              randomVideos = {randomVideos}
              setRandomVideos = {setRandomVideos}
              displaySearch = {displaySearch}
              setDisplaySearch = {setDisplaySearch}
            />
        
            <SideNav 
              hamburger ={hamburger}
              setHamburger ={setHamburger}
              search={search}
              setSearch={setSearch}
              videos={videos}
              setVideos={setVideos}
              displaySearch = {displaySearch}
              setDisplaySearch = {setDisplaySearch}
              randomVideos = {randomVideos}
              setRandomVideos = {setRandomVideos}
            />
            <Routes>
              <Route path="/" element={<Home displaySearch={displaySearch} setDisplaySearch={setDisplaySearch} randomVideos={randomVideos} search={search} videos={videos} />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos/:id" element={<Video videos={videos} theVideo={theVideo} setTheVideo={setTheVideo} />} />
              <Route path="/subscription" element={<ComingSoon />} />
              <Route path="/history" element={<ComingSoon />} />
              <Route path="/playlist" element={<ComingSoon />} />
              <Route path="/messages" element={<ComingSoon />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
