import React, {Component} from 'react'
import * as d3 from 'd3'

class Grid extends Component {

  componentDidMount () {
    this.renderGrid()
  }

  renderGrid () {
    var grid = this.refs.grid;
    d3.select(grid).call(this.props.grid);
  }
  
  render () {
    var translate = `translate(0, ${this.props.h})`;
    var gridType = this.props.gridType=='x'?translate:'';
    return (
      <g ref='grid' className="y-grid" transform={gridType}>
      </g>
    )
  }
}

export default Grid
