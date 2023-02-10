import "./AddVideo.css";
import { useState } from "react";
function AddVideo({ addVideos }) {
  const initialState = {
    channel: "Coder Dost",
    time: "1 year ago",
    varified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }
  function handleChange(e) {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        //   onClick={(e) => {
        // e.stopPropagation();
        // setVideos([
        //   ...videos,
        //   {
        //     id: videos.length + 1,
        //     title: "Demo Tutorial",
        //     channel: "Coder Dost",
        //     views: "999K",
        //     time: "1 year ago",
        //     varified: true,
        //   },
        // ]);
        //   }}
      >
        Add Videos
      </button>
    </form>
  );
}

export default AddVideo;
