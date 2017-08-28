import React, {Component} from 'react'
import Weather from 'Weather'

class WeatherList extends Component {

  render () {
    var {forecast} = this.props;
    var list = forecast.list;

    list = list.filter((item) => {
       if(item.dt_txt.indexOf('09:00:00') != -1 || item.dt_txt.indexOf('15:00:00') != -1 || item.dt_txt.indexOf('21:00:00') != -1 ){
         return item
       }
     });


     var arr = [];
     var res = {};
     var resArr = [];
     var limit = 3;
     list.forEach((item, index) => {
       if (index < limit) {
          arr.push(item)
          if (arr.length === 3) {
            res = {
              day: arr[0].dt_txt.slice(0, 10),
              arr
            };
            arr = [];
            limit = limit + 3;
            resArr.push(res)
          }
       }
     });

     var renderWeather = resArr.map((item, index) => {
       return <Weather key={item.day} weather={item}/>
     });


    return (
      <div className='weather-list'>
        {renderWeather}
      </div>
    )
  }
}

export default WeatherList;
