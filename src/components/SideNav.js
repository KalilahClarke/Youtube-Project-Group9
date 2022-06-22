import "./Navigation.css";

import React, { useEffect, useState } from "react";
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

const SideNav = ({hamburger, setHamburger}) => {
  //const [showNav, setShowNav] = useState(false); // move it to apps. to pass it down
  //this might need to be moved once home.js is done.
  
    // setShowNav(!showNav); //keeps T/F
  debugger

  return (
    <div className = {hamburger ? "small-sidebar" :"sidebar"}>
      <div className="shortcut-links">
        <Link to="/">
          <a href="">
            <img src={home} />
            <p>Home</p>
          </a>
        </Link>
        <Link to="/about">
          <a href="">
            <img src={explore} />
            <p>About</p>
          </a>
        </Link>
        <Link to="/subscription">
          <a href="">
            <img src={subscription} />
            <p>Subscription</p>
          </a>
        </Link>
        <Link to="/history">
          <a href="">
            <img src={history} />
            <p>History</p>
          </a>
        </Link>
        <Link to="/playlist">
          <a href="">
            <img src={playlist} />
            <p>Playlist</p>
          </a>
        </Link>
        <Link to="/messages">
          <a href="">
            <img src={messages} />
            <p>Messages</p>
          </a>
        </Link>
        <hr />
      </div>
      <div class="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href="">
          <img src={jack} />
          <p>Jack Nicholson</p>
        </a>
        <a href="">
          <img src={simon} />
          <p>Simon Baker</p>
        </a>
        <a href="">
          <img src={tom} />
          <p>Tom Hardy</p>
        </a>
        <a href="">
          <img src={megan} />
          <p>Megan Ryan</p>
        </a>
        <a href="">
          <img src={cameron} />
          <p>Cameron Diaz</p>
        </a>
      </div>
    </div>
  );
};

//https://www.geeksforgeeks.org/changing-css-styling-with-react-onclick-event/

//   return (
//     <div id="mySidenav" className={style}>
//      <Link to ='/'> <a href =""><img src ={home}><p>Home</p></a></Link>
//      <Link to ='/'> <a href ="">Home</a></Link>
//      <Link to ='/'> <a href ="">Home</a></Link>
//      <Link to ='/'> <a href ="">Home</a></Link>
//     </div>
//   )
// }

export default SideNav;

{
  /* <ul> */
}
{
  /* this top one needs to be in the home.js - not here. */
}
{
  /* <li onClick={closeOpenNav}><img  className="Hamburger"src ="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg" alt ="Hamburger DropDown" width={"100px"}/></li>


  <li><Link to="/"> <img src="https://img.icons8.com/material-sharp/24/undefined/home-page.png" alt="Home" width="25px"/> Home</Link></li>
  <li><Link to="/about"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> About</Link></li>

  <li><Link to="/videoList"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> videoList</Link></li>
  <li><Link to="/video"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> video</Link></li>
</ul>
    </div>
  )
}

export default SideNav

  <li><Link to="/VideoList"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> videoList</Link></li>
  <li><Link to="/Video"> <img src="https://img.icons8.com/ios-filled/50/undefined/compass--v1.png" alt="About" width="25px"/> video</Link></li> */
}
{
  /* </ul> */
}
