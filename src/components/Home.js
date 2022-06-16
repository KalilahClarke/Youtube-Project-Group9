import React from 'react';
import { useState, useEffect } from 'react';

function Home() {

  let [videos, setVideos] = useState(null)

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
      )
    .then ((response) => response.json())
    .then ((json) => setVideos(json.items))
  }, [])

  return (
    <div className='Home'></div>
  )
}

export default Home