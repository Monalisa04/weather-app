const geocoder = new google.maps.Geocoder();
export const getUserLocationCoordinates = () => {
  let response = {
    location: null,
    error: null
  };
  return new Promise(function(resolve, reject) {
    if (!navigator.geolocation) {
      reject("App requires location services");
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          response.location = {
            latitude,
            longitude
          };
          resolve(response);
        },
        () => {
          reject("Failed to fetch location");
        }
      );
    }
  });
};

const getLocationDetails = (latitude, longitude) => {
  let city, country;
  const location = { lat: latitude, lng: longitude };
  return new Promise(function(resolve, reject) {
    geocoder.geocode({ location: location }, function(results, status) {
      if (status === "OK") {
        for (let component of results[0].address_components) {
          if (component.types[0] === "administrative_area_level_1") {
            city = component.long_name;
          }
          if (component.types[0] === "country") {
            country = component.short_name;
          }
          if (city && country) {
            resolve({ city, country });
            break;
          }
        }
      }
    });
  });
};

export const getUserLocationDetails = () => {
  return new Promise(function(resolve, reject) {
    if (!navigator.geolocation) {
      reject("App requires location services");
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          return getLocationDetails(
            position.coords.latitude,
            position.coords.longitude
          ).then(location => {
            resolve(location);
          });
        },
        () => {
          reject("Failed to fetch location");
        }
      );
    }
  });
};
