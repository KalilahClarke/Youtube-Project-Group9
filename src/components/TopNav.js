import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link, useParams } from "react-router-dom";
import logo from "./youtube.png";
import upload from "./images/upload.png";
import notification from "./images/notification.png";
import menu from "./images/menu.png";
import more from "./images/more.png";
import jack from "./images/Jack.png";
import microphone from "./images/voice-search.png";
import Error from "./Error";



function TopNav({ search, setSearch, videos, setVideos, submited, setSubmited}) {
  // const [search, setSearch] = useState('')
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    console.log(apiKey)
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=4&q=${search}&type=video&key=${apiKey}`
      // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=4&q=${search}&type=video&key=${process.env.REACT_APP_API_KEY}`
      )
    .then ((response) => response.json())
    .then ((data) => {
      console.log(data)
      console.log(data.items)
      setVideos(data.items)
  
      
    })
    .catch ((err) => {
      console.log(err)
      // return (<Error/>)
    })
  },[submited])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSubmited(!submited);


//fetch here? -> then go to videoList to .map them. 

// setVideos(data.items);//this works. 
console.log(apiKey);

// setSearch("");//I think this clears it. 
};

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(search);
    // console.log(key)
  };

  return (
    <nav className="header">
      <div className="nav-left header">
        <img
          className="menu-icon"
          src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg"
          alt="menu"
        />
        <img className="logo" src={logo} alt="youtube-logo" />
      </div>

      <div className="nav-middle header">
        <form onSubmit={handleSubmit} className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
      
  <Link to="/">
          <button className="header">
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png"
              alt="search"
            />
          </button>
</Link>

        </form>
      </div>

      <div className="nav-right header">
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        <img className="user-icon" src={jack} alt="Profile" />
      </div>
    </nav>
  );
}

export default TopNav;
