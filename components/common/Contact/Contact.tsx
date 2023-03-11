import React from "react";
import Location from "./icons/location";
import Mail from "./icons/Mail";
import Phone from "./icons/phone";

const Contact = () => {
  return (
    <div className="">
      <div className="mb-5 uppercase sec text-xs tracking-widest font-extrabold">
        contact
      </div>
      <div className="">
        <ul className="flex flex-col gap-2">
          <li>
            <div className="flex gap-3 items-center">
              <Phone w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">030 3030 0000</div>
            </div>
          </li>
          <li>
            <div className="flex gap-3 items-center">
              <Mail w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">hey@beauty.com</div>
            </div>
          </li>
          <li>
            <div className="flex gap-3 items-center">
              <Location w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">Gwarimpa, Abuja</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
