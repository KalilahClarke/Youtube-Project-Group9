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
import VideoCard from "./components/VideoCard";
// import YouTube from 'react-youtube';


function App() {
  //Do not forget to add useEffect to import//


  let [videos, setVideos] = useState([]); // pass it down to [home]videolist to get video data
  const [search, setSearch] = useState("");
  const [submited, setSubmited] = useState(false);
  // const key = process.env.REACT_APP_API_KEY;
//should I fetch it here? then pass it down? -- 

  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  //     )
  //   .then ((response) => response.json())
  //   .then ((data) => {
  //     setVideos(data.items)
      
  //   })
    
  //   .catch ((err) => {
  //     console.log(err)
  //   })
  // })

 


  return (
    
    <>
      {/* <YouTube videoId="2g811Eo7K8U"  />; */}
    <div>
      <Router>
        <div className ="border">
        <Header search={search} setSearch={setSearch} videos={videos} setVideos={setVideos} submited={submited} setSubmited={setSubmited}/>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videoList" element={<VideoList videos={videos} />} />
          <Route path="/videos/:id" element={<Video videos={videos} />} />

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
