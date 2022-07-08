import { DEFAULT_WEATHER_ITEM, WEATHER_DATA } from "../logic/weather";

export function WeatherIcon({ code, size }) {
  const { color, icon: Icon } = WEATHER_DATA[code] ?? DEFAULT_WEATHER_ITEM;
  return <Icon size={size} weight="duotone" color={color} />;
}
