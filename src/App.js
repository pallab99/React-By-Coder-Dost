import "./App.css";
import videoDB from "./Data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, seteditableVideo] = useState(0);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    seteditableVideo(videos.find((video) => video.id === id));
    // console.log(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos=[...videos];
    newVideos.splice(index, 1, video)
    // console.log(newVideos);
    setVideos(newVideos);
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo
        addVideos={addVideos}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      ></AddVideo>

      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
    </div>
  );
}

export default App;
