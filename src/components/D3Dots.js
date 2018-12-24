import React from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

function Dots({ x, y, data, showToolTip, hideToolTip }) {
  const circles = data.map((item, index) => {
    return (
      <circle
        className="dot"
        r="7"
        cx={x(item.date)}
        cy={y(item.count)}
        fill="#f94c4c"
        stroke="#fff"
        strokeWidth="5px"
        key={index}
        onMouseOver={showToolTip}
        onMouseOut={hideToolTip}
        data-key={d3.timeFormat("%b %e")(item.date)}
        data-value={item.count}
      />
    );
  });
  return <g>{circles}</g>;
}

Dots.propTypes = {
  data: PropTypes.array,
  showToolTip: PropTypes.func,
  hideToolTip: PropTypes.func,
  x: PropTypes.func,
  y: PropTypes.func
};

export default Dots;
