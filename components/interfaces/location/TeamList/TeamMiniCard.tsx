import Fb from "components/icons/fb";
import Ig from "components/icons/ig";
import Image from "next/Image";
import React from "react";

const TeamMiniCard = ({ name, position, img }) => {
  return (
    <div className="relative flex h-32 w-[25rem] shadow-md shadow-black">
      <div className="absolute z-[1000] flex ">
        <div className="center-all  bg-pri flex h-8 w-8 cursor-pointer hover:bg-[#C3916B]">
          <Fb fill="white" h="20" w="20" />
        </div>
        <div className="center-all bg-pri flex h-8 w-8 cursor-pointer hover:bg-[#C3916B] ">
          <Ig fill="white" h="20" w="20" />
        </div>
      </div>
      <div className="relative w-1/2  overflow-hidden">
        <div className="w-full">
          <Image src={img} />
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <div className=" h-1/2">
          <div className="bg-pri center-all flex h-full flex-col">
            <div className="kanit sec center-all flex leading-4">John Madu</div>
            <div className="kanit center-all flex text-xs font-light text-gray-400">
              Senior barber
            </div>
          </div>
        </div>
        <div className="h-1/2 border">
          <div className=" bg-sec center-all flex h-full flex-col">
            <div className="kanit text-xs font-bold uppercase leading-none">
              logo
            </div>
            <div className="kanit text-2xl font-medium text-[#242429] ">
              Gwarimpa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMiniCard;
