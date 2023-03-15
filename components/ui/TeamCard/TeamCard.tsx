import Fb from "components/icons/fb";
import Ig from "components/icons/ig";
import Image from "next/Image";
import React from "react";

import team1 from "../../../public/team1.jpg";

const TeamCard = () => {
  return (
    <div className="relative shadow-sm md:h-[26rem] md:w-64 ">
      <div className="absolute flex ">
        <div className="center-all  bg-pri flex h-8 w-8 cursor-pointer hover:bg-[#C3916B]">
          <Fb fill="white" h="20" w="20" />
        </div>
        <div className="center-all bg-pri flex h-8 w-8 cursor-pointer hover:bg-[#C3916B] ">
          <Ig fill="white" h="20" w="20" />
        </div>
      </div>
      <div className="absolute bottom-0 h-36 w-full">
        <div className="bg-pri center-all flex h-16 w-full flex-col">
          <div className="kanit sec center-all flex leading-4">John Madu</div>
          <div className="kanit center-all flex text-xs font-light text-gray-400">
            Senior barber
          </div>
        </div>
        <div className=" bg-sec center-all flex h-20 w-full flex-col">
          <div className="kanit text-xs font-bold uppercase leading-none">
            logo
          </div>
          <div className="kanit text-2xl font-medium text-[#242429] ">
            Gwarimpa
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src={team1} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
