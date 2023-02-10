import Video from "./components/Video";
import "./App.css";
import videos from "./Data/data";
import PlayButton from "./components/PlayButton";
function App() {
  return (
    <div className="App" onClick={()=> console.log("App")}>
      <div>Videos</div>
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
    </div>
  );
}

export default App;
