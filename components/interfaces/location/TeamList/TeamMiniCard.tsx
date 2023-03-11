import Fb from "components/icons/fb";
import Ig from "components/icons/ig";
import React from "react";
import Image from 'next/Image'


const TeamMiniCard = ({name, position, img}) => {
  return (
    <div className="shadow-md shadow-black w-[25rem] h-32 flex relative">
      <div className="z-[1000] flex absolute ">
        <div className="cursor-pointer  flex center-all bg-pri hover:bg-[#C3916B] w-8 h-8">
          <Fb fill="white" h="20" w="20" />
        </div>
        <div className="cursor-pointer hover:bg-[#C3916B] flex center-all bg-pri w-8 h-8 ">
          <Ig fill="white" h="20" w="20" />
        </div>
      </div>
      <div className="overflow-hidden w-1/2  relative">
        <div className="w-full">
          <Image src={img} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className=" h-1/2">
          <div className="bg-pri flex center-all flex-col h-full">
            <div className="kanit sec flex center-all leading-4">John Madu</div>
            <div className="kanit text-gray-400 text-xs font-light flex center-all">
              Senior barber
            </div>
          </div>
        </div>
        <div className="border h-1/2">
        <div className=" bg-sec flex center-all flex-col h-full">
          <div className="text-xs leading-none uppercase font-bold kanit">
            logo
          </div>
          <div className="text-[#242429] text-2xl font-medium kanit ">Gwarimpa</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMiniCard;
