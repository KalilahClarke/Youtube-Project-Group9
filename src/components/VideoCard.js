import React from "react";
import "./VideoCard.css";
import {Link, Routes, Route, Router }from 'react-router-dom';

export default function VideoCard({ video }) {
  //movieListing - = break down title, description. to display it
  const { title,thumbnails,channelTitle  } = video.snippet;

  return (
   
    <Link to= {`/video/${video.id.videoId}`}>
     <div>
     <img alt="thumbnails" src={thumbnails.default.url} />
      <p><strong>{title}</strong></p>
      <span>{channelTitle}</span>
    </div>
  
    </Link>
     
  );
}
