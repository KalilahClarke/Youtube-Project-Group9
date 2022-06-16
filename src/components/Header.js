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
    <div className="header">
    <img  className="youtube" src="https://socalrealtylaw.com/wp-content/uploads/2021/09/R-1.png" alt="Youtube Logo"/>
       <input placeholder ='Search' type = 'text'/>
      <button><img src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png" alt="search icon" width="20px" height="20px"/></button> 
    </div>
    </form>
    <img className= "microphone"src='https://cdn-icons.flaticon.com/png/512/3293/premium/3293608.png?token=exp=1655341265~hmac=bf1959abc592f8feea4a1905d3dd482d' alt ='microphone'/>
    <img className="create" src="https://cdn3.iconfinder.com/data/icons/user-99/64/video_add_create_camera_ui-256.png" alt ='create'/>
    </>
  )
}

export default Header