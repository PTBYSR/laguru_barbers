import React from "react";
import Location from "../../../common/Contact/icons/Location";
import Mail from "../../../common/Contact/icons/Mail";
import Phone from "../../../common/Contact/icons//phone";

const ContactMiniCard = () => {
  return (
    <div className="py-7 px-9 bg-sec w-[29rem]">
      <div className="mb-5 uppercase pri text-xs tracking-widest font-bold">
        contact
      </div>
      <ul className="flex flex-col gap-1">
        <li>
          <div className="flex gap-3 items-center">
            <Phone w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">030 3030 0000</div>
          </div>
        </li>
        <li>
          <div className="flex gap-3 items-center">
            <Mail w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">hey@beauty.com</div>
          </div>
        </li>
        <li>
          <div className="flex gap-3 items-center">
            <Location w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">Gwarimpa, Abuja</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMiniCard;
