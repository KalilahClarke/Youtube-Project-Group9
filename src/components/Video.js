import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Error from "./Error";

export default function Video({ videos, setTheVideo, theVideo }) {
  const { id } = useParams();
  // const video = videos.find((video) => video.id.videoId === id);

  useEffect(() => {
    // console.log(id)
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(id)
        // console.log(data.items[0].snippet.title)
        // console.log(data.items[0])
        setTheVideo(data.items[0]);
        // console.log(theVideo.id);
        // console.log(process.env.REACT_APP_API_KEY)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
      <div>
        {/* <h2>video</h2> */}
       <h3>{theVideo.snippet.title}</h3>
        <YouTube videoId={`${theVideo.id}`} />
        <h4>Channel: {theVideo.snippet.channelTitle}</h4> 
        {/* <p>{theVideo.snippet.description}</p> */}
        {/* <p>{theVideo}</p> */}
      </div>
    );
    
}