import React from "react";
import Link from "next/Link";

const NavLink = ({ label, href }) => {
  return (
    <Link
      className="border-2 text-white border-white md:py-4 py-6  uppercase text-sm  w-full rounded-md"
      href={href}
    >
      <li>{label}</li>
    </Link>
  );
};

export default NavLink;
