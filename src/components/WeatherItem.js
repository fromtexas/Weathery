import React from "react";
import PropTypes from "prop-types";
import D3LineChart from "./D3LineChart";
import CurrentWeather from "./CurrentWeather";
import FiveDayList from "./FiveDayList";
import { parseForecastData } from "../utils/filterWeatherList";

const WeatherItem = ({ forecast }) => (
  <div className="weather__container">
    <CurrentWeather forecast={forecast} />
    <D3LineChart forecast={parseForecastData(forecast)} />
    <FiveDayList list={forecast.list} />
  </div>
);

WeatherItem.propTypes = {
  forecast: PropTypes.object
};

export default WeatherItem;
