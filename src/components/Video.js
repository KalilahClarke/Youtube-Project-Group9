import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Error from "./Error";
import "./Video.css"

export default function Video({ videos, setTheVideo, theVideo }) {
  const { id } = useParams();
  const video = videos.find((video) => video.id.videoId === id);

  // useEffect(() => {
  //   // console.log(id)
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(id)
  //       // console.log(data.items[0].snippet.title)
  //       // console.log(data.items[0])
  //       setTheVideo(data.items[0]);
  //       // console.log(theVideo.id);
  //       // console.log(process.env.REACT_APP_API_KEY)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


  if (!video) {
    return <Error/>
  }
    return (
      <div className ='video-component'>
      <YouTube videoId={`${video.id.videoId}`} />
      <h3>{video.snippet.title}</h3>
      <h5>{video.snippet.publishedAt}</h5>
      <h5>{video.snippet.channelTitle}</h5>
      {/* <p>{video.snippet.description}</p> */}
    </div>
    );
    
}