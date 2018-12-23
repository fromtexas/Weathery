import React from "react";
import PropTypes from "prop-types";
import { parseWeatherList } from "../utils/filterWeatherList";
import DayItem from "./DayItem";

const FiveDayList = props => {
  const weatherList = parseWeatherList(props.list).map(item => {
    return <DayItem key={item[0].dt} day={item} />;
  });
  return (
    <div className="weather__days">
      <h2 className="weather__forecast-title">5 day weather forecast</h2>
      {weatherList}
    </div>
  );
};

FiveDayList.propTypes = {
  list: PropTypes.array
};

export default FiveDayList;
