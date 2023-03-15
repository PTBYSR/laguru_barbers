import ServiceCard from "components/interfaces/services/ServiceCard/ServiceCard";
import { useRouter } from "next/router";
import React from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const shop = ({ shop }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <Main
      meta={
        <Meta title="Laguru Barbers" description="1# barber shop in Abuja" />
      }
    >
      <div className=" center-all flex pb-14 pt-12 md:px-12 md:pb-24 ">
        <ServiceCard id={id} />
      </div>
    </Main>
  );
};

export default shop;
