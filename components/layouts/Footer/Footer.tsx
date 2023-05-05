import Image from "next/Image";
import React, { useState } from "react";
import footerBar from "../../../public/footer-bar.png";
import { navUtils } from "../Nav/Nav.utils";
import Link from "next/Link";
import InstagramIcon from "components/icons/InstagramIcon";
import ArrowIcon from "components/icons/ArrowIcon";
import IGarrow from "../../../public/IGarrow.png";
import Text from "components/ui/Text/Text";
import WhatsappIcon from "components/icons/WhatsappIcon";
const Footer = () => {
  const [navLinks, setNavLinks] = useState(navUtils);
  return (
    <footer className=" relative bg-yellow pb-5">
      <div className="absolute -top-1">
        <Image src={footerBar} />
      </div>
      <div className="absolute -top-[66px] instagram-footer-banner flex center-all bg-red rounded-full w-32 h-32">
        <div className=" w-[200px] text-center  -top-[140px] -right-[150px] absolute">
          <div className="rotate-6">
            <Text variant="h4">Check out our Instagram !!!</Text>
          </div>
          <div className="w-14 mt-5">
            <Image src={IGarrow} />
          </div>
        </div>
        <Link href="">
          <InstagramIcon w="50" fill="#fff" />
        </Link>
      </div>
      <div className="">
        <div className="flex center-all gap-5 pt-24 flex-wrap">
          <div className="overflow-hidden border border-black w-36 h-36 rounded-md">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/vid.mp4?alt=media&token=5bdbcc90-0fd5-4ff0-9402-e4b247618dc7"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="overflow-hidden border border-black w-36 h-36 rounded-md">
            <video
                src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/vid2.mp4?alt=media&token=13fa4f1a-8287-4fe3-904a-150cc9dbcc7e"
                loop
                autoPlay
                muted
              ></video>
          </div>
          <div className="relative overflow-hidden border border-black w-36 h-36 rounded-md">
          <div className="absolute -top-[40px]">

          <video
              src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/vid3.mp4?alt=media&token=1853976e-b791-4f29-8edc-5791e8a884ad"
              loop
              autoPlay
              muted
            ></video>
          </div>
          </div>
          <div className="overflow-hidden border border-black w-36 h-36 rounded-md">
          <video
              src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/vid4.mp4?alt=media&token=b45924ed-e3ba-41fe-840f-a399cba13b0b"
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
        <div className="flex center-all gap-3 mt-5">
          <InstagramIcon w="30" h="30" fill="#000" />
          <WhatsappIcon w="30" h="30" />
        </div>
        <div className="mt-7 flex center-all text-black">
          Food Delivery Service, Lagos Island
        </div>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col center-all">
          {navLinks.map((nav, index) => (
            <Link href={nav.href}>
              <li className="uppercase">{nav.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex center-all">
        <div className="flex center-all rounded-full w-12 h-12 bg-[#FE6B00] mt-5">
          <Link href="#nav">
            <ArrowIcon w="17" h="17" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
