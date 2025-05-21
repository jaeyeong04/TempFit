import { useEffect, useState } from "react";
import "./App.css";
import useWeather from "./customHooks/useWeatherInfo.jsx";
import useLocation from "./customHooks/useLocationInfo.jsx";
import useSkyStatus from "./customHooks/useSkyStatus.jsx";
import Background from "./components/Background.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import ClothesDisplay from "./components/ClothesDisplay.jsx";
import StyleForm from "./components/StyleForm.jsx";
import Outer from "./components/clothes/Outer.jsx";
import Top from "./components/clothes/Top.jsx";
import Bottom from "./components/clothes/Bottom.jsx";
import Shoes from "./components/clothes/Shoes.jsx";
import Underwear from "./components/clothes/Underwear.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import getClothingRecommendation from "./components/getClothingRecommendation.jsx";

function App() {
  const locationInfo = useLocation();
  const weatherInfo = useWeather(
    locationInfo?.latitude,
    locationInfo?.longitude
  );
  const skyStatus = useSkyStatus(locationInfo, weatherInfo);
  const [formResult, setFormResult] = useState(null);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    if (formResult) {
      const result = getClothingRecommendation({
        style: formResult.style,
        gender: formResult.gender,
        currentTemp: weatherInfo.currentTemp[0],
      });
      setClothes(result);
    }
  }, [formResult, weatherInfo.currentTemp]);
  return (
    <>
      {locationInfo && weatherInfo ? (
        <main style={{ height: "100vh" }}>
          <Background weather={skyStatus.weather[0]}>
            <div className="container">
              <WeatherDisplay info={weatherInfo} weather={skyStatus.weather} />
              <ClothesDisplay>
                <StyleForm onSubmit={setFormResult}></StyleForm>
                <Outer outer={clothes.outer}></Outer>
                <Top top={clothes.top}></Top>
                <Bottom bottom={clothes.bottom}></Bottom>
                <Shoes shoes={clothes.shoes}></Shoes>
                <Underwear underwear={clothes.underwear}></Underwear>
                <AdditionalInfo
                  rainInfo={weatherInfo.pty}
                  hasBigTempDiff={skyStatus.hasBigTempDiff}
                ></AdditionalInfo>
              </ClothesDisplay>
            </div>
          </Background>
        </main>
      ) : (
        <div>Loading information...</div>
      )}
    </>
  );
}

export default App;
