import { useEffect, useState } from "react";

const weatherNumbers = {
  1: "sunny",
  2: "cloudy",
  3: "overcast",
  4: "rainy",
  5: "snowy",
};

function useSkyStatus(locationInfo, weatherInfo) {
  const [hasBigTempDiff, setHasBigTempDiff] = useState(false);
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    if (!locationInfo || !weatherInfo) return;
    setHasBigTempDiff(weatherInfo.maxTemp - weatherInfo.minTemp > 10);
    const weatherArr = [];
    for (let i = 0; i < 13; i++) {
      const pty = weatherInfo.pty?.[i];
      const sky = weatherInfo.sky?.[i];
      if (pty === "1" || pty === "2" || pty === "4") {
        weatherArr.push(weatherNumbers[4]);
      } else if (pty === "3") {
        weatherArr.push(weatherNumbers[5]);
      } else if (pty === "0") {
        if (sky === "1") {
          weatherArr.push(weatherNumbers[1]);
        } else if (sky === "3") {
          weatherArr.push(weatherNumbers[2]);
        } else if (sky === "4") {
          weatherArr.push(weatherNumbers[3]);
        }
      }
    }
    setWeather(weatherArr);
  }, [weatherInfo, locationInfo]);
  return { weather, hasBigTempDiff };
}

export default useSkyStatus;
