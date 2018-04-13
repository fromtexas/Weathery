import React from 'react';
import {filterWeatherList} from '../utils/filterWeatherList';
import DayItem from './DayItem';

export default props => {
    let result = filterWeatherList(props.list);
    let weatherList = [];
    for (let date in result){
        weatherList.push(<DayItem day={result[date]}/>)
    }
    return (
        <div className='weather__days'>
            {weatherList}
        </div>
    );
};