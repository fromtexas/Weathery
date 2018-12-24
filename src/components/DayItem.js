import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { extractDate } from "../utils/filterWeatherList";

const DayItem = ({ day }) => {
  let dt_txt = extractDate(day[0]);
  const dayWeather = day.map((item, index) => {
    return (
      <div className="weather__forecast" key={`${item.dt_txt}${index}`}>
        <p>{moment.unix(item.dt).format("MMMM Do, YYYY @ k:mm")}:</p>
        <p className="weather__temp">{item.main.temp}℃</p>
        <img
          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
        />
      </div>
    );
  });
  return (
    <div className="weather__day-item">
      <h2>{dt_txt.split("-").join(". ")}</h2>
      {dayWeather}
    </div>
  );
};

DayItem.propTypes = {
  day: PropTypes.array
};

export default DayItem;
