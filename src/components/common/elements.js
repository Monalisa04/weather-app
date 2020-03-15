export const ELEMENT_WEATHER_BOX = document.getElementById("forecast-box");
export const ELEMENT_SEARCH_FORM = document.getElementById("search-form");

export const resetElements = () => {
  ELEMENT_WEATHER_BOX.innerHTML = "";
  ELEMENT_SEARCH_FORM.querySelector("ul#search-results").innerHTML = "";
};
