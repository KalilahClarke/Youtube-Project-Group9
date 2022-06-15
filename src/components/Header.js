import React from 'react'
import "./Header.css"

function Header() {
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)

  }
  return (
    <>
    <img src ="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-0.png" alt ="Hamburger DropDown"/>
    <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube Logo"/>
    <form onSubmit={ HandleSubmit }>
       <input placeholder ='Search' type = 'text'/>
      <button>Submit</button> 

    </form>
    </>
  )
}

export default Header