import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "./Hooks/VideoHook";
import axios from "axios";
import { useEffect, useState } from "react";
import useVideoDispatch from "./Hooks/VideoDispatchHook";
function VideoList({ editVideo }) {
  const url = "http://localhost:8000/video";
  // const [videos,setVideos]=useState([]);
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  useEffect(() => {
    async function loadVideos() {
      const res = await axios.get(url);
      dispatch({ type: "LOAD", payload: res.data });
    }

    loadVideos();
  }, [dispatch]);

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
      {/* <button onClick={loadVideos}>Get Videos</button> */}
    </div>
  );
}
export default VideoList;
