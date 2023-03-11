import Image from "next/image";
import React from "react";

import img from "../../../public/locationcard1.png";
import Button from "../Button";
import Contact from "../../common/Contact";
import Services from "../../common/Services";

const LocationCard = () => {
  return (
    <div className="shadow-md shadow-black bg-pri min-w-[28rem] w-[32rem]  ">
      <div className=" flex w-full h-[4.4rem]">
        <div className="w-1/2 flex center-all bg-action">logo</div>
        <div className="w-1/2  flex center-all bg-sec">
          <div className="pri kanit text-2xl font-semibold">Gwarimpa</div>
        </div>
      </div>
      {/* pic */}
      <div className="overflow-hidden relative h-56 ">
        <div className="absolute w-[110%]   ">
          <Image src={img} alt={""} />
        </div>
      </div>
      {/* accordion */}
      <div variant="w-fit" className="py-7 px-14 flex flex-col gap-7">
        {/* services */}
        <Services />
        {/* contact */}
        <Contact />
        {/* button */}
        <div className="w-fit">

        </div>
        <Button variant="w-fit" children={"shop details"}/>
      </div>
    </div>
  );
};

export default LocationCard;
