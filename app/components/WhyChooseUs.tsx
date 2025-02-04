import Image from "next/image";
import Link from "next/link";
import React from "react";
import arjun1 from "public/images/whychooseus/arjun1.png";
import loc from "public/images/whychooseus/location_map.png";
import supplement from "public/images/whychooseus/supplement.png";
import grid3 from "public/images/whychooseus/grid-3.png";
import grid1 from "public/images/whychooseus/grid-1.png";


function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="shadow-xl"
    >
      <div className="shadow-lg bg-blu/50   bg-[50%] bg-cover bg-no-repeat lg:h-[16rem] py-8 px-12 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left lg:gap-32">
        <h1 className="text-black font-bold text-2xl lg:text-4xl lg:w-[42rem] lg:leading-snug">
          We  Always Provide  Best Fitness Suppliments For You
        </h1>
        <Link
          href="/"
          className="relative flex items-center gap-2 bg-white text-black font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[hsla(0,0%,100%,.362)] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0"
        >
          <span>ORDER NOW </span>
          <span className="text-[#FF0336]">
            <i className="fa-solid fa-arrow-right undefined"></i>
          </span>
        </Link>
      </div>
      <div className="text-black px-8 pt-32 lg:grid lg:grid-cols-2 lg:gap-32 max-w-screen-xl m-auto">
        <div className="relative">
          {/* <div className="absolute bottom-11 lg:bottom-11 lg:-left-4 h-[55%] w-2.5 bg-[#47a9ff]"></div> */}
          {/* <div className="absolute -top-0 lg:top-0   right-[-1rem] h-[55%] w-2.5 bg-[#47a9ff] "></div> */}
          <Image
            src={arjun1}
            alt="why choose us"
            width={1000}
            height={1000}
            className="m-auto mb-14   h-[40rem] lg:w-[28rem] rounded-3xl skew-y-6 grayscale hover:grayscale-0 duration-300 ease-linear"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 py-16 relative">
          {/* <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={250}
            height={250}
            className="absolute left-9 lg:left-0 top-14"
          /> */}
          <h3 className="font-bold   w-full text-center text-4xl shadow-lg py-2 -mt-10 mb-16">WHY CHOOSE US ?</h3>
          <h1 className="font-bold text-2xl">
          Shape Your Body with Confidence!
          </h1>
          <p className="text-black">
           At <strong>MuscleandHealth</strong>,We are dedicated to supporting your fitness aspirations. With a wide range of trusted supplements and  exceptional service we make it easier for you to reach your goals.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 lg:px-0">
            <div className="flex items-center gap-4">
              <Image               
                src={supplement}
                alt="Free Fitness Training"
                width={70}
                height={70}
                className="bg-[#2b2b2b]  hover:bg-blu ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Premium-Quality Supplements</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={loc}
                alt="Modern Gym Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-blu ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Fast Delivery Across India</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={grid3}
                alt="Gym Bag Equipments"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-blu ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Expert Recommendations</h1>
            </div>
            <div className="flex items-center gap-4 ">
              <Image
                src={grid1}
                alt="Fresh Bottle Watter"
                width={70}
                height={70}
                className="bg-[#2b2b2b] hover:bg-blu ease-linear duration-300 rounded-full p-4"
              />
              <h1 className="font-bold text-lg">Trusted by Fitness Enthusiasts Nationwide</h1>
            </div>
          </div>
          {/* <div>
            <Link
              href="/"
              className="relative text-black flex items-center gap-2 bg-[#595959] hover:bg-blu font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12.5rem] after:duration-300 after:ease-linear after:border after:border-[rgb(89,89,89)] hover:after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 my-8"
            >
              <span>OUR CLASSES</span>
              <span>
                <i className="fa-solid fa-arrow-right undefined"></i>
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
