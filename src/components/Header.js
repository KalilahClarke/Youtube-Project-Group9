import React from 'react'
import "./Header.css"

function Header() {
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)

  }
  return (
    <>
    <form onSubmit={ HandleSubmit }>
    <div className="Header">
    <img  className="Youtube" src="https://socalrealtylaw.com/wp-content/uploads/2021/09/R-1.png" alt="Youtube Logo"/>
       <input placeholder ='Search' type = 'text'/>
      <button><img src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" alt="search icon" width="20px" height="20px"/></button> 
    </div>
    </form>
    <img src="https://cdn-icons.flaticon.com/png/128/3293/premium/3293616.png?token=exp=1655339213~hmac=1370b08007c04f12a428bef5ddcad9d0" alt ='microphone'/>
    </>
  )
}

export default Header