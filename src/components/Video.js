import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time, varified, id }) {
  return (
    <div className="container">
      <img
        src={`https://picsum.photos/id/${id}/160/90`}
        alt="Katherine Johnson"
      />
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {varified && "✅"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
}
export default Video;
