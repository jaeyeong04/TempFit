const weatherIcons = {
  sunny: (
    <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
      sunny
    </span>
  ),
  cloudy: (
    <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
      partly_cloudy_day
    </span>
  ),
  overcast: (
    <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
      cloud
    </span>
  ),
  rainy: (
    <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
      rainy
    </span>
  ),
  snowy: (
    <span className="material-symbols-outlined" style={{ fontSize: "50px" }}>
      ac_unit
    </span>
  ),
};

function MiniWeather({ time, temp, weather }) {
  let formattedTime = String(time).replace(/^(\d{2})(\d{2})$/, "$1:$2");
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center ",
      }}
    >
      <div>{formattedTime}</div>
      {weatherIcons[weather]}
      <div>{temp}°C</div>
    </li>
  );
}

export default MiniWeather;
