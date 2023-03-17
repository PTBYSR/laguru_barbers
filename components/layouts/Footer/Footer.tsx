import Contact from "components/common/Contact";
import SectionTitle from "components/ui/SectionTitle";
import Link from "next/link";
import React from "react";

import Gallery from "./Gallery/Gallery";
import Fb from "./icons/Fb";
import InstagramIcon from "./icons/InstagramIcon";
import Tw from "./icons/Tw";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="px-3 ">
        <div className="">
          <div className="bg-sec flex  flex-col md:h-28 md:flex-row">
            <div className="bg-action  center-all flex py-8 md:w-1/2 md:py-0">
              <SectionTitle>follow us</SectionTitle>
            </div>
            <div className=" center-all flex md:w-1/2">
              <div className="mont  pri py-6 text-2xl font-bold text-gray-500 md:py-0 ">
                <Link target="_blank" href="https://www.instagram.com/laguru_barbers/"><div className="">@laguru_barbers</div></Link>
              </div>
            </div>
          </div>
          <div className="">
            <Gallery />
          </div>
        </div>
        <div className="md:h-[29rem]">
          <div className="mx-9 flex flex-col justify-between gap-10 border border-x-0 border-t-0 border-b-[#C3916B] border-opacity-30 pt-16 pb-12 md:flex-row md:gap-40">
            <div>
              <div className="sec kanit text-lg">Gwarimpa</div>
              <Contact text="" />
            </div>
            <div>
              <div className="sec kanit text-lg">Maitima</div>
              <Contact text="" />
            </div>
            <div>
              <div className="sec kanit mb-5 text-lg ">Social</div>
              <ul className="flex flex-col gap-2 ">
                <Link href="">
                  <li className="mont flex items-center gap-2 text-sm text-gray-500">
                    <InstagramIcon fill="#FDFEFA" w="20" />
                    Instagram
                  </li>
                </Link>
                <Link href="">
                  <li className="mont  flex items-center gap-2 text-sm text-gray-500">
                    <Fb fill="#FDFEFA" w="20" />
                    Facebook
                  </li>
                </Link>
                <Link href="">
                  <li className="mont  flex items-center gap-2 text-sm text-gray-500">
                    <Tw fill="#FDFEFA" w="20" />
                    Twitter
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <div className="sec kanit mb-5 text-lg ">Navigate</div>
              <ul className="flex flex-col gap-2">
                <Link href="/">
                  <li className="mont  text-sm text-gray-500">Home</li>
                </Link>
                <Link href="/locations">
                  <li className="mont  text-sm text-gray-500">Locations</li>
                </Link>
                <Link href="/services">
                  <li className="mont  text-sm text-gray-500">Services</li>
                </Link>
                <Link href="/contact">
                  <li className="mont  text-sm text-gray-500">Contact</li>
                </Link>
                <Link href="/">
                  <li className="mont  text-sm text-gray-500">Terms of Use</li>
                </Link>
                <Link href="/">
                  <li className="mont  text-sm text-gray-500">
                    Privacy Policy
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
