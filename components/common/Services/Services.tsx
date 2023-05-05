import React from 'react';

import BeardStyle from './icons/BeardStyle';
import Buzz from './icons/Buzz';
import Face from './icons/Face';
import Scissors from './icons/Scissors';
import Tools from './icons/Tools';

const Services = () => {
  return (
    <div className="">
      <div className="sec mb-5 text-xs font-bold uppercase tracking-widest">
        services
      </div>
      <div className="md:flex md:gap-32">
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <div className="flex items-center gap-3">
                <BeardStyle w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Beard Styling</div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <Scissors w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Haircut</div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <Face w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Skin Fade</div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <div className="flex items-center gap-3">
                <Tools w="20" h="20" fill="#FDFEFA" />
                <div className="kanit sec font-light">Restyle</div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
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
