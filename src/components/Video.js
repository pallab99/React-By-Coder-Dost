import "./Video.css";

function Video({ title, channel = "Coder Dost", views, time }) {
  return (
    <div className="container">
      <img src="http://placeimg.com/200/150/any" alt="Katherine Johnson" />
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
}
export default Video;
