import React from "react";

const HalfScissors = ({ fill, w, h, className }) => {
  return (
    <svg
      className={className}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.99 11"
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill={fill}
            d="M22.78,2.22A.71.71,0,0,0,22.28,1H20.07a5,5,0,0,0-3.53,1.46L12.41,6.59l3,3Z"
          />
          <path
            fill={fill}
            d="M4,8a3.74,3.74,0,0,0,.89-.11L8,11h2a1,1,0,0,1,2,0h2L7.89,4.89A3.74,3.74,0,0,0,8,4,4.05,4.05,0,0,0,4,0,4.05,4.05,0,0,0,0,4,4.05,4.05,0,0,0,4,8ZM4,2A2,2,0,0,1,6,4,2,2,0,0,1,4,6,2,2,0,0,1,2,4,2,2,0,0,1,4,2Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default HalfScissors;
