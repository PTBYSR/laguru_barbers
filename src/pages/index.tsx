import Shaver from "components/interfaces/homepage/icons/Shaver";
import Button from "components/ui/Button";
import LocationCard from "components/ui/LocationCard/LocationCard";
import { LocationCardUtils } from "components/ui/LocationCard/LocationCard.utils";
import SectionTitle from "components/ui/SectionTitle";
import TeamCard from "components/ui/TeamCard";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

import ebere from "../../public/ebere.jpg";
import landing from "../../public/landing.jpg";
import landing2 from "../../public/landing2.jpg";

const Index = () => {
  const [locationImg, setLocationImg] = useState(LocationCardUtils);
  const router = useRouter();
  const elementRef = useRef();
  const [loadVid, setLoadVid] = useState(false);

  useEffect(() => {
    const videoElem = elementRef.current;
    console.log(videoElem);

    console.log(videoElem?.readyState, "what");
    if (videoElem?.readyState == 4) {
      setLoadVid(true);
    }
    console.log(loadVid);
  });
  console.log(locationImg);
  return (
    <Main
      meta={
        <Meta title="Laguru Barbers" description="1# barber shop in Abuja" />
      }
    >
      {/* <motion.div
        className="h-screen w-screen border absolute bg-action z-[100000]"
        transition={{
          // delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
        initial={{
          x: 0,
          // opacity: 0.5
        }}
        animate={{
          x: -1500,
          opacity: 1,
        }}
      ></motion.div> */}
      <header className="">
        <div className="">
          <div className="flex flex-col md:h-[28rem] md:w-full md:flex-row">
            <div className="pt-9 md:w-2/3 md:px-12">
              <h1 className="kanit sec pl-4 text-5xl  font-extrabold leading-[2.6rem] md:p-0  md:text-[5.25rem] md:leading-[4.8rem]">
                1# <br />
                BARBER SHOP <br /> IN ABUJA.
              </h1>
              <p className=" mont sec p-4 text-sm font-light md:p-0 md:pt-5 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus reiciendis nihil debitis corporis impedit?{" "}
              </p>
              <div className="abril sec p-4 text-xs font-bold md:p-0 md:pt-3">
                EST 2015
              </div>
            </div>
            <div className=" relative  h-[21rem] overflow-hidden bg-white md:h-full md:w-1/3">
              <div className="absolute -top-[4rem] bg-action w-full">
                <motion.div
                  className="md:bg-action bg-pri absolute h-[36rem] z-[1000] w-[32rem] top-0"
                  transition={{
                    delay: 0.3,
                    x: { duration: 0.8 },
                    default: { ease: "linear" },
                    ease: "easeOut"
                  }}
                  initial={{
                    x: 0,
                    // opacity: 0.5
                  }}
                  animate={{
                    x: -550,
                    opacity: 1,
                  }}
                  // transition={{ ease: "linear", duration: 0.4 }}
                ></motion.div>
                <video
                  ref={elementRef}
                  src="https://firebasestorage.googleapis.com/v0/b/laguru-barbers.appspot.com/o/307267939-599545218302144-8721576684276196404-n_bfJrbGN6.mp4?alt=media&token=40a1578e-01ee-46f0-ba7b-7e3b105cf20c"
                  loop
                  autoPlay
                  muted
                ></video>
                <Image
                  src={landing2}
                  className={`${
                    !loadVid ? "z-[100] top-0 absolute" : " hidden "
                  }`}
                />
                )
                {/* <div className="absolute top-0">

                  </div> */}
              </div>
            </div>
          </div>
          <div className=" flex flex-col-reverse  md:flex-row">
            <div className="relative h-[21rem] overflow-hidden bg-white  md:h-[40rem] md:w-2/3 ">
              <div className="absolute -bottom-[1rem] bg-action">
                <motion.div
                  className="md:block hidden absolute top-[5rem] -right-[32rem] z-[1000] w-[55rem] h-[48rem] bg-pri"
                  transition={{
                    delay: 0.3,
                    x: { duration: 0.5 },
                  }}
                  initial={{
                    x: -500,
                    // opacity: 0.5
                  }}
                  animate={{
                    x: 500,
                    // opacity: 1
                  }}
                  // transition={{ ease: "easeOut", duration: 0.7 }}
                ></motion.div>
                <Image src={landing} />
              </div>
            </div>
            <div className="flex flex-col md:w-1/3">
              <div className="bg-action center-all flex h-80 w-full flex-col text-center">
                <div className="sec mont">
                  Absolutely my best plug @laguru_barbers
                </div>
                <div className="mt-5 h-14 w-14 overflow-hidden rounded-full">
                  <Image src={ebere} />
                </div>
                <div className="sec mont mt-3 text-xs font-bold">
                  Ebere Chukwu
                </div>
              </div>
              <div className="bg-pri flex h-80 w-full flex-col items-center justify-between p-8 text-center">
                <div className=" flex flex-col items-center">
                  <div>
                    <Shaver w={55} h={55} fill="#C3916B" />
                  </div>
                  <div className="sec kanit text-4xl font-bold uppercase leading-[2rem]">
                    book your <br /> beard service
                  </div>
                </div>
                <p className="mont sec text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit, ex!
                </p>
                <Button route="/contact">book a seat now</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="locations" className="pb-24">
        <div className="px-12 pt-28 pb-14 md:pb-24">
          <SectionTitle> Our locations</SectionTitle>
        </div>
        <div className="center-all flex w-full flex-col gap-8 px-5 md:flex-row md:px-12">
          {locationImg.map((x) => (
            <LocationCard
              id={x.id}
              route={x.route}
              img={x.img}
              location={x.location}
              title={x.title}
            />
          ))}
        </div>
      </section>
      <section id="team" className="bg-sec pb-24">
        <div className="px-12 pt-28 pb-14 md:pb-24">
          <SectionTitle variant="pri"> our team</SectionTitle>
        </div>
        <div className="center-all flex flex-col gap-10 px-5 md:flex-row md:gap-5">
          <TeamCard />
          <TeamCard />
        </div>
      </section>
    </Main>
  );
};

export default Index;
