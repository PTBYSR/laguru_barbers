import Image from "next/image";
import React from "react";

import logo from "../../../public/logo.png";
import Contact from "../../common/Contact";
import Services from "../../common/Services";
// import img from "../../../public/locationcard1.png";
import Button from "../Button";

const LocationCard = ({ img, title, route, id }) => {
  return (
    <div className="bg-pri  md:w w-full px-2  drop-shadow-2xl   ">
      <div className=" flex h-[4.4rem] w-full">
        <div className="center-all bg-action flex w-1/2">
          <div className="w-10">
            <div>
              <Image src={logo} />
            </div>
          </div>
        </div>
        <div className="center-all  bg-sec flex w-1/2">
          <div className="pri kanit text-2xl font-semibold">{title || "Gwarimpa"}</div>
        </div>
      </div>
      {/* pic */}
      <div className="relative h-56 overflow-hidden ">
        <div className="w-] absolute  -top-[7rem] ">
          <Image src={img} alt={""} />
        </div>
      </div>
      {/* accordion */}
      <div variant="w-fit" className="flex flex-col gap-7 py-11 px-5 md:px-14">
        {/* services */}
        <Services />
        {/* contact */}
        <Contact />
        {/* button */}
        <div className="w-fit"></div>
        <Button
          route={`/locations/${id}`}
          variant="w-fit"
          children={"shop details"}
        />
      </div>
    </div>
  );
};

export default LocationCard;
