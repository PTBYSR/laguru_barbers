import SectionTitle from "components/ui/SectionTitle";
import React from "react";
import HalfScissors from "../icons/HalfScissors";
import ServiceDetails from "./ServiceDetails";
import ClockIcon from "../icons/Clock";
import NairaIcon from '../icons/Naira'
import Button from "components/ui/Button";

const Clock = () => {
  return <ClockIcon w="20" h="20" fill="#04132A" />;
};
const Naira = () => {
  return <NairaIcon w="20" h="20" fill="#04132A" fill2="#FDFEFA" />;
};

const ServiceCard = ({title, description}) => {
  return (
    <div className="max-w-[31rem] bg-pri">
      <SectionTitle>{title || "skin fade"}</SectionTitle>
      <p className="mt-3 text-sm  max-w-[24rem] mont sec">{description || "'Skin fades' are the cuts that begin almost right down to the skin at the back of the neck and slowly (or quickly) taper to longer hair as it works up your head."}</p>
      <div className="relative my-12 bg-action h-[1px] w-full">
        <HalfScissors w="30" h="22" fill="#C3916B" className="absolute -top-[18px] right-6 "/>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <ServiceDetails title="Duration" description="30 Minutes" icon={<Clock/>} />
          <ServiceDetails title="Price" description="3,000" icon={<Naira/>} />
        </div>
        <Button variant="w-fit">
          visit our barber shops
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
