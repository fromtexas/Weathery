import React from "react";
import D3LineChart from "./D3LineChart";
import CurrentWeather from "./CurrentWeather";
import FiveDayList from "./FiveDayList";

const WeatherItem = props => (
  <div className="weather__container">
    <CurrentWeather forecast={props.forecast} />
    <D3LineChart forecast={props.forecast} />
    <FiveDayList list={props.forecast.list} />
  </div>
);

export default WeatherItem;
