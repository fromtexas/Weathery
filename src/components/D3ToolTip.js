import React from "react";
import PropTypes from "prop-types";

function ToolTip({ tooltip }) {
  let visibility = "hidden";
  let transform = "";
  let x = 0;
  let y = 0;
  const width = 150;
  const height = 70;
  const transformText = `translate(${width / 2}, ${height / 2 - 5})`;
  let transformArrow = "";

  if (tooltip.display === true) {
    let position = tooltip.pos;
    x = position.x;
    y = position.y;
    visibility = "visible";

    if (y > height) {
      transform = `translate(${x - width / 2}, ${y - height - 20})`;
      transformArrow = `translate(${width / 2 - 20}, ${height - 2})`;
    } else {
      transform = `translate(${x - width / 2}, ${Math.round(y) + 20})`;
      transformArrow = `translate(${width / 2 - 20}, 0) rotate(180,20,0)`;
    }
  } else {
    visibility = "hidden";
  }

  return (
    <g transform={transform}>
      <rect
        className="shadow"
        width={width}
        height={height}
        rx="5"
        ry="5"
        visibility={visibility}
        fill="#f94c4c"
        opacity=".9"
      />
      <polygon
        className="shadow"
        points="10,0  30,0  20,10"
        transform={transformArrow}
        fill="#f94c4c"
        opacity=".9"
        visibility={visibility}
      />
      <text visibility={visibility} transform={transformText}>
        <tspan x="0" textAnchor="middle" fontSize="15px" fill="#ffffff">
          {tooltip.data.key}
        </tspan>
        <tspan x="0" textAnchor="middle" dy="25" fontSize="20px" fill="#ffffff">
          {tooltip.data.value + " ℃"}
        </tspan>
      </text>
    </g>
  );
}

ToolTip.propTypes = {
  tooltip: PropTypes.object
};

export default ToolTip;
