import clsx from "clsx";
import React from "react";

const Button = ({ children, variant }) => {
  return (
    <div
      className={clsx(
        [
          'text-center sec kanit bg-action cursor-pointer py-3 px-6 text-sm font-bold uppercase shadow-md shadow-black hover:bg-[#A67B5A] hover:shadow-xl hover:shadow-2xl transition duration-200',
        ],
        variant
      )}
    >
      {children}
    </div>
  );
};

export default Button;
