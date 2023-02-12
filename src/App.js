import "./App.css";
import videoDB from "./Data/data";
import { useContext, useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import VideosContext from "./Context/VideosContext";
import VideoDispatchContext from "./Context/VideosDispatchContext";
import Counter from "./components/Counter_";

function App() {
  const [editableVideo, seteditableVideo] = useState(0);
  const [mode, setMode] = useState("darkMode");

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        seteditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos, setVideos] = useState(videoDB);

  // function addVideos(video) {
  //action:{type:'ADD',payload:video}
  //   dispatch({ type: "ADD", payload: video });
  // }

  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  // setVideos(videos.filter((video) => video.id !== id));
  // }

  function editVideo(id) {
    seteditableVideo(videos.find((video) => video.id === id));
    // console.log(videos.find((video) => video.id === id));
  }

  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video });
  // const index = videos.findIndex((v) => v.id === video.id);
  // const newVideos = [...videos];
  // newVideos.splice(index, 1, video);
  // console.log(newVideos);
  // setVideos(newVideos);
  // }

  const themeContext = useContext(ThemeContext);


  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <Counter></Counter>
            <button
              onClick={() => {
                if (mode === "darkMode") {
                  setMode("lightMode");
                } else {
                  setMode("darkMode");
                }
              }}
            >
              Mode
            </button>
            <AddVideo editableVideo={editableVideo}></AddVideo>

            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
