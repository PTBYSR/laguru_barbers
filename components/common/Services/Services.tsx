import React from "react";
import BeardStyle from "./icons/BeardStyle";
import Buzz from "./icons/Buzz";
import Face from "./icons/Face";
import Scissors from "./icons/Scissors";
import Tools from "./icons/Tools";

const Services = () => {
  return (
    <div className="">
      <div className="mb-5 uppercase sec text-xs tracking-widest font-bold">services</div>
      <div className="flex gap-32">
        <div>
          <ul className="flex gap-2 flex-col">
            <li>
              <div className="flex gap-3 items-center">
                <BeardStyle w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Beard Styling</div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <Scissors w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Haircut</div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <Face w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Skin Fade</div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <div className="flex gap-3 items-center">
                <Tools w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Restyle</div>
              </div>
            </li>
            <li>
              <div className="flex gap-3 items-center">
                <Buzz w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Buzz Cut</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
