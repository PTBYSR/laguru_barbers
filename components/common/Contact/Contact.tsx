import React from 'react';

import Location from './icons/Location';
import Mail from './icons/Mail';
import Phone from './icons/Phone';

const Contact = ({ text }) => {
  return (
    <div className="">
      <div className="sec mb-5 text-xs font-extrabold uppercase tracking-widest">
        {text ? 'contact' : text}
      </div>
      <div className="">
        <ul className="flex flex-col gap-2">
          <li>
            <div className="flex items-center gap-3">
              <Phone w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">030 3030 0000</div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <Mail w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">hey@beauty.com</div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <Location w="17" h="17" fill="#C3916B" />
              <div className="kanit sec text-sm font-light">
                Gwarimpa, Abuja
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
