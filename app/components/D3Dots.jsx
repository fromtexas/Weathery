import React, {Component} from 'react'
import * as d3 from 'd3'

class Dots extends Component {

  render () {
    var data = this.props.data.splice(1);
    data.pop();
    var {x, y} = this.props;

    var circles = data.map((item, index) => {

        return (<circle className='dot' r='7' cx={x(item.date)} cy={y(item.count)} fill='#007bff'
                        stroke='#fff' strokeWidth='5px' key={index}
                        onMouseOver={this.props.showToolTip} onMouseOut={this.props.hideToolTip}
                        data-key={d3.timeFormat('%b %e')(item.date)} data-value={item.count}/>)
    });

    return (
      <g>
          {circles}
      </g>
    )
  }
}

export default Dots
