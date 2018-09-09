import React, { Component } from "react";
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
