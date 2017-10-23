import React, {Component} from 'react'

class Weather extends Component {

  render () {
    const {weather} = this.props;
    const renderSingleDayWeather = weather.arr.map((item) => {
      return (
        <p key={item.dt}>{item.main.temp} ℃ in {item.dt_txt.slice(10)} <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/></p>
      )
    });
    return (
      <div className='weather'>
        <h3>{weather.day}</h3>
        {renderSingleDayWeather}
      </div>
    )
  }
}

export default Weather
