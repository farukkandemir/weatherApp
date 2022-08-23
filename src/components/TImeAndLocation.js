import React from "react";
import { formatToLocalTime } from "../services/WeatherServices";

export default function TImeAndLocation({
  weather: { name, country, dt, timezone },
}) {
  return (
    <div className="time-location">
      <p className="time"> {formatToLocalTime(dt, timezone)}</p>

      <h3 className="location">
        {" "}
        {name} , {country}
      </h3>
    </div>
  );
}
