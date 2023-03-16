import ContactMiniCard from "components/interfaces/location/ContactMiniCard/ContactMiniCard";
import OpeningHours from "components/interfaces/location/OpeningHours";
import TeamList from "components/interfaces/location/TeamList/TeamList";
import ServiceList from "components/interfaces/services/ServiceList";
import { LocationCardUtils } from "components/ui/LocationCard/LocationCard.utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const location = () => {
  const [location, setLocation] = useState(LocationCardUtils);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Main
      meta={
        <Meta title="Laguru Barbers" description="1# barber shop in Abuja" />
      }
    >
      <header>
        <div className="flex flex-col md:flex-row">
          <div className=" pt-9 md:w-2/3 md:px-12 md:pb-24 md:pb-14">
            <div className="abril sec p-4 text-xs font-bold md:p-0 md:pt-3">
              SHOP
            </div>
            <h1 className="kanit sec truncate pl-4 text-5xl font-extrabold  uppercase leading-[2.6rem] md:p-0  md:text-[5.25rem] md:leading-[4.8rem]">
              {location[id - 1]?.title}
            </h1>
          </div>
          <div className="pt-9">
            <ContactMiniCard title={location[id - 1]?.title} />
          </div>
        </div>
      </header>

      <div className="flex w-full flex-col gap-20 px-5 pb-24 md:px-12">
        <div className="-[30rem] flex w-full flex-col overflow-hidden md:flex-row">
          {/* <div className="w-1/2 m-10">
            <Image src={locationImg} />
          </div>
          <div className="w-1/2 m-10">
            <Image src={locationImg2} />
          </div> */}
        </div>
        <div className="flex  flex-wrap gap-10 md:gap-5 md:flex-row md:justify-between">
          <OpeningHours />
          <div className="mt-4 w-full md:mt-0 md:w-auto">
            <ServiceList />
          </div>
          <TeamList />
        </div>
      </div>
    </Main>
  );
};

export default location;
