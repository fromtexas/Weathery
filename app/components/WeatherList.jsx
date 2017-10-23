import React, {Component} from 'react'
import Weather from 'Weather'

class WeatherList extends Component {

  render () {
    const {forecast} = this.props;
    let list = forecast.list;

    list = list.filter((item) => {
       if(item.dt_txt.indexOf('09:00:00') != -1 || item.dt_txt.indexOf('15:00:00') != -1 || item.dt_txt.indexOf('21:00:00') != -1 ){
         return item
       }
     });


     let arr = [];
     let res = {};
     let resArr = [];
     let limit = 3;
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

     const renderWeather = resArr.map((item, index) => {
       return <Weather key={item.day} weather={item}/>
     });


    return (
        <div>
            <h3 className='text-center title-under-chart'>5 day weather forecast</h3>
                <div className='weather-list'>
                    {renderWeather}
                </div>
        </div>   
    )
  }
}

export default WeatherList;
