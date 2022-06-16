import "./Nav.css";
import React, { useState } from "react";

// import Home from "./Home";
// import About from "./About";
import { Link } from "react-router-dom";
import { within } from "@testing-library/react";

function Nav() {

  const [showNav, setShowNav] = useState(false);
  const [style, setStyle] = useState("sidenav1");

  //https://www.geeksforgeeks.org/changing-css-styling-with-react-onclick-event/

const closeOpenNav = (e) => {
  setShowNav(!showNav)//keeps T/F
  if (showNav) {
    setStyle("sidenav1");
  } else {
    setStyle("sidenav2");
  }

console.log("its changing")


//how can I make this change the css of the nav below. 
}

//function that return/show the nav bar
//
const Bar = () => {


  return ( 
  <div>
  <li><Link to="/"> <img src="https://img.icons8.com/material-sharp/24/undefined/home-page.png" alt="Home" width="25px"/> Home</Link></li>
  <li><Link to="/about"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> About</Link></li>
  </div>
  )
}


  return (
    <div id="mySidenav" className={style}>
<ul>
  <li onClick={closeOpenNav}><img  className="Hamburger"src ="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg" alt ="Hamburger DropDown" width={"100px"}/></li>
  
  {/* {showNav ? <Bar/> : null} */}
  
  <li><Link to="/"> <img src="https://img.icons8.com/material-sharp/24/undefined/home-page.png" alt="Home" width="25px"/> Home</Link></li>
  <li><Link to="/about"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> About</Link></li>
</ul>
    </div>
  )
}

export default Nav