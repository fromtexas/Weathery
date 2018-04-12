import React, { Component } from 'react';
import {connect} from 'react-redux';
import Placeholder from './Placeholder';
import WeatherList from './WeatherList';

class WeatherListContainer extends Component {
    render () {
        if(!this.props.weather.length) {
            return <Placeholder/>;
        }

        return <WeatherList forecast = {this.props.weather}/>
    }
}


const mapStateToProps = ({weather}) => ({
    weather
});

export default connect(mapStateToProps)(WeatherListContainer);