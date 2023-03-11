import Fb from "components/icons/fb";
import Ig from "components/icons/ig";
import Image from "next/image";
import React from "react";
import team1 from "../../../public/team1.jpg";

const TeamCard = () => {
  return (
    <div className="relative  h-[26rem] w-64 ">
      <div className="flex absolute ">
        <div className="cursor-pointer  flex center-all bg-pri hover:bg-[#C3916B] w-8 h-8">
          <Fb fill="white" h="20" w="20" />
        </div>
        <div className="cursor-pointer hover:bg-[#C3916B] flex center-all bg-pri w-8 h-8 ">
          <Ig fill="white" h="20" w="20" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-36">
        <div className="bg-pri flex center-all flex-col w-full h-16">
          <div className="kanit sec flex center-all leading-4">John Madu</div>
          <div className="kanit text-gray-400 text-xs font-light flex center-all">
            Senior barber
          </div>
        </div>
        <div className=" bg-sec flex center-all h-20 w-full flex-col">
          <div className="text-xs leading-none uppercase font-bold kanit">
            logo
          </div>
          <div className="text-[#242429] text-2xl font-medium kanit ">Gwarimpa</div>
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
