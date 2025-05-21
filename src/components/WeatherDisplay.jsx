import MiniWeather from "./MiniWeather";

const weatherIcons = {
  sunny: (
    <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>
      sunny
    </span>
  ),
  cloudy: (
    <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>
      partly_cloudy_day
    </span>
  ),
  overcast: (
    <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>
      cloud
    </span>
  ),
  rainy: (
    <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>
      rainy
    </span>
  ),
  snowy: (
    <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>
      ac_unit
    </span>
  ),
};

function WeatherDisplay({ info, weather }) {
  let currentTemp = info.currentTemp[0];
  let minTemp = info.minTemp;
  let maxTemp = info.maxTemp;
  let tempArr = info.currentTemp;
  let times = info.time;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "35%",
        height: "100%",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
        color: "black",
        alignItems: "center",
        padding: "2%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontSize: "96px" }}>현재 기온</div>
      {weatherIcons[weather[0]]}
      <div style={{ fontSize: "96px" }}>{currentTemp}°C</div>
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ fontSize: "40px" }}>최저: {minTemp}°C</div>
        <div style={{ fontSize: "40px" }}>최고: {maxTemp}°C</div>
      </div>
      <div
        style={{
          width: "100%",
          height: "15%",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
        }}
      >
        <ul
          style={{
            display: "flex",
            padding: "0px",
            justifyContent: "space-evenly",
          }}
        >
          {times.map((_, i) => (
            <MiniWeather
              key={i}
              time={times[i]}
              temp={tempArr[i]}
              weather={weather[i]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WeatherDisplay;
