import { ELEMENT_WEATHER_BOX } from "../common/elements.js";
import { dayProxyHandler } from "../common/day.js";

export const updateDateTable = weatherData => {
  let dateHtml = "";
  let index = 0;
  for (let data of weatherData) {
    if (index++ === 0) {
      continue;
    }

    let dayProxy = new Proxy(data, dayProxyHandler);
    let day = dayProxy.date;

    const dateTemplate = `<div class="forecast">
                        <div class="forecast-header">
                            <div class="day">${day.substring(0, day.indexOf(' '))}</div>
                        </div> 
                        <div class="forecast-content">
                            <div class="forecast-icon">
                                <img src="public/assets/images/icons/icon-3.svg" alt="" width="48">
                            </div>
                            <div class="degree">${data.weather.maxTemperature}<sup>o</sup>C</div>
                            <small>${data.weather.minTemperature}<sup>o</sup></small>
                        </div>
                    </div>`;
    ELEMENT_WEATHER_BOX.insertAdjacentHTML(
      "beforeend",
      dateTemplate
    );
  }
};
