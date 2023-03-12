import React from "react";
import VideoCard from "./VideoCard";
import "./Home.css";

export default function Home({ videos, randomVideos}) {
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
