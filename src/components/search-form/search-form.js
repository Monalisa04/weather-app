import * as Elements from "../common/elements.js";
import cities from "./world-cities.js";
import { updateForecast } from "../../index.js";

const searchInput = Elements.ELEMENT_SEARCH_FORM.querySelector(
  "input[type='text']"
);
const searchResultsDropdown = Elements.ELEMENT_SEARCH_FORM.querySelector("ul");
let locationData = [];

function* filterLocation(arr, searchStr) {
  let maxSize = 10;
  let count = 0;
  let index = 0;

  if (arr.length < maxSize) maxSize = arr.length;
  while (count < maxSize && index < arr.length) {
    const element = arr[index];
    if (element.name.toLowerCase().startsWith(searchStr)) {
      yield element;
      count++;
    }
    index++;
  }
}

export const selectLocation = e => {
  Elements.resetElements();
  const location = locationData[e.target.getAttribute("data-index")];

  searchInput.value = location.name + ", " + location.country;
  updateForecast({ city: location.name, country: location.country });
};

const showLocationList = e => {
  searchResultsDropdown.innerHTML = "";
  if (e.target.value.length > 1) {
    locationData = Array.from(filterLocation(cities, e.target.value));

    locationData.forEach((obj, index) => {
      const liTemplate = `<li class='city' data-index='${index}'>${obj.name}, ${obj.country}</li>`;
      searchResultsDropdown.insertAdjacentHTML("beforeEnd", liTemplate);
    });
  }
  searchResultsDropdown.addEventListener("click", selectLocation);
};
export const setSearchForm = () => {
  searchInput.addEventListener("keyup", showLocationList);
};
