import React, {Component} from 'react';
import D3LineChart from './D3LineChart';

export default class WeatherList extends Component{
    render () {

        const {forecast} = this.props;

        const chart = forecast.map((item, index) => {
            return <D3LineChart key={index} forecast={item} />
        });

        return (
            <div>
                {chart}
            </div>
        );
    }
}