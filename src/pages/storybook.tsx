import React from 'react'
import Image from 'next/Image'
import logo from '../../public/logo (1).png'
import Nav from 'components/layouts/Nav/Nav'
import TopNav from 'components/layouts/Nav/TopNav'
import Button from 'components/ui/Button/Button'
import Footer from 'components/layouts/Footer/Footer'
import HalfCircleDisplay from 'components/interface/HalfCircleDisplay/HalfCircleDisplay'
import MenuItem from 'components/interface/MenuCard/MenuItems/MenuItem'
import MenuItems from 'components/interface/MenuCard/MenuItems/MenuItems'
import MenuCard from 'components/interface/MenuCard/MenuCard'
import Text from 'components/ui/Text/Text'
import { menuUtils } from 'components/interface/MenuCard/MenuItems/Menu.utils'
import Marquee from "react-fast-marquee";

const Storybook = () => {
  console.log(menuUtils, "fhdaifuhadsufioadf")
  return (
    <>
    <div className="bg-red">
      <Marquee>
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
      </Marquee>
    <Text variant="h1">H1 HEADING</Text>
    <Text variant="h2">H2 HEADING</Text>
    <Text variant="h3">H3 HEADING</Text>
    <Text variant="h4">H4 HEADING</Text>
    <Text variant="p">P PARAGRAPH</Text>
    <MenuCard label="drinks" items={menuUtils}/>
    <MenuItems />
      <HalfCircleDisplay />
      <TopNav />
      <Button label="slightly more information"/>
      <Footer />
    </div>
    </>
  )
}

export default Storybook