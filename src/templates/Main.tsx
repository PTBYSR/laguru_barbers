import Footer from 'components/layouts/Footer';
import Nav from 'components/layouts/Nav/Nav';
import type { ReactNode } from 'react';
import React from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}

    <div className="bg-pri">
      <Nav />
      <div className="relative mt-[4.5rem] flex">
        <div className="bg-sec fixed left-0 h-screen w-3"></div>
        <div className="grow">
          <main className="content bg-pri  mx-3 grow text-xl">
            {props.children}
            <div className="bg-sec fixed bottom-0  h-3 w-screen"></div>
          </main>
        </div>
        <div className="bg-sec fixed  right-0 h-screen w-3"></div>
      </div>

      <Footer />
    </div>
  </div>
);

export { Main };
