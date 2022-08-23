import { DateTime } from "luxon";

const API_KEY = "9efff45d867e03978e3959fa9b917e88";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//API CALL FOR CURRRENT WEATHER     https://api.openweathermap.org/data/2.5/weather?q=london&appid=9efff45d867e03978e3959fa9b917e88

//API CALL FOR HOURLY AND DAILY https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,alerts&appid=9efff45d867e03978e3959fa9b917e88&units=metric

async function fetchWeatherData(infoType, searchParams) {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
}

async function getFormattedWeatherData(searchParams) {
  const formattedCurrentWeather = await fetchWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await fetchWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,miinutely,alerts",
    units: searchParams.units,
  }).then((data) => getFormattedForecastWeather(data));
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
}

function getFormattedForecastWeather(data) {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((day, index) => ({
    id: index,
    title: formatToLocalTime(day.dt, timezone, "ccc"),
    temp: day.temp.day,
    icon: day.weather[0].icon,
  }));

  hourly = hourly.slice(1, 6).map((hour, index) => ({
    id: index,
    title: formatToLocalTime(hour.dt, timezone, "hh:mm a"),
    temp: hour.temp,
    icon: hour.weather[0].icon,
  }));

  return { timezone, hourly, daily };
}

function formatCurrentWeather(data) {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    name,
  } = data;

  const { main: detail, icon } = data.weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    sunrise,
    sunset,
    speed,
    dt,
    name,
    detail,
    icon,
  };
}

function formatToLocalTime(
  secs,
  timezone,
  format = "cccc , dd  LLL  yyyy' | Local Time: 'hh:mm a "
) {
  return DateTime.fromSeconds(parseInt(secs))
    .setZone(timezone)
    .toFormat(format);
}

function createIconUrl(code) {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export default getFormattedWeatherData;
export { createIconUrl, formatToLocalTime };
