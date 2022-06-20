import "./Nav.css";
import React, { useState } from "react";
// import Home from "./Home";
// import About from "./About";
import { Link } from "react-router-dom";

function Nav() {

  const [showNav, setShowNav] = useState(false);
  const [style, setStyle] = useState("sidenavOpen");//this might need to be moved once home.js is done.

  //https://www.geeksforgeeks.org/changing-css-styling-with-react-onclick-event/

const closeOpenNav = (e) => {
  setShowNav(!showNav)//keeps T/F
  if (showNav) {
    setStyle("sidenavOpen");
  } else {
    setStyle("sidenavClose");
  }
}

  return (
    <div id="mySidenav" className={style}>
<ul>
{/* this top one needs to be in the home.js - not here. */}
  <li onClick={closeOpenNav}><img  className="Hamburger"src ="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg" alt ="Hamburger DropDown" width={"100px"}/></li>


  <li><Link to="/"> <img src="https://img.icons8.com/material-sharp/24/undefined/home-page.png" alt="Home" width="25px"/> Home</Link></li>
  <li><Link to="/about"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> About</Link></li>
  <li><Link to="/videoList"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> videoList</Link></li>
  <li><Link to="/video"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> video</Link></li>
</ul>
    </div>
  )
}

export default Nav