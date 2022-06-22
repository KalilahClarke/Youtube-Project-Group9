import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import VideoCard from "./VideoCard";
import Error from "./Error";
import "./Home.css";

export default function Home({ videos, search, randomVideos, setDisplaySearch, displaySearch}) {
  if (randomVideos === false ) {
    return (
      <div>
        <h1>Search something</h1>
      </div>
    );
  } else {
    return (
      <div>
        {/* <h1>{displaySearch} Videos</h1> */}
        {videos.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    );
  }
}
