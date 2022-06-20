import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import VideoCard from "./VideoCard";

export default function VideoList({ videos }) {
//MovieIndex. -- might need to make routes. - 


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

//pass the search state down. // this could JUST BE THE HOME.JS
//conditional render if there is search result - then - show .map and all the video
//ELSE - show random video or - NOTHING.
//use the ALL video return - to it - so it gets. .MAP in here.
//display them .
//also tag them with video.js SO it can be routed to the individual video.

//fetch here???.

// export default function MovieListing({movie}) {
//     const {title,description,duration,id, listedIn} = movie;
//     // console.log(movie);

//     const params = useParams();
//     // console.log(params);

//   return (
//     <article className="show">
//     <h3 class="title">
//       <Link to={`/movies/${id}`}>{title}</Link>
//     </h3>
//     <p className="description">{description}</p>
//     <aside className="details">
//       <p><span>Listed Categories:</span> {listedIn}</p>
//       <p><span>Duration:</span> {duration}</p>
//     </aside>
//   </article>
//   )
// }
