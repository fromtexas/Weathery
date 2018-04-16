import React from 'react';

const CurrentWeather =  props => (
    <div className='weather__current'>
        <h2>Now in {props.forecast.city.name}</h2>
        <p>Temperature: <span>{props.forecast.list[0].main.temp}℃</span></p>
        <p>Description: <span>{props.forecast.list[0].weather[0].description}</span></p>
        <p>Wind speed: <span>{props.forecast.list[0].wind.speed}</span></p>
        <p>Pressure: <span>{props.forecast.list[0].main.pressure}</span></p>
        <img src={`http://openweathermap.org/img/w/${props.forecast.list[0].weather[0].icon}.png`}/>
    </div>
);

export default CurrentWeather;