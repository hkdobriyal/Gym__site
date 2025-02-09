// "use client";
// import React from "react";
// import Image from "next/image";

// // Import images
// import ml1 from "public/images/Carousel/ML 1.jpeg";
// import html_css_js from "public/images/Carousel/html-css-JS.webp";
// import js_libs from "public/images/Carousel/js-libs.png";
// import GenAI from "public/images/Carousel/GenAI.jpg";
// import DL1 from "public/images/Carousel/DL1.jpg";
// import DL2 from "public/images/Carousel/DL2.jpg";
// import DL3 from "public/images/Carousel/DL3.jpg";
// import bcaa from "public/images/Carousel/bcaa.jpg";
// import c4 from "public/images/Carousel/c4.jpg";
// import dx from "public/images/Carousel/dx.png";
// import gat from "public/images/Carousel/gat.jpg";
// import gnc2 from "public/images/Carousel/gnc2.jpg";
// import gnc1 from "public/images/Carousel/gnc1.png";
// import kl from "public/images/Carousel/kl.jpg";
// import mp from "public/images/Carousel/mp.jpg";
// import nt from "public/images/Carousel/nt.jpg";
// import on from "public/images/Carousel/on.jpg";
// import sy1 from "public/images/Carousel/sy1.png";
// import pa from "public/images/Carousel/pa.jpg";
// import pa2 from "public/images/Carousel/pa2.jpg";
// import sy from "public/images/Carousel/sy.jpg";


// // const slides = [ml1, DL1, GenAI, DL2, DL3, html_css_js, js_libs];
// const slides =[bcaa, c4, dx, gat, gnc2, gnc1, kl, mp, nt, on, sy1, pa, pa2, sy];


// const Carousel = () => {
//   return (
//     <div className="relative overflow-hidden bg-gray-900 py-10">
//       {/* Scrolling Container */}
//       <div className="flex w-full animate-scroll-left space-x-6">
//         {/* Duplicate slides for smooth looping */}
//         {[...slides, ...slides].map((image, index) => (
//           <div key={index} className="relative h-96 w-80 flex-shrink-0">
//             <Image
//               src={image}
//               alt={`Slide ${index}`}
//               fill
//               className="rounded-lg object-cover shadow-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;



"use client";
import React from "react";
import Image from "next/image";

// Image paths (Use direct paths instead of importing)
const slides = [
  "/images/Carousel/bcaa.jpg",
  "/images/Carousel/c4.jpg",
  "/images/Carousel/dx.png",
  "/images/Carousel/gat.jpg",
  "/images/Carousel/gnc2.jpg",
  "/images/Carousel/gnc1.png",
  "/images/Carousel/kl.jpg",
  "/images/Carousel/mp.jpg",
  "/images/Carousel/nt.jpg",
  "/images/Carousel/on.jpg",
  "/images/Carousel/sy1.png",
  "/images/Carousel/pa.jpg",
  "/images/Carousel/pa2.jpg",
  "/images/Carousel/sy.jpg",
];

const Carousel = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-10">
      {/* Scrolling Container */}
      <div className="flex w-full animate-scroll-left space-x-6">
        {/* Duplicate slides for smooth looping */}
        {[...slides, ...slides].map((src, index) => (
          <div key={index} className="relative h-96 w-80 flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
