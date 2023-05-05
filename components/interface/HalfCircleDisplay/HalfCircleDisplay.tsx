import React from "react";
import clsx from "clsx";

const HalfCircleDisplay = ({children, w, h}) => {
  return (
    <div
      className={`h-${h} w-${w} border-2  
    rounded-tl-full  rounded-tr-full border-dashed`}
    >
      {children}
    </div>
  );
};

export default HalfCircleDisplay;
