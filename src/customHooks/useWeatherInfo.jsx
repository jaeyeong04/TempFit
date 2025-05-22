import { useEffect, useState, useMemo } from "react";
import { setBaseTime } from "../utils/setBaseTime.jsx";
import { xy_conv } from "../utils/xy_conv.jsx";

const API_KEY = import.meta.env.REACT_APP_WEATHER_API_KEY;
function useWeather(latitude, longitude) {
  const [currentTemp, setCurrentTemp] = useState(null); //현재 기온

  const [sky, setSky] = useState(null); //날씨 정보
  const [pty, setPty] = useState(null); //눈or비 정보
  const [time, setTime] = useState(null); //fcstTime
  useEffect(() => {
    if (!latitude || !longitude) return;
    const fetchWeather = async () => {
      try {
        const { nx, ny } = xy_conv(latitude, longitude);
        const today = new Date();
        const date = today.toISOString().split("T")[0].replace(/-/g, "");
        const hour = today.getHours();
        const minute = today.getMinutes();
        const baseTime = setBaseTime(hour, minute);

        //Get
        const ultraSrtRes = await fetch(
          `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${date}&base_time=${baseTime}&nx=${nx}&ny=${ny}`,
          {
            headers: {
              Accept: "application / json",
            },
            method: "GET",
          }
        );
        if (!ultraSrtRes.ok)
          throw new Error(`초단기예보 fetch 실패: ${ultraSrtRes.status}`);
        const ultraSrtData = await ultraSrtRes.json();
        const ultraSrtItems = ultraSrtData?.response?.body?.items?.item;
        if (!ultraSrtItems) throw new Error("데이터 없음");

        setCurrentTemp(
          ultraSrtItems
            .filter((item) => item.category === "T1H")
            .slice(0, 6)
            .map((item) => item.fcstValue)
        );
        setSky(
          ultraSrtItems
            .filter((item) => item.category === "SKY")
            .slice(0, 6)
            .map((item) => item.fcstValue)
        );
        setPty(
          ultraSrtItems
            .filter((item) => item.category === "PTY")
            .slice(0, 6)
            .map((item) => item.fcstValue)
        );
        setTime(
          ultraSrtItems
            .filter((item) => item.category === "T1H")
            .slice(0, 6)
            .map((item) => item.fcstTime)
        );
      } catch (err) {
        console.error("날씨 API 호출 실패:", err.message);
      }
    };
    fetchWeather();
  }, [latitude, longitude]);
  const weather = useMemo(
    () => ({
      currentTemp,

      sky,
      pty,
      time,
    }),
    [currentTemp, sky, pty, time]
  );

  return weather;
}

export default useWeather;
