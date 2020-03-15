import { ELEMENT_WEATHER_BOX } from "../common/elements.js";
import { dayProxyHandler } from "../common/day.js";

export const updateWeatherDetails = (city, country, weatherData) => {
  let weather = weatherData[0].weather;

  let dayProxy = new Proxy(weatherData[0], dayProxyHandler);
  let weatherDate = dayProxy.date;

  let weatherDetailsTemplate = `<div class="today forecast" id="today-forecast">
  <div class="forecast-header">
    <div class="day" id="weather-day">${weatherDate}</div>
    </div> <!-- .forecast-header -->
<div class="forecast-content">
    <div class="location" id="weather-city">${city + ", " + country}</div>
    <div class="degree">
        <div class="num" id="weather-temp">${
          weather.currentTemperature
        }<sup>o</sup>C</div>
        <div class="forecast-icon" id="weather-icon">
            <img src="public/assets/images/icons/icon-1.svg" alt="" width=90>
        </div>	
    </div>
    <span id="weather-precipitation"><img src="public/assets/images/icon-umberella.png" alt="">${
      weather.precipitation
    }</span>
    <span id="weather-wind"><img src="public/assets/images/icon-wind.png" alt="">${
      weather.wind
    } km/h</span>
    <span id="weather-wind-direction"><img src="public/assets/images/icon-compass.png" alt="">${
      weather.windDirection
    }</span>
</div>
  </div>
`;

  let weatherDetails = weatherDetailsTemplate;
  ELEMENT_WEATHER_BOX.insertAdjacentHTML("beforeEnd", weatherDetails);
};
