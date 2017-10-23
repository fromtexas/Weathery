import React, {Component} from 'react'
import {connect} from 'react-redux'
import LineChart from 'D3LineChart'
import Placeholder from 'Placeholder'


class Table extends Component {

  render(){
    const {weather} = this.props;
    const weatherList = weather.map((item) => {
      return <LineChart key={item.city.id} forecast={item}/>
    });
  

    const renderPlaceholder = () => {
      if(weatherList.length === 0) {
        return <Placeholder/>
      }
    };

    return (
      <div className='width-table'>
            {weatherList}
            {renderPlaceholder()}
      </div>
    )
  }
}

export default connect(({weather}) => {
  return {
    weather
  }
})(Table)
