import SectionTitle from 'components/ui/SectionTitle';
import React from 'react';

import Week from './DaysCard/Week';

const OpeningHours = () => {
  return (
    <div className="bg-pri flex w-[20rem] flex-col gap-6">
      <SectionTitle>opening hours</SectionTitle>
      <Week />
    </div>
  );
};

export default OpeningHours;
