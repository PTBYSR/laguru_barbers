import React from 'react';

import Location from '../../../common/Contact/icons/Location';
import Mail from '../../../common/Contact/icons/Mail';
import Phone from '../../../common/Contact/icons/Phone';

const ContactMiniCard = ({ title }) => {
  return (
    <div className="bg-sec md:w-[29rem] py-7 px-9">
      <div className="pri mb-5 text-xs font-bold uppercase tracking-widest">
        contact
      </div>
      <ul className="flex flex-col gap-1">
        <li>
          <div className="flex items-center gap-3">
            <Phone w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">030 3030 0000</div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3">
            <Mail w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">hey@beauty.com</div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3">
            <Location w="17" h="17" fill="#C3916B" />
            <div className="kanit pri ">{`${title}, Abuja`}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMiniCard;
