import React, { Component } from "react";
import * as d3 from "d3";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.renderGrid();
  }

  renderGrid() {
    d3.select(this.grid.current).call(this.props.grid);
  }

  render() {
    const translate = `translate(0, ${this.props.h})`;
    const gridType = this.props.gridType == "x" ? translate : "";
    return (
      <g ref={this.grid} className="y-grid chart__grid" transform={gridType} />
    );
  }
}

export default Grid;
