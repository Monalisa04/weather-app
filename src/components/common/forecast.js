import { getWeatherForecast } from "../../weather-service/weather-service.js";
import Weather from "./weather.js";
import Day, { dayProxyHandler } from "./day.js";

export const getForecastData = (city, country) => {
  let weatherForecastArray = new Array();
  return getWeatherForecast(city, country).then(response => {
    for (let data of response.data) {
      if (weatherForecastArray.length >= 7) {
        break;
      }
      const weatherData = {
        description: data.weather.description,
        currentTemperature: data.temp,
        minTemperature: data.min_temp,
        maxTemperature: data.max_temp,
        humidity: data.rh,
        precipitation: data.precip,
        wind: data.wind_spd,
        icon: data.weather.icon,
        windDirection: data.wind_cdir_full
      };
      const weather = new Weather(weatherData);

      const day = new Day(new Date(data.datetime), weather);
      weatherForecastArray.push(day);
    }
    return weatherForecastArray;
  });
};
