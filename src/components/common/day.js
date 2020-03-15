const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default class Day {
  constructor(date, weather) {
    this.date = date;
    this.weather = weather;
  }
}

export const dayProxyHandler = {
  get: function(target, property) {
    let oldValue = Reflect.get(target, property);
    let newValue =
      daysOfWeek[oldValue.getDay()] +
      " " +
      oldValue.getDate() +
      " " +
      months[oldValue.getMonth()] +
      " " +
      oldValue.getFullYear();
    return newValue;
  },
  set: function(target, property, value) {
    /*let newVal = "";
    try {
      newVal = value.toDateString();
    } catch (e) {}*/
    return Reflect.set(target, property, value);
  }
};
