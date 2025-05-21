import { useEffect, useState } from "react";

function useLocation() {
  const [locationInfo, setLocationInfo] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationInfo({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log("에러");
        alert("Location not allowed");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);
  return locationInfo;
}

export default useLocation;
