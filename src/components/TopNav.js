import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import logo from "./youtube.png";
import upload from "./images/upload.png";
import notification from "./images/notification.png";
import menu from "./images/menu.png";
import more from "./images/more.png";
import jack from "./images/Jack.png";
import microphone from "./images/voice-search.png";
import Error from "./Error";

function TopNav({
  search,
  setSearch,
  videos,
  setVideos,
  submited,
  setSubmited,
  hamburger,
  setHamburger,
  randomVideos,
  setRandomVideos,
  setDisplaySearch,
  displaySearch,
}) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=4&q=${search}&type=video&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        setSearch("");
  
      })
      .catch((err) => {
        console.log(err);
      });
    }, [submited]);
    
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setRandomVideos(true);
    setSubmited(!submited);

    if (search === "" && randomVideos === true) {
      setDisplaySearch("Random");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setDisplaySearch(e.target.value);
  };

  const handleHome = () => {
    navigate("/");
  };

  const changeNav = () => {
    setHamburger(!hamburger);
  };

  const handleClick = (e) => {
    setVideos([]);
    setRandomVideos(false);
    setSearch("");
    setDisplaySearch("");
    navigate("/");
  };

  return (
    <nav className="header">
      <div className="nav-left header">
        <img
          className="menu-icon"
          src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg"
          alt="menu"
          onClick={changeNav}
          value={hamburger}
        />
        <img
          className="logo"
          src={logo}
          alt="youtube-logo"
          onClick={handleClick}
        />
      </div>

      <div className="nav-middle header">
        <form onSubmit={handleSubmit} className="search-box">
          <input
            type="text"
            placeholder="Search NOTHING for Random Videos"
            value={search}
            onChange={handleChange}
          />
          <button className="header" onClick={handleHome}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png"
              alt="search"
            />
          </button>
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
