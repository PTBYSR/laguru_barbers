import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../public/logo.png";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="">
      <div className=" bg-sec fixed top-0 z-[10000] flex h-[4.5rem] w-full items-center justify-between px-7 md:px-14">
        <div className="center-all flex">
          <div className="w-12">
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>
        </div>
        <div className="relative md:static">
          <div className="md:hidden">
            <Hamburger toggle={setOpen} toggled={isOpen} color="#04132A" />
          </div>
          <ul
            className={`${
              isOpen ? "" : "hidden"
            } bg-sec absolute top-[4.5rem] -right-[3px] flex w-[20rem] flex-col  gap-4 p-5 text-center md:static md:flex md:w-auto md:flex-row md:gap-8 md:p-0 md:text-start`}
          >
            <li>
              <Link href="/">
                <div className="mont pri font-semibold">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <div className="mont pri font-semibold">Locations</div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="mont pri font-semibold">Services</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="mont pri font-semibold">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
