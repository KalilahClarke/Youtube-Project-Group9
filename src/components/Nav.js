import React from 'react'
import "./Nav.css";
// import Home from "./Home";
// import About from "./About";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
<ul>
  {/* <li><img  className="Hamburger"src ="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg" alt ="Hamburger DropDown"/></li> */}
  <li><Link to="/"> <img src="https://img.icons8.com/material-sharp/24/undefined/home-page.png" alt="Home" width="25px"/> Home</Link></li>
  <li><Link to="/about"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> About</Link></li>
  
</ul>
    </>
  )
}

export default Nav