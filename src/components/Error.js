import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };


  return (
    <section className="error"> 
    <p>Please go back to Home Page</p>
    <button onClick={handleHome}>Go Back to Home</button>
    </section>
  );
}
