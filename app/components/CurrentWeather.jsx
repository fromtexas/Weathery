import React, {Component} from 'react'

class CurrentWeather extends Component{
  render () {
    var {forecast} = this.props;
    var current = forecast.list[0];

    return (
      <div className='current-weather'>
        <h2>{forecast.city.name}</h2>
        <p>{current.main.temp} ℃</p>
        <p>{current.weather[0].description}</p>
        <p>Wind speed: {current.wind.speed}</p>
        <p>Pressure: {current.main.pressure}</p>
        <img alt={current.weather[0].description} src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`}/>
      </div>
    )
  }
}

export default CurrentWeather
