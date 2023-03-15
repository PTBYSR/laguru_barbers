import React from "react";

const ServiceDetails = ({ title, description, icon }) => {
  return (
    <div>
      <div className="mb-5 text-xs font-extrabold uppercase tracking-widest text-gray-100">
        {title}
      </div>
      <div>
        <div className=" bg-sec pri kanit flex w-56 items-center gap-3  rounded-sm py-2 px-4 text-sm">
          <div>{icon}</div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
