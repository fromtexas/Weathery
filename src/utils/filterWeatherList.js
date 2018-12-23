import * as d3 from "d3";

export function extractDate(obj) {
  return obj.dt_txt.slice(0, 10);
}

function compareDates(item1, item2) {
  if (!item1 || !item2) {
    return false;
  }
  if (extractDate(item1) !== extractDate(item2)) {
    return false;
  }
  return true;
}

export function parseWeatherList(arr) {
  const result = [];
  arr.forEach((item, index) => {
    if (!result.length) {
      result.push([item]);
    }
    if (compareDates(item, arr[index + 1])) {
      result[result.length - 1].push(arr[index + 1]);
    } else if (arr[index + 1]) {
      result.push([arr[index + 1]]);
    }
  });
  return result;
}

export function parseForecastData(forecast) {
  const parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");

  const dots = forecast.list.map(item => {
    return {
      day: item.dt_txt,
      count: item.main.temp,
      date: parseDate(item.dt_txt)
    };
  });

  const fileredDots = dots.filter(item => {
    if (
      item.day.indexOf("09:00:00") != -1 ||
      item.day.indexOf("15:00:00") != -1 ||
      item.day.indexOf("21:00:00") != -1
    ) {
      return item;
    }
  });

  return fileredDots;
}
