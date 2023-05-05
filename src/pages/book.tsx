import React from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Text from "components/ui/Text/Text";
import Button from "components/ui/Button/Button";
import InstagramIcon from "components/icons/InstagramIcon";
import Image from 'next/Image'
import bookImg from '../../public/book-now-img.jpg'


const Book = () => {
  return (
    <Main
      meta={
        <Meta title="500 CHOW - Order" description="1# Lagos food delivery service" />
      }
    >
      <header className="md:mt-28 mt-[400px] gap-10 flex mb-72 flex-col-reverse md:flex-row h-[70vh]">
        <div className="md:w-1/2  flex md:items-center">
          <div className="rounded-3xl md:w-[80%] overflow-hidden">
            <Image src={bookImg} />
          </div>
        </div>
        <div className="md:w-1/2  flex justify-center flex-col">
          <div className="mb-3">
            <Text variant="h2">
              Hungry?
              <br /> Book now
            </Text>
          </div>
          <div>
            <Text variant="h4">Order our food on our platforms...</Text>
          </div>
          <div className="mt-10 flex gap-3 flex-col md:w-2/3">
            <Button>order on whatsapp</Button>
            <Button>
              order on instagram
              <span>
                <InstagramIcon w="26" fill="#fff" />
              </span>
            </Button>
          </div>
        </div>
      </header>
    </Main>
  );
};

export default Book;
