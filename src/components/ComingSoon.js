import React from 'react'
import "./ComingSoon.css"
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (  
  <div class="middle">
    <h1>COMING SOON</h1>
    <p>Work in progress</p>
    <button id='comingsoon' onClick={handleHome}>Go Back to Home</button>
  </div>
  )
}
