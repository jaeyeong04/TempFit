import sunny from "../assets/videos/sunny.mp4";
import cloudy from "../assets/videos/cloud.mp4";
import overcast from "../assets/videos/overcast.mp4";
import rainy from "../assets/videos/rain.mp4";
import snowy from "../assets/videos/snow.mp4";

const videos = {
  sunny,
  cloudy,
  overcast,
  rainy,
  snowy,
};

function Background({ weather, children }) {
  if (!weather) return null;
  let video;
  if (weather == "rainy") {
    video = videos.rainy;
  } else if (weather == "snow") {
    video = videos.snowy;
  } else if (weather == "sunny") {
    video = videos.sunny;
  } else if (weather == "cloudy") {
    video = videos.cloudy;
  } else if (weather == "overcast") {
    video = videos.overcast;
  }
  return (
    <div
      style={{
        position: "relative",
        width: "1920px",
        height: "945px",
        zIndex: "0",
      }}
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.5",
          position: "absolute",
        }}
      ></video>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Background;
