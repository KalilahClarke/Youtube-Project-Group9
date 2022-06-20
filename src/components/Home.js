import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube'


import Thumbnail from "./Thumbnail";

export default function Home({videos,setVideos}) {
  const [loadingError, setLoadingError] = useState(false);
  const [submit, setSubmit] = useState(false)
  const [input, setInput] = useState("");
  const key = process.env.REACT_APP_API_KEY
  
  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${input}&type=video&key=${key}`)
    .then((response) => response.json())
    .then((data)=>{
      setVideos(data.items)
    })
    .catch((error) => {
      console.error(error);
      setLoadingError(true);
    });
  }, [submit]);

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit ? setSubmit(false) : setSubmit(true)
  }

  return (
    <div>
      {/* <section>
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleChange}/>
          <button>Search</button>
        </form>
      </section> */}
      {console.log(videos)}
      <ul>
      {videos.map((video) => {
        return <Thumbnail video={ video } key= {video.id.videoId}/>
      })}
      </ul>
    </div>
  )
}