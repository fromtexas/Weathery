import React from "react";
import { filterWeatherList } from "../utils/filterWeatherList";
import DayItem from "./DayItem";

const FiveDayList = props => {
  let result = filterWeatherList(props.list);
  let weatherList = [];
  for (let date in result) {
    weatherList.push(<DayItem key={result[date][0].dt} day={result[date]} />);
  }
  return (
    <div className="weather__days">
      <h2 className="weather__forecast-title">5 day weather forecast</h2>
      {weatherList}
    </div>
  );
};

export default FiveDayList;
