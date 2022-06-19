import React, {useState} from "react";
import "./Header.css";
import logo from './youtube.png'
import upload from './images/upload.png' 
import notification from './images/notification.png'
import menu from './images/menu.png'
import more from './images/more.png'
import jack from './images/Jack.png'
import microphone from './images/voice-search.png'





function Header() {

  const [search, setSearch] = useState('')

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    setSearch()
  };
  return (
    <nav className='header'>
      <div className ="nav-left header">
      <img className='menu-icon' src ="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg" alt ="menu"/>
      <img className ="logo" src = {logo} alt = "youtube-logo"/>
      </div>
      <div className ="nav-middle header">
        <form className="search-box">
          <input type='text' placeholder="Search"/>
          <button className="header">
            <img src= "https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" alt="search"/>
          </button>
        </form>
        {/* <img
              className="microphone"
              src="https://cdn-icons.flaticon.com/png/512/3293/premium/3293608.png?token=exp=1655341265~hmac=bf1959abc592f8feea4a1905d3dd482d"
              alt="microphone"
            /> */}
      </div>
      <div className = "nav-right header" >
        <img src={upload} alt="upload"/>
        <img src ={more} alt="more"/>
        <img src ={notification} alt ="notification"/>
        <img className="user-icon" src ={jack} alt ="Profile"/>
      </div>
      {/* <form onSubmit={HandleSubmit}>
        <div className="header">
          <img
            className="youtube"
            src={logo}
            alt="Youtube Logo"
          />
          <div className="search-bar">
            <input placeholder="Search" type="text"  />
            <button>
              <img
                src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png"
                alt="search icon"
                width="20px"
                height="20px"
              />
            </button>
            <img
              className="microphone"
              src="https://cdn-icons.flaticon.com/png/512/3293/premium/3293608.png?token=exp=1655341265~hmac=bf1959abc592f8feea4a1905d3dd482d"
              alt="microphone"
            />
          </div>
          <div className="header-icons">
            <img
              className="upload"
              src= {upload}
              alt="upload"
              />
            
            <img className="notification"
            src = {notification}
            alt="notification"
            />
            {/* additional icons */}
          {/* </div>
        </div>
      </form> */}
    </nav>
  );
}

export default Header;
