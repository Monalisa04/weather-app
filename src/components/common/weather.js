export default class Weather {
  constructor({
    description = "",
    currentTemperature = "",
    minTemperature = "",
    maxTemperature = "",
    humidity = "",
    precipitation = "",
    wind = "",
    icon = "",
    windDirection = ""
  }) {
    this.description = description;
    this.currentTemperature = currentTemperature;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.humidity = humidity;
    this.precipitation = precipitation;
    this.wind = wind;
    this.icon = icon;
    this.windDirection = windDirection;
  }
}

