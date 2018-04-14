import React, {Component} from 'react';
import * as d3 from 'd3';

class Axis extends Component {

  constructor(props) {
    super(props);
    this.axis = React.createRef();
  }

  componentDidMount () {
    this.renderAxis();
  }

  renderAxis () {
    d3.select(this.axis.current).call(this.props.axis);
  }

  render () {
    const translate =`translate(0, ${this.props.h})`;
    const axisType = this.props.axisType=='x'? translate : '';
    return (
      <g ref={this.axis} className={`axis-${this.props.axisType} chart__axis`} transform={axisType} >
      </g>
    )
  }
}

export default Axis