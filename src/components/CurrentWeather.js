import React from "react";
import PropTypes from "prop-types";

const CurrentWeather = ({ forecast }) => (
  <div className="weather__current">
    <h2>Now in {forecast.city.name}</h2>
    <p>
      Temperature: <span>{forecast.list[0].main.temp}℃</span>
    </p>
    <p>
      Description: <span>{forecast.list[0].weather[0].description}</span>
    </p>
    <p>
      Wind speed: <span>{forecast.list[0].wind.speed}</span>
    </p>
    <p>
      Pressure: <span>{forecast.list[0].main.pressure}</span>
    </p>
    <img
      src={`http://openweathermap.org/img/w/${
        forecast.list[0].weather[0].icon
      }.png`}
    />
  </div>
);

CurrentWeather.propTypes = {
  forecast: PropTypes.object
};

export default CurrentWeather;
