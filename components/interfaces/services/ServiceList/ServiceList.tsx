import SectionTitle from "components/ui/SectionTitle";
import Link from "next/link";
import React, { useState } from "react";

import { ServiceListsUtils } from "./ServiceList.utils";

const ServiceList = () => {
  const [service, setService] = useState(ServiceListsUtils);

  return (
    <div className="flex w-full flex-col">
      <SectionTitle>Services</SectionTitle>
      <ul className="flex flex-col gap-6 font-bold md:pl-4">
        {service.map((x) => (
          <Link href={`/services/${x.id}`}>
            <li className="mont sec">{x.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
