import React from "react";
import clsx from "clsx";

const DaysCard = ({ day, time, key }) => {
  return (
    // <div className={clsx(['py-2 px-4  w-[25rem] flex kanit justify-between'], key % == 2 ? "bg-action" : "")}>
    <div
      className={`py-2 px-4  w-[25rem] flex kanit justify-between border-b-[#C3916B] border-t-none border-l-0 border-r-0 border bg-[#FDFEFA] ${(key %= 2
        ? "bg-action"
        : "")}`}
    >
      <div className="text-sm font-bold">{day || "Monday"}</div>
      <div className="text-sm">{time || "9am - 5pm"}</div>
    </div>
  );
};

export default DaysCard;
