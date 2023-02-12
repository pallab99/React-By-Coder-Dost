import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "./Hooks/VideoHook";
import axios from "axios";
import { useEffect, useState } from "react";
function VideoList({ editVideo }) {
  const url="http://localhost:8000/video";
  const [videos,setVideos]=useState([]);

  async function handleClick()
  {
    const res=await axios.get(url);
    setVideos(res.data);
    console.log('Ok',res.data);
  }
  useEffect(()=>{
   handleClick();
  },[])

  // const videos = useVideos();
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          varified={video.varified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("playing...", video.title)}
            onPause={() => console.log("paused...", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
        {/* <button onClick={handleClick}>Get Videos</button> */}

    </div>
  );
}
export default VideoList;
