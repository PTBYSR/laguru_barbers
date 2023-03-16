import ServiceList from "components/interfaces/services/ServiceList";
import React from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const index = () => {
  return (
    <Main
      meta={
        <Meta title="Laguru Barbers" description="1# barber shop in Abuja" />
      }
    >
      <header>
        <div className="pb-14 pt-9 md:w-2/3 md:px-12 md:pb-24">
          <div className="abril sec p-4 text-xs font-bold md:p-0 md:pt-3">
            SERVICES
          </div>
          <h1 className="kanit sec truncate pl-4 text-5xl  font-extrabold leading-[2.6rem] md:p-0  md:text-[5.25rem] md:leading-[4.8rem]">
            WHAT WE DO
          </h1>
        </div>
      </header>
      <div className="flex h-[30rem] px-5 pb-24 md:px-12">
        <div className="w-1/2 ">
          <ServiceList />
        </div>
        {/* <div className="w-1/2 bg-black"><Image src={serviceImg} /></div> */}
      </div>
    </Main>
  );
};

export default index;
