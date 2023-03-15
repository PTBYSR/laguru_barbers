import React from 'react';

const DaysCard = ({ day, time, key }) => {
  return (
    // <div className={clsx(['py-2 px-4  w-[25rem] flex kanit justify-between'], key % == 2 ? "bg-action" : "")}>
    <div
      className={`kanit border-t-none  flex w-full justify-between border border-x-0 border-b-[#C3916B] bg-[#FDFEFA] py-2 px-4${(key %=
        2 ? 'bg-action' : '')}`}
    >
      <div className=" text-sm  font-bold">{day || 'Monday'}</div>
      <div className=" text-sm ">{time || '9am - 5pm'}</div>
    </div>
  );
};

export default DaysCard;
