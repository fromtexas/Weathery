import React from 'react';

export default props => {
    const dayWeather = props.day.map((item, index) => {
       return (
           <div className='day__item' key={`${item.dt_txt}${index}`}>
                <p>{item.dt_txt}: {item.main.temp}</p>
                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
            </div>
       ); 
    });
    return dayWeather;
};