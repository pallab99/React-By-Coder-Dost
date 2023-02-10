import Video from "./components/Video";
import "./App.css";
import videoDB from "./Data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { useState } from "react";
function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Demo Tutorial",
                channel: "Coder Dost",
                views: "999K",
                time: "1 year ago",
                varified: true,
              },
            ]);
          }}
        >
          Add Videos
        </button>
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          varified={video.varified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("playing...", video.title)}
            onPause={() => console.log("paused...", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="Pause-MSG" onSmash={() => alert("Alert Message")}>
          Alert
        </PlayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
