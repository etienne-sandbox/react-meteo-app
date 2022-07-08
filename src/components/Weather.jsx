import { useEffect, useState } from "react";
import { getWeather } from "../logic/api";
import { Day } from "./Day";

export function Weather({ place }) {
  const [data, setData] = useState(null);
  const [day, setDay] = useState(0);

  const { latitude, longitude, timezone } = place;

  useEffect(() => {
    const controller = new AbortController();
    getWeather({ latitude, longitude, timezone, signal: controller.signal })
      .then((data) => setData(data))
      .catch(() => setData(null));
    return () => controller.abort();
  }, [latitude, longitude, timezone]);

  const weatherByDay =
    data === null
      ? null
      : data.daily.time.map((time, index) => {
          return {
            date: new Date(time),
            weatherCode: data.daily.weathercode[index],
            tempMin: data.daily.temperature_2m_min[index],
            tempMax: data.daily.temperature_2m_max[index],
            windSpeed: data.daily.windspeed_10m_max[index],
            windDirection: data.daily.winddirection_10m_dominant[index],
          };
        });

  return (
    <div className="Weather">
      {weatherByDay === null ? (
        <p>Loading...</p>
      ) : (
        <div className="Weather--days">
          {weatherByDay.map((dayWeather, index) => {
            const active = index === day;
            return <Day key={index} dayWeather={dayWeather} active={active} onClick={() => setDay(index)} />;
          })}
        </div>
      )}
    </div>
  );
}
