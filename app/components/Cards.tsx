import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";

function Cards() {
  return (
    <section id="latest-blog">
      <div className="px-8 py-16 space-y-12">
        <div className="relative flex flex-col gap-4 items-center text-center">
          {/* <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={200}
            height={200}
            className="absolute left-[3.75rem] lg:left-[31.25rem] -top-1.5"
          /> */}
          <p className="shadow-lg text-4xl w-full py-4 text-black relative z-10 font-bold text-center mb-4">
         OUR  SUPPLEMENTS
          </p>
          {/* <h1 className="font-bold text-4xl">Our Supplements</h1> */}
          <p>
           Muscle and Health provides wide varieties of suppliments for you 
          </p>
        </div>
       
 <Carousel />
      </div>
    </section>
  );
}

export default Cards;
