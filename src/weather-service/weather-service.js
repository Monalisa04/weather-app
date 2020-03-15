const apiKey = "ab1c9d68fa0b4317895c3dcc2cad90b7";

export const getWeather = (latitude, longitude) => {
  const apiUrl = "http://api.weatherbit.io/v2.0/forecast/daily?";
  let apiParams = "lat=" + latitude;
  apiParams += "&lon=" + longitude;
  apiParams += "&units=metric";
  apiParams += "&appid=" + apiKey;

  return new Promise(function(resolve, reject) {
    fetch(apiUrl + apiParams).then(
      function(response) {
        //let responseCopy = response.clone();
        response.json().then(function(data) {
          resolve(data);
        });
      },
      function(error) {
        reject(error);
      }
    );
  });
};

export const getWeatherForecast = (city, country, numberOfDays) => {
  const apiUrl = "http://api.weatherbit.io/v2.0/forecast/daily?";
  let apiParams = "city=" + city;
  apiParams += "&country=" + country;
  apiParams += "&units=metric";
  apiParams += "&key=" + apiKey;

  return new Promise(function(resolve, reject) {
    fetch(apiUrl + apiParams).then(
      function(response) {
        response.json().then(function(data) {
          resolve(data);
        });
      },
      function(error) {
        reject(error);
      }
    );
  });
};
