// Weather and light for a walk. Logic reused from Lancashire Light (SunCalc + Open-Meteo).
// The location comes from data-lat and data-lng on the element that holds the conditions.
(() => {
  const root = document.querySelector("[data-lat][data-lng]");
  if (!root || typeof SunCalc === "undefined") return;

  const lat = parseFloat(root.dataset.lat);
  const lng = parseFloat(root.dataset.lng);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return;

  const WMO = {
    0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
    45: "Fog", 48: "Icy fog",
    51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
    56: "Freezing drizzle", 57: "Heavy freezing drizzle",
    61: "Light rain", 63: "Rain", 65: "Heavy rain",
    66: "Freezing rain", 67: "Heavy freezing rain",
    71: "Light snow", 73: "Snow", 75: "Heavy snow", 77: "Snow grains",
    80: "Light showers", 81: "Showers", 82: "Heavy showers",
    85: "Snow showers", 86: "Heavy snow showers",
    95: "Thunderstorm", 96: "Thunderstorm and hail", 99: "Severe thunderstorm",
  };

  const compass = (deg) => ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(deg / 45) % 8];

  const time = (date) =>
    Number.isNaN(date.getTime())
      ? "--"
      : date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" });

  const set = (name, text) => {
    const el = root.querySelector(`[data-field="${name}"]`);
    if (el) el.textContent = text;
  };

  // Light
  const t = SunCalc.getTimes(new Date(), lat, lng);
  set("sunrise", time(t.sunrise));
  set("sunset", time(t.sunset));
  set("golden-am", `${time(t.sunrise)} to ${time(t.goldenHourEnd)}`);
  set("golden-pm", `${time(t.goldenHour)} to ${time(t.sunset)}`);

  // Weather
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
    "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m" +
    "&wind_speed_unit=mph&timezone=auto";

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Weather request failed");
      return response.json();
    })
    .then(({ current: c }) => {
      set("temp", `${Math.round(c.temperature_2m)}°C`);
      set("feels", `${Math.round(c.apparent_temperature)}°C`);
      set("condition", WMO[c.weather_code] ?? "Unknown");
      set("wind", `${Math.round(c.wind_speed_10m)} mph ${compass(c.wind_direction_10m)}`);
      set("humidity", `${c.relative_humidity_2m}%`);
    })
    .catch(() => set("status", "Weather is unavailable at the moment."));
})();
