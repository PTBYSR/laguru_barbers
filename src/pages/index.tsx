import React, { useEffect, useRef } from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Text from "components/ui/Text/Text";
import Button from "components/ui/Button/Button";
import HalfCircleDisplay from "components/interface/HalfCircleDisplay/HalfCircleDisplay";
import Image from "next/Image";
import banner from "../../public/banner.png";
import landingImg from "../../public/landing-img.png";
import banner1Img from "../../public/banner1-img.png";
import banner3Img from "../../public/banner3-img.png";
import banner2Img from "../../public/banner2-img.png";
import TimeBadge from "components/icons/TimeBadge";
import timeBadge from '../../public/time-badge.png'
import Marquee from "react-fast-marquee";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="500 CHOW - Welcome"
          description="1# Lagos food delivery service"
        />
      }
    >
       {/* <motion.div
                className="h-full w-1/2 border top-0 absolute bg-action z-[100000]"
                transition={{
                  // delay: 0.5,
                  x: { duration: 1 },
                  default: { ease: "linear" },
                }}
                initial={!loadVid}
                animate={{
                  x: 200,
                  opacity: 1,
                }}
              ></motion.div> */}
      <header className="">
        <div className="">
          <div className="flex flex-col md:h-[28rem] md:w-full md:flex-row">
            {/* <AnimatePresence>
              {isVisible && (
                
                )}
                </AnimatePresence>
                 */}
              <motion.div 
              transition={{
                delay: 0.9,
                x: { duration: .7 },
                default: { ease: "linear" },
              }}
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              className="pt-9 relative md:w-2/3 md:px-12">
              
                <h1 className="kanit sec pl-4 text-5xl  font-extrabold leading-[2.6rem] md:p-0  md:text-[5.25rem] md:leading-[4.8rem]">
                  1# <br />
                  BARBER SHOP <br /> IN ABUJA.
                </h1>
                <p className=" mont sec p-4 text-sm font-light md:p-0 md:pt-5 md:text-lg">
                  The nu{" "}
                </p>
                <div className="abril sec p-4 text-xs font-bold md:p-0 md:pt-3">
                  EST 2015
                </div>
              </motion.div>
            <div className=" relative  h-[21rem] overflow-hidden bg-white md:h-full md:w-1/3">
              <div className="absolute -top-[4rem] bg-action w-full h-full">
                <motion.div
                  className="md:bg-action bg-pri absolute h-[36rem] z-[1000] w-[32rem] top-0"
                  transition={{
                    delay: 0.9,
                    x: { duration: 0.8 },
                    default: { ease: "linear" },
                    ease: "easeOut",
                  }}
                  initial={!loadVid ? {
                    x: 0,
                    // opacity: 0.5
                  } : false}
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
                  className={!loadVid ? "hidden" : "bg-pri h-[50rem]"}
                ></video>
                {/* <Image
                  src={landing2}
                  className={`${
                    !loadVid ? "z-[100] top-0 absolute" : " hidden "
                  }`} */}
                />
                {/* <div className="absolute top-0">

                  </div> */}
              </div>
            </div>
          </div>
          <div className="w-">
            <Image src={landingImg} />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 pt-16 ">
          <Text className="lexend" variant="h1">
            The <br /> food <br /> bangs
          </Text>
          
          <div className="md:w-3/4 mt-4 ">
            <Text variant="h3">
              Tasty meals delivered in minutes!
              <br />
              Open till 10pm, Mon - Sat.
            </Text>
          </div>
          <div className="w-full">
            <Button href="/book" className="w-1/2 mt-9">order now</Button>
          </div>
        </div>
      </header>


        {/* <div className="relative mt-32">
          <div className=" absolute  -top-[90px] w-[900vw] md:-top-32 -left-[250px] -rotate-2">
            <Image src={banner} />
          </div>
        </div> */}

      <section className=" gap-5 md:gap-0 relative h-[100vh] md:h-[50vh] flex md:flex-row justify-around flex-col md:mb-28 md:mb-56">
        <div className=" md:w-1/2 flex flex-col justify-start items-center">
          <div
            className={` h-[200px] md:h-2/3 -[478px] border-2  
    rounded-tl-full flex center-all rounded-tr-full border-dashed`}
          >
            <div className="w-2/3 text-center mt-9">
              <Text variant="h3">
                We bring you a rich menu of wholesome, exciting and tasty food{" "}
              </Text>
            </div>
          </div>
          <Button href="/menu" className="w-full mt-3"> view the menu</Button>
        </div>
        <div className=" md:w-1/2  flex justify-end">
          {/* <div className=" w-[400px] h-[300px] rounded-3xl"></div> */}
          <div className="md:w-[90%]">
            <Image src={banner1Img} />
          </div>
        </div>
      </section>

      <section className="h-[80vh] md:h-auto center-all md:flex-row flex-col flex mb-56 gap-10">
        <div className="md:w-1/2  flex justify-start">
          {/* <div className=" w-[400px] h-[350px] rounded-3xl"></div> */}
          <div className="md:w-[90%]">
            <Image src={banner3Img} />
          </div>
        </div>
        <div className="md:w-1/2 gap-4 md:pl-6 flex flex-col justify-center">
          <Text variant="h3">We deliver Tasty meals</Text>
          <div className="w-2/">
            <Text variant="p">
              Our food delivery service combines the best cuisine with seamless
              logistics. Our dedicated team ensures your food is delivered fres
              and on time. Experience hassle-free delivery with real-times
              updates and 24/7 support
            </Text>
          </div>
          <div className="mt-4">
            <Button href="/about">what are our services</Button>
          </div>
        </div>
      </section>

      <section className="md:flex-row flex-col relative gap-10 flex mb-64 md:mb-56 p-5">
        <div className="absolute w-[900vw] -top-[70px] -left-[140px] rotate-2">
          <Image src={banner} />
        </div>
        <div className="md:w-1/2 flex justify-center flex-col md:px-14 gap-3">
          <div
            className={` h-[200px] -[478px] border-2  
    rounded-tl-full flex center-all rounded-tr-full border-dashed`}
          >
            <div className="w-2/3 text-center mt-9">
              <Text variant="h3">
                Order now
              </Text>
            </div>
          </div>
          <Button href="/menu">view the menu</Button>
          <Button href="/book" className="">make a booking</Button>
        </div>
        <div className="md:w-1/2  flex justify-center">
          {/* <div className=" w-[400px] h-[350px] rounded-3xl"></div> */}
          <div className=" md:w-[80%]">
            <Image src={banner2Img} />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
