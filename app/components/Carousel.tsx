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

// const slides = [ml1, DL1, GenAI, DL2, DL3, html_css_js, js_libs];

// const Carousel = () => {
//   return (
//     <div className="relative overflow-hidden bg-gray-300 py-10">
//       {/* Scrolling Container */}
//       <div className="flex w-full animate-scroll-left space-x-6">
//         {/* Duplicate slides for smooth looping */}
//         {[...slides, ...slides].map((image, index) => (
//           <div key={index} className="relative h-48 w-80 flex-shrink-0">
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

// Import images
import ml1 from "public/images/Carousel/ML 1.jpeg";
import html_css_js from "public/images/Carousel/html-css-JS.webp";
import js_libs from "public/images/Carousel/js-libs.png";
import GenAI from "public/images/Carousel/GenAI.jpg";
import DL1 from "public/images/Carousel/DL1.jpg";
import DL2 from "public/images/Carousel/DL2.jpg";
import DL3 from "public/images/Carousel/DL3.jpg";

const slides = [ml1, DL1, GenAI, DL2, DL3, html_css_js, js_libs];

const Carousel = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-10">
      {/* Scrolling Container */}
      <div className="flex w-full animate-scroll-left space-x-6">
        {/* Duplicate slides for smooth looping */}
        {[...slides, ...slides].map((image, index) => (
          <div key={index} className="relative h-48 w-80 flex-shrink-0">
            <Image
              src={image}
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
