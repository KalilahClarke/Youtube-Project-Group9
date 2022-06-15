import React from 'react';

function About() {

  function handleClickAbout(e) {
    e.preventDefault();
  }
  return (
    <div onClick={ handleClickAbout }>
    <p>About Project</p>
    <sections>Ziqian
      <img src='https://avatars.githubusercontent.com/u/96352580?v=4'/>
      <cite>https://github.com/ZiqianPan</cite>
    </sections>
    <sections>Taji
      <img src ="https://avatars.githubusercontent.com/u/82912560?v=4"/>
      <cite>https://github.com/Nique444</cite>
    </sections>
    <sections>Kalilah
      <img src ="https://avatars.githubusercontent.com/u/75289632?v=4"/> 
      <cite>https://github.com/KalilahClarke</cite>
    </sections>
    
    </div>
  )
}

export default About