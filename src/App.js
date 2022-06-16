import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header"

// import YouTube from 'react-youtube';


function App() {

  // let [videos, setVideos] = useState([])

  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  //     )
  //   .then ((response) => response.json())
  //   // .then ((data) => {
  //   //   setVideos(data.items)
  //   //   console.log(data.items)
  //   // })
  //   //
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
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        </div>
      </Router>
    </div>
    </>
    
  );
}

export default App;
