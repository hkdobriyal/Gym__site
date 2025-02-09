// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import boy2 from "public/images/whoweare/running-boy2.png";
// import text from "public/images/whoweare/running-text.png";
// import grid1 from "public/images/whoweare-about/grid-1.png";
// import grid2 from "public/images/whoweare-about/grid-2.jpg";
// import grid3 from "public/images/whoweare-about/grid-3.jpg";
// import grid4 from "public/images/whoweare-about/grid-4.png";

// function WhoWeAreAbout() { 
//   return (
//     <section id="who-we-are-about">
//       <div className="px-8 py-16 space-y-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
//           <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
//             {/* <Image
//               src="/images/abstract/abstract.svg"
//               alt="abstract"
//               width={200}
//               height={200}
//               className="absolute left-[3.75rem] -top-1.5 lg:left-0"
//             /> */}
//             <p className="text-black relative z-10 font-bold text-center text-4xl">
//               WHO WE ARE
//             </p>
//             <h1 className="font-bold text-2xl">
//               We Will Give You Strength and Health
//             </h1>
//             <p>
//               At MuscleAndHealth, we are committed to providing the highest quality gym
//               supplements to help you achieve your fitness goals. We offer a
//               wide range of supplements from top brands, including protein
//               powders, pre-workouts, amino acids, and more. Whether you're
//               looking to build muscle, boost endurance, or enhance recovery, our
//               premium products are designed to support your journey to peak
//               performance.
//             </p>
//             <div>
//               <Link
//                 href="/contact"
//                 className="relative text-white flex items-center gap-2 bg-blu font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear after:border after:border-blu hover:after:border-blu after:-top-3 after:-right-4 hover:after:top-0 hover:after:right-0 mt-4"
//               >
//                 <span>CONTACT US</span>
//                 <span>
//                   <i className="fa-solid fa-arrow-right undefined"></i>
//                 </span>
//               </Link>
//             </div>
//           </div>
//           <div className="relative hidden lg:block">
//             <Image
//               width={1000}
//               height={1000}
//               src={boy2}
//               alt="boy_img"
//               className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
//             />
//             {/* <Image
//               width={250}
//               height={250}
//               src="/images/whoweare/half-circle.svg"
//               alt="bg-red"
//               className="absolute top-[55%] left-[9.5rem] translate-x-1/2 -translate-y-1/2"
//             /> */}
//             <Image
//               width={80}
//               height={80}
//               src={text}
//               alt="bg-text"
//               className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
//             />
//             {/* <Image
//               width={80}
//               height={80}
//               src="/images/whoweare/fart.png"
//               alt="bg-wind"
//               className="absolute right-[34%] top-[57.5%] translate-x-1/2 -translate-y-1/2"
//             /> */}
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image
//               src={grid1}
//               alt="history"
//               width={100}
//               height={100}
//             />
//             <h1 className="text-4xl font-bold">Our History</h1>
//             <p className="lg:px-20">
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit
//               Exercitation veniam consequat.
//             </p>
//           </div>
//           <Image
//             src={grid2}
//             alt="who we are"
//             width={1000}
//             height={1000}
//             className="w-full h-full lg:h-[28rem]"
//           />
//           <Image
//             src={grid3}
//             alt="who we are"
//             width={1000}
//             height={1000}
//             className="w-full h-full lg:h-[28rem]"
//           />
//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image
//               src={grid4}
//               alt="history"
//               width={100}
//               height={100}
//             />
//             <h1 className="text-4xl font-bold">Our History</h1>
//             <p className="lg:px-20">
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit
//               Exercitation veniam consequat.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAreAbout;


// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function WhoWeAreAbout() {
//   return (
//     <section id="who-we-are-about">
//       <div className="px-8 py-16 space-y-16">
//         {/* Intro Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
//           <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
//             <p className="text-black relative z-10 font-bold text-center text-4xl">
//               WHO WE ARE
//             </p>
//             <h1 className="font-bold text-2xl">
//               We Will Give You Strength and Health
//             </h1>
//             <p>
//               At MuscleAndHealth, we are committed to providing the highest quality gym
//               supplements to help you achieve your fitness goals. We offer a
//               wide range of supplements from top brands, including protein
//               powders, pre-workouts, amino acids, and more. Whether you're
//               looking to build muscle, boost endurance, or enhance recovery, our
//               premium products are designed to support your journey to peak
//               performance.
//             </p>
//             <div>
//               <Link
//                 href="/contact"
//                 className="relative text-white flex items-center gap-2 bg-blue-600 font-bold px-8 py-4 
//                 after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear 
//                 after:border after:border-blue-600 hover:after:border-blue-600 
//                 after:-top-3 after:-right-4 hover:after:top-0 hover:after:right-0 mt-4"
//               >
//                 <span>CONTACT US</span>
//                 <span>
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div className="relative hidden lg:block">
//             <Image
//               width={1000}
//               height={1000}
//               src="/images/whoweare/running-boy2.png"
//               alt="Running Boy"
//               className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
//             />
//             <Image
//               width={80}
//               height={80}
//               src="/images/whoweare/running-text.png"
//               alt="Running Text"
//               className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
//             />
//           </div>
//         </div>

//         {/* History & Images Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image src="/images/whoweare-about/grid-1.png" alt="Our History" width={100} height={100} />
//             <h1 className="text-4xl font-bold">Our History</h1>
//             <p className="lg:px-20">
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit
//               Exercitation veniam consequat.
//             </p>
//           </div>

//           <Image src="/images/whoweare-about/grid-2.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />
//           <Image src="/images/whoweare-about/grid-3.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />

//           <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
//             <Image src="/images/whoweare-about/grid-4.png" alt="Our History" width={100} height={100} />
//             <h1 className="text-4xl font-bold">Our Mission</h1>
//             <p className="lg:px-20">
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit
//               Exercitation veniam consequat.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAreAbout;


"use client"; // Ensures it's a client component

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function WhoWeAreAbout() {
  return (
    <section id="who-we-are-about">
      <div className="px-8 py-16 space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-32 max-w-screen-xl m-auto">
          <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <p className="text-black relative z-10 font-bold text-center text-4xl">
              WHO WE ARE
            </p>
            <h1 className="font-bold text-2xl">
              We Will Give You Strength and Health
            </h1>
            <p>
              At MuscleAndHealth, we are committed to providing the highest quality gym
              supplements to help you achieve your fitness goals.
            </p>
            <div>
              <Link
                href="/contact"
                className="relative text-white flex items-center gap-2 bg-blue-600 font-bold px-8 py-4 
                after:h-[3.5rem] after:absolute after:w-[12rem] after:duration-300 after:ease-linear 
                after:border after:border-blue-600 hover:after:border-blue-600 
                after:-top-3 after:-right-4 hover:after:top-0 hover:after:right-0 mt-4"
              >
                <span>CONTACT US</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          {/* Images Section */}
          <div className="relative hidden lg:block">
            <Image
              width={1000}
              height={1000}
              src="/images/whoweare/running-boy2.png"
              alt="Running Boy"
              className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
            />
            <Image
              width={80}
              height={80}
              src="/images/whoweare/running-text.png"
              alt="Running Text"
              className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
            />
          </div>
        </div>

        {/* History & Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image src="/images/whoweare-about/grid-1.png" alt="Our History" width={100} height={100} />
            <h1 className="text-4xl font-bold">Our History</h1>
            <p className="lg:px-20">Our history description here.</p>
          </div>

          <Image src="/images/whoweare-about/grid-2.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />
          <Image src="/images/whoweare-about/grid-3.jpg" alt="Who We Are" width={1000} height={1000} className="w-full h-full lg:h-[28rem]" />

          <div className="bg-white px-8 py-12 flex flex-col lg:justify-center items-center text-center gap-4">
            <Image src="/images/whoweare-about/grid-4.png" alt="Our Mission" width={100} height={100} />
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="lg:px-20">Our mission description here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreAbout;
