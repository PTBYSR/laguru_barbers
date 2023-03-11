import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <header className="container ">
        <div className="">
          <div className="flex border w-full h-[28rem]">
            <div className="px-12 pt-9 w-2/3">
              <h1 className="kanit sec text-[5.25rem] font-extrabold leading-[4.8rem]">
                1# <br />
                BARBERSHOP <br /> IN ABUJA.
              </h1>
              <p className="mont sec font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus reiciendis nihil debitis corporis impedit?{" "}
              </p>
            </div>
            <div className="border bg-white w-1/3 h-full"></div>
          </div>
          <div className="border flex">
            <div className="bg-white w-2/3 border"></div>
            <div className="w-1/3 flex flex-col">
              <div className="bg-action h-80 w-full flex center-all flex-col text-center">
                <div className="sec mont">Absolutely my best plug @laguru_barbers</div>
                <div className="mt-3 sec mont text-xs font-bold">Ebere Chukwu</div>
              </div>
              <div className="bg-[#33d] h-80 w-full"></div>
            </div>
          </div>
        </div>
      </header>
    </Main>
  );
};

export default Index;
