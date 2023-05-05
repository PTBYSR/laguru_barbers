import Contact from "components/common/Contact";
import React from "react";

import Button from "../Button";

const Contactcard = () => {
  return (
    <div className=" bg-pri shadow-md shadow-black">
      <div className="center-all bg-sec flex  h-[4.4rem]">
        <div className="kanit pri text-3xl font-medium">Gwarimpa</div>
      </div>
      <div className="py-7 px-14">
        <Contact />
      </div>
      {/* accordion */}
      <div className="py-7 px-14">
        <Button children={"book your seat now"}></Button>
      </div>
    </div>
  );
};

export default Contactcard;
