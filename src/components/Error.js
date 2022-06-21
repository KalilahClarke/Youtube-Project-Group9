import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <section className="error"> 
    {alert("Something went Wrong!! Please try again later")}
    {window.close()}
    <p>Please go back to Home Page</p>
    </section>
  );
}
