import React, {Component} from 'react'
import * as d3 from 'd3'

class ToolTip extends Component {

  render () {

    let visibility = 'hidden';
    let transform = '';
    let x = 0;
    let y = 0;
    const width = 150;
    const height = 70;
    const transformText = `translate(${width/2}, ${height/2-5})`;
    let transformArrow = '';

    if (this.props.tooltip.display === true) {

      var position = this.props.tooltip.pos;
      x = position.x;
      y = position.y;
      visibility = 'visible';

      if(y>height){
        transform = `translate(${x-width/2}, ${y-height-20})`;
        transformArrow = `translate(${width/2-20}, ${height-2})`;
      }else {
        transform = `translate(${x-width/2}, ${Math.round(y)+20})`;
        transformArrow = `translate(${width/2-20}, 0) rotate(180,20,0)`;
      }

    } else {
      visibility = 'hidden'
    }

    return (
      <g transform={transform}>
          <rect class='shadow' is width={width} height={height} rx='5' ry='5' visibility={visibility} fill='#f94c4c' opacity='.9'/>
          <polygon class='shadow' is points='10,0  30,0  20,10' transform={transformArrow}
                   fill='#f94c4c' opacity='.9' visibility={visibility}/>
          <text is visibility={visibility} transform={transformText}>
              <tspan is x='0' text-anchor='middle' font-size="15px" fill='#ffffff'>{this.props.tooltip.data.key}</tspan>
              <tspan is x='0' text-anchor='middle' dy='25' font-size='20px' fill='#ffffff'>{this.props.tooltip.data.value + ' ℃'}</tspan>
          </text>
      </g>
    )
  }
}

export default ToolTip
