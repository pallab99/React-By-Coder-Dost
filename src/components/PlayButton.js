import ThemeContext from "../Context/ThemeContext";
import "./PlayButton.css";
import { useContext, useState } from "react";
function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  }

  const theme = useContext(ThemeContext);

  return (
    <button className={theme} onClick={handleClick}>
      {children} {playing ? "⏸️" : "▶️"}
    </button>
  );
}
export default PlayButton;
