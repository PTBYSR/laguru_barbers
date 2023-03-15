import Button from "components/ui/Button";
import SectionTitle from "components/ui/SectionTitle";
import React, { useState } from "react";

import ClockIcon from "../icons/Clock";
import HalfScissors from "../icons/HalfScissors";
import NairaIcon from "../icons/Naira";
import { ServiceListsUtils } from "../ServiceList/ServiceList.utils";
import ServiceDetails from "./ServiceDetails";

const Clock = () => {
  return <ClockIcon w="20" h="20" fill="#04132A" />;
};
const Naira = () => {
  return <NairaIcon w="20" h="20" fill="#04132A" fill2="#FDFEFA" />;
};

const ServiceCard = ({ id }) => {
  console.log(id, "here");
  const [service, setService] = useState(ServiceListsUtils);
  console.log(service);
  // console.log(service[1].title)
  // console.log("id" , id)
  // console.log(service[id].title)
  return (
    <div>
      <div className="bg-pri max-w-[31rem]">
        <SectionTitle>{service[id - 1]?.title}</SectionTitle>
        <p className="mont sec  mt-3 max-w-[24rem] text-sm">
          {service[id - 1]?.description ||
            "'Skin fades' are the cuts that begin almost right down to the skin at the back of the neck and slowly (or quickly) taper to longer hair as it works up your head."}
        </p>
        <div className="bg-action relative my-12 h-[1px] w-full">
          <HalfScissors
            w="30"
            h="22"
            fill="#C3916B"
            className="absolute -top-[18px] right-6 "
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <ServiceDetails
              title="Duration"
              description="30 Minutes"
              icon={<Clock />}
            />
            <ServiceDetails
              title="Price"
              description="3,000"
              icon={<Naira />}
            />
          </div>
          <Button variant="w-fit" route="/locations">
            visit our barber shops
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
