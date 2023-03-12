import "./Navigation.css";

import React from "react";
// import Home from "./Home";
// import About from "./About";
import { Link } from "react-router-dom";
import home from "./images/home.png";
import explore from "./images/explore.png";
import subscription from "./images/subscription.png";
import history from "./images/history.png";
import playlist from "./images/playlist.png";
import messages from "./images/messages.png";
import jack from "./images/Jack.png";
import simon from "./images/simon.png";
import tom from "./images/tom.png";
import megan from "./images/megan.png";
import cameron from "./images/cameron.png";

const SideNav = ({
  hamburger,
  setSearch,
  setVideos,
  setDisplaySearch,
  setRandomVideos,
}) => {
  //const [showNav, setShowNav] = useState(false); // move it to apps. to pass it down
  //this might need to be moved once home.js is done.

  // setShowNav(!showNav); //keeps T/F

  const handleClick = (e) => {
    setVideos([]);
    setRandomVideos(false);
    setSearch("");
    setDisplaySearch("");
  };

  //-----------------------------SUBSCRIPTIONS---------------------------//
  


  return (
    <div className={hamburger ? "small-sidebar" : "sidebar"}>
      <div className="shortcut-links">
        <Link to="/">
          <a onClick={handleClick} href="#0">
            <img src={home} alt="home-icon" />
            <p>Home</p>
          </a>
        </Link>
        <Link to="/about">
          <a href="#0">
            <img src={explore} alt="about-icon"/>
            <p>About</p>
          </a>
        </Link>
        <Link to="/subscription">
          <a href="#0">
            <img src={subscription} alt="sub-icon"/>
            <p>Subscription</p>
          </a>
        </Link>
        <Link to="/history">
          <a href="#0">
            <img src={history} alt="history-icon" />
            <p>History</p>
          </a>
        </Link>
        <Link to="/playlist">
          <a href="#0">
            <img src={playlist} alt="playlist-icon" />
            <p>Playlist</p>
          </a>
        </Link>
        <Link to="/messages">
          <a href="#0">
            <img src={messages} alt="message-icon" />
            <p>Messages</p>
          </a>
        </Link>
        <hr />
      </div>
      <div class="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href="#0">
          <img src={jack} onClick ={(()=>{
            setSearch('Jack Nicholson')
          })} alt="jack-icon"/>
          <p>Jack Nicholson</p>
        </a>
        <a href="#0">
          <img src={simon} alt="simon-icon" />
          <p>Simon Baker</p>
        </a>
        <a href="#0">
          <img src={tom} alt="tom-icon" />
          <p>Tom Hardy</p>
        </a>
        <a href="#0">
          <img src={megan} alt="megan-icon"/>
          <p>Megan Ryan</p>
        </a>
        <a href="#0">
          <img src={cameron} alt="cameron-icon"/>
          <p>Cameron Diaz</p>
        </a>
      </div>
    </div>
  );
};

export default SideNav;

