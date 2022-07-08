export async function getWeather({ timezone = "Europe/Berlin", latitude, longitude, signal }) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&timezone=${timezone}`,
    { signal }
  );
  if (!res.ok) {
    throw res;
  }
  const data = await res.json();
  return data;
}

export async function search(query, signal) {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?language=fr&name=${query}`, { signal });
  if (!res.ok) {
    throw res;
  }
  const data = await res.json();
  return data;
}
