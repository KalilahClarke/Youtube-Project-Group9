import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import VideoCard from "./VideoCard";

export default function VideoList({ videos }) {



  return (
    <div>
      <div>
        <h1>Videos</h1>
        {videos.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
}
