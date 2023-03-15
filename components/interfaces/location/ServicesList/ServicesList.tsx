import SectionTitle from 'components/ui/SectionTitle';
import React from 'react';

import BeardStyle from '../../../common/Services/icons/BeardStyle';
import Buzz from '../../../common/Services/icons/Buzz';
import Face from '../../../common/Services/icons/Face';
import Scissors from '../../../common/Services/icons/Scissors';
import Tools from '../../../common/Services/icons/Tools';

const ServicesList = () => {
  return (
    <div className="bg-pri flex w-[25rem] flex-col gap-6">
      <SectionTitle>Services</SectionTitle>

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
  );
};

export default ServicesList;
