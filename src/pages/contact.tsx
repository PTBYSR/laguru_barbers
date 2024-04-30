import ContactCard from 'components/ui/ContactCard';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Footer from '../../components/layouts/Footer/Footer';

const contact = () => {
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

      <section id="contact" className="pb-24 md:px-12">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-12 px-2 md:w-1/2 md:gap-5">
            <ContactCard />
            <ContactCard />
          </div>
          <div className="h-[30rem] border border-[#954]  bg-black md:h-auto md:w-1/2"></div>
        </div>
      </section>
    </Main>
  );
};

export default contact;
