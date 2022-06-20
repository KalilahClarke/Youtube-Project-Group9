import React, { useState } from "react";
import "./Header.css";
import logo from "./youtube.png";
import upload from "./images/upload.png";
import notification from "./images/notification.png";
import menu from "./images/menu.png";
import more from "./images/more.png";
import jack from "./images/Jack.png";
import microphone from "./images/voice-search.png";



function Header({ search, setSearch, videos, setVideos}) {
  // const [search, setSearch] = useState('')
const data = {
    "kind": "youtube#searchListResponse",
    "etag": "fVkG2KyWCHfnAPcxsVifQZFoSOw",
    "nextPageToken": "CAQQAA",
    "regionCode": "US",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 4
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "2L24kujjkPPczQxKwhq2H5wiu7E",
            "id": {
                "kind": "youtube#video",
                "videoId": "XXYlFuWEuKI"
            },
            "snippet": {
                "publishedAt": "2021-01-05T17:00:12Z",
                "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
                "title": "The Weeknd - Save Your Tears (Official Music Video)",
                "description": "Official music video by The Weeknd performing \"Save Your Tears\"– 'After Hours' available everywhere now: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TheWeekndVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-05T17:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "jG12XCJH0VuBZ4nfRQ8AxYNlWZ8",
            "id": {
                "kind": "youtube#video",
                "videoId": "yzTuBuRdAyA"
            },
            "snippet": {
                "publishedAt": "2015-05-27T13:00:03Z",
                "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
                "title": "The Weeknd - The Hills (Official Video)",
                "description": "The Weeknd - The Hills (Official Video) Download Song: http://theweeknd.co/BeautyBehindTheMadness Taken from the new ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yzTuBuRdAyA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TheWeekndVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2015-05-27T13:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SmA2EDOjWcdbn9MS4ZRsORdQrAE",
            "id": {
                "kind": "youtube#video",
                "videoId": "4NRXx6U8ABQ"
            },
            "snippet": {
                "publishedAt": "2020-01-21T18:00:10Z",
                "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
                "title": "The Weeknd - Blinding Lights (Official Video)",
                "description": "Official music video for The Weeknd \"Blinding Lights\" - available everywhere now: http://theweeknd.co/blindinglightsYD ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TheWeekndVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2020-01-21T18:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "G2o6mP-VXaJt293GK1DPBqbHw-4",
            "id": {
                "kind": "youtube#video",
                "videoId": "2fDzCWNS3ig"
            },
            "snippet": {
                "publishedAt": "2022-04-05T13:00:10Z",
                "channelId": "UCF_fDSgPpBQuh1MsUTgIARQ",
                "title": "The Weeknd - Out of Time (Official Video)",
                "description": "Official music video for The Weeknd “Out Of Time”. Available now, on 'Dawn FM' - http://theweeknd.co/dawnfm ▻Get exclusive ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2fDzCWNS3ig/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2fDzCWNS3ig/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2fDzCWNS3ig/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TheWeekndVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2022-04-05T13:00:10Z"
            }
        }
    ]
}






  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

//fetch here? -> then go to videoList to .map them. 

  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  //     )
  //   .then ((response) => response.json())
  //   .then ((data) => {
  //     setVideos(data.items)
      
  //   })
    
  //   .catch ((err) => {
  //     console.log(err)
  //   })
  // })

setVideos(data.items);//this works. 
// console.log(videos);


  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <nav className="header">
      <div className="nav-left header">
        <img
          className="menu-icon"
          src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg"
          alt="menu"
        />
        <img className="logo" src={logo} alt="youtube-logo" />
      </div>

      <div className="nav-middle header">
        <form onSubmit={handleSubmit} className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <button className="header">
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/search--v1.png"
              alt="search"
            />
          </button>
        </form>
      </div>

      <div className="nav-right header">
        <img src={upload} alt="upload" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        <img className="user-icon" src={jack} alt="Profile" />
      </div>
    </nav>
  );
}

export default Header;
