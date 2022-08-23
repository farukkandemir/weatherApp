import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLocations from "./components/DefaultLocations";
import Forecast from "./components/Forecast";
import Temparature from "./components/Temparature";
import TImeAndLocation from "./components/TImeAndLocation";
import Tools from "./components/Tools";
import getFormattedWeatherData from "./services/WeatherServices";

function App() {
  const [weather, setWeather] = useState([]);
  const [cityName, setCityName] = useState("berlin");
  const [tempUnit, setTempUnit] = useState(true);

  async function getWeather() {
    const data = await getFormattedWeatherData({
      q: cityName,
      units: tempUnit ? "metric" : "imperial",
    });
    setWeather(data);
  }

  useEffect(() => {
    getWeather();
  }, [cityName, tempUnit]);

  return (
    <section>
      <div className="app-container">
        <DefaultLocations setCityName={setCityName} />
        <Tools setCityName={setCityName} setTempUnit={setTempUnit} />
        {weather && (
          <div>
            <TImeAndLocation weather={weather} />
            <Temparature weather={weather} />
            <Forecast title="Hourly Forecast" items={weather.hourly} />
            <Forecast title="Daily Forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
