import React from 'react';

export default props => (
    <div className='weather__current'>
        <p>Today in {props.forecast.city.name}</p>
        <p>Temperature: {props.forecast.list[0].main.temp}</p>
        <p>Description: {props.forecast.list[0].weather[0].description}</p>
        <p>Wind speed: {props.forecast.list[0].wind.speed}</p>
        <p>Pressure: {props.forecast.list[0].main.pressure}</p>
        <img src={`http://openweathermap.org/img/w/${props.forecast.list[0].weather[0].icon}.png`}/>
    </div>
);