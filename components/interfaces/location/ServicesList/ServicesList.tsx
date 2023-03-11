import SectionTitle from "components/ui/SectionTitle";
import React from "react";
import BeardStyle from "../../../common/Services/icons/BeardStyle";
import Buzz from "../../../common/Services/icons/Buzz";
import Face from "../../../common/Services/icons/Face";
import Scissors from "../../../common/Services/icons/Scissors";
import Tools from "../../../common/Services/icons/Tools";

const ServicesList = () => {
  return (
    <div className="w-[25rem] bg-pri flex flex-col gap-6">
      <SectionTitle>Services</SectionTitle>
      
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
  );
};

export default ServicesList;
