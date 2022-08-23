import React from "react";
import { createIconUrl } from "../services/WeatherServices";

export default function Forecast({ title, items }) {
  if (items === undefined) {
    return (
      <div className="forecast">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="forecasts">
      <h4 style={{ textAlign: "center", marginTop: "20px" }}>{title}</h4>
      <hr style={{ width: "500px", margin: "0 auto", marginTop: "10px" }} />
      <div className="forecast-container">
        {items.map((item) => (
          <div key={item.id} className="forecast">
            <small>{item.title}</small>
            <img
              src={createIconUrl(item.icon)}
              alt="icon"
              width="40px"
              height="40px"
            />
            <small>{item.temp}°</small>
          </div>
        ))}
      </div>
    </div>
  );
}

/* <div className="forecast">
          <small>4:30</small>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="icon"
            width="40px"
            height="40px"
          />
          <small>22°</small>
        </div>
        <div className="forecast">
          <small>4:30</small>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="icon"
            width="40px"
            height="40px"
          />
          <small>22°</small>
        </div>
        <div className="forecast">
          <small>4:30</small>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="icon"
            width="40px"
            height="40px"
          />
          <small>22°</small>
        </div> */
