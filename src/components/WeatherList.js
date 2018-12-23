import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";

export default class WeatherList extends Component {
  render() {
    const { forecast } = this.props;

    const item = forecast.map((item, index) => {
      return <WeatherItem key={index} forecast={item} />;
    });

    return <div className="weather__wrap">{item}</div>;
  }
}

WeatherList.propTypes = {
  forecast: PropTypes.array
};
