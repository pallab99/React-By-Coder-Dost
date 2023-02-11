import "./AddVideo.css";
import { useEffect, useState } from "react";
function AddVideo({ addVideos, editableVideo, updateVideo }) {
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
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideo(initialState);
  }
  function handleChange(e) {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) setVideo(editableVideo);
  }, [editableVideo]);

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
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"} Videos
      </button>
    </form>
  );
}

export default AddVideo;
