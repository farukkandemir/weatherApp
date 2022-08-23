import React from "react";
import { BsSun } from "react-icons/bs";
import { createIconUrl, formatToLocalTime } from "../services/WeatherServices";

export default function Temparature({
  weather: {
    detail,
    temp,
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    icon,
    timezone,
  },
}) {
  return (
    <div className="temp-info">
      <p>{detail}</p>
      <div className="temp">
        <img src={createIconUrl(icon)} alt="icon" width="60px" height="60px" />
        <span>{`${temp}`}°</span>
        <div className="details">
          <p>
            <BsSun />
            Real fell :{feels_like}°
          </p>

          <p>
            <BsSun />
            Humudity :{humidity}%
          </p>

          <p>
            <BsSun />
            Wind :{speed} km/h
          </p>
        </div>
      </div>
      <div className="footer">
        <small>
          <BsSun />
          Rise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </small>
        <small>
          <BsSun />
          Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </small>
        <small>
          <BsSun />
          High: {`${temp_max}`}
        </small>
        <small>
          <BsSun />
          Low: {`${temp_min}`}
        </small>
      </div>
    </div>
  );
}
