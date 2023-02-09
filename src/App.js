import Video from "./components/Video";
import "./App.css";
import videos from "./Data/data";
function App() {
  return (
    <div className="App">
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
        ></Video>
      ))}
    </div>
  );
}

export default App;
