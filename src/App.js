import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Video from "./components/Video";
import VideoCard from "./components/VideoCard";


function App() {

const randomWords = require(`random-words`);
  let [videos, setVideos] = useState([]); // pass it down to [home]videolist to get video data
  const [search, setSearch] = useState("");
  const [submited, setSubmited] = useState(false);

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
            />
            <SideNav />
            <Routes>
              <Route path="/" element={<Home search={search} videos={videos} />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos/:id" element={<Video videos={videos} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
