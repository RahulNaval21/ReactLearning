import { useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
    console.log(video);
  }

  function handleChange(e) {
    console.log(e.target.value, e.target.name);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
