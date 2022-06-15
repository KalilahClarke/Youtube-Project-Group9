import React from 'react'
import "./Header.css"

function Header() {
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)

  }
  return (
    <div className="Header">
    <img  className="Youtube" src="https://socalrealtylaw.com/wp-content/uploads/2021/09/R-1.png" alt="Youtube Logo"/>
    <form value ={HandleSubmit}>
       <input placeholder ='Search' type = 'text'/>
      <button>Submit</button> 

    </form>
    </div>
  )
}

export default Header