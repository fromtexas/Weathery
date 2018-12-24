import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Placeholder from "./Placeholder";
import WeatherList from "./WeatherList";

function WeatherListContainer({ weather }) {
  return weather.length ? <WeatherList forecast={weather} /> : <Placeholder />;
}

WeatherListContainer.propTypes = {
  weather: PropTypes.array
};

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherListContainer);
