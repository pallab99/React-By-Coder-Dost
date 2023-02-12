import { useContext, useEffect } from "react";
import "./Video.css";
import ThemeContext from "../Context/ThemeContext";
import useVideoDispatch from "./Hooks/VideoDispatchHook";

function Video({
  title,
  channel = "Coder Dost",
  views,
  time,
  varified,
  id,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  // useEffect(()=>{
  //   const idx=setInterval(() => {
      
  //     console.log("Video Playing",id);
  //   }, 3000);
  //   return(()=>{
  //     clearInterval(idx);
  //   })
  // },[id])

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>

        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {varified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Video;
