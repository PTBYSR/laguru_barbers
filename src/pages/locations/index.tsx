import Location from "components/interfaces/locations/icon/Location";
import LocationCard from "components/ui/LocationCard/LocationCard";
import { LocationCardUtils } from "components/ui/LocationCard/LocationCard.utils";
import SectionTitle from "components/ui/SectionTitle";
import React, { useState } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const locations = () => {
  const [locationImg, setLocationImg] = useState(LocationCardUtils);

  return (
    <Main
      meta={
        <Meta title="Laguru Barbers" description="1# barber shop in Abuja" />
      }
    >
      <header>
        <div className="pb-14 pt-9 md:w-2/3 md:px-12 md:pb-24">
          <div className="abril sec p-4 text-xs font-bold md:p-0 md:pt-3">
            OUR LOCATION
          </div>
          <h1 className="kanit sec truncate pl-4 text-5xl  font-extrabold leading-[2.6rem] md:p-0  md:text-[5.25rem] md:leading-[4.8rem]">
            WHERE TO
            <br />
            FIND US.
          </h1>
        </div>
      </header>

      <section id="locations" className="pb-24 md:px-12">
        <div className=" center-all flex w-full flex-col gap-8 md:flex-row">
          {locationImg.map((x) => (
            <LocationCard id={x.id} img={x.img} title={x.title} />
          ))}
        </div>
      </section>

      <div className="center-all flex flex-col gap-4 pb-24 text-center md:px-12 md:text-start">
        <Location w="35" h="35" fill="#C3916B" />
        <SectionTitle>more locations coming soon...</SectionTitle>
        {/* <div className="sec mont ">Be the first to know the locations of our new shops</div> */}
      </div>
      {/* <form>
          <input className="sec bg-action py-4 px-3" placeholder="Name"></input>
        </form> */}
    </Main>
  );
};

export default locations;
