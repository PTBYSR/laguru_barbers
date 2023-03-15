import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Button = ({ children, variant, route }) => {
  return (
    <Link href={route || "/"}>
      <button
        className={clsx(
          [
            "sec kanit bg-action cursor-pointer py-3 px-6 text-center text-sm font-bold uppercase shadow-md shadow-black transition duration-200 hover:bg-[#A67B5A] hover:shadow-xl hover:shadow-2xl",
          ],
          variant
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
