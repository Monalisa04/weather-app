import * as locationApi from "./geolocation/geolocation.js";
import { setSearchForm } from "./components/search-form/search-form.js";
import { getForecastData } from "./components/common/forecast.js";
import { updateWeatherDetails } from "./components/weather-details/weather-details.js";
import { updateDateTable } from "./components/date-table/date-table.js";

export const updateForecast = location => {
  let { city, country } = location;
  getForecastData(city, country).then(forecastData => {
    updateWeatherDetails(city, country, forecastData);
    updateDateTable(forecastData);
  });
};
setSearchForm();

locationApi.getUserLocationDetails().then(location => {
  updateForecast(location);
});
