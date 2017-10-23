import React, {Component} from 'react'
import * as d3 from 'd3'

class Axis extends Component {

  componentDidMount () {
    this.renderAxis();
  }

  renderAxis () {
    const axis = this.refs.axis;
    d3.select(axis).call(this.props.axis);
  }

  render () {
    const translate =`translate(0, ${this.props.h})`;
    const axisType = this.props.axisType=='x'? translate : '';
    return (
      <g ref='axis' className='axis' transform={axisType} >
      </g>
    )
  }
}

export default Axis
