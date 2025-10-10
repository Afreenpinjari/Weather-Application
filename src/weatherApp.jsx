import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Delhi",
    feelsLike: 34.99,
    humidity: 61,
    temp: 30.95,
    tempMax: 30.95,
    tempMin: 30.95,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
