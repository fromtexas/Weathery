import React, {Component} from 'react'

class CurrentWeather extends Component{
  render () {
    const {forecast} = this.props;
    const current = forecast.list[0];

    return (
      <div className='current-weather'>
        <h2>Today in {forecast.city.name}</h2>
        <p><span className='key'>Temperature: </span>{current.main.temp} ℃</p>
        <p><span className='key'>Description: </span>{current.weather[0].description}</p>
        <p><span className='key'>Wind speed: </span>{current.wind.speed}</p>
        <p><span className='key'>Pressure: </span>{current.main.pressure}</p>
        <img alt={current.weather[0].description} src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`}/>
      </div>
    )
  }
}

export default CurrentWeather
