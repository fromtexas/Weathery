import React, {Component} from 'react'
import * as d3 from 'd3'

class Dots extends Component {

  render () {
    const data = this.props.data.splice(1);
    data.pop();
    const {x, y} = this.props;

    const circles = data.map((item, index) => {

        return (<circle className='dot' r='7' cx={x(item.date)} cy={y(item.count)} fill='#f94c4c'
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
