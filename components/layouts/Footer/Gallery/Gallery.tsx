import Image from "next/image";
import React, { useRef, useState } from "react";

import { GalleryUtils } from "./Gallery.utils";

const Gallery = () => {
  const lottieRef = useRef();

  // const options = {
  //   animationData: LottieIg,
  //   loop: true,
  // };

  // const LottieObj = useLottie(options);
  // const Animation = useLottieInteractivity({
  //   lottieObj,
  //   mode: "cursor",
  //   actions: [
  //     {
  //       visibility: [0.4, 0.9],
  //       type: "seek",
  //       frames: [0, 38],
  //     },
  //   ],
  // });

  const [gallery, setGallery] = useState(GalleryUtils);
  const test = () => {
    lottieRef.current.pause();
    // Animation()
  };
  return (
    <div className="flex grid grid-cols-3 md:flex">
      {gallery.map((x) => (
        <>
          {/* <Lottie lottieRef={lottieRef} animationData={LottieIg} />
            <button onClick={test}>fdfdff</button> */}
          <div className="group relative cursor-pointer overflow-hidden">
            <div className="duration-3 absolute relative h-32 transition group-hover:scale-125 group-hover:opacity-50 md:h-52  md:w-52">
              <Image src={x.img} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Gallery;
