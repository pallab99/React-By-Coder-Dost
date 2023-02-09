import Video from "./components/Video";
import "./App.css";
function App() {
  let obj = {
    title: "React Js Tutorial",
    channel: "Coder Dost",
    views: "999K",
    time: "1 year ago",
  };
  return (
    <div className="App">
      <div>Hello World</div>
      <Video {...obj}></Video>
      <Video title="Node Js Tutorial" views="100K" time="1 month ago"></Video>
      <Video
        title="MongoDb Tutorial"
        channel="Coder Dost"
        views="10M"
        time="2 months ago"
      ></Video>
    </div>
  );
}

export default App;
