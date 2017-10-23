import React, {Component} from 'react'
import * as d3 from 'd3'

class Grid extends Component {

  componentDidMount () {
    this.renderGrid()
  }

  renderGrid () {
    const grid = this.refs.grid;
    d3.select(grid).call(this.props.grid);
  }
  
  render () {
    const translate = `translate(0, ${this.props.h})`;
    const gridType = this.props.gridType=='x'?translate:'';
    return (
      <g ref='grid' className="y-grid" transform={gridType}>
      </g>
    )
  }
}

export default Grid
