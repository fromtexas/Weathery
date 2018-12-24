import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";

export default class WeatherList extends Component {
  renderItem = () => {
    const { forecast } = this.props;

    return forecast.map((item, index) => {
      return <WeatherItem key={index} forecast={item} />;
    });
  };

  render() {
    return <div className="weather__wrap">{this.renderItem()}</div>;
  }
}

WeatherList.propTypes = {
  forecast: PropTypes.array
};
